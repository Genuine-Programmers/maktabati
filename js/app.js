/* eslint-disable quotes */
"use strict";
const allBooks = [];
function BooksGenerator(
  title,
  publishedYear,
  author,
  category,
  description,
  isSponsored = false
) {
  this.title = title;
  this.publishedYear = publishedYear;
  this.author = author;
  this.category = category;
  this.description = description;
  this.cover = `./images/${title}.jpg`;
  this.pdf = `./pdf/${title}.pdf`;
  this.audio = `./audio/${title}.mp3`;
  this.isSponsored = isSponsored;
  this.viewedTimes = 0;
  allBooks.push(this);
}

new BooksGenerator(
  "pride and prejudice",
  1813,
  "Jane Austen",
  "Romance",
  "Austen’s timeless romantic classic, follows the lives of the five Bennett sisters, who live in a time where an advantageous marriage and social status are considered a fundamental for any woman to stand a fair chance at life. Set at the turn of the 19th century, Pride and Prejudice catches a perfect glimpse not only of a time when women were socially and economically dependent solely on their marital status, but also as an age of enlightenment and witness of the French Revolution.",
  true
);
new BooksGenerator(
  "jane eyre",
  1847,
  "Charlotte Brontë",
  "Romance",
  "This story opens with Jane Eyre being shipped off to be cared for by her uncle Mr. Reed who lived at the Gateshead Hall. Her uncle was always kind to her but his wife, Sarah Reed was anything but. Sarah’s son John and Sarah’s two daughters also contributed to Jane’s torment. Jane was excluded from all family activities and found solace only in her books and dolls."
);
new BooksGenerator(
  "war and peace",
  1965,
  "Leo Tolstoy",
  "Romance",
  "Leo Tolstoy's War and Peace chronicles the lives of five Russian aristocratic families during Napoleon's invasion of Russia. Many considered this book to be the best Russian work of literature of all time and it is massive in scale. The book is divided in four volumes and the chapters don't just contain the narrative of the plot to the novel but philosophical discussions as well. This may be intimidating to average book readers but they shouldn't be discouraged to try reading War and Peace. After all, this book was written for all and not just for intellectuals."
);
new BooksGenerator(
  "frankenstein",
  1851,
  "Mary Wollstonecraft Shelley",
  "Science Fiction",
  "A precursor to gothic literature and science fiction genres, Frankenstein is a novel fuming with imagination as it depicts a well known horror story. Shelly’s gothic fiction is written in epistolary form as a means of correspondence between the failed writer Robert Walton and his sister, while he is away on a dangerous expedition in search of fame. Some major themes explored in the gothic classic are the fallibility of ambition and knowledge, revenge, prejudice, isolation, and the imperfections of society",
  true
);
new BooksGenerator(
  "the war of the worlds",
  1866,
  "H. G. Wells ",
  "Science Fiction",
  "Extraterrestrial invasion, the earth taken over by omniscient intelligences from Mars, the whole of humanity under siege and a nameless narrator who seems to be the lone survivor of the complete devastation of human civilization – scenes from a Hollywood sci-fi blockbuster? Far from it! The War of the Worlds by HG Wells was written more than a century ago and went on to become an iconic work in the science fiction genre, spawning a whole new genre of literature featuring alien invaders. It was in fact the first book to present the idea of conflict between inhabitants of different planets."
);
new BooksGenerator(
  "short science fiction collection",
  1931,
  "Various",
  "Science Fiction",
  "Science fiction (abbreviated SF or sci-fi with varying punctuation and case) is a broad genre of fiction that often involves sociological and technical speculations based on current or future science or technology. This is a reader-selected collection of short stories originally published between 1931 and 1963, that entered the US public domain when their copyright was not renewed."
);
new BooksGenerator(
  "alice's adventures in wonderland",
  1865,
  "Lewis Carroll ",
  "fantasy",
  " An acclaimed children’s classic depicting the odd, but riveting journeys of the curiousAlice as she explores the surreal world of Wonderland. Written by Charles Lutwidge Dodgsonor better known under his pseudonym Lewis Caroll, this episodic novel is assembled in twelvechapters each containing a prominent adventure. The departure from logic and its embracementof pure imagination is what makes Alice’s Adventures in Wonderland a model for fantasy novels and a timeless classic.",
  true
);
new BooksGenerator(
  "tarzan of the apes",
  1912,
  "Edgar Rice Burroughs",
  "fantasy",
  " An aristocratic English family is marooned off the coast of West Africa. They find their way into the interior of the dense jungle that lines the coast and here, Lord Greystoke is killed by a predatory ape. Lady Greystoke survives with her infant boy, but in a few months, she too succumbs to the perils of jungle life. The baby is adopted by a maternal she-ape who nurses him along with her own child. This marks the dawn of a legend – Tarzan of the Apes."
);
new BooksGenerator(
  "the man who was thursday",
  1908,
  " G. K. Chesterton",
  "fantasy",
  "Two poets in a London park at sunset, debating on the attributes of poetry and whether it's really a metaphor for anarchy. A group that meets in secret, planning to overthrow the world order. Disguises and deceptions, ideals and ideology. A medley of themes and genres makes this a great read for anyone who's a fan of Chesterton and his iconic Father Brown."
);
new BooksGenerator(
  "anne of green gables",
  1908,
  "Lucy Maud Montgomery",
  "History",
  "Montgomery’s literary classic recounts the exciting adventures undertaken by the fiery eleven-year-old Anne Shirley, an orphan girl accidentally adopted by middle aged siblings Matthew and Marilla Cuthbert. A coming-of-age novel, Anne of Green Gables focuses on Anne’s new life at Green Gables farm in Avonlea and her adjustment into the Prince Edward Island community.",
  true
);
new BooksGenerator(
  "the decameron",
  1886,
  "Giovanni Boccaccio",
  "History",
  "Giovanni Boccaccio’s The Decameron is a collection of novellas or short novels written during the 14th century. There are 100 tales contained in the book which is presented together. The book’s title The Decameron combines the two Greek words “deka” meaning ten and “hemera” meaning day. The title can be literally translated as “ten day,” which is also the time frame in which the stories are told by the 7 young women and 3 young men."
);
new BooksGenerator(
  "the three musketeers",
  1844,
  "Alexandre Dumas",
  "History",
  "The Three Musketeers follows the adventures of the young Gascon nobleman, D’Artagnan and his three trusted friends who served as musketeers in the king’s regiment – Athos, Porthos & Aramis. Written by Alexandre Dumas, the book was a bestseller during the time of its publication and it remains so even today. It follows the timeless theme of friendship and bravery."
);

// function to add content to the slider
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
