let num = 5;


function showFirsrMessage(text){

    console.log(text);
    console.log(num);
}

showFirsrMessage('hello world!!!!'); 

// console.log(cal (2, 3));

// function cal(a, b) {
//     return a + b;
// }
// console.log(cal (2, 3));

function ret (){
    let num = 50;

    return num;
}

const amotherNum = ret();
console.log(amotherNum);

const logger = function(){
    console.log('Hello');
};

logger();

const calc = (a, b) =>  a + b ;





//lesson 26  cursValut

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount,curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);



// lesson 27   return

const usdCurr = 28;
const discount = 32;

function convert(amount,curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);

// homework 

function sayHello(name) {
    console.log('Привет,', name);
}
sayHello('anton');




function getMathResult(first, second) {
    var output = ""; 
    let result;
    if (typeof(second) === 'string' || second === 0 || second < 0) {return first;}
    for(let i = 0; i < second; i ++){
         result = first + (first * i);         
         output += result + "---";
    }
    const str2 = output.slice(0, -3);
    return str2;
}
console.log( getMathResult(5,10));

const str = "DelftStacks";
const str2 = str.slice(0, -1);
console.log(str2);


var output = ""; 
for (var i = 2; i <= 10; i = i + 2) {
    output += i + " "; 
}
console.log(output);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

console.log(getMathResult(10, 5));