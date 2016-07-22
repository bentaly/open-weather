'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ lazy: false });

var $jsOut = 'app.js';
var $cssOut = 'app.css';

var $buildDir = './dist';
var $subdir = $buildDir + '/';
var $appDir = './app/';
var $tmpDir = './.tmp-ow';

// bower dependencies
var deps = [
    './bower_components/angular/angular.min.js',
    './bower_components/angular-resource/angular-resource.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js',
    './bower_components/angular-google-places-autocomplete/src/autocomplete.js'
];

// app scripts
var appScripts = [
  '!' + $appDir + '/gulpfile.js',
  '!' + $appDir + '/gulp/*.js',
  $appDir +'/scripts/**/*.js'
];

var appStylesheets = [
    $tmpDir + '/css/*.css',
    './bower_components/angular-google-places-autocomplete/src/autocomplete.css'
]

gulp.task('build:script:app', function() {
  process.stdout.write('building js through build:script:app\n');
  return gulp.src(appScripts)
    .pipe(plugins.concat('app.js'))
    .pipe(gulp.dest($tmpDir + '/js'));
});

gulp.task('build:script:dependencies', function() {
  process.stdout.write('building js deps through build:script:dependencies\n');
  return gulp.src(deps)
    .pipe(plugins.concat('lib.js'))
    .pipe(gulp.dest($tmpDir + '/js'));
});

gulp.task('build:script:compile', [
    'build:script:app',
    'build:script:dependencies',
  ], function() {
  return gulp.src([
      $tmpDir + '/js/lib.js',
      $tmpDir + '/js/app.js'
    ])
    .pipe(plugins.concat($jsOut))
    .pipe(gulp.dest($subdir + '/js'));
});

gulp.task('build:fonts', function() {
  process.stdout.write('building fonts through build:fonts\n');
  return gulp.src($appDir + '/fonts/**/*')
    .pipe(gulp.dest($subdir + '/fonts'));
});

gulp.task('build:images', function() {
  process.stdout.write('building images through build:images\n');
  return gulp.src($appDir + '/images/**/*')
    .pipe(gulp.dest($subdir + '/images'));
});

gulp.task('build:videos', function() {
  process.stdout.write('building videos through build:videos\n');
  return gulp.src($appDir + '/videos/**/*')
    .pipe(gulp.dest($subdir + '/videos'));
});

gulp.task('build:favicon', function() {
  process.stdout.write('doing the favicon through build:favicon\n');
  return gulp.src($appDir + '/favicon.ico')
    .pipe(gulp.dest($subdir));
});

gulp.task('build:style:app', function() {
  process.stdout.write('building scss through build:style:app\n');
  return gulp.src($appDir + '/styles/main.scss')
    .pipe(plugins.rubySass({style: 'expanded', "sourcemap": 'auto'}))
    .pipe(plugins.autoprefixer('last 1 version'))
    .pipe(plugins.concat('app.css'))
    .pipe(gulp.dest($tmpDir + '/css'));
});

gulp.task('build:style:compile', [
    'build:style:app',
  ], function() {
    process.stdout.write('building css through build:style:compile\n');
  return gulp.src(appStylesheets)
    .pipe(plugins.concat($cssOut))
    .pipe(gulp.dest($subdir + '/css'));
});

gulp.task('build:copyindex', function() {
  process.stdout.write('copying index.html through build:copyindex\n');
  
  return gulp.src($appDir + '/index.html')
    .pipe(plugins.rename('index.html'))
    .pipe(gulp.dest($subdir));
});

gulp.task('build:copyallhtml', function() {
  process.stdout.write('copying copyallhtml through build:copyallhtml\n');
  
  return gulp.src($appDir + '/partials/**/*')
    .pipe(gulp.dest($subdir + "partials/"));
});

gulp.task('build', [
  'build:script:compile',
  'build:style:compile',
  'build:fonts',
  'build:images',
  'build:videos',
  'build:copyindex',
  'build:copyallhtml',
  'build:favicon'
]);
