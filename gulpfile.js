var gulp       = require('gulp');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var sass       = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename     = require('gulp-rename');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

var config = {
  source: './src/',
  dist: './public/'
};

var paths = {
  assets: "assets/",
  html: "**/*.html",
  img: "img/**",
  js: "js/**/*.js",

  components: "js/components/**.js",

  utils: "js/utils/**.js",

  css: "css",
  fonts: "fonts/**",
  fontCss: "css/**",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",
  mainJS:"js/index.js",

  models: "js/models/**.js",
  vendor: "js/vendor/**.js"
};

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  img: config.source + paths.assets + paths.img,
  js: config.source + paths.assets +  paths.js,
  //js: paths.assets + paths.js,

  fonts: config.source + paths.assets + paths.fonts,
  fontCss: config.source + paths.assets + paths.fontCss,
  sass: config.source + paths.assets + paths.sass,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootJS: config.source + paths.assets + paths.mainJS,
  vendor: config.source+paths.assets+ paths.vendor,
  models: config.source+paths.assets+ paths.models,
  components: config.source + paths.assets + paths.components,
  utils: config.source + paths.assets + paths.utils

};

//tareas independientes
gulp.task('html', ()=> {
  gulp.src(sources.html)
    .pipe(gulp.dest(config.dist));
});

gulp.task('img', ()=> {
  gulp.src(sources.img)
    .pipe(gulp.dest(config.dist + paths.assets + "img"));
});

gulp.task('fonts', ()=> {
  gulp.src(sources.fonts)
    .pipe(gulp.dest(config.dist + paths.assets + "fonts"));
});

gulp.task('fontCss', ()=> {
  gulp.src(sources.fontCss)
    .pipe(gulp.dest(config.dist + paths.assets + paths.css ));
});

gulp.task('sass', ()=> {
  gulp.src(sources.rootSass)
    .pipe(sass({
      outputStyle: "expanded"
    })
      .on ("error", sass.logError))
    .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task('js', ()=>{
  console.log(sources.components);
  gulp.src([sources.utils, sources.components, sources.rootJS])
    .pipe(concat("new.js"))//temporal no es necsario en un existente
    .pipe(browserify())
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest(config.dist + paths.assets + "js"));
});
//agregando tareas watch
gulp.task("html-watch", ["html"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("img-watch", ["img"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("js-watch", ["js"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("sass-watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("fonts-watch", ["fonts"], function (done) {
  browserSync.reload();
  done();
});



gulp.task('default', ['browser-sync'], function () {
});



// gulp.task("serve", ()=> {
//   browserSync.init({
//     server: {
//       baseDir: config.dist
//     }
//   });
//   gulp.watch(sources.html, ["html-watch"]);
//   gulp.watch(sources.img, ["img-watch"]);
//   gulp.watch(sources.fonts, ["fonts-watch"]);
//   gulp.watch(sources.sass, ["sass-watch"]);
//   gulp.watch(sources.js, ["js-watch"]);
// });

gulp.task('serve', ['nodemon'], function() {
  browserSync.init(null, {
    // proxy: "http://localhost:5000",
    files: ["public/**/*.*"],
    //browser: "google chrome",
    port: 7000,
    server: {
      baseDir: config.dist
    }
  });
  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(sources.img, ["img-watch"]);
  gulp.watch(sources.fonts, ["fonts-watch"]);
  gulp.watch(sources.sass, ["sass-watch"]);
  gulp.watch(sources.js, ["js-watch"]);
});

gulp.task('nodemon', function (cb) {

  var started = false;

  return nodemon({
    script: 'server.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
});
