const input = require("readline-sync")
let x = input.questionInt("enter th x number")
let n = input.questionInt("enter the n number")
let s = 0;
let d = 0;
let k = 0;

for(let i =1; i<=n; i++)
{
    if(i%2!=0)
    {
        s+=x**i+2/i+2;
    }
        k+=2;
        d+=x**i+1+k/i+1+k;
        p=s-d;
}

    console.log(p);