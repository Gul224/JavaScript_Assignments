var num =1;
function thing(){
    num = 2
    var num2 = 2
    console.log("Function: " + num2)
}
//outside function 
thing()
console.log("Outside function: " + num2)

// 


let num =1;
function thing(){
    num = 2
    var num2 = 2
    console.log("Function: " + num)
}
//outside function 
thing()
console.log("Outside function: " + num)

//no diff btwn var n let , only available inside a function 


var num =1 
if(1==1){
    console.log("If statement: " + num)
}
console.log("Outside if statement : " + num)


//var num =1 
if(1==1){
    let num = 1
    console.log("If statement: " + num)
}
console.log("Outside if statement : " + num)