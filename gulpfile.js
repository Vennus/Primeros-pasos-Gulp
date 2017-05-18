const gulp = require("gulp");
const sass = require("gulp-sass");
/*const sass = require("gulp-concat");*/

gulp.task("sass", function (){
	gulp.src("src/styles/**/*.scss")
		.pipe(sass().on("error",sass.logError))
		.pipe(gulp.dest("dist/css"));

});

gulp.task("default", () => {
	console.log("Running defauld task!");
});