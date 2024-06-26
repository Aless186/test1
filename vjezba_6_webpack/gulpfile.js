const { src, dest, watch } = require("gulp");
const minifyJS = require("gulp-uglify");
const minifyCSS = require("gulp-clean-css");

const bundleJS = () => {
  return src("./dist/script.js").pipe(minifyJS()).pipe(dest("./dist/min/"));
};

const bundleCss = () => {
  return src("./dist/main.css").pipe(minifyCSS()).pipe(dest("./dist/min/"));
};

const devWatch = () => {
  watch("./dist/script.js", bundleJS);
};

exports.bundleJS = bundleJS;
exports.bundleCss = bundleCss;
exports.devWatch = devWatch;
