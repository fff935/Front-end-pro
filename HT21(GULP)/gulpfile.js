// Подключаем модули
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const terser = require("gulp-terser");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

// Шляхи до файлів
const paths = {
  styles: {
    src: "src/scss/**/*.scss",
    dest: "dist/css/",
  },
  scripts: {
    src: "src/js/**/*.js",
    dest: "dist/js/",
  },
  html: {
    src: "src/*.html",
    dest: "dist/",
  },
};

// Завдання для стилів
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on("error", sass.logError)) // Обробка помилок
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// Завдання для скриптів
function scripts() {
  return gulp
    .src(paths.scripts.src, { sourcemaps: true })
    .pipe(concat("script.js"))
    .pipe(terser())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// Завдання для HTML
function html() {
  return gulp
    .src(paths.html.src, { allowEmpty: true }) // Додано allowEmpty
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.html.dest)) // Копіює HTML у dist
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.html.src, html);
}

// Експортування завдань
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.watch = watch;

exports.default = gulp.series(
    gulp.parallel(styles, scripts, html),
    watch
);