$(document).ready(function () {

    $(".nav_about").click(function(){
       $(".nav_edu").removeClass("nav_selected");
        $(".nav_aw").removeClass("nav_selected");
       $(".nav_exp").removeClass("nav_selected");
       $(".nav_skills").removeClass("nav_selected");
       $(".nav_con").removeClass("nav_selected");
        $(".nav_about").addClass("nav_selected");
    });

    $(".nav_edu").click(function(){
        $(".nav_aw").removeClass("nav_selected");
       $(".nav_about").removeClass("nav_selected");
       $(".nav_exp").removeClass("nav_selected");
       $(".nav_skills").removeClass("nav_selected");
       $(".nav_con").removeClass("nav_selected");
        $(".nav_edu").addClass("nav_selected");
    });

    $(".nav_exp").click(function(){
        $(".nav_aw").removeClass("nav_selected");
       $(".nav_edu").removeClass("nav_selected");
       $(".nav_about").removeClass("nav_selected");
       $(".nav_skills").removeClass("nav_selected");
       $(".nav_con").removeClass("nav_selected");
        $(".nav_exp").addClass("nav_selected");
    });

    $(".nav_skills").click(function(){
        $(".nav_aw").removeClass("nav_selected");
       $(".nav_edu").removeClass("nav_selected");
       $(".nav_exp").removeClass("nav_selected");
       $(".nav_about").removeClass("nav_selected");
       $(".nav_con").removeClass("nav_selected");
        $(".nav_skills").addClass("nav_selected");
    });

    $(".nav_con").click(function(){
        $(".nav_aw").removeClass("nav_selected");
       $(".nav_edu").removeClass("nav_selected");
       $(".nav_exp").removeClass("nav_selected");
       $(".nav_skills").removeClass("nav_selected");
       $(".nav_about").removeClass("nav_selected");
        $(".nav_con").addClass("nav_selected");
    });

    $(".nav_aw").click(function(){
       $(".nav_con").removeClass("nav_selected");
       $(".nav_edu").removeClass("nav_selected");
       $(".nav_exp").removeClass("nav_selected");
       $(".nav_skills").removeClass("nav_selected");
       $(".nav_about").removeClass("nav_selected");
       $(".nav_aw").addClass("nav_selected");
    });

    $(document).on("scroll", function () {
      var h = (window.innerHeight*0.4);
      var slide1 = $("#slide1").offset().top;
      var slide2 = $("#slide2").offset().top - h;
      var slide3 = $("#slide3").offset().top - h;
      var slide4 = $("#slide4").offset().top - h;
      var slide5 = $("#slide5").offset().top - h;
      var slide6 = $("#slide6").offset().top - h;
      if($(document).scrollTop() >= slide1 && $(document).scrollTop() < slide2){

        $(".nav_edu").removeClass("nav_selected");
        $(".nav_aw").removeClass("nav_selected");
        $(".nav_exp").removeClass("nav_selected");
        $(".nav_skills").removeClass("nav_selected");
        $(".nav_con").removeClass("nav_selected");
        $(".nav_about").addClass("nav_selected");
        $(".social_side").addClass("social_appear");
        $(".social_side_footer").addClass("social_left");
        $(".social_side").removeClass("social_left");
        $(".social_side_footer").removeClass("social_appear");

      }else if($(document).scrollTop() >= slide2 && $(document).scrollTop() < slide3){

        $(".nav_aw").removeClass("nav_selected");
        $(".nav_about").removeClass("nav_selected");
        $(".nav_exp").removeClass("nav_selected");
        $(".nav_skills").removeClass("nav_selected");
        $(".nav_con").removeClass("nav_selected");
        $(".nav_edu").addClass("nav_selected");
        $(".social_side").addClass("social_appear");
        $(".social_side_footer").addClass("social_left");
        $(".social_side").removeClass("social_left");
        $(".social_side_footer").removeClass("social_appear");

      }else if($(document).scrollTop() >= slide3 && $(document).scrollTop() < slide4){

        $(".nav_aw").removeClass("nav_selected");
       $(".nav_edu").removeClass("nav_selected");
       $(".nav_about").removeClass("nav_selected");
       $(".nav_skills").removeClass("nav_selected");
       $(".nav_con").removeClass("nav_selected");
        $(".nav_exp").addClass("nav_selected");
        $(".social_side").addClass("social_appear");
        $(".social_side_footer").addClass("social_left");
        $(".social_side").removeClass("social_left");
        $(".social_side_footer").removeClass("social_appear");

      } else if($(document).scrollTop() >= slide4 && $(document).scrollTop() < slide5){

        $(".nav_aw").removeClass("nav_selected");
       $(".nav_edu").removeClass("nav_selected");
       $(".nav_exp").removeClass("nav_selected");
       $(".nav_about").removeClass("nav_selected");
       $(".nav_con").removeClass("nav_selected");
        $(".nav_skills").addClass("nav_selected");
        $(".social_side").addClass("social_appear");
        $(".social_side_footer").addClass("social_left");
        $(".social_side").removeClass("social_left");
        $(".social_side_footer").removeClass("social_appear");

      } else if($(document).scrollTop() >= slide5 && $(document).scrollTop() < slide6){

        $(".nav_con").removeClass("nav_selected");
       $(".nav_edu").removeClass("nav_selected");
       $(".nav_exp").removeClass("nav_selected");
       $(".nav_skills").removeClass("nav_selected");
       $(".nav_about").removeClass("nav_selected");
        $(".nav_aw").addClass("nav_selected");
        $(".social_side").addClass("social_appear");
        $(".social_side_footer").addClass("social_left");
        $(".social_side").removeClass("social_left");
        $(".social_side_footer").removeClass("social_appear");

      } else if($(document).scrollTop() >= slide6) {

        $(".nav_aw").removeClass("nav_selected");
        $(".nav_edu").removeClass("nav_selected");
        $(".nav_exp").removeClass("nav_selected");
        $(".nav_skills").removeClass("nav_selected");
        $(".nav_about").removeClass("nav_selected");
        $(".nav_con").addClass("nav_selected");
        $(".social_side").addClass("social_left");
        $(".social_side").removeClass("social_appear");
        $(".social_side_footer").removeClass("social_left");
        $(".social_side_footer").addClass("social_appear");

      }
    });

    $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 150
        }, 600, "linear");
    }
});
});
