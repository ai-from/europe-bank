var gulp                    = require('gulp'),
    htmlPrettify 			= require('gulp-html-prettify'),
    importCss               = require('gulp-import-css'),
    sass 					= require('gulp-sass'),
    browserSync				= require('browser-sync'),
    concat			    	= require('gulp-concat'),
    uglify		    		= require('gulp-uglifyjs'),
    cleanCss		    	= require('gulp-clean-css'),
    rigger		        	= require('gulp-rigger'),
    del   		        	= require('del'),
    imagemin				= require('gulp-imagemin'),
    pngquant				= require('imagemin-pngquant'),
    cache 					= require('gulp-cache'),
    autoprefixer     		= require('gulp-autoprefixer'),
    minifyCss     		    = require('gulp-minify-css'),
    include                 = require('gulp-file-include');

const path = {
    html:        'app/*.html',
    sass:        'app/sass/bundle.sass',
    css_libs:    'app/css/css_libs.css',
    script:      'app/js/bundle.js',
    script_libs: 'app/js/script_libs.js',
    font:        'app/assets/fonts/**/*',
    doc:         'app/assets/doc/**/*',
    img:         'app/assets/img/**/*',
    favicon:     'app/favicon.ico'
}

// browser-sync
gulp.task('browser-sync', function(){
    browserSync({
        server:{
            baseDir: 'dist'
        },
        notify: false
    });
});

// clean
gulp.task('clean', function(){
    return del('dist');
});


// clear cache
gulp.task('clear', function(){
    return cache.clearAll();
});

// html
gulp.task('html', function(){
    return gulp.src(path.html)
    .pipe(rigger())
    .pipe(include())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}));
});

// sass
gulp.task('sass', function(){
    return gulp.src(path.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer([
        'last 15 versions',
        '>1%',
        'ie 8',
        'ie 7'],
        {cascade: true}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}));
});

// css_libs
gulp.task('css_libs', function(){
    return gulp.src(path.css_libs)
    .pipe(importCss())
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}));
});


// script
gulp.task('script', function(){
    return gulp.src(path.script)
    .pipe(rigger())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({stream: true}));
});

// script_libs
gulp.task('script_libs', function(){
    return gulp.src(path.script_libs)
    .pipe(rigger())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({stream: true}));
});

// font
gulp.task('font', function(){
    return gulp.src(path.font)
        .pipe(gulp.dest('dist/assets/fonts'));
});


// img
gulp.task('img', function(){
    return gulp.src(path.img)
    .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    })))
    .pipe(gulp.dest('dist/assets/img'));
});

// favicon
gulp.task('favicon', function(){
    return gulp.src(path.favicon)
    .pipe(gulp.dest('dist'));
});

// doc
gulp.task('doc', function(){
    return gulp.src(path.doc)
    .pipe(gulp.dest('dist/assets/doc'));
});

// watch
gulp.task('watch', function(){
    gulp.watch('app/**/*.html', gulp.series('html'));
    gulp.watch('app/**/*.sass', gulp.series('sass'));
    gulp.watch('app/**/*.js', gulp.series('script'));
});

// go
gulp.task('go', gulp.series('clean', gulp.parallel(
    'html',
    'css_libs',
    'sass',
    'script_libs',
    'script',
    'font',
    'img',
    'favicon',
    'doc',
    'browser-sync',
    'watch')));

gulp.task('deploy', function(){
    return gulp.src('dist/**/*')
    .pipe(gulp.dest('europe-bank'));
});