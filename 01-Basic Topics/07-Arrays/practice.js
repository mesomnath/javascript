
    
// let arr = ["windtalker","winkdy","wind"].sort();
//  // Get the first and last strings after sorting
//     let first = arr[0];
//     let last = arr[arr.length - 1];
//     let minLength = Math.min(first.length, last.length);
//     let i = 0;

//     while (i < minLength && first[i] === last[i]) {
//         console.log(i)
//         i++;
//     }

// console.log(first.substring(0, i));


// let s = "Welcome   to   the  MasterJI   platform!  ";
// console.log(s.trim().split("/^\w+/"));

let num = [0,1].sort();
let value = 0;
let orvalue = 0;
let gap = 0;
let length = 0;
for(let i = 0; i <num.length; i++ ){
    value = value+i;
    orvalue = orvalue + num[i];
}
length=num.length;
if(value != orvalue){
    gap = orvalue-value;
}
else if (length>value)(
  console.log(value+1)
)
console.log(num[num.length-1]-gap);






