// const input = require("readline-sync")
// let n = input.questionInt("enter the n number")
// let str;
// let j=1;
// let k=1;
// let a;
// let r=j;
// for(let i=1; i<=n; i++)
// {
    
//     str="";
    
//     if(i==n)
//     {   
//         for(j=1; j<=n; j++)
//         {
//             str+="*";
//         }
    
//     }
//       else if(i==1)
//         {
//            for(k=1; k<=n; k++)
//            {
//               str+="*";
//            } 
//         }
//     else
//     {
//     if(n%2==0)
//     {
//         a=n/2-1;
//     }
//     else{
//         a=n/2-1.5;
//     }
//     for(let r=1; r<=a; r++)
//         {
//             str+="*";
//         } 
//     } 
//         console.log(str)
//         str+="";
// }
   

    

const input = require("readline-sync")
let n = input.questionInt("enter the n number")
let str = "";

for(let i=1; i<=n; i++)
{
    str+="*";
}
   console.log(str)

for(let i=n-3; i<=n; i++)
{
   console.log("**")
}

for(let i=n; i<=n; i++)
{
    str+="*";
}
   console.log(str)