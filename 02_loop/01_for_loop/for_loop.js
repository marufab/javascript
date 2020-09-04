
// count 1-6 using loop

/*for (let count= 1;count<=6;count++){
  console.log(count)

} */

//@@ loop example with array

/*console.log("loop started");
let colors=["red","green","black","blue","pink"];

console.log(colors.length)

for(let index =0;index<colors.length;index++) {
  console.log( colors[index])
} */


// @@if we want to print index number + item @@


/*console.log("loop started");
let colors=["red","green","black","blue","pink"];

console.log(colors.length)

for(let index =0;index<colors.length;index++) {
  console.log("index number:"+ index)
  console.log( colors[index])
} */

// @@ if we add a condition under for loop

// we'll not print the color "pink" 

/*console.log("loop started");
let colors=["red","green","black","blue","pink"];

console.log(colors.length)

for(let index =0;index<colors.length;index++) {

  if(colors[index]!="black" ){
    console.log("index number:"+ index)
    console.log( colors[index])
  }
  
} */

//Break tge loop

/*for(count=1;count<=20;count++){
  if (count==12){
    break;
    

  }
  console.log(count);
}

console.log("Loop ended");  */ 

//@@ continue the loop
/*for(count=1;count<20;count++){
  

if(count==10){
  continue;

}
 console.log(count)
}
*/



//@@ sum of 1-100

/*let sumOfAll=0;
for(let num=1;num<=100;num++){
  sumOfAll=sumOfAll+num   //sumOfAll += num 

}
console.log(sumOfAll)*/


// ODD & EVEN NUMBER

/*for (let num=1;num<=100; num+=2){
   console.log(num)
    
  }*/

// ODD & EVEN NUMBER using modulas 

for (let num=1;num<=100;num++){
  if(num % 2==0){
    console.log(num+"is an evevn number")
    
  }else{
    console.log(num+"is an odd number")
  }
  

}
