console.log(10 / 11);

let number = 1;

number ++;
console.log(number);

number --;
console.log(number);

let result = 1;
console.log(result);
// ++ 가 뒤에 있다면 먼저 저장을 하고 증가,감소가 실행된다.
result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);
// 보통은 뒤에다가 두고 작업한다.


// 이렇게 앞에다 두고 작업하는 경우는 거의 없음.
result = ++ number;
console.log(result, number);


/**
 * assignment operator 할당 연산자
 */

number = 100;
console.log(number);

number += 10;
console.log(number);

/**
 * 비교 연산자
 * 1. 값의 비교
 * 2. 값과 타입의 비교
 */
console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);


console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);

console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);

/** 
 * 삼항 조건 연산자(ternary operator)
 */
// condition ? true : false
console.log(10 > 0 ? '10': '0');

/**
 * 논리 연산자 
 * 1. &&
 * 2. ||
 */

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true 이면 우측 값 반환
 * &&를 사용 했을때 좌측이 fasle 이면 좌측 값 반환
 * ||를 사용했을때 좌측이 true 이면 좌측 값 반환
 * ||를 사용했을때 좌측이 fasle 이면 우측 값 반환
 */

console.log(true && true && 'ive');
console.log(true && false && 'ive');

/**
 * 지수 연산자
 */

/** 
 * null 연산자
 */
let name;
console.log(name);

name = name ?? 'code';
console.log(name);

name = name ?? 'ive';
console.log(name);