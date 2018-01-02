let id ;
((x)=> setTimeout( ()=>clearInterval(x),1000))(setInterval( ()=>console.log('a'),10))
/*
let id=setTimeout(function () {clearInterval(id)},1000)
let id=setInterval(function () {console.log('a')},10)*/


