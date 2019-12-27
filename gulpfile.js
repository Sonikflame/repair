const gulp = require('gulp');

gulp.task('default', defaultTask);

function defaultTask(done) {
   console.log('Задача выполнена');
   done();
};