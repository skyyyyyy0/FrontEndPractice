/**
 * array functions
 */

let ive = [
    'a',
    'b',
    'c',
    'd',
    'e',
];


// push
console.log(ive);
ive.push('code');
console.log(ive);

//pop
console.log(ive.pop());
console.log(ive);

//shift
console.log(ive.shift());
console.log(ive);

//unshift
console.log(ive.unshift('a'));
console.log(ive);

//splice
console.log(ive.splice(0,3));
console.log(ive);


//concat
let ive2 = [
    'a',
    'b',
    'c',
    'd',
    'e',
];
console.log(ive2.concat('aa'));
console.log(ive2);

//slice
console.log(ive2.slice(1,3));
console.log(ive2);

// spread operator
let ive3 = [
    ...ive,
];
console.log(ive3);

let ive4 = [
    ive,
];
console.log(ive4);


// join()
let ivee = [
    'a',
    'b',
    'c',
    'd',
    'e',
];
console.log(ivee.join());
console.log(ivee.join('/'));
console.log(ivee.join(', '));

//sort()
ivee.sort();
console.log(ivee);

console.log(ivee.reverse());

numbers = [
    1,
    3,
    6,
    8,
    2,
    4,
];
console.log(numbers)


/**
 * a,b 를 비교했을떄 
 * 1. a 를 b 보다 나중에 정렬하려면 0보다 큰 숫자를 반환
 * 2. a 를 b 보다 먼저 정렬하려면 0보다 작은 숫자를 반환
 * 3. 원래 숫자를 그대로 두려면 0을 반환
 */
numbers.sort((a,b)=>{
    return a > b ? 1: -1;
})
console.log(numbers);

numbers.sort((a,b) => a > b ? -1 : 1);
console.log(numbers);

// map()
console.log(ivee.map((x) => x));
console.log(ivee.map((x) => `ive : ${x}`));

console.log(ivee.map((x) => {
    if(x === 'a'){
        return `ive: ${x}`;
    } else {
        return x;
    }
}));
console.log(ivee);

// filter() 해당되는 모든 값 반환
number = [1,7,5,4,3];
console.log(number.filter((x) => x % 2 === 0));

// find() 해당되는 첫번째 값만 반환
console.log(number.find((x) => x % 2 === 0));

// findIndex()
console.log(number.findIndex((x) => x % 2 === 0));


// reduce()
console.log(number.reduce((p, n) => p + n, 0));