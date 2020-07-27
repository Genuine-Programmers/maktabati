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