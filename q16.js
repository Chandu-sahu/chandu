// count of the prime number

const input = require("readline-sync")
let n = input.questionInt("Enter N Numer")

let c=0;
for(let i=1; i<=n; i++)
{
    let k=2; let s=1;
    while(k<=i)
    {
        
        if(i%k==0)
        {
        s=s*k;
        k++;
        }
        else
        {
            k++;
        }
    }
    if(s==i)
    {
        c++;
        i++;
    }
    else
    {
        i++;
    }
}
if(c<n)
{
    console.log(c)
}






