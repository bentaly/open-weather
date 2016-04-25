'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ lazy: false });
var $buildDir = './dist';
var $subdir = $buildDir + '/';
var $appDir = './app/';

// require specific gulp modules
require('./gulp/build');


// watch for changes in html, js and css, then rebuild
gulp.task('watch', function(){
  process.stdout.write('watching '+ $appDir + ' through watch\n');
  // gulp.watch([$sharedDir + '/**/*.js'], ['shd:build:script:compile','build:script:compile']);
  // gulp.watch([$sharedDir + '/partials/**/*.html'], ['shd:build:script:compile','build:script:compile'])
  // gulp.watch([$sharedDir + '/styles/*.scss'], ['build:style:compile']);
  gulp.watch([$appDir + '/scripts/**/*.js'], ['build:script:compile']);
  gulp.watch([!$appDir + '/index.html', $appDir + '/**/*.html'], ['build:script:compile']);
  gulp.watch($appDir + '/styles/**/*.scss', ['build:style:compile']);
  gulp.watch($appDir + '/index.html', ['watched', 'build:copyindex']);
});

gulp.task('watched', function() {
  process.stdout.write('Something changed in '+ $appDir + '/index\n');
});

// set up a webserver and listen to any changes in the build dir and reload the page when this happens
gulp.task('webserver', function() {
  process.stdout.write('serving through webserver at 0.0.0.0:3000 \n');
  gulp.src($subdir)
    .pipe(plugins.webserver({
      host: '0.0.0.0',
      livereload: true,
      open: true,
      port: 3000,
      fallback: 'index.html'
    }));
});

gulp.task('default', ['build', 'watch', 'webserver']);