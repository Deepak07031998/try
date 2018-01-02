let obj=Object.create(Object.prototype,{
    a:{
        value:10
    },
    b:{
        value:20
    },
    c:{
        get function()
        {
            return this.a+this.b;
        },
        set:function (val) {

        }

    }
});