
console.log('hello world'); 
console.log('I like pizza')

window.alert('This is an elert for shutdown')
document.getElementById("1").textContent='Helloo';
let a;
a=100
let b=100;
console.log(typeof a);
console.log(`sum of a+b=${a+b}`);

let a=window.prompt('what is your name')
console.log(a)
let username
document.getElementById("button").onclick=function(){
    username=document.getElementById("username").value;
    console.log(username);
    document.getElementById("1").textContent=`Hello ${username}`
}


/*let a=(window.prompt('Enter num'))
a=Number(a)
a+=1*/
/*let radius=window.prompt("Enter radius:");
radius=Number(radius);
const PI=3.14159
let area_of_circle=2*PI*radius;
console.log(`the value of ${area_of_circle}`)*/
const PI=3.14159
let radius;
radius=Number(radius);
let circumference
document.getElementById("Res").onclick=function()
{
   radius=document.getElementById("radius").value;
   circumference=2*PI*radius;
   circumference=circumference+" cm";
   document.getElementById("h2").textContent=circumference;
}
