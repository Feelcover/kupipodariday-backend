import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wish } from 'src/wishes/entities/wish.entity';
import { WishesService } from 'src/wishes/wishes.service';
import { DataSource, Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OffersService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Offer)
    private offerRepository: Repository<Offer>,
    private wishesService: WishesService,
  ) {}

  async create(createOfferDto: CreateOfferDto, userId: number) {
    const { amount, itemId } = createOfferDto;
    const wish = await this.wishesService.findOne({
      where: { id: itemId },
      relations: ['owner'],
    });
    const { price, raised, owner } = wish;

    if (owner.id === userId) {
      throw new ForbiddenException(
        'Вы не можете вносить деньги на свои подарки',
      );
    }

    if (amount + raised > price) {
      throw new ForbiddenException(
        `Сумма взноса превышает сумму остатка стоимости подарка на ${
          amount + raised - price
        } руб.`,
      );
    }
    const offer = this.offerRepository.create({
      ...createOfferDto,
      user: { id: userId },
      item: { id: itemId },
    });

    await this.dataSource.transaction( async(transManager) => {
        await transManager.insert<Offer>(Offer, offer);
        await transManager.update<Wish>(Wish, itemId, {
            raised: amount + raised,
        });
    })
    return {}
  }
}
