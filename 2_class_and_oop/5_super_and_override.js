class IdolModel{
    name;
    year;
    static groupName = 'ive';

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel{
    part;

    constructor(name, year, part){
        super(name, year);
        this.part = part;
    }
}
