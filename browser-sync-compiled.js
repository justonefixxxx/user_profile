'use strict';

var browserSync = require('browser-sync');
module.exports = browserSync({
	proxy: 'localhost:3000',
	files: ['app/**/*.*']
});

//# sourceMappingURL=browser-sync-compiled.js.map