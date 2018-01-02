var inputval=document.getElementById("input");
var button=document.getElementById("btn");
var editlist=document.getElementById("list");
button.onclick=function(){
    var startTime=(new Date().getTime());
    var count=parseInt(inputval.value);
    for(var i=1;i<count+1;i++)
    { var output="";
        if(i%3==0)
        {
            if(i%5==0)
            {
                output="fizz-buzz";
            }
            else{output="fizz";}

        }
        else if(i%5==0)
        {
            output="buzz";
        }
        else
        {
            output=i;
        }
        editlist.innerHTML+="<li>"+output+"</li>";
    }
    var endTime=(new Date().getTime());
    console.log(endTime-startTime);
}