'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var plugins = require('gulp-load-plugins')({ lazy: false });
var minifyCSS = require('gulp-minify-css');
var htmlreplace = require('gulp-html-replace');

var $hash = new Date().getTime(); + ''
var $jsOut = 'app.js';
var $cssOut = 'app.css';

var $buildDir = './dist';
var $subdir = $buildDir + '/';
var $appDir = './app/';
var $tmpDir = './.tmp-bh';

// bower dependencies
var deps = [
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/angular/angular.min.js',
    './bower_components/angular-resource/angular-resource.min.js',
    './bower_components/angular-sanitize/angular-sanitize.min.js',
    './bower_components/angular-animate/angular-animate.min.js',
    './bower_components/angular-touch/angular-touch.min.js',
    './bower_components/angular-ui-router/release/angular-ui-router.min.js'
];

// app scripts
var appScripts = [
  '!' + $appDir + '/**/*.spec.js',
  '!' + $appDir + '/gulpfile.js',
  '!' + $appDir + '/gulp/*.js',
  $appDir +'/scripts/**/*.js'
];

var appStylesheets = [
    $tmpDir + '/css/*.css'
]

// which env files should we ignore?
var getIgnoredEnvFiles = function() {
  var allEnvs = [];
  var envsToExclude = [];
  var env = 'this should be removed';
  for (var i = 0; i < allEnvs.length; i++) {
    if (env !== allEnvs[i]) {
      envsToExclude.push('!' + $appDir + '/scripts/env/env-' + allEnvs[i] + '.js');
    }
  };

  // sanity check
  if (envsToExclude.length !== allEnvs.length - 1) {
    throw new Error('Incorrect environment file.');
  }

  return envsToExclude;
};

gulp.task('build:script:app', function() {
  process.stdout.write('building js through build:script:app\n');
  // return gulp.src(appScripts.concat(getIgnoredEnvFiles()))
  return gulp.src(appScripts)
    // .pipe(plugins.jshint())
    // .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.concat('app.js'))
    .pipe(gulp.dest($tmpDir + '/js'));
});

gulp.task('build:script:dependencies', function() {
  process.stdout.write('building js deps through build:script:dependencies\n');
  return gulp.src(deps)
    .pipe(plugins.concat('lib.js'))
    .pipe(gulp.dest($tmpDir + '/js'));
});

gulp.task('build:script:templates', function() {
  process.stdout.write('building js templates through build:script:templates\n');
  return gulp.src(['!./index.html', $appDir +'/**/*.html'])
    .pipe(plugins.angularTemplatecache('templates.js', {
      standalone: true,
      module: 'templates'
    }))
    .pipe(gulp.dest($tmpDir + '/js'));
});

gulp.task('build:script:compile', [
    'build:script:app',
    'build:script:dependencies',
    'build:script:templates'
  ], function() {
  return gulp.src([
      $tmpDir + '/js/lib.js',
      $tmpDir + '/js/app.js',
      $tmpDir + '/js/templates.js'
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

gulp.task('build:documents', function() {
  process.stdout.write('building documents through build:documents\n');
  return gulp.src($appDir + '/documents/**/*')
    .pipe(gulp.dest($subdir + '/documents'));
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

gulp.task('build', [
  'build:script:compile',
  'build:style:compile',
  'build:fonts',
  'build:images',
  'build:documents',
  'build:copyindex',
  'build:favicon'
]);
