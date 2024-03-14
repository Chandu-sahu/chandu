const input = require("readline-sync");
let n = input.questionInt("enter the n number:");
let s=0;
let l;
let m=n;
while(n>0)
{
    l=n%10;
    s=(s*10)+l
    n=Math.floor(n/10)
}
if(m==s)
{
    console.log("palindrome");
} 
else
{
    console.log("not palindrome");
}
