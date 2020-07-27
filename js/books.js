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
