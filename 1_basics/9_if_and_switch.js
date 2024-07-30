/**
 * if and switch
 */

let number = 5;

if (number / 2 === 0){
    console.log('number is even');
} else {
    console.log('number is odd');
}


if (number % 2 === 0){
    console.log('mutiples of 2');
} else if(number % 3 === 0){
    console.log('multiple of 3');
} else {
    console.log('wrong')
}

const englishDay = 'monday';

let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tusday':
        koreanDay = '화요일';
        break;
    default:
        koreanDay = 'weekend'
        break;
}

console.log(koreanDay);