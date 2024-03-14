const input = require("readline-sync")
let a = input.questionInt("enteranum")
let b = input.questionInt("enteranum")
let c = input.questionInt("enteranum")
let d = input.questionInt("enteranum")
var max 
var min
var max1
var min1
var max4

if(a>b)
{
    max=a
    min=b;
}
else
{
    max=b
    min=a;
}
if(c>d)
{
    max1=c
    min1=d;
}
else
{
  max1=d
  min1=c;
}
if (max>max1)
{
    max4=max;
}
else
{
   max4=max1;    
}

console.log(max4);