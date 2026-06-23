// scorm-handler.js
function sendScormData(dataObject) {
console.log("resultData", dataObject);
console.log("resultData from local");
// إرسال البيانات للـ API
if (typeof Api !== "undefined" && Api.postMessage) {
Api.postMessage(JSON.stringify(dataObject));
console.error("API found");
} else {
console.error("API not available");
}
}