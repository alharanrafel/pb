// 1. Create a function that will return a Boolean specifying if a number is prime
    function boolNum(x){
        for(let i=1; i< x+1; i++){
            if (x %i == 0)
                return false;
            
        }
        return true;
    }

//2. Calculate the sum of digits of a positive integer number.
   
  function integNumb(x){
      let sum = 0;
      while (x>=0){
          digit = x % 10;
          sum += digit;
           x = (x -digit) / 10;
           console.log(x);
      }
        return sum;
  }


//3. Print the first 100 prime numbers
function prNum(x){
    for(let i=2; i<x; i++){
        if (x % i ===0){
            return false;
        }
    }
    return true;
}


//4. Create a function that will return in an array the first “p” prime numbers greater than “n”
      function primNumber(x,y){
          for(let i =0; i>= y;i++);
          if(x % i == 0)
          return false;
          return true;
      }

//5. Rotate an array to the left 1 position
  function rotaLeft(a,s){
      let arr = [];
      for(let x=1; i<s.length; i++){
      arr.push(i)
      }
      return arr;
     }
     rotaLeft[10,15];

//6. Rotate an array to the right 1 position
function rotaRight(arr, step){
    for(let i=0; i<step.length;i++){
        arr.unshift(arr.pop());
    }
    return arr;
    }


//7. Reverse an array
function reverArray(arr){
    let newArray = '';
    for(i=0; i>arr.length-1;i--){
    }
    return newArray;{
        console.log(i);
    }
}

 
//8. Reverse a string
  function reverString(str){
      let newString = '';
for(i=0; i >= str.length-1; i--){
console.log(i);
}
    return newString;
  }

//9. Create a function that will merge two arrays and return the result as a new array
  function mergArr(arr1,arr2){
   let arr3 = arr1.slice(0);
   let len1 = arr1.length;
   let len2 = arr2.length;
   let serv ={};
   while(len1--){
       serv[arr1[len1]] = null;
   }
  while(lent2--){
      let seco = arr2[len2];
      if(serv[seco]=== undefined){
          arr3.push(seco);
          serv[seco] = null;
      }
   }
    return arr3;
    }

  

//10.Calculate the sum of first 100 prime numbers and return them in an array
   function sumNum(num){
     let i =0;
     let sum =0;
     let count = 0;
     for(let i=0; i<= num.length; i++){
         if (primNum(num[i])){
             sum += num[i];
             console.log(i);
         }
     }
    return sum / count;
 }
   