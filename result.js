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