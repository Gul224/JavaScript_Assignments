//Methods
var library = {
    book: "JavaScript is fun",
    checkOut: function(){
        console.log("You have checkedout the book" + this.book)

    }, 
    checkIn: function(number){
        console.log("You have Checked in " + number + "books.")
    }
}
library.checkIn(2)
library.checkOut