const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];


const date = new Date();
let year =  date.getFullYear();

function yearSince(x) {
  return year - x.publishDate
}

books.forEach((el) => {
//Array of authors and the book they wrote
//"--- wrote --- in ---"
  console.log(`${el.authorFirst} ${el.authorLast} wrote ${el.name} in ${el.publishDate}`)
});

//Sort books from oldest to most recent
let sortAge = books.sort((a, b) => (a.publishDate - b.publishDate))
console.log(sortAge)

//sort books alphabetically
titles.sort()
console.log(titles)

//Find who wrote War and Peace
function findAuthor(x) {
  let bookName = x
  const filterBook = books.filter((el) => el.name === bookName)
  filterBook.forEach((el) =>  console.log(`${el.authorFirst} ${el.authorLast} wrote ${bookName}`))
}

findAuthor("War and Peace");

//how many books were written before 1900?
function before(x) {
  const before = books.filter((el) => el.publishDate < x)
  console.log(before.length)
}

before(1900);

//was there at least one book published within the last 100 years?
function within(x) {
  const within = books.filter((el) => yearSince(el) < x)
  if (within.length > 0)
    console.log("Yes")
  else 
    console.log("No") 
}

within(100);

//was every book published within the last 100 years?
function withinEvery(x) {
  const within = books.filter((el) => yearSince(el) < x)
  if (within.length === books.length)
  console.log("Yes")
  else 
  console.log("No")
}

withinEvery(100);

//print a list of books that "includes" the genre historical
function genre(x) {
  const genreWanted = books.filter((el) => el.genre.includes(x) === true)
  console.log(genreWanted)
}

genre("historical");