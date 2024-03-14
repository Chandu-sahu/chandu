const input = require("readline-sync")
let n = input.questionInt("enter the n number")
let str = "";
let s=n;


for(let i=1; i<=n; i++)
{
    str+="*";
}
console.log(str)
for(i=n-2; i<n; i++)
{
    console.log("**")
}
for(i=n; i<=s; i++)
{
    str+="*";
}
 console.log(str)
