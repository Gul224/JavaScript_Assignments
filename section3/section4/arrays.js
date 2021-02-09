var books = [];
var book1 = prompt('whats your the favorite comedy book');
books.push(book1);
var book2 = prompt('whats your the favorite scifi book');
books.push(book2);
var book3 = prompt('whats your the favorite Jokes book');
books.push(book3);
var book4 = prompt('whats your the favorite Horror book');
books.push(book4);
var book5 = prompt('whats your the favorite Children book');
books.push(book5);
var book6 = prompt('whats your the favorite philosophy book');
// add item at the end of an array
books.push(book6);
console.log(books)
var endBook =[];
var startBook;

startBook = books.splice(0,1)
console.log("startBook - " +startBook)
// from which index to start & how many items you want from that given index
endBook  = books.slice(0)
console.log("endBook - " +endBook);

// add an item to beginning of array
startBook.unshift(endBook);
console.log("changeOrder - " +startBook );
var LastItem = [];
LastItem = startBook.slice(1);
console.log("LastItem - " +LastItem );