var map;
$(function() {
		
	    var hasLocation = false;
		var center = new google.maps.LatLng(0.0,0.0);
		var postLatitude =  '';
		var postLongitude =  '';

		if((postLatitude != '') && (postLongitude != '') ) {
			center = new google.maps.LatLng(postLatitude, postLongitude);
			hasLocation = true;
			$("#geolocation-latitude").val(center.lat());
			$("#geolocation-longitude").val(center.lng());
			reverseGeocode(center);
		}
			
	 	var myOptions = {
	      'zoom': 1,
	      'center': center,
	      'mapTypeId': google.maps.MapTypeId.ROADMAP
	    };
	    
		if($('#geolocation-map').length > 0 && $('#geolocation-map div').length == 0) {
	    	map = new google.maps.Map(document.getElementById('geolocation-map'), myOptions);	
	    	if(!hasLocation) {
	    		map.setZoom(1);
	    	}
	    	google.maps.event.addListener(map, 'click', function(event) {
				reverseGeocode(event.latLng);
			});


			$("#geolocation-load").click(function(){
				if($("#geolocation-address").val() != '') {
					customAddress = true;
					currentAddress = $("#geolocation-address").val();
					geocode(currentAddress);
					return false;
				} else {
					marker.setMap(null);
					marker = '';
					$("#geolocation-latitude").val('');
					$("#geolocation-longitude").val('');
					return false;
				}
				return false;
			});
			
			$("#geolocation-address").keyup(function(e) {
				if(e.keyCode == 13)
					$("#geolocation-load").click();
			});


		}
		var marker = '';
		

		

		
		var currentAddress;
		var customAddress = false;
						
		function placeMarker(location) {
			if (marker=='') {
				marker = new google.maps.Marker({
					position: center, 
					map: map, 
					title:'Job Location'
				});
			}
			marker.setPosition(location);
			map.setCenter(location);
			if((location.lat() != '') && (location.lng() != '')) {
				$("#geolocation-latitude").val(location.lat());
				$("#geolocation-longitude").val(location.lng());
			}
		}
		
		function geocode(address) {
			var geocoder = new google.maps.Geocoder();
		    if (geocoder) {
				geocoder.geocode({"address": address}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						placeMarker(results[0].geometry.location);
						reverseGeocode(results[0].geometry.location);
						if(!hasLocation) {
					    	map.setZoom(9);
					    	hasLocation = true;
						}
					}
				});
			}
		}
		
		function reverseGeocode(location) {
			var geocoder = new google.maps.Geocoder();
		    if (geocoder) {
				geocoder.geocode({"latLng": location}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {

					var address, city, country, state;
					
					for ( var i in results ) {
					    
					    var address_components = results[i]['address_components'];
					    
					    for ( var j in address_components ) {
					    
					    	var types = address_components[j]['types'];
					    	var long_name = address_components[j]['long_name'];
					    	var short_name = address_components[j]['short_name']; 
					    	
					    	if ( $.inArray('locality', types)>=0 && $.inArray('political', types)>=0 ) {
					    		city = long_name;
					    	}
					    	else if ( $.inArray('administrative_area_level_1', types)>=0 && $.inArray('political', types)>=0 ) {
					    		state = long_name;
					    	}
					    	else if ( $.inArray('country', types)>=0 && $.inArray('political', types)>=0 ) {
					    		country = long_name;
					    	}
					    	
					    }
					    
					}

					if((city) && (state) && (country))
						address = city + ', ' + state + ', ' + country;
					else if((city) && (state))
						address = city + ', ' + state;
					else if((state) && (country))
						address = state + ', ' + country;
					else if(country)
						address = country;
					
					$("#geolocation-address").val(address);
					placeMarker(location);
					
					return true;
				} 
				
				});
			}
			return false;
		}
});

$(function () {
    
	var d1 = [[0, 3], [1, 3], [2, 5], [3, 7], [4, 8], [5, 10], [6, 11]];
	 
	$(document).ready(function () {

		if($("#visualization").length > 0){
		    /*$.plot($("#visualization"), [
		        {
		            data: d1,
        			xaxis: {ticks: [[0,'One'], [1,'One'], [2,'Two'], [3,'Three'], [4,'Four'], [5,'Five'], [6,'Five']]},
		            bars: {
		                show: true
		            }
		        }
		    ]);*/

	        var css_id = "#visualization";
		    var data = [
		        {label: 'Linux System Administrator', data: [[1,300], [2,300], [3,300], [4,700], [5,300], [6,300], [7,300]]},
		        {label: 'Project manager', data: [[1,800], [2,600], [3,400], [4,200], [5,500], [6,0], [7,400]]},
		        {label: 'UI Developer', data: [[1,100], [2,200], [3,300], [4,400], [5,300], [6,400], [7,300]]}
		    ];
		    var options = {
		        series: {stack: 0,
		                 lines: {show: false, steps: false },
		                 bars: {show: true, barWidth: 0.9, align: 'center'}
						},
		        xaxis: {ticks: [[1,'Sunday'], [2,'Monday'], [3,'Tuesday'], [4,'Wednesday'], [5,'Thursday'], [6,'Friday'], [7,'Saturday']]}
		    };

		    $.plot($(css_id), data, options);
		}

	});

		$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});

	$(".sidebar").height($(".sidebar_content").height()+100);


});

$(function () {
	$("#clickme").click(function(event){		
		if($(this).parent().position().left == 0) {
			$(this).parent().animate({left:'-305px'}, {queue: false, duration: 500});
		} else {
 			$(this).parent().animate({left:'0px'}, {queue: false, duration: 500});
		}
	});

	setTimeout(function(){
		if($(".hero_bar").length > 0) {
			$("#clickme").parent().animate({left:'0px'}, {queue: false, duration: 500});
		}
 	},500);



});