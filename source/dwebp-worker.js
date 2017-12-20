"use strict";
self.importScripts("../dist/dwebp.js");

onmessage = function(e) {
	var webpdata = e.data[0];
	// dwebp currently needs access to the canvas, which is currently impossible in a worker thread.
	// This method is only useful as a picture into the future for now.
	//var result = dwebp.webpToSdl(webpdata, webpdata.length);
	var result = webpdata;
	postMessage(result);
}
