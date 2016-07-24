/*
 grunt-getting-started 2016-02-25 
*/

$(document).ready(function(){


   $('.clients-slide').bxSlider({
       auto:true
   });

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

    $(window).scroll(function(){
        if ($(this).scrollTop() >10) {
            $("header").addClass("wt-bg");
        } else {
            $("header").removeClass("wt-bg");
        }
    });





    //Click event to scroll to top
    $('.nav-bar ul li a').click(function(){
        var datalink = $(this).attr("data-link");
        datalink = "[data-target='"+datalink+"']";
        var toppos = $(datalink).offset().top;
        toppos-=55;
        $('html, body').stop(true,false).animate({scrollTop : toppos},800);
        return false;
    });


});


