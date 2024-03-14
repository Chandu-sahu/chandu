const input = require("readline-sync")
var n = input.question("enterAnum")
var s = 0;

for(let i=1; i<n; i++)
{
    if(n%i==0)
    {
        s=s+i;
    }
}

    if(s==n)
    {
        console.log("perfect-number")
    }
    else
    {
       console.log("notperfect-number")
    }