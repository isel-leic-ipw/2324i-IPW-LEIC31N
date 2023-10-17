function writeHello(callback) {
	console.log('Hello World');
	if (typeof callback == 'function') callback();
}

writeHello(function() {
	console.log('Callback Function');
});