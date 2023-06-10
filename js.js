var hr=document.getElementById('hh');
    var min=document.getElementById('mm');
    var sec=document.getElementById('ss');
    var ampm1=document.getElementById('ampm');
    function updateclock()
    {
        var date=new Date();
        h=date.getHours();
        m=date.getMinutes();
        s=date.getSeconds();
        
        
        ampmp="AM";
        if(h>12){
            h=h-12;
            ampm2="PM";
        }
        h=h<10?"0"+h:h;
        m=m<10?"0"+m:m;
        s=s<10?"0"+s:s;
    

        hr.innerText=h;
        min.innerText=m;
        sec.innerText=s;
        ampm1.innerText=ampm2;
        setTimeout(updateclock,1000);

    }
    updateclock();