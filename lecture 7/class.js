class Person {
    constructor(name,age) {
        /*this.name = name;*/
        this.firstname=name.split(" ")[0];
        this.lastname=name.split(" ")[1];
        this.age = age;
    }
    get name()
    {
        return this.firstname+" "+this.lastname
    }
    set name(val)
    {
        this.firstname=val.split(" ")[0];
        this.lastname=val.split(" ")[1];

    }
}

class student extends  Person {
    constructor(v1,v2,v3) {
        if(Person.prototype.isPrototypeOf(v1))
        {
            super(v1.name,v1.age);
            this.v3=v2;
        }
        else{
            super(v1, v2)
            this.v3=v3
        }

    }



}

let p = new Person("deepak yadav", 18);
let q = new student("D", 20,"Dtu");
let ps= new student(p,'DPS');