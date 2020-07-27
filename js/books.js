

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
        
    
   

      
    




