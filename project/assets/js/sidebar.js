import "jquery/dist/jquery.js"
$(".menu-icon").click(function() {
    $(".menu ul").css("left","0")
    $("#overlay").css("display","block")
    
})
$(".exit span").click(function() {
    $(".menu ul").css("left","-300px")
    $("#overlay").css("display","none")
})

$("#overlay").click(function() {
    $(".menu ul").css("left","-300px")
    $("#overlay").css("display","none")
})


$(window).resize(function() {
    if($(window).innerWidth() > 768) {
        $(".menu ul").css("left","-300px")
        $("#overlay").css("display","none")
    } 
})