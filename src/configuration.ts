export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,

  database: {
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER || 'student',
    password: process.env.POSTGRES_PASSWORD || 'student',
    database: process.env.POSTGRES_DB || 'kupipodariday',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'SUPER_SECRET_KEY',
  },
});
