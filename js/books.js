
"use strict";


function MostRecentcat() {
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
MostRecentcat();




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

    allBooks.forEach(function(book ){
      
        if (book.category=== "Romance")
        romance.push(book);
  

        if (book.category=== "fantasy")
        fantasy.push(book);

        if (book.category=== "History")
        history.push(book);

        
        if (book.category === "Sience Fiction")
            {   
            
                scienceFiction.push(book);
            }
    })
    
for (let index = 0; index < categoryRomance.length; index++) {
  


    categoryRomance[index].src= romance[index].cover;
    categoryRomance[index].alt= romance[index].title;

}
for (let index = 0; index < categoryFantasy.length; index++) {
    categoryFantasy[index].src= fantasy[index].cover;
    categoryFantasy[index].alt= fantasy[index].title;    
}
for (let index = 0; index < categoryHistory.length; index++) {
    categoryHistory[index].src= history[index].cover;
    categoryHistory[index].alt= history[index].title;    
}

    for (let index = 0; index < categoryScience.length; index++) {
      
        categoryScience[index].src= scienceFiction[index].cover;
       categoryScience[index].alt= scienceFiction[index].title;    
    }

}// for the function
        
    
   

      
    





/* eslint-disable quotes */
function sponsoredSlider() {
  let covers = document.querySelectorAll(".cover img");
  let details = document.querySelectorAll(".details");
  const sponsored = [];
  // eslint-disable-next-line no-undef
  allBooks.forEach((book) => {
    if (book.isSponsored) sponsored.push(book);
  });
  for (let index = 0; index < sponsored.length; index++) {
    covers[index].src = sponsored[index].cover;
    for (let child = 0; child < details[index].children.length; child++) {
      details[index].children[0].innerHTML = sponsored[index].title;
      details[index].children[1].children[0].innerHTML =
        sponsored[index].author;
      details[index].children[2].children[0].innerHTML =
        sponsored[index].publishedYear;
      details[index].children[3].innerHTML = sponsored[index].category;
      details[index].children[4].innerHTML = sponsored[index].description;
    }
  }
}
let indexOfSlider = 1;
let controls = document.querySelectorAll(".control");
for (let control = 0; control < controls.length; control++) {
  controls[control].addEventListener("click", sliderControler);
}
function refreshSlider() {
  let elemnets = document.querySelectorAll(".sponsored");
  for (let sponsore = 0; sponsore < elemnets.length; sponsore++) {
    elemnets[sponsore].classList.add("display-none");
    controls[sponsore].classList.remove("active");
  }
  elemnets[indexOfSlider].classList.remove("display-none");
  controls[indexOfSlider].classList.add("active");
  indexOfSlider++;
  if (indexOfSlider === elemnets.length) indexOfSlider = 0;
}
function sliderControler() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(refreshSlider, 5000);
  indexOfSlider = event.path[0].dataset.index;
  refreshSlider();
}
sponsoredSlider();
let sliderTimer = setInterval(refreshSlider, 5000);
