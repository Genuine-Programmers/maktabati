/* eslint-disable quotes */
"use strict";
//Generate ranodom number with max-min number
let maxViewed = 1000;
let minViewed = 0;

function generateRandomNumber(maxViewed, minViewed) {
  let randomNumber = Math.floor(
    Math.random() * (maxViewed - minViewed + 1) + minViewed
  );
  return randomNumber;
}
// eslint-disable-next-line no-undef
BooksGenerator.prototype.mostViewed = function () {
  let random = generateRandomNumber(maxViewed, minViewed);
  this.viewedTimes = random;
};
// eslint-disable-next-line no-undef
allBooks.forEach(function (book) {
  book.mostViewed();
});

function renderMostViewed() {
  // eslint-disable-next-line no-undef
  const BooksMostViewed = allBooks;
  BooksMostViewed.sort(function (a, b) {
    return a.viewedTimes - b.viewedTimes;
  });

  BooksMostViewed.reverse();

  let imgMostViewed = document.querySelectorAll(".most-viewed .col img");
  for (let index = 0; index < 4; index++) {
    imgMostViewed[index].setAttribute("src", BooksMostViewed[index].cover);
    imgMostViewed[index].setAttribute("alt", BooksMostViewed[index].title);
    imgMostViewed[index].setAttribute("title", BooksMostViewed[index].title);
  }
}

renderMostViewed();

function mostRecentcat() {
  // eslint-disable-next-line no-undef
  let MostRecentarr = allBooks;
  MostRecentarr.sort(function (a, b) {
    return a.publishedYear - b.publishedYear;
  });
  MostRecentarr.reverse();

  let MostRecentbooks = document.querySelectorAll(".most-recent img");
  for (let index = 0; index < MostRecentbooks.length; index++) {
    MostRecentbooks[index].src = MostRecentarr[index].cover;
    MostRecentbooks[index].alt = MostRecentarr[index].title;
    MostRecentbooks[index].title = MostRecentarr[index].title;
  }
}
mostRecentcat();

renderCategory();
function renderCategory() {
  const categoryFantasy = document.querySelectorAll(".category-fantasy-column");
  const categoryRomance = document.querySelectorAll(".category-romance-column");
  const categoryHistory = document.querySelectorAll(".category-history-column");
  const categoryScience = document.querySelectorAll(".category-science-column");

  const romance = [];
  const fantasy = [];
  const history = [];
  const scienceFiction = [];
  // eslint-disable-next-line no-undef
  allBooks.forEach(function (book) {
    if (book.category === "Romance") romance.push(book);

    if (book.category === "fantasy") fantasy.push(book);

    if (book.category === "History") history.push(book);

    if (book.category === "Science Fiction") {
      scienceFiction.push(book);
    }
  });

  for (let index = 0; index < categoryRomance.length; index++) {
    categoryRomance[index].src = romance[index].cover;
    categoryRomance[index].alt = romance[index].title;
    categoryRomance[index].title = romance[index].title;
  }
  for (let index = 0; index < categoryFantasy.length; index++) {
    categoryFantasy[index].src = fantasy[index].cover;
    categoryFantasy[index].alt = fantasy[index].title;
    categoryFantasy[index].title = fantasy[index].title;
  }
  for (let index = 0; index < categoryHistory.length; index++) {
    categoryHistory[index].src = history[index].cover;
    categoryHistory[index].alt = history[index].title;
    categoryHistory[index].title = history[index].title;
  }

  for (let index = 0; index < categoryScience.length; index++) {
    categoryScience[index].src = scienceFiction[index].cover;
    categoryScience[index].alt = scienceFiction[index].title;
    categoryScience[index].title = scienceFiction[index].title;
  }
} // for the function


let figures = document.querySelectorAll(".books img");
for (let figure = 0; figure < figures.length; figure++) {
  figures[figure].addEventListener("click", openOverlay);
  figures[figure].addEventListener("click", overlayContent);
}

function openOverlay() {
  document.querySelector(".overlay").style.width = "100%";
  document.querySelector(".content-overlay").style.right = "50%";
  
}

function closeOverlay() {
  document.querySelector(".overlay").style.width = "0%";
  document.querySelector(".content-overlay").style.right = "-1000px";
  localStorage.clear();
}
function overlayContent() {
console.log(event);
let title = event.path[0].alt
console.log(title);
// 
let book= allBooks.find(book=>book.title===title)

localStorage.setItem('book',JSON.stringify(book));
let details = document.querySelector(".content-overlay .details");
let cover = document.querySelector(".content-overlay img");
console.log(details);


cover.src= book.cover
cover.alt=book.title;
cover.title=book.title;
    details.children[0].innerHTML = book.title;
    details.children[1].children[0].innerHTML = book.author;
    details.children[2].children[0].innerHTML = book.publishedYear
    details.children[3].innerHTML = book.category;
    details.children[4].innerHTML = book.description;
    details.children[5].children[0].src = book.audio;
  
}


// Generate random numbers 
function generateNumber() {
  let randomNumber = Math.floor(
    Math.random() * allBooks.length);
  return randomNumber;
}

//reneder Books inside Audio Books section
function renderAudioBooks() {

  const audioBooksArr = []; 

  let imgAudioBooks = document.querySelectorAll(".audio-books img");

  for (let i = 0; i < 4; i++) {

    let randomNum = generateNumber();
    let checkRandomNum = audioBooksArr.includes(randomNum);
    imgAudioBooks[i].src = allBooks[randomNum].cover;
    imgAudioBooks[i].alt = allBooks[randomNum].title;
    imgAudioBooks[i].title = allBooks[randomNum].title;
    
    while(checkRandomNum === true){
    randomNum = generateNumber();
    checkRandomNum = audioBooksArr.includes(randomNum);
    imgAudioBooks[i].src = allBooks[randomNum].cover;
    imgAudioBooks[i].alt = allBooks[randomNum].title;
    imgAudioBooks[i].title = allBooks[randomNum].title;
    }
    audioBooksArr.push(randomNum);
  }
}
renderAudioBooks();

