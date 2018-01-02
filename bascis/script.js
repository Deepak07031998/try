process.argv.forEach(function (num) {

        var count=+(num);
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
            console.log(output);
        }

    });