function person(name,age) {
    /*this.name=name;            now age and name are private , let are also private
    this.age=age;*/
    this.fullname=()=> name
    this.getfirstname=()=>this.name.split(" ")[0];
    this.getlastname=()=>this.name.split(" ")[0];
    this.setfirstname=(val)=>{
        name=name.split(" ");
        name.splice(0,1,val);
        name=name.join(" ");
    }
}
// like static in classical opps
person.prototype.college="Dtu";
person.prototype.isAdult=function()
{
    return (this.age>18);
}

let p = new person("Harry potter",18);