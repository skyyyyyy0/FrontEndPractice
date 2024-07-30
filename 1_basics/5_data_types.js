/**
 * data types
 * 
 * 6 primitive type
 * 1 object type
 * 
 * 1. number
 * 2. string
 * 3. boolean
 * 4. undefined
 * 5. null
 * 6. symbol
 * 
 * 
 * 7. object
 *    function, array, object
 */

// number
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log('------------')

// string


/**
 * template literal
 * 
 * Escaping Character
 * 1. newline -> \n
 * 2. tab -> \t
 * 3. back slash -> \\
 * */


const ive = 'ive'

const ive2 = `ive 
ive
ive`
console.log(ive2)
// 그대로 출력 된다. template literal `(back tick)

const groupName = 'ive'
console.log(groupName + 'ive');
console.log(`${groupName} ive`);


/**
 * Boolean
 */

const isTrue = true;
const isFalse = false;
console.log(typeof isFalse);


/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을때 
 * 지정되는 값이다. 
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null type
 * 
 * undefined 와 마찬가지로 값이 없다는 뜻이나 
 * JS에서는 개발자가 명시적으로 없는 값을 초기화할때 사용된다.
 */
let init = null;
console.log(init);
console.log(typeof init);

/**
 * symbol type
 * 
 * 유일무이한 값을 생성할때 사용한다. 
 * 다른 프리미티브 값들과 다르게 symbol 함수를 호출해서 사용한다.
 */
const test1 = '1';
const test2 = '2';

console.log(test1 == test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
// symbol 는 유일무이한 값을 생성하고 절때 같지 않다.
console.log(symbol1 == symbol2);

/**
 * object type
 * 
 * map 
 * key:value pair
 */

const dictionary = {
    red: "red",
    orange : "orange",
    yellow : 'yello',
};

console.log(dictionary);
console.log(dictionary['red'])

/**
 * array type
 * 
 * 값을 리스트로 나열 할 수 있는 타입이다.
 */

const iveArray = [
    'a',
    'b',
    'c',
];
console.log(iveArray);

/**
 * index
 * 
 * 0부터 시작 1씩 올라감
 */
console.log(iveArray[0]);
console.log(iveArray[2]);
//index 바꿀때
iveArray[0] = 'code'
console.log(iveArray);


/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시한다.
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 '추론'한다/
 * JS -> dynamic typing
 */