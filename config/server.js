module.exports = ({ env }) => ({
  host: env('APP_HOST', '0.0.0.0'),
  port: env.int('APP_PORT', 1337),
  url: env('APP_URL'),
  proxy: env.bool('PROXY', false),
  app: {
      keys: env.array('APP_KEYS'),
  },
});
