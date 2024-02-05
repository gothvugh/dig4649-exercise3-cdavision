// 3.1 flattening(list)
let arrays = [[1, 2, 3], [4, 5], [6]];

const flattenedArray = arrays.reduce((arrays, oneArray) => {
    return arrays.concat(oneArray);
  }, []);

console.log(flattenedArray); 

//3-2. loop(value, test, update, body)
function loop(value, test, update, body) {
    for (let i = value; test(i); i = update(i)) {
        body(i);
      }
}
loop(3, n => n > 0, n => n - 1, console.log);

//3-3. everyLoop(array, test)
function everyLoop(array, test) {
    for(let element of array) {
        if(!test(element)) {
            return false;
        }
    }
    return true;
}

let sample = [2,4,6,8,10,12];
console.log(everyLoop(sample, n => n % 2 === 0));
console.log(everyLoop(sample, n => n < 10));

//3-4. everySome(array, test)
function everyLoop(array, test) {
    for(let element of array) {
        if(!test(element)) {
            return false;
        }
    }
    return true;
}

function everySome(array, test) {
    return !array.some(element => !test(element));
}

console.log(everyLoop(sample, n => n % 2 === 0));
console.log(everySome(sample, n => n % 2 === 0));