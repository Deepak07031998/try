/* let a=[3,7,12,15]
let sqr=(a)=> Math.pow(a,2)
 let sum=(a,i)=>a+i
 let rms=Math.sqrt(a.map(sqr).reduce(sum)/a.length)
 console.log(rms)*/


 let todo=[
     {task: 'Task X', done:false,priority:4},
     {task: 'Task K', done:true,priority:3},
     {task: 'Task L ', done:false,priority:2},
     {task: 'Task P2', done:false,priority:1},
     {task: 'Task K4', done:false,priority:1},
     {task: 'Task A', done:true,priority:2}

 ]
 let arr_filter=todo
     .filter( (ele) => !ele.done)
     .sort((a,b)=>a.priority<b.priority)
     .map(i=>i.task.substring(5))
     .reduce(((acc,ele)=> acc+" >"+ele));
console.log(arr_filter)