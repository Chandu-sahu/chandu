const input = require("readline-sync")
let n = input.questionInt("enter n number")
let s=0;
let i=n;
while(i>0)
{
    r=i%10
    s=s+r;
    

i=Math.floor(i/10)
}
if(s!=0)
{
let p=s;
let c=0;
while(p>0)
{
    r=p%10;
    c=c+r;

    p=Math.floor(p/10)
}
console.log(c)
}else
{
    console.log(s)
}