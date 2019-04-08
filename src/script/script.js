$(function () {

  $('.burger-icon').on('click', function(){
   //$('.sidebar-menu').css('display','block');
   //$('.sidebar-menu').slideToggle(10000);
   //$('.sidebar-menu').css('visibility','visible');
   $('.sidebar-menu').fadeIn(1000);
 });
 
   $('.close-btn').on('click', function () {
     //$('.sidebar-menu').css("display", "none");
     //$('.sidebar-menu').css('visibility','hidden');
     $('.sidebar-menu').fadeOut(1000);
   });
   
   $('.owl-carousel').owlCarousel({
    loop:true,
    margin: 250,
    //nav: true,
    center: true,
    pagination : true,
    stagePadding: 3,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        1500:{
            items:2
        },
        3000:{
            items:3
        }
      }
   });
});
 


 


