window.onload = function () {
    let btn = document.getElementById('btn');
    let show = document.getElementById('show');
    let incr = document.getElementById('increment')
    let count = document.getElementById('count')

    btn.onclick = function () {
        let start = (new Date()).getTime()
        /*while ((new Date()).getTime() < start + 5000) ;*/
        let taskId= setTimeout(function () {
             show.innerText = 'hello';
        },2000);

    }
    incr.onclick = function () {
        count.innerText = parseInt(count.innerText) + 1
    }
}
