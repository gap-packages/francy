module.exports = env => {
  return {
    entry: ['./index.js'],
    mode: env.production ? 'production' : 'development',
    experiments: {
      topLevelAwait: true
    }
  };
};
