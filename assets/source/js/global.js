///jQuery = jQuery.noConflict();
var HWSCHOOL = {
    windowWidth: document.body.clientWidth,
    init: function() {
        // init code goes here
        $(window).load(function() {
            $(window).resize(function() {
                HWSCHOOL.loadResize();
            });
            HWSCHOOL.loadResize();
        });

        // HTML5 Sementic elements
        document.createElement("header");
        document.createElement("nav");
        document.createElement("main");
        document.createElement("figure");
        document.createElement("footer");

        HWSCHOOL.homeStudentSlider();
		HWSCHOOL.testimonialSlider();
        HWSCHOOL.beaconVirtualLearingSlider();
        HWSCHOOL.announcementsSlider();
    },


    /*
     Function Name : loadResize
     script to functions call on page load and window resize
     @version: 03-25-2019 updated
     */
    loadResize: function() {
        // Reset the width value on window resize
        HWSCHOOL.windowWidth = document.body.clientWidth;

        // Script for Ipad, check if width of window is greater than 768
        if (HWSCHOOL.windowWidth >= 768) {

        } else {

        }

        // Script for desktop, check if width of window is greater than 1200
        if (HWSCHOOL.windowWidth >= 1200) {

        } else {

        }
    },

    // script for check mobile, Ipad and desktop device
    windowIs: {
        mobile: function() {
            HWSCHOOL.windowWidth = document.body.clientWidth;
            return HWSCHOOL.windowWidth <= 767;
        },

        ipad: function() {
            return HWSCHOOL.windowWidth >= 768;
        },

        desktop: function() {
            return HWSCHOOL.windowWidth >= 1200;
        },
    },

	homeStudentSlider: function() {	
		$('.home-student-slider').owlCarousel({
			loop:true,
			margin:10,
			smartSpeed :900,
			nav:true,
			navText : ["<i class='fa fa-arrow-right'></i>","<i class='fa fa-arrow-left'></i>"],
			dots:false,
			autoplay: true,
			autoplayTimeout: 2000,
			autoplayHoverPause: true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:4
				}
			}
		});	
	},

	testimonialSlider: function() {	
		$('.testimonial-slider').owlCarousel({
			loop:true,
			margin:10,
			smartSpeed :900,
			nav:false,
			dots:true,
			autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
			//navText : ["<i class='fa fa-arrow-right'></i>","<i class='fa fa-arrow-left'></i>"],
			dots:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:3
				}
			}
		});	
	},

    beaconVirtualLearingSlider: function() {	
		$('.beacon-virtual-learing-slider').owlCarousel({
			loop:true,
			margin:10,
			smartSpeed :900,
			nav:true,
			navText : ["<i class='fa fa-arrow-right'></i>","<i class='fa fa-arrow-left'></i>"],
			dots:false,
			autoplay: true,
			autoplayTimeout: 2000,
			autoplayHoverPause: true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1000:{
					items:4
				}
			}
		});	
	},

};

$(document).ready(function() {
    HWSCHOOL.init();
});


$(".circle_percent").each(function() {
    var $this = $(this),
    $dataV = $this.data("percent"),
    $dataDeg = $dataV * 3.6,
    $round = $this.find(".round_per");
  $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)"); 
  $this.prop('Counter', 0).animate({Counter: $dataV},
  {
    duration: 2000, 
    easing: 'swing', 
    step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now)+"%");
        }
    });
  if($dataV >= 51){
    $round.css("transform", "rotate(" + 360 + "deg)");
    setTimeout(function(){
      $this.addClass("percent_more");
    },1000);
    setTimeout(function(){
      $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
    },1000);
  } 
});



