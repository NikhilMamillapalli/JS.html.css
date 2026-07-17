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