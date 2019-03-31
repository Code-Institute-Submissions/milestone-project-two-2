// Global Variables
var earthMap; 
var destination;
var map; 

// Initialise map of Earth upon site loading    
function initMap() {
    var earth = new google.maps.LatLng(42.170563, -12.619099);                  
    earthMap = new google.maps.Map(
        document.getElementById('map'), {center: earth, zoom: 2,
        disableDefaultUI: true        
    });    
}     

// Create a Google Maps LatLng object based on the selected city from the Dropdown menu and pass this to the cityMap Function
function getLatLng(city) {

    switch (city) {
        case "london":
            var london = new google.maps.LatLng(51.507693, -0.127746); 
            destination = london;  
            cityMap(london);  
            break;
        case "paris":
            var paris = new google.maps.LatLng(48.857234, 2.349804);     
            destination = paris;
            cityMap(paris);
            break;
        case "ny":
            var ny = new google.maps.LatLng(40.712774, -74.006299); 
            destination = ny;
            cityMap(ny);
            break;
        case "sydney":
            var sydney = new google.maps.LatLng(-33.868560, 151.211030); 
            destination = sydney;
            cityMap(sydney);
            break;
        case "venice":
            var venice = new google.maps.LatLng(45.440106, 12.320676);
            destination = venice;
            cityMap(venice);
            break;
        case "prague":
            var prague = new google.maps.LatLng(50.075373, 14.433227); 
            destination = prague;
            cityMap(prague);
            break;
        default:
            break;
    }
        // Re-initialise map to centre over the selected desination city    
        function cityMap(city) { 

            // Reset radio buttons so that none are selected
            var ele = document.getElementsByName("optradio");
            for(var i=0;i<ele.length;i++)
            ele[i].checked = false;

            // Remove map controls from display for smaller viewport sizes
            if (window.matchMedia("(max-width: 767px)").matches) {
                map = new google.maps.Map(document.getElementById('map'), {
                center: city,
                zoom: 14,
                disableDefaultUI: true  
            });                
            }  else {
                map = new google.maps.Map(document.getElementById('map'), {
                center: city,
                zoom: 14,
                disableDefaultUI: false 
            });
        }  
    }
}