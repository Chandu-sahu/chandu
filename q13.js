// const input = require("readline-sync")
// let n = input.questionInt("enter the n number")
// let str = "";
// let j=1;
// let i=1;
// let a=n-3;
// let p=n;
// for(let i=1; i<=n; i++)
// {
    
//     str="";
//     if(i==p)
//     {
//         for(j=1; j<=i; j++)
//         {
//             str+="*";
//         }
//     }
//     else{
//        for(let k=1; k<=i; k++)
//        {
//         if(k==1)
//         {
//           str+="*";
//         }
//         else if(k==a)
//         {
//             str+="*";
//         }
        
//         }
//        }
//        console.log(str)
//  }
   
 
    
const input = require("readline-sync")
let n = input.questionInt("enter the n number")
let str = "";
for(let i=0; i<=0; i++)
{
    str+="*"
}
    console.log(str)
for(let i=2; i<=n; i++)
    {
        console.log("**")
    }
    
for(i=1; i<=n; i++)
        {
            str+="*";
        }
    console.log(str)

