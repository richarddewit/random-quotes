import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';

const paths = {
  src: 'client/src',
  dest: 'client/assets',
};

const sassPaths = {
  src: `${paths.src}/sass/**/*.sass`,
  dest: `${paths.dest}/css/`,
};

gulp.task('default', () => (
  gulp.src(sassPaths.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassPaths.dest))
));

gulp.task('watch', () => (
  gulp.watch(sassPaths.src, ['default'])
));

gulp.task('bundle', () => (
  gulp.src(sassPaths.src)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(sassPaths.dest))
));
