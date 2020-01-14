
var $content1 = $("#map-change0");
var $content2 = $("#map-change2");
var $content4 = $("#map-change4");
var $content5 = $("#map-change5");



mapboxgl.accessToken = 'pk.eyJ1Ijoic2FicmluYW1vY2hpIiwiYSI6ImNrMWliZWZobjBqY2czbm55cTNnZzRmdnEifQ.9Y_piz41JyLzILBhMHKyOw';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [-71.089730, 42.324065],
            zoom: 11,
            interactive: false
        });

        map.on('load', function () {

            map.setLayoutProperty('settlement-subdivision-label', 'text-field', ['format',
                ['get', 'name_en'], { 'font-scale': 1.2 },
                '\n', {},
                ['get', 'name'], {
                    'font-scale': 0.8,
                    'text-font': ['literal', ['DIN Offc Pro Italic', 'Arial Unicode MS Regular']]
                }
            ]);


            map.addSource('needles', {
                type: 'geojson',
                data: 'boston_needle.geojson'
            });
            // add heatmap layer here
            map.addLayer({
                id: 'needles-heat',
                type: 'heatmap',
                source: 'needles',
                maxzoom: 20,
                paint: {

                    // increase intensity as zoom level increases
                    'heatmap-intensity': {
                        stops: [
                            [11, 3],
                            [14, 6]
                        ]
                    },
                    // assign color values be applied to points depending on their density
                    'heatmap-color': [
                        'interpolate',
                        ['linear'],
                        ['heatmap-density'],
                        0, 'rgba(236,222,239,0)',
                        0.8, '#bb2828'
                    ],
                    // increase radius as zoom increases
                    'heatmap-radius': {
                        stops: [
                            [11, 1],
                            [17, 3]
                        ]
                    },
                    // decrease opacity to transition into the circle layer
                    'heatmap-opacity': {
                        default: 1,
                        stops: [
                            [15, 1],
                            [18, 0.5]
                        ]
                    },
                },
                'filter': ['==', ['number', ['get', 'year']], 2015]
            }, 'waterway-label');
            


            map.on('click', 'needle-point', function (e) {
                new mapboxgl.Popup()
                    .setLngLat(e.features[0].geometry.coordinates)
                    .setHTML('<b>Location:</b> ' + e.features[0].properties.location)
                    .addTo(map);
            });
        });


    
    var yearTag = d3.select("#year-tag");
    
    $content1.waypoint(function (direction) {

      if (direction == "down") { 
              
         document.querySelector("#odometer").style.visibility = "hidden";
        
         // update the map
          map.flyTo({ 
                      duration: 1000,
                      bearing:0,
                      center: [-71.075682, 42.335445],
                      zoom: 14.2 });
        

     }

        if (direction == "up") {

            // update the map
            map.flyTo({
                duration: 1000,
                center: [-71.089730, 42.324065],
                zoom: 11,
            });


        }
    }, { offset: "30%" })



$content2.waypoint(function (direction) {

      if (direction == "down") { 
              
          document.querySelector("#odometer").style.visibility = "hidden";


         // update the map
          map.setFilter('needles-heat', ['==', ['number', ['get', 'year']], 2015]);
          yearTag.html("Year 2015");

     }
    if (direction == "up") {


        yearTag.html(" ");

    }
    }, { offset: "95%" })

$content2.waypoint(function (direction) {

    if (direction == "down") {
            
        document.querySelector("#odometer").style.visibility = "hidden";

        // update the map
        map.setFilter('needles-heat', ['==', ['number', ['get', 'year']], 2016]);
        yearTag.html("Year 2016");

    }
    if (direction == "up") {
        
            
        document.querySelector("#odometer").style.visibility = "hidden";

        map.setFilter('needles-heat', ['==', ['number', ['get', 'year']], 2015]);
        yearTag.html("Year 2015");


    }
}, { offset: "75%" })

$content2.waypoint(function (direction) {

    if (direction == "down") {
            
            
        document.querySelector("#odometer").style.visibility = "hidden";

        // update the map
        map.setFilter('needles-heat', ['==', ['number', ['get', 'year']], 2017]);
        yearTag.html("Year 2017");

    }
    if (direction == "up") {
        
            
        document.querySelector("#odometer").style.visibility = "hidden";

        map.setFilter('needles-heat', ['==', ['number', ['get', 'year']], 2016]);
        yearTag.html("Year 2016");


    }
}, { offset: "60%" })

$content2.waypoint(function (direction) {

    if (direction == "down") {
            
            
        document.querySelector("#odometer").style.visibility = "hidden";

        // update the map
        map.setFilter('needles-heat', ['==', ['number', ['get', 'year']], 2018]);
        yearTag.html("Year 2018");

    }
    if (direction == "up") {
        
            
        document.querySelector("#odometer").style.visibility = "hidden";

        map.setFilter('needles-heat', ['==', ['number', ['get', 'year']], 2017]);
        yearTag.html("Year 2017");


    }
}, { offset: "45%" })

$content2.waypoint(function (direction) {

    if (direction == "down") {
            
        document.querySelector("#odometer").style.visibility = "hidden";

        // update the map
        map.setFilter('needles-heat', ['==', ['number', ['get', 'year']], 2019]);
        yearTag.html("Year 2019");
    }
    if (direction == "up") {
            
        document.querySelector("#odometer").style.visibility = "hidden";


        map.setFilter('needles-heat', ['==', ['number', ['get', 'year']], 2018]);
        yearTag.html("Year 2018");


    }
}, { offset: "30%" })

$content4.waypoint(function (direction) {

    if (direction == "down") {
            
            
         document.querySelector("#odometer").style.visibility = "hidden";

        map.flyTo({
            duration: 1000,
            center: [-71.089730, 42.324065],
            zoom: 11,
        });
        yearTag.html(" ");

    }
    if (direction == "up") {
        
         document.querySelector("#odometer").style.visibility = "hidden";   
         
        map.flyTo({
            duration: 1000,
            bearing: 0,
            center: [-71.075682, 42.335445],
            zoom: 14.2
        });

        map.setFilter('needles-heat', ['==', ['number', ['get', 'year']], 2019]);
        yearTag.html("Year 2019");


    }
}, { offset: "50%" })


$content5.waypoint(function (direction) {

    if (direction == "down") {
        
        document.querySelector("#odometer").style.visibility = "hidden";
        map.flyTo({
            duration: 1000,
            bearing: 0,
            center: [-71.093918, 42.332430],
            zoom: 17
        });
        yearTag.html(" ");

    }
}, { offset: "80%" })


