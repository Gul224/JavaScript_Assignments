var name = prompt("Enter your Name");
var currentTime = new Date();
var hours = currentTime.getHours();
console.log(currentTime);
console.log(hours);
if(hours >= 1 && hours <= 12){
    console.info("Hi " +name + "\n! Good Morning");

}
else if (hours >=12 && hours <= 16){
    console.info("Hi " +name + "\nGood Afternoon")

}
else if (hours >=16 && hours <= 18){
    console.info("Hi " +name + "\nGood Evening")

}
else 
console.info("Hi " +name + "\nGood Night")