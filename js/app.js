/* eslint-disable quotes */
"use strict";
const allBooks = [];
function BooksGenerator(
  title,
  publishedYear,
  author,
  category,
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, beatae.",
  viewedTimes = 0,
  isSponsored = false
) {
  this.title = title;
  this.author = author;
  this.category = category;
  this.publishedYear = publishedYear;
  this.description = description;
  this.cover = `./images/${title}.jpeg`;
  this.pdf = `./images/${title}.pdf`;
  this.isSponsored = isSponsored;
  this.viewedTimes = viewedTimes;
  allBooks.push(this);
}

new BooksGenerator(
  "pride and prejudice",
  1813,
  "Jane Austen",
  "Romance",
  "Austen’s timeless romantic classic, follows the lives of the five Bennett sisters, who live in a time where an advantageous marriage and social status are considered a fundamental for any woman to stand a fair chance at life. Set at the turn of the 19th century, Pride and Prejudice catches a perfect glimpse not only of a time when women were socially and economically dependent solely on their marital status, but also as an age of enlightenment and witness of the French Revolution."
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
  "Austen’s timeless romantic classic, follows the lives of the five Bennett sisters, who live in a time where an advantageous marriage and social status are considered a fundamental for any woman to stand a fair chance at life. Set at the turn of the 19th century, Pride and Prejudice catches a perfect glimpse not only of a time when women were socially and economically dependent solely on their marital status, but also as an age of enlightenment and witness of the French Revolution."
);
new BooksGenerator(
  "alice's adventures in wonderland",
  1865,
  "Lewis Carroll ",
  "fantasy",
  " An acclaimed children’s classic depicting the odd, but riveting journeys of the curiousAlice as she explores the surreal world of Wonderland. Written by Charles Lutwidge Dodgsonor better known under his pseudonym Lewis Caroll, this episodic novel is assembled in twelvechapters each containing a prominent adventure. The departure from logic and its embracementof pure imagination is what makes Alice’s Adventures in Wonderland a model for fantasy novels and a timeless classic."
);
new BooksGenerator(
  "tarzan of the apes",
  1912,
  "Edgar Rice Burroughs ",
  "fantasy",
  " An aristocratic English family is marooned off the coast of West Africa. They find their way into the interior of the dense jungle that lines the coast and here, Lord Greystoke is killed by a predatory ape. Lady Greystoke survives with her infant boy, but in a few months, she too succumbs to the perils of jungle life. The baby is adopted by a maternal she-ape who nurses him along with her own child. This marks the dawn of a legend – Tarzan of the Apes."
);
new BooksGenerator(
  "the man who was thursday",
  1908,
  " G. K. Chesterton ",
  "fantasy",
  "Two poets in a London park at sunset, debating on the attributes of poetry and whether it's really a metaphor for anarchy. A group that meets in secret, planning to overthrow the world order. Disguises and deceptions, ideals and ideology. A medley of themes and genres makes this a great read for anyone who's a fan of Chesterton and his iconic Father Brown."
 );


  "anne of green gables",
  1908,
  "Lucy Maud Montgomery",
  "History",
  "Montgomery’s literary classic recounts the exciting adventures undertaken by the fiery eleven-year-old Anne Shirley, an orphan girl accidentally adopted by middle aged siblings Matthew and Marilla Cuthbert. A coming-of-age novel, Anne of Green Gables focuses on Anne’s new life at Green Gables farm in Avonlea and her adjustment into the Prince Edward Island community."
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