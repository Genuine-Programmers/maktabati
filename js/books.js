"use strict";


function MostRecentcat() {
    let MostRecentarr = allBooks;
    MostRecentarr.sort(function (a, b) {
        return a.publishedYear - b.publishedYear;
      });
    MostRecentarr.reverse();


    let MostRecentbooks = document.querySelectorAll(".most-recent img");
     for (let index=0; index <MostRecentbooks.length; index++){
        MostRecentbooks[index].src= MostRecentarr[index].cover;
        MostRecentbooks[index].alt= MostRecentarr[index].title;
console.log()
     }

 
        
    




}


MostRecentcat();