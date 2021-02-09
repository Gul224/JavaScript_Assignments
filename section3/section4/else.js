var firstName = prompt("Enter your Name");
var age = prompt("Enter your Age");
var city = prompt("Enter your City");
var allowedage = 18;
if (age >= allowedage && prompt("Enter your Name")){
    
    console.info("You have entered the below details");
    console.info("Hello! \n" + FirstName + "---" + age + "---" +city);
    
}
else{
    console.info("Hello! "+firstName  );
    console.info(" You are not allowed to watch Movie");
}