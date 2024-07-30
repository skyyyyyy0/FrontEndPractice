/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1. 기본적으로 모든 primitive 값은 copy by value
 * 2. 객체는 copy by reference
 */
let original = 'hello';
let clone = original;

clone += ' hello!!'
console.log(original);
console.log(clone);

