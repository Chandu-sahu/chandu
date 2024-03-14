const input = require("readline-sync")
let n = input.questionInt("enter n number")
let s=n;
let i=2;
while(n>1)
{

  while(i<=n)
  {
    if(n%i==0)
    {
      console.log(i)
      n=Math.floor(n/i)
    }
    i++;
  }
  n=Math.floor(n/i)
}

