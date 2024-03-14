const input = require("readline-sync")
let x = input.questionInt("enter th x number")
let n = input.questionInt("enter the n number")
let s = 0;

for(i=1; i<=n; i++)
{    
    s=s+(x**i)/i;
 
}
   console.log(s);