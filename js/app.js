/* eslint-disable quotes */
"use strict";
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
  this.cover = `./images/${title}.jpeg`;
  this.pdf = `./images/${title}.pdf`;
  this.viewedTimes = viewedTimes;
  this.isSponsored = isSponsored;
  this.description = description;
}
