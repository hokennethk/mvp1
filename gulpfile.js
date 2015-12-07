// load env
require('dotenv').load();

// Gulp depencies
// ---------------------------------------
var gulp          = require('gulp');
var autoprefixer  = require('gulp-autoprefixer');
var jshint        = require('gulp-jshint');
var nodemon       = require('gulp-nodemon');
var mocha         = require('gulp-mocha');
var bs            = require('browser-sync'); // Delete this from npm
var sass          = require('gulp-sass');
var reload        = bs.reload;    // Delete this from npm
var concat        = require('gulp-concat');
var minify        = require('gulp-minify');

// the paths to our app files
var paths = {
  // client-side .js files
  scripts: [
    'client/app/**/*.js',
    '!client/app/lib/**/*',
    '!client/app/dist/**/*',
    'server/**/*.js',
  ],
  // all the html
  html: [
    'client/app/**/*.html'
  ],
  // scss files
  style: [
    'client/app/style/scss/**/*.scss',
    '!client/app/style/scss/webpage.scss'
  ],

  webStyle: [
    'client/app/style/scss/webpage.scss'
  ],
  //tests
  tests: {
    server: [
    // 'specs/server/socketSpec.js'
    'specs/server/**/*.js'
    ]
  }
};

// Check syntax for every javascript file in client and server folders
gulp.task('check-syntax', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

// Precompile scss files into css
gulp.task('sass', function(done) {
  gulp.src(paths.style)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./client/app/style/css/'));
  gulp.src(paths.webStyle)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./client/app/style/css/'))
    .on('end', done);
});

// Run check-syntax when any client or server files are modified
gulp.task('watch', function() {
  gulp.watch(paths.style, ['sass']);
});

gulp.task('test', function() {
  return gulp.src(paths.tests.server, {read: false})
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('uglify', function(){
  gulp.src(['client/app/components/**/*.js', 'client/app/app.js'])
  .pipe(concat('src.js'))
  .pipe(gulp.dest('./client/app/dist/'));
});

gulp.task('build', ['check-syntax', 'test', 'sass']);
gulp.task('prodBuild', ['check-syntax','test','sass', 'uglify']);

// Start server using nodemon
gulp.task('serve', function() {
  return nodemon({
    script: './server/server.js',
    ignore: 'node_modules/**/*.js'
  });
});


// This is the default gulp task (i.e. running gulp with no --options)
gulp.task('default', ['serve']);
