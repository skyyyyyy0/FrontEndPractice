/**
 * object
 */

let yuJin = {
    name : 'ann',
    group : 'ive',
    dance: function(){
        return `${this.name} dances`;
    }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';
console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = 'ann';

const groupKey = 'group';
const groupValue = 'ive';

const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
}
console.log(yuJin2);

yuJin2['group'] = 'code';
console.log(yuJin2);

yuJin2['englishName'] = 'An yu jin';
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);


/**
 * 객체의 특징
 * 
 * 1. const로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2. 객체 안의 프로퍼티나 메소드는 변경 할 수 있다.
 */

/**
 * 모든 키값 다 가져오기
 * 
 */
console.log(Object.keys(yuJin2));

/**
 * 모든 밸료값 다 가져오기
 */

console.log(Object.valuess(yuJin2));