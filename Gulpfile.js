var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    glob       = require('glob'),
    minifyCss  = require('gulp-minify-css'),
    rename     = require("gulp-rename"),
    notify     = require("gulp-notify");

// gulp scripts
gulp.task('scripts', function () {
    glob('app/*-app.js', {}, function (er, files) {
        files.forEach(function (file) {
            gulp.src([file])
                .pipe(browserify({
                    debug: true,
                    transform: [ 'reactify' ]
                }))
                .pipe(rename({
                    basename: getCustomSimplifiedNameFromFile(file),
                    ext: 'js'
                }))
                .pipe(gulp.dest('./public/'))
                .pipe(notify("Finished JS"));
        });
    });
});

// gulp css
gulp.task('css', function() {
    return gulp.src('app/styles/*.css')
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(
            rename({
                basename: "styles",
                extname: ".css"
            })
        )
        .pipe(gulp.dest('./public/'))
        .pipe(notify("Finished CSS"));
});

//default gulp
gulp.task('default', ['scripts', 'css', 'watch']);

// gulp watch
gulp.task('watch', function() {
    gulp.watch('./app/**/*.js', ['scripts']);
    gulp.watch('./app/styles/**/*.css', ['css']);
});



// helpers
function getCustomSimplifiedNameFromFile (pathfile) {
    if (pathfile) {
        pathfile = pathfile.substring(pathfile.lastIndexOf('/')+1);
        return pathfile.split('-')[0] || false;
    }
    return false;
}