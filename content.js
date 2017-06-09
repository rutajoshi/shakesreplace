// content.js
alert("Hello from your Chrome extension!")
var yo = $("a[href^='http']").eq(0).attr("href");

console.log(yo);
