// function calculate() {
//     console.log((2 * 10 / 2 % 3).toString());
// }
// calculate();

function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

calculate(4);
calculate(5);
/**
 * 함수에서 입력받는 값에 대한 정의를 parameter 라고 한다.
 * 
 * 실제 입력하는 값은 argument 라고 한다.
 */

function multiply(x, y) {
    console.log(x * y);
}

multiply(2,4);

function multiply(x, y=10){
    console.log(x * y);
}

multiply(2,4);
multiply(2);

/**
 * return
 */

function multiply(x, y){
    return x * y;
}

const resutl1 = multiply(2,4);
console.log(resutl1);

/**
 * Arrow function

 */

const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(3,4));

const multiply3 = (x,y) => x*y;
console.log(multiply3(4,5));

const multiply4 = (x) => x * 2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x:${x} y:${y} z:${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x){
    return function(y){
        return function(z){
            return `x:${x} y:${y} z:${z}`
        }
    }
}
console.log(multiply6(3)(4)(5));

const multiplyTwo = function(x,y) {
    return x * y;
}
console.log(multiplyTwo(4,5));

const multipleThree = function(x,y,z){
    console.log(arguments);
    return x * y * z;
}
console.log(multipleThree(4,5,6));

// immediately invoked function
(function(x, y){
    console.log(x * y);
})(4,5)

// function is object

console.log(typeof multiply);
console.log(multiply instanceof Object);