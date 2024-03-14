const input = require("readline-sync")
let n = input.questionInt("enter the n number")
let str = "";
let i=1;
for( i=1; i<=n; i++)
{
    str+="*";
}
console.log(str)
for(i=n-2; i<=n; i++)
{
    if(i<n)
    {
    console.log("**")
    }
    else{
        console.log("*")
    }
}
n=n-1;
for(i=1; i<n; i++)
{
    console.log("**")
}
n=n-3;
for( i=1; i<n; i++)
{
    str+="*";
}
console.log(str)



