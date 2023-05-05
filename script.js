

// 2+
function sum(...numbers){
    let sumvalue=0;
    for(let item of numbers){sumvalue+=item;}
    return sumvalue;
}
let resultsum=sum(10,50, 6, 7, 8, 11, 6, 3, 9)
console.log(resultsum);
  
// 3+
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
  
  function monacemebi() {
    if (user.isloggedin==true){console.log ( user.firstname+ ' '+ user.lastname);}
else {console.log (false)}}
  
  monacemebi(user.isloggedin)


    
// 6+
let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];
for(let item of array){
    if(item.length>4 && item.includes('av')) {console.log(item)}  }
  
// array.forEach (function(item){
//     if(item.length <4 && item.includes ('av') {console.log(item);))}
    

// 7+
let array2 = [1,2,3,4,5];
for(let i=0; i<array2.length; i++){console.log (array2[i])}

// 8+

let userage= (birthyear, yearnow) => {let age= yearnow- birthyear;
 let ageresult= age>18? "srultslovani": "arasrultslovani";}
