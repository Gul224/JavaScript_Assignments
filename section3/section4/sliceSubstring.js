// Taking a slice or Substring


var str = "Happy, Excited, Calm"
// took out a part of string not cut it from string 
var sl = str.slice(7, 14)
console.log(sl)

sl = str.slice(7)
console.log(sl)

// right to left 

sl= str.slice(-13, -6)
console.log(sl)

sl = str.slice(-13)
console.log(sl)


var str = "Happy, Excited, Calm"
var sb = str.substring(7,14)
console.log(sb)

sb = str.substring(7)
console.log(sb)

sb = str.substring(-13, -6)
console.log(sb)

// substrings doesnot allow negative index like slice
sb = str.substring(-13)
console.log(sb)

// index 7 n length 7
var str = "Happy, Excited, Calm"
var sr = str.substr(7,7)
console.log(sr)

sr = str.substr(7)
console.log(sr)

sr = str.substr(-13, 7)
console.log(sr)

sr = str.substr(-13)
console.log(sr)