/* function fetchData(){
  fetch('https://api.github.com/users/facebook/repos')
  .then((response)=> console.log(response.json));
}
fetchData();
 */
/* 
let keyTimes =[[0, 2], [1, 3], [0, 7]];

function slowestKey(keyTimes) {
  // Write your code here
  let element;
  for (let index = 0; index < keyTimes.length; index++) {
     if (index === 0) {
      element = keyTimes[index][1];
     }
     else  {
      element = keyTimes[index][1]-keyTimes[index-1][1];
      let result = [];
      result = [...result, element];
      max = Math.max( ...result );
     // console.log(max);
     }     
  }
  console.log(max);
return max;
}
slowestKey(keyTimes) */


// Question 1
/* for (var i = 0; i < array.length; i++) {
  setTimeout(()=>console.log(i), 0);  
}



// Question 2
const input = "TeFuGdZ";
const output = "tEfUgDz"

function transform(){

}
transform(input); */

let array1EarPhone = ['a', 'b', 'c'];
let array2EarPhone = ['b', 'c', 'd'];

function earphone(){
  //console.log('hello world');
  let resultArray = [];
  for (let i = 0; i < array1EarPhone.length; i++) {
    for (let j = 0; j < array2EarPhone.length; j++) {
      if (array1EarPhone[i] === array2EarPhone[j]) {
        const element = array1EarPhone[i];
        resultArray =[...resultArray, element];
      }
      
    }
    
  }
  console.log(resultArray);
  
}
earphone();