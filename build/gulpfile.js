const { series, src, dest } = require('gulp');

function fontawesome(cb) {
  src([
    '../node_modules/@fortawesome/fontawesome-free/css/all.min.css',
  ]).pipe(dest('../public/css'));
  src('../node_modules/@fortawesome/fontawesome-free/js/all.min.js')
    .pipe(dest('../public/js'));
  src('../node_modules/@fortawesome/fontawesome-free/sprites/*')
    .pipe(dest('../public/sprites'));
  src('../node_modules/@fortawesome/fontawesome-free/svgs/*')
    .pipe(dest('../public/svgs'));
  src('../node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(dest('../public/webfonts'));
  cb();
}

exports.build = series(fontawesome); 