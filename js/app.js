/* eslint-disable quotes */
"use strict";
const allBooks = [];
function BooksGenerator(
  title,
  publishedYear,
  author,
  category,
  viewedTimes,
  isSponsored = false,
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, beatae."
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

const books = [
  "jane eyre",
  "pride and prejudice",
  "leo tolstoy",
  "short science fiction collection",
  "twenty thousand leagues under the sea",
  "the war of the worlds",
  "anne of green gables",
  "the decameron",
  "the three musketeers",
  "alice's adventures in wonderland",
  "tarzan of the apes",
];
