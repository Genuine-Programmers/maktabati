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
  console.log(imgMostViewed);
  for (let index = 0; index < 4; index++) {
    imgMostViewed[index].setAttribute("src", BooksMostViewed[index].cover);
    imgMostViewed[index].setAttribute("alt", BooksMostViewed[index].title);
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
  }
  for (let index = 0; index < categoryFantasy.length; index++) {
    categoryFantasy[index].src = fantasy[index].cover;
    categoryFantasy[index].alt = fantasy[index].title;
  }
  for (let index = 0; index < categoryHistory.length; index++) {
    categoryHistory[index].src = history[index].cover;
    categoryHistory[index].alt = history[index].title;
  }

  for (let index = 0; index < categoryScience.length; index++) {
    categoryScience[index].src = scienceFiction[index].cover;
    categoryScience[index].alt = scienceFiction[index].title;
  }
} // for the function

let figures = document.querySelectorAll(".books img");
for (let figure = 0; figure < figures.length; figure++) {
  figures[figure].addEventListener("click", openNav);
}
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
 