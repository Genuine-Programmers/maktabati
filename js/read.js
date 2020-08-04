/* eslint-disable quotes */
"use strict";
let readPdf = document.querySelector("embed");
let book = JSON.parse(localStorage.getItem("book"));

let clone = readPdf.cloneNode(true);
clone.setAttribute("src", book.pdf);
readPdf.parentNode.replaceChild(clone, readPdf);

console.log(book);
console.log(readPdf.src);
console.log(readPdf);
