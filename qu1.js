const input = require("readline-sync")
let a = input.questionInt("enteranum")
let b = input.questionInt("enteranum")
let c = input.questionInt("enteranum")
var max 
var min
var max3

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
if(max>c)
{
    max3=max;
}
else
{
    max3=c;
}

console.log(max3);