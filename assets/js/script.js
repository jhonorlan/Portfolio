$(document).ready(function() {
	// Owl Carousel
	  let device =  $("#device-body").owlCarousel({
		      slideSpeed : 300,
		      paginationSpeed : 400,
		      items : 1,
		      itemsDesktop : false,
		      itemsDesktopSmall : false,
		      itemsTablet: false,
		      itemsMobile : false,
		      startPosition: 1,
		   	 	dots:false,
  		});
	 // On Swipe
	 device.on('changed.owl.carousel', function(event) {
   		let index = event.item.index;
   		$("#footer .item:eq("+index+")").addClass('active');
   		$("#footer .item").not($("#footer .item:eq("+index+")")).removeClass('active');

   		$("#device-body .item").scrollTop(0);
   		$(".scroller input").val($("#device-body .item").scrollTop());
	});

	 // Go to Profile Tab
    $(document).on("click",".my-profile",function(){
    	$("#device-body").trigger('to.owl.carousel', [0, 300, true]);

    	$(this).addClass("active");
    	$("#footer .item").not($(this)).removeClass('active');
    });

    // Go to Home Tab
    $(document).on("click",".my-home",function(){
    	$("#device-body").trigger('to.owl.carousel', [1, 300, true]);

    	$(this).addClass("active");
    	$("#footer .item").not($(this)).removeClass('active');
    });

    // Go to Skills Tab
    $(document).on("click",".my-skill",function(){
    	$("#device-body").trigger('to.owl.carousel', [2, 300, true]);

    	$(this).addClass("active");
    	$("#footer .item").not($(this)).removeClass('active');
    });

    // Go to Contacts Tab
     $(document).on("click",".contact-me",function(){
     	$("#device-body").trigger('to.owl.carousel', [3, 300, true]);

    	$(this).addClass("active");
    	$("#footer .item").not($(this)).removeClass('active');
    });

     // Skills Container label
     $(".s-container .skill-con").each(function(){
     	let width = $(this).find("div").attr("value");
  		$(this).find("div").find("label").html(width + "%");
     	$(this).find("div").css({
     		width:width + "%"
     	});
     	if(width == 100){
     		$(this).find("div").css("border-radius","25px");
     	}
     });


     // Get the Max of Scroll in Tab
	 let maxscroll = document.querySelector("#device-body .item").scrollHeight;
	 $(".scroller input").attr("max",maxscroll);

		// Scroller 
     $(document).on("input",".scroller input",function(){
     	let scroll = $(this).val();
     	$("#device-body .item").scrollTop(scroll);
     });

     // Set a random Background color for each div onh Profile tab
     $(".information-container div").each(function(){
     	let bgcolor = getRandomColor();
     	$(this).css("background",bgcolor);
     });
     	// Slider Next Button
	 $(document).on("click",".description-container .next",function(){
		 	$(this).parent().find("div").animate({
				scrollLeft: "+=230%"
			});
	 });

		// Slider Previus Button
	$(document).on("click",".description-container .prev",function(){
		 $(this).parent().find("div").animate({
			 scrollLeft: "-=230%"
		 });
	});

	 // Set the Color of each item 
	$(".all-content .item-content").each(function(){
		let color =  $(this).data("color");
		color = "#" + color;
		$(this).find("div").css("background",color);
	});

	// Color Listner on click
	$(document).on("click",".all-content .item-content",function(){
		let color = $(this).data("color");
			color = "#" + color;
		changeColorTheme(color);
		$(".top-container").slideUp();

		$(this).addClass("active");
		$(".item-content").not($(this)).removeClass("active");

	});

	// Show the Top bar
	$(document).on("click",".device-header",function(){
			$(".top-container").slideDown();
	});

		// Get a Random Color
    function getRandomColor() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color;
	}

	// Change Color Theme
	function changeColorTheme(color){
		$(".device").css("background",color);
		$("#footer").css("background",color);
	}

});