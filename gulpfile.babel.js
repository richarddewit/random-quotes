import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import fontAwesome from 'node-font-awesome';

const paths = {
  src: 'client/src',
  dest: 'client/assets',
};

const sassPaths = {
  src: `${paths.src}/sass/**/*.sass`,
  dest: `${paths.dest}/css/`,
};

const fontPath = `${paths.dest}/fonts/`;

gulp.task('default', () => (
  gulp.src(sassPaths.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({ includePaths: [fontAwesome.scssPath] }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassPaths.dest))
));

gulp.task('fonts', () => (
  gulp.src(fontAwesome.fonts)
    .pipe(gulp.dest(fontPath))
));

gulp.task('watch', ['default'], () => (
  gulp.watch(sassPaths.src, ['default'])
));

gulp.task('bundle', ['fonts'], () => (
  gulp.src(sassPaths.src)
    .pipe(sass({
      includePaths: [fontAwesome.scssPath],
      outputStyle: 'compressed',
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(sassPaths.dest))
));
