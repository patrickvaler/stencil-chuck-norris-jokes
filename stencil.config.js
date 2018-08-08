const { sass } = require('@stencil/sass');

exports.config = {
  namespace: 'chuck-norris-jokes',
  plugins: [
    sass({
      injectGlobalPaths: ['src/globals/reset.scss', 'src/globals/button.scss']
    })
  ],
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
