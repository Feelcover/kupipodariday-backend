export default () => ({
  database: {
    host: 'localhost',
    port: 5432,
    username: 'student',
    password: 'student',
    database: 'kupipodariday',
  },
  jwtSecret: process.env.JWT_SECRET || 'jwt-secret',
});
