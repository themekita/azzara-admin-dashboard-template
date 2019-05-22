"use strict";

// Setting Color

$(window).resize(function() {
	$(window).width(); 
});


$('.changeMainHeaderColor').on('click', function(){
	if($(this).attr('data-color') == 'default'){
		$('.main-header').removeAttr('data-background-color');
	} else {
		$('.main-header').attr('data-background-color', $(this).attr('data-color'));
	}

	$(this).parent().find('.changeMainHeaderColor').removeClass("selected");
	$(this).addClass("selected");
	layoutsColors();
});

$('.changeBackgroundColor').on('click', function(){
	$('body').removeAttr('data-background-color');
	$('body').attr('data-background-color', $(this).attr('data-color'));
	$(this).parent().find('.changeBackgroundColor').removeClass("selected");
	$(this).addClass("selected");
});

var toggle_customSidebar = false,
custom_open = 0;

if(!toggle_customSidebar) {
	var toggle = $('.custom-template .custom-toggle');

	toggle.on('click', (function(){
		if (custom_open == 1){
			$('.custom-template').removeClass('open');
			toggle.removeClass('toggled');
			custom_open = 0;
		}  else {
			$('.custom-template').addClass('open');
			toggle.addClass('toggled');
			custom_open = 1;
		}
	})
	);
	toggle_customSidebar = true;
}