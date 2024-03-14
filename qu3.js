const input = require("readline-sync")
let a = input.questionInt("enteranum")
let b = input.questionInt("enteranum")
let c = input.questionInt("enteranum")
let d = input.questionInt("enteranum")

if(a<b)
{
    m1=a
    m2=b;
}
else
{
    m1=b
    m2=a;
}
if(c<d)
{
    m3=c
    m4=d;
}
else
{
  m3=d
  m4=c;
}
if(m2<m4)
{
    m5=m2
    m6=m4;
}
else
{
   m5=m4
   m6=m2;    
}
if(m5<m6)
{
    console.log(m6);
}else
{
console.log(m5);
}