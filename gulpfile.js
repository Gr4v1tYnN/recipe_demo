var gulp = require('gulp');

gulp.task('default', function () {
    console.log('do something');
});

gulp.start.apply(gulp, ['default']);

gulp.task('hello', function() {
    console.log('Hello Zell');
  });

//gulp.task('travis', ['build', 'testServerJs'], function () { process.exit(0); });