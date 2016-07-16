var browserSync = require('browser-sync');
module.exports = browserSync({
	proxy: 'localhost:3000',
	files: ['app/**/*.*']
});
