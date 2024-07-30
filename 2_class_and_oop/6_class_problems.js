class Country {
    name;
    idolGroups;

    constructor(name, idolGroups){
        this.name = name;
        this.idolGroups = idolGroups;
    }
}

class IdolGroup extends Country {
    members;

    constructor(name, idolGroups, members){
        super(name, idolGroups);
        this.members = members;
    }
}
class Idol extends IdolGroup{
    year;
    constructor(name, year){
        super(name);
        this.year = year;
    }
}
class MaleIdol extends Idol{
    sing(){
        return `${this.name} singing`;
    }
}
class FemaleIdol extends Idol{
    sing(){
        return `${this.name} dancing`;
    }
}

const iveMembers = iveMembers.map(
    (x) => new FemaleIdol(x['name'], x['year']),
);
console.log(iveMembers);