const input = require("readline-sync")
var n = input.questionInt("enter n num")
let a = input.questionInt("enter thr first number")
let max = a;
let min = a;

for(let i=2; i<=n; i++)
{
    let b = input.questionInt("enter the number")
    if(b>max)
    {
        max=b;
    
    }
    if(b<min)
    {
        
        min=b;
    }
   
}
  
   console.log(max)
    console.log(min)
 
   