'use strict'
let readPdf = document.querySelector("embed")
let book = JSON.parse(localStorage.getItem('book'))

let Clone = readPdf.cloneNode(true);
Clone.setAttribute('src',book.pdf);
readPdf.parentNode.replaceChild(Clone,readPdf);




console.log(book);
console.log(readPdf.src);
console.log(readPdf);