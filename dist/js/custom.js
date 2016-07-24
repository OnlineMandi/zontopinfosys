/*
 grunt-getting-started 2016-02-25 
*/

$(document).ready(function(){

   //
   //$('.bxslider').bxSlider({
   //    auto:true,
   //});

    var src = $(".slide-box").find("img").attr("src");
    src = "url('"+ src +"')";
    $(".slide-box").css("background-image",src);

    $(".serv-head a").click(function(){
        $(".serv-head a").removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".serv-body>div").hide();
        $(".serv-body>div").eq(index).fadeIn();
    });
});


