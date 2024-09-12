const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const del = require('rimraf');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require("browser-sync").create();
const terser = require('gulp-terser');
// const getData = require('gulp-data');
const twig = require('gulp-twig');
const combineMedia = require('gulp-combine-media');
// const plumber = require('gulp-plumber');


// var reload = (done) => {
//     browserSync.reload();
//     done();
//   };
  
// var server = (done) => {
//     browserSync.init({
//         server: {
//         baseDir: "./out",
//         },
//         cors: true,
//         notify: false,
//         ui: false,
//         host: 'localhost',
//         port: 9000
//     });
//     done();
// };
  

var config = {
    server: {
        baseDir: "./out"
    },
    // host: '192.168.1.14',
    // port: 80
    host: 'localhost',
    port: 9000
};
var concatjsdes = [
    "./js/jquery.min.js",
    "./js/bootstrap.bundle.min.js",
    "./js/modernizr.custom.js",
    "./js/jquery.dlmenu.js",
    "./js/jquery-plugin-collection.js",
    "./js/isotope.pkgd.min.js",
    "./js/script.js",
    "./js/megamodal.js"
];

var htmllink = [
    './page/*.twig',
    './layout/*.twig',
    './component/*.twig',

]

var concatcss = ['./css/css.scss'];

gulp.task("clean:js", function (cb) {
    del('./out/assets/js/*.js', cb);
});
gulp.task("clean:css", function (cb) {
    del('./out/assets/css/*.css', cb);
});
gulp.task("clean:html", function (cb) {
    del('./out/**/*.html', cb);
});
gulp.task("clean:map", function (cb) {
    del('./out/**/*.map', cb);
});

gulp.task("clean:htmlandmap", gulp.series("clean:html", "clean:map"));
gulp.task("clean:asset", gulp.series("clean:js", "clean:css"));

gulp.task("clean", gulp.series("clean:htmlandmap", "clean:asset"));
gulp.task("min:css", function() {
    return gulp.src(concatcss)
         .pipe(sourcemaps.init())
        .pipe(sass())
        // .pipe(combineMedia())
        // .pipe(autoprefixer({
        //     cascade: false
        // }))
        // .pipe(cleanCSS({ level: 2 }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./out/assets/css/"))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task("min:js", function () {
    return gulp.src(concatjsdes)
    // .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(concat("script.js"))
    // .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("./out/assets/js/"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task("min:html", function () {
    return gulp.src('./page/*.twig')
        .pipe(twig())
        .pipe(gulp.dest("./out/"))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task("min:asset", gulp.series("min:css", "min:js"));
gulp.task("min", gulp.series("min:html", "min:asset"));
gulp.task("watch", function () {
    gulp.watch('./js/**/*.js', gulp.series("clean:js", "min:js"));
    gulp.watch('./css/**/*.scss', gulp.series("clean:css", "min:css"));
    gulp.watch(htmllink, gulp.series("clean:html", "min:html"));
});
gulp.task('webserver', function () {
    browserSync.init(config);
});
gulp.task("startwatch", gulp.parallel("watch", "webserver"));
gulp.task("build", gulp.series("clean", "min"));
gulp.task("run", gulp.series("build", "startwatch"));
gulp.task("release", gulp.series("build", "clean:map"));

// const watcher = () => {
//     gulp.watch("source/layouts/**/*.twig", gulp.series(buildHtml, reload));
//   };