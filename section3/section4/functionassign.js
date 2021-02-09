var useramount = prompt("Please enter the amount you are paying ?");
console.log("you owe of Rs: 135");
var originalCost = 135;
calc(useramount, originalCost);

function calc(a, b){
 console.log("you gave the exact amount: " +useramount);
 if(a > b){
    sub = b - a;
    console.log("you gave too much amount. you chnage due is Rs: " +sub);
 }
else if(a < b){
    sub = b - a;
    console.log("you gave too little. you still owe Rs: " +sub);
}else{
sub = b - a;
console.log("Thanks for paying!!.");
}
}