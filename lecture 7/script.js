function  setA( val) {
    this.a=val;
}
let setB=(val)=>{this.b=val;}
let x={}
x.fun=setA
x.wow=setB();
x.wtf=function (a) {
    setB(a)
}
x.omg=function (b) {
    setA(b);
}