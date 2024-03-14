const input = require("readline-sync");
var a = input.questionInt("enter the first num")
var b = input.questionInt("enter the second num")


    if(a>b)
    {
        l=a
        s=b;
    }     
    else
    {
        l=b
        s=a;
    }   
      
while(l%s!=0)
{
    let r =l%s
    l=s
    s=r;
              
}
        let hcf=s;
        console.log("hcf:",hcf);
        let lcm=(a*b)/hcf; 
        console.log("lcm:",lcm);
    

