/*console.log('hello world'); 
console.log('I like pizza')

window.alert('This is an elert for shutdown')*/
//document.getElementById("1").textContent='Helloo';
/*let a;
a=100
let b=100;
console.log(typeof a);
console.log(`sum of a+b=${a+b}`);
*/
//let a=window.prompt('what is your name')
//console.log(a)
let username
document.getElementById("button").onclick=function(){
    username=document.getElementById("username").value;
    console.log(username);
    document.getElementById("1").textContent=`Hello ${username}`
}

