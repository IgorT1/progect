const data = [5, 10, 'Shopping', 20, 'Homework'];
const result  = [];

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i];
}

console.log(result);