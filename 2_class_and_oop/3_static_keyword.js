/**
 * static keyword
 */
class IdolModel{
    name;
    year;
    static groupName = 'ive';

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

}


console.log(IdolModel.groupName);