/*
 grunt-getting-started 2016-02-25 
*/

$(document).ready(function(){


   $('.bxslider').bxSlider({
       auto:true,
   });

  $(window).scroll(function(){
   if ($(this).scrollTop() >10) {
     $(".nav-bar").addClass("wt-bg");
   } else {
     $(".nav-bar").removeClass("wt-bg");
   }
  });
  var imgsrc = $(".image-box img").attr("src");

    imgsrc = "url('"+ imgsrc +"')";

    $(".image-box").css("background-image",imgsrc);
});


