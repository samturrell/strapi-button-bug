module.exports = ({ env }) => ({
  host: env('ADMIN_HOST', 'localhost'), // only used along with `strapi develop --watch-admin` command
  port: env.int('ADMIN_PORT', 1338), // only used along with `strapi develop --watch-admin` command
  apiToken: {
      salt: env('API_TOKEN_SALT'),
  },
  auth: {
      secret: env('ADMIN_JWT_SECRET'),
  },
  url: env('ADMIN_PATH', '/admin'),
});
