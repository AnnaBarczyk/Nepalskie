(function($) {

    "use strict";
    
    // REMOVE # FROM URL
	$( 'a[href="#"]' ).click( function(e) {
		e.preventDefault();
	});
	
	// DatePicker For Reservation Form On Home Page
	$("#reservation-date").datetimepicker({
		format: 'MM/DD/YYYY'
	});
	
	// TimePicker For Reservation From On Home Page
	$("#reservation-time").datetimepicker({
		format: 'LT'
	});
	
	// Gallery FILTERS
	var $grid = $('#gallery-grid');
	$grid.shuffle({
		itemSelector: '.gallery-grid-item', // the selector for the items in the grid
		speed: 500 // Transition/animation speed (milliseconds)
	});
	/* reshuffle when user clicks a filter item */
	$('#gallery-filter li a').click(function (e) {
		// set active class
		$('#gallery-filter li a').removeClass('active');
		$(this).addClass('active');
		// get group name from clicked item
		var groupName = $(this).attr('data-group');
		// reshuffle grid
		$grid.shuffle('shuffle', groupName );
	});
	
	//MAGNIFIC POPUP
	$('#gallery-grid').magnificPopup({
		delegate: 'a.zoom', 
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	
	// Event Map Height
	var setMapHeight = $(".event-box-img").height();
	$(".map-box").height(setMapHeight);

	
	// GOOGLE MAP
	$(".map-contact").height(400);
	function initialize($) {
		var mapOptions = {	
			zoom: 8,
			center: new google.maps.LatLng(17.421306, 78.457553),
			disableDefaultUI: true
		};
		var map = new google.maps.Map(document.querySelector('.map'), mapOptions);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	
})(window.jQuery);