$(document).ready(function () {
    var a = 0;
    

    $("#reset").click(function () {
        a = 0;
        $("body").css("background-color","blue");
          $("#zero").css("color","white");
        $("#zero").text(a);
    });

    $("#plus").click(function () {
        a++;
        if (a <=10) {
            $("#zero").text(a);
            
            if(a%2==0)
        {
            $("body").css("background-color","blue");
            $("#zero").css("color","white");
        }
       else
        {
            $("body").css("background-color","grey");
            $("#zero").css("color","red");
        }

        } else {
            a--;
//            $("#plus").attr('disabled', true);
        }
        
        


    });
    $("#minus").click(function () {
        a--;
        if (a >= 0) {
            $("#zero").text(a);
            
            if(a%2==0)
        {
            $("body").css("background-color","blue");
              $("#zero").css("color","white");
        }
       else
        {
            $("body").css("background-color","grey");
             $("#zero").css("color","red");
        }

        } 
        else {
            a++;
//            $("#minus").attr('disabled', true);
        }
        

    });
});
