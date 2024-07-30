/**
 * class keyword
 */

class IdolModel{
    // name ;
    // year ;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `hello ${this.name}`;
    }
}

const yuJin = new IdolModel('kim',2003);
console.log(yuJin);
const haneul = new IdolModel('kim',2002);
console.log(haneul);

console.log(yuJin.name);
console.log(yuJin.year);
console.log(yuJin.sayName());

console.log(typeof IdolModel);