// Подключаем модули
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const terser = require('gulp-terser');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

// Путь к исходным файлам
const paths = {
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    },
    html: {
        src: 'src/*.html',
        dest: 'dist/'
    }
};

// Компиляция и минификация SASS
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
}

// Минификация и объединение JS файлов
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(concat('main.js'))
        .pipe(terser())  // Или используйте uglify для ES5
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
}

// Копирование HTML файлов
function html() {
    return gulp.src(paths.html.src)
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.stream());
}

// Наблюдение за изменениями файлов
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

// Экспортируем функции для использования в Gulp
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.watch = watch;

// Стандартное задание по умолчанию
exports.default = gulp.series(
    gulp.parallel(styles, scripts, html),
    watch
);
