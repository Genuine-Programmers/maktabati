//Generate ranodom number with max-min number
let maxViewed = 1000;
let minViewed = 0;

function generateRandomNumber(maxViewed, minViewed){
  let randomNumber = Math.floor((Math.random()*(maxViewed-minViewed+1))+minViewed);
  return randomNumber;
};

BooksGenerator.prototype.mostViewed = function(){
    let random = generateRandomNumber(maxViewed, minViewed);
    this.viewedTimes = random;
}

allBooks.forEach(function (book){
book.mostViewed();

})

function renderMostViewed(){
    const BooksMostViewed = allBooks;
    BooksMostViewed.sort(function(a, b){
        return a.viewedTimes - b.viewedTimes;
    });

    BooksMostViewed.reverse();

    let imgMostViewed = document.querySelectorAll('.most-viewed .col img');
    for (let index = 0; index < 4; index++) {
        imgMostViewed[index].setAttribute('src', BooksMostViewed[index].cover)
        imgMostViewed[index].setAttribute('alt', BooksMostViewed[index].title)
    }
}

renderMostViewed();