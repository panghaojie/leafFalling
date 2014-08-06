
seajs.config({
  // Enable plugins
  plugins: ['shim'],

  // Configure alias
  alias: {
    'jquery': {
      src: 'js/jquery-1.9.1.min.js',
      exports: 'jQuery'
    }
  }
});

