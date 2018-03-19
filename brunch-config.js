// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': /^(?!app)/,
      'js/app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: {
      'css/vendor.css': /^(?!app)/,
      'css/app.css': /^app/
    }
  }
};

exports.npm = {
  enabled: true,
  styles: {
    'normalize.css': ['normalize.css'],
    'font-awesome': ['css/font-awesome.css']
  }
};
