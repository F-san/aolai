const gulp = require('gulp');
const uglify = require('gulp-uglify');
// const rename = require('gulp-rename');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
// 高版本ES转为ES5
gulp.task("babel", done => {
    gulp.src("js/**")
        .pipe(babel({
            // 配置文件
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
    done();
})

/* gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            // 是否全压缩
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        // .pipe(connect.reload());
    done();
}) */
gulp.task('css', done => {
    gulp.src('css/**')
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'));
    done();
})