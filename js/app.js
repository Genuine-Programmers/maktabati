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
new BooksGenerator(
  "frankenstein",
  1851,
  "Mary Wollstonecraft Shelley",
  "sience fiction",
  "A precursor to gothic literature and science fiction genres, Frankenstein is a novel fuming with imagination as it depicts a well known horror story. Shelly’s gothic fiction is written in epistolary form as a means of correspondence between the failed writer Robert Walton and his sister, while he is away on a dangerous expedition in search of fame. Some major themes explored in the gothic classic are the fallibility of ambition and knowledge, revenge, prejudice, isolation, and the imperfections of society",
);
new BooksGenerator(
  "the war of the worlds",
  1866,
  "H. G. Wells ",
  "Sience Fiction",
  "Extraterrestrial invasion, the earth taken over by omniscient intelligences from Mars, the whole of humanity under siege and a nameless narrator who seems to be the lone survivor of the complete devastation of human civilization – scenes from a Hollywood sci-fi blockbuster? Far from it! The War of the Worlds by HG Wells was written more than a century ago and went on to become an iconic work in the science fiction genre, spawning a whole new genre of literature featuring alien invaders. It was in fact the first book to present the idea of conflict between inhabitants of different planets.",
);
new BooksGenerator(
  "short science fiction collection",
  1931,
  "Various",
  "Science fiction (abbreviated SF or sci-fi with varying punctuation and case) is a broad genre of fiction that often involves sociological and technical speculations based on current or future science or technology. This is a reader-selected collection of short stories originally published between 1931 and 1963, that entered the US public domain when their copyright was not renewed.",
);


const books = [
  "jane eyre",
  "pride and prejudice",
  "leo tolstoy",
  "frankenstein",
  "the war of the worlds",
  "short science fiction collection",
  "anne of green gables",
  "the decameron",
  "the three musketeers",
  "alice's adventures in wonderland",
  "tarzan of the apes",
];
