/** 
 * Type conversion
 * 
 * 1. 명시적
 * 2. 암묵적
 */

let age = 32;

let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

let test = age + '';
console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);
// 기능적으로만 가능하고 현직에서 당연히 안씀, 명시적으로 변환만

// 숫자 타입으로 변환
console.log(typeof parseInt('0'),parseInt('0'));
console.log(typeof parseFloat('0.99'),parseFloat('0.99'));
console.log(typeof + '1', +'1');

/**
 * Boolean 타입으로의 변환
 */
console.log(!'x');

console.log(!!0);
console.log(!!'0');
console.log(!!'false');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});
console.log(!![]);

/**
 * 1. 아무 글자도 없는 string
 * 2. 값이 없는 경우
 * 3. 0
 * 
 * 모두 false 를 반환한다.
 */