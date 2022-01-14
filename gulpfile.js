import gulp from 'gulp'
import minify from 'gulp-clean-css'
import rename from 'gulp-rename'
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

gulp.task('scss', function() {
    return gulp.src('./src/theme/estyle.scss')
    .pipe(sass())
    .pipe(autoprefixer({cascade: false}))
    .pipe(gulp.dest('lib'))
    .pipe(minify())
    .pipe(rename('estyle.min.css'))
    .pipe(gulp.dest('lib'))
})