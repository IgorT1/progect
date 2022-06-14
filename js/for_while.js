// let num = 50;
// while(num <= 55){
//     console.log(num);
//     num++;
// }

// do{
//     console.log(num);
//     num++;
// }while(num < 55);

// for(let i = 0;i < 8; i++){
//     if(i === 6){
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// *
// **
// ***
// ****
// *****
// ******
// *******

let result = '';
const length = 7;

for (let i = 1; i <= length; i ++){
    for (let j = 0; j < i; j++){
        result += '*';
    }
    result += '\n';
}
result += '\n';
// console.log(result);

for (let i = length; i > 0; i --){
    for (let j = 0; j < i; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result);

// first: for(let i = 0; i < 3; i ++){
//     console.log(`First level: ${i}`);
//     for(let j = 0; j < 3; j++){
//         console.log(`second level: ${j}`);
//         for(let k = 0; k < 3; k++){
//             if (k === 2) break first;
//             console.log(`Thrid level: ${k}`);
//         }
//     }
// }

// //HOMEWORK

// // for(let i = 5; i <= 10; i++){
// //     console.log(i);
// // }
// // for(let i = 20; i > 10; i--){
// //     if(i === 13) breake;
// //     console.log(i);
// // }

// // for(let i = 1; i < 11; i++){
// //     if(i % 2 === 0){
// //         console.log(i);
// //     }
// // }

// for(let i = 2; i <= 16; i++){
//     if(i % 2 === 0){
//         continue;
//     } else{
//         console.log(i);
//     }
// }


// let i = 1;
// let endd = 16;

// while(i <= endd){

//     if(i % 2 === 0){
//         continue;
//     }else if (i === endd){
//         break;
//     }
//     else{
//         console.log(i);
//     }
//     i ++;
// }


// const arrayOfNumbers = [];

// for(let i = 5;i <= 10;i++){
//     arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];

// const result = [];

// for(let i = 0; i < arr.length; i ++){
//     result[i] = arr[i];
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for(let i = 0;i < data.length; i ++){
//     if(typeof(5) === typeof(data[i])){
//         let res = data[i] * 2;
//         data[i] = res; 
//     } else {
//         let str = data[i] + " - done";
//         data[i] = str;
//     }
// }
// console.log(data);












