/**
 * Loops
 * 1.for
 * 2. while
 */

for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log('------------')

for(let i = 10; i > 0; i--){
    console.log(i)
}
console.log('------------')

for(let i = 0; i<3; i++){
    for(let j = 3; j > 0; j--){
        console.log(i,j);
    }
}

console.log('------------')

// Quiz) * 을 이용해서 6X6의 정사각형을 출력하라.
let square = '';
let side = 6;

for(let i = 0; i < 6; i++){
    for(let j = 0; j < side; j++){
        square += '*';
    }
    square += '\n';
}

console.log(square);

/**
 * for...in loop
 */


const yuJin = {
    name : 'yujin',
    year : 2003,
}
// object 에서는 key 값을 받을수있다.
for(let key in yuJin){
    console.log(key);
}
// array 에서는 index number 을 받을수있다.
const ive = ['a','b','c','d']
for(let key in ive){
    console.log(key)
    console.log(`${key}:${ive[key]}`);
}


/** 
 * for...of loop
 * array 에서 새용 가능
 */
for(let value of ive){
    console.log(value);
}


/**
 * while
 * 
 */
let number = 0;
while(number < 10){
    number ++;
}

console.log(number);

/**
 * do...while 현직에서 안씀
 */

/**
 * break
 */
for(let i = 0; i < 10; i++){
    if (i == 5){
        break;
    }
    console.log(i);
}

number = 0;

while(number < 10){
    if(number === 5){
        break;
    }
    number ++;
    console.log(number);
}


/** 
 * continue
 */
console.log('--------------')
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue; // skip 을 하게 된다.ㄴ
    }
    console.log(i);
}

console.log('--------------')
number = 0;
while(number < 10){
    number ++;

    if(number === 5){
        continue;
    }
    console.log(number);
}