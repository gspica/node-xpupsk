// run `node index.js` in the terminal

var favoriteBooks = [];

function addFavoriteBooks(bookName) {
  if (!bookName.includes('Great')) {
    favoriteBooks.push(bookName);
    //console.log(bookName);
  }
}

function printFavoriteBooks() {
  console.log(`Favorite books: ${favoriteBooks.length} `);
  for(let bookName of favoriteBooks){
    console.log(bookName);

  }
  
}

addFavoriteBooks("A Long Days Journey Into Night");
addFavoriteBooks("The Yahus")
printFavoriteBooks();
