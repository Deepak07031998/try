(function createGreeter(greeting) {
    return function (name) {
        console.log(greeting+" "+name);

    }
})("hello")("K")

/*
let helloGreeter=createGreeter("hello")
helloGreeter('shubham')
let hellGreeter=createGreeter("hello")
hellGreeter('shubham')
createGreeter("hi")("D")*/