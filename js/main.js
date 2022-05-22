$(function(){
    var noticiasBlanco = true
    $("#btnBlancoNegro").click(function(){
        if(noticiasBlanco == true){
            $("#noticias").css("background-color","#000000")
                        .css("color","#CCCCCC");
            noticiasBlanco = false;            
        }
        else{
            $("#noticias").css("background-color","#FFFFFF")
                        .css("color","#555555");
            noticiasBlanco = true;            
        }
    })
    //$ es un selector

    $("#valores .col").click(function(){
        console.log($(this).css("background-color"));
        if($(this).css("background-color")=="rgba(0, 0, 0, 0)"){
            $(this).css("background-color","#FFCC77");
        }
        else{
            $(this).css("background-color","transparent");
        }
        //this hace referencia al objeto que recibe el evento
    })

    $("#valores h2").click(function(){
        $("#valores .col").css("background-color","transparent");
    })
})