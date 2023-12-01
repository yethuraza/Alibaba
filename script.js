// nav banner hover
const all_nav = document.querySelectorAll(".action_menu");

for (var i = 0; i < all_nav.length; i++) {
  all_nav[i].addEventListener("mouseover", function () {
    var new_header = document.getElementById("new_header");
    var toggle_header = document.getElementById("toggle_header");
    new_header.classList.toggle("new_header");
    new_header.classList.toggle("text-white");
    var img = document.getElementById("logo_img");
    img.src = "./image/logocolor.png";
  });

  all_nav[i].addEventListener("mouseout",function(){
    var new_header = document.getElementById("new_header");
    var toggle_header = document.getElementById("toggle_header");
  new_header.classList.toggle("new_header");
  new_header.classList.toggle("text-white");
  var img = document.getElementById("logo_img");
  img.src = "./image/logo.avif";
  })
}


$(document).ready(function(){
  // owl carousel 
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:5,
            nav:true
        },
        600:{
            items:6,
            nav:false
        },
        1000:{
            items:8,
            nav:true,
            loop:false
        }
    }
  });

  $('#offer_item_carousal').lightSlider({
            item: 7,
            loop: true,
            slideMove: 2,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed: 600,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        item: 3,
                        slideMove: 1,
                        slideMargin: 6,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        item: 2,
                        slideMove: 1
                    }
                }
            ]
        });
        
  var business_cards = $(".nav_business_card");
    $.each(business_cards,function(i,v){

        const defaultIcon = [
            './image/business.png',
            './image/secure.png',
            './image/onestop.png',
            './image/personalize.png'
        ];

        const hoveredIcon = [
            './image/businesscolor.png',
            './image/securecolor.png',
            './image/onestopcolor.png',
            './image/personalizecolor.png'
        ]

        $(this).hover(function(){
            var iconBox = $(this).children('.card_icon').children('img');
            iconBox.attr("src",hoveredIcon[i]);
        }, function(){
            var iconBox = $(this).children('.card_icon').children('img');
            iconBox.attr("src", defaultIcon[i]);

        })
    });

});



$(window).scroll(function(){
  var scrollValue = $(window).scrollTop();

  if (scrollValue > 80 ) {
    $("#new_header").removeClass('text-white');
    $(".nav_top").addClass('scrolled');
    $('.pageLogo').attr('src','./image/logocolor.png');
    $('.nav_search').removeClass('hidden');
  } else {
    $("#new_header").addClass('text-white');
    $(".nav_top").removeClass('scrolled');
    $('.pageLogo').attr('src','./image/logo.avif');
    $('.nav_search').addClass('hidden');

  }
})


// product detail script 

