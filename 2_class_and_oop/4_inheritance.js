class IdolModel{
    name;
    year;
    static groupName = 'ive';

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

}
class FemaleIdolModel extends IdolModel {
    dance(){
        return `she dances`
    }
}
class MaleIdolModel extends IdolModel {
    sing(){
        return `he dances`
    }
}

const yuJin = new FemaleIdolModel('kim',2003);
console.log(yuJin)

console.log(yuJin.dance());