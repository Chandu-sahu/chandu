const input = require("readline-sync")
var n = input.questionInt("enter the n num")
let max = input.questionInt("enter the first num")
let max2 = input.questionInt("enter the first num")

let c;
if(max2>max)
{
    c=max2;
    max2=max;
    max=c;
}
for(let i=3; i<=n; i++)
{
    let b = input.questionInt("enter the number")
    if(b>max)
    {
         c=max2;
         max2=max;
         max=b;
         b=c;
    }
    
    else
    {
       if(b>max2)
       {
        c=max2;
        max2=b;
       }
          
    }
}
 console.log(max2)

    


    