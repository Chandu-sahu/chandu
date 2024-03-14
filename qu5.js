const input = require("readline-sync")
var n = input.question("enteranum")
var m = 1
for(let i=1; i<=n; i++)
{
    if(n%i==0)
    {
        m=m*i;
        i++;
    }
}
if(m==n)
{
    console.log("Prime-Number")
}
else{
console.log("Not Prime-Number")
}


    

   

  
    