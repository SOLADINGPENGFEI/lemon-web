const gulp = require('gulp');
const gulpScss = require('gulp-sass');
const minscss = require('gulp-clean-css');
const babel = require('gulp-babel');
const webserver = require('gulp-webserver');
//编译sass
gulp.task('compile', () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(gulpScss())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('watch', () => {
        gulp.watch('./src/scss/**/*.scss', gulp.series('compile'))
    })
    //连接接口
gulp.task('lineserver', () => {
    return gulp.src('./src')
        .pipe(webserver({
            port: 3001,
            livereload: true,
            proxies: [{
                    source: '/api/getuser',
                    target: 'http://localhost:3000/api/getuser'
                },
                {
                    source: '/api/getclassify',
                    target: 'http://localhost:3000/api/getclassify'
                },
                {
                    source: '/api/addclassify',
                    target: 'http://localhost:3000/api/addclassify'
                },
                {
                    source: '/api/findclassify',
                    target: 'http://localhost:3000/api/findclassify'
                },
                {
                    source: '/api/getbill',
                    target: 'http://localhost:3000/api/getbill'
                },
                {
                    source: '/api/addbill',
                    target: 'http://localhost:3000/api/addbill'
                },
                {
                    source: '/api/delbill',
                    target: 'http://localhost:3000/api/delbill'
                }
            ]
        }))
})

gulp.task('default', gulp.series('compile', 'lineserver', 'watch'));