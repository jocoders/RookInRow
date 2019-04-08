const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const less = require('gulp-less');
const gcmq = require('gulp-group-css-media-queries');
const smartgrid = require('smart-grid');
/*
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
*/



const config = {
	root: './src',
	css: {
		watch: '/precss/**/*.less',
		src: '/precss/+(styles|styles-ie-9).less',
		dest: '/css'
	}
};

gulp.task('preproc', function(){
	gulp.src(config.root + config.css.src)
        /*.pipe(sourcemaps.init())*/
        .pipe(less())
        .pipe(gcmq())
        /*
		.pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
        	level: 2
        }))
        .pipe(sourcemaps.write('.'))*/
		.pipe(gulp.dest(config.root + config.css.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('watch', ['preproc', 'browserSync'], function(){
	gulp.watch(config.root + config.css.watch, ['preproc']);
	gulp.watch('src/*.html', browserSync.reload);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: config.root
        }
    });
});

const smartGridConf = { 
    columns: 12,
    offset: "20px",
    container: {
        maxWidth: "1260px",
        fields: "20px"
    },
    breakPoints: {
        lm: {
            width: "1150px",
            fields: "15px"
        },
        md: {
            width: "992px",
            fields: "15px"
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px",
            fields: "10px",
            offset: "10px"
        },
        ms: {
            width: "420px",
            offset: "10px"
        },
        xxs: {
            width: "330px",
            offset: "10px",
            fields: "5px"
        }
    }
};

gulp.task('grid', function(){
    smartgrid(config.root + '/precss', smartGridConf);
});