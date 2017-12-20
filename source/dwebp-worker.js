"use strict";
self.importScripts("../dist/dwebp.js");

onmessage = function(e) {
	var webpdata = e.data[0];
	var result = dwebp.webpToSdl(webpdata, webpdata.length);
	postMessage(result);
}
