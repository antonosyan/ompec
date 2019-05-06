$(document).ready(function(){ 


let gh
$( ".s11" ).each(function() {
    $(".groupList").html($( this ).text());
});




let th = 0;

$(".theme").click(function(){ 
    $(".body").toggleClass("black-theme");
    th++;
    if (th & 1){
        $(this).html("Отключить темную тему");
    } else {
        $(this).html("Включить темную тему");
    }
});

});