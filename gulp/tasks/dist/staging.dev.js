"use strict";

//before using this file do command  ->  git checkout staging
//it will switch the branch to the needed one
//after that you can switch it back
var gulp = require('gulp');

var runSequence = require('run-sequence');

var git = require('gulp-git');

var branchName = 'staging'; //your branch

var filepath = ['build/*', '!build/index.html', '!build/js/report.html']; //path to the build that excluding unneeded files

gulp.task('add', function () {
  //add files to repo
  return gulp.src(filepath).pipe(git.add());
});
gulp.task('commit', function () {
  //commit files
  return gulp.src(filepath).pipe(git.commit('gulp commit'));
});
gulp.task('push', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", git.push('origin', branchName, function (err) {
            if (err) throw err;
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
gulp.task('staging', function (cb) {
  //stagind task
  runSequence('build:dev', //build ploject
  'add', //git add
  'commit', //git commit -m"gulp commit"
  'push', //git push
  cb);
});