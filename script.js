
var $pic1 = $("#pic1-1");
var $pic2 = $("#pic1-2");
var $pic3 = $("#pic1-3");
var $pic4 = $("#pic1-4");
var $pic5 = $("#pic1-5");
var $pic6 = $("#pic1-6");
var $pic7 = $("#pic1-7");
var $pic8 = $("#pic1-8");
var $pic9 = $("#pic1-9");
var $pic10 = $("#pic1-10");



    $pic1.waypoint(function (direction) {


        if (direction == "down") {

            document.querySelector("#header").style.visibility = "hidden";  
            document.querySelector("#odometer").style.visibility = "hidden";
            $("#intro1").addClass("intro1-1");
 

        }

        if (direction == "up") {

            document.querySelector("#header").style.visibility = "visible";
            document.querySelector("#odometer").style.visibility = "visible";
    
        }



    }, { offset: "90%" });


    $pic2.waypoint(function (direction) {


        if (direction == "down") {
            
            
            $("#intro1").removeClass("intro1-1");
            $("#intro1").addClass("intro1-2");

            


        }

        else if (direction == "up") {

            $("#intro1").removeClass("intro1-2");
            $("#intro1").addClass("intro1-1");
            

        }

    }, { offset: "90%" });



    $pic3.waypoint(function (direction) {


        if (direction == "down") {
            
            $("#intro1").removeClass("intro1-2");


            $("#intro1").addClass("intro1-3");

        }

        else if (direction == "up") {

            $("#intro1").removeClass("intro1-3");
            $("#intro1").addClass("intro1-2");
            

        }

    }, { offset: "90%" });

    
    $pic4.waypoint(function (direction) {


        if (direction == "down") {

            $("#intro1").removeClass("intro1-3");
            $("#intro1").addClass("intro1-4");

        }

        else if (direction == "up") {

            $("#intro1").removeClass("intro1-4");
            $("#intro1").addClass("intro1-3");
            

        }
    }, { offset: "90%" });


    $pic5.waypoint(function (direction) {


        if (direction == "down") {

            $("#intro1").removeClass("intro1-4");
            $("#intro1").addClass("intro1-5");

        }

        else if (direction == "up") {
            $("#intro1").removeClass("intro1-5");
            $("#intro1").addClass("intro1-4"); 

        }
    }, { offset: "90%" });



    $pic6.waypoint(function (direction) {


        if (direction == "down") {

            $("#intro1").removeClass("intro1-5");
            $("#intro1").addClass("intro1-6");
            d3.select("#intro1")
                .append("div")
                .attr("class", "photo-credit")
                .html("<p>photo: <a href='https://lb.wikipedia.org/wiki/Benotzer:Jwh'>Jwh</a> at <a href='https://lb.wikipedia.org/wiki/Haapts%C3%A4it'>Wikipedia Luxembourg</a></p>");

        }

        else if (direction == "up") {
            $("#intro1").removeClass("intro1-6");
            $("#intro1").addClass("intro1-5");
            d3.selectAll(".photo-credit").remove();
        }

    }, { offset: "90%" });


$pic7.waypoint(function (direction) {


    if (direction == "down") {

        $("#intro1").removeClass("intro1-6");
        $("#intro1").addClass("intro1-7");
        d3.selectAll(".photo-credit").remove();

    }

    else if (direction == "up") {
        $("#intro1").removeClass("intro1-7");
        $("#intro1").addClass("intro1-6");
        
        d3.select("#intro1")
                .append("div")
                .attr("class", "photo-credit")
                .html("<p>photo: <a href='https://lb.wikipedia.org/wiki/Benotzer:Jwh'>Jwh</a> at <a href='https://lb.wikipedia.org/wiki/Haapts%C3%A4it'>Wikipedia Luxembourg</a></p>");

    }

}, { offset: "90%" });

 
    var height;
    var width;
    var margin;
    var svg;



    $pic8.waypoint(function (direction) {


        if (direction == "down") {

            $("#intro1").removeClass("intro1-7");

            d3.select("#intro1")
                .append("div")
                .attr("id", "totalNeedle")
                .html("<p><span id='needle-number'>17,081</span> discarded needles were reported from 2015 to 2019.</p>");

    

            height = document.querySelector("#intro1").clientHeight - 150;
            width = document.querySelector("#intro1").clientWidth - 300;
            margin = { top: 50, left: 150, bottom: 100, right: 150 };
            
            if (window.matchMedia('screen and (max-width: 414px)').matches) {

                width = document.querySelector("#intro1").clientWidth;
                height = document.querySelector("#intro1").clientHeight - 100;
                margin = { top: 100, left: 50, bottom: 150, right: 30 };
            }
            
            svg = d3.select("#intro1")
                .append("svg")
                .attr("height", height)
                .attr("width", width);

            var data = [
                { year: "2015", number: 622 },
                { year: "2016", number: 1990 },
                { year: "2017", number: 3552 },
                { year: "2018", number: 4648 },
                { year: "2019", number: 6269 }
            ]


            var xScale = d3.scaleBand()
                .domain(["2015", "2016", "2017", "2018", "2019"])
                .range([margin.left, width - margin.right])
                .padding(0.5);

            var yScale = d3.scaleLinear()
                .domain([0, 6300])
                .range([height - margin.bottom, margin.top]);

            var xAxis = d3.axisBottom()
                .scale(xScale);


            var yAxis = d3.axisLeft()
                .scale(yScale)
                .ticks(6);

            
            var yAxisLabel = svg.append("text")
                .attr("class", "axisLabel")
                .attr("transform", "rotate(-90)")
                .attr("x", - (height / 2) - 70)
                .attr("y", margin.left - 60)
                .text("Number of 311 needle pickup requests");

            var rect = svg.append("g")
                .attr("transform", `translate(0,0)`)
                .selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", function (d) { return xScale(d.year) })
                .attr("width", xScale.bandwidth())
                .attr("height", function (d) { return height - yScale(0) - margin.bottom  })
                .attr("y", function (d) { return yScale(0) })
                .attr("fill", "#bb2828");


                svg.selectAll("rect")
                .transition()
                .duration(800)
                .attr("height", function (d) { return height - yScale(d.number) - margin.bottom })
                .attr("y", function (d) { return yScale(d.number) })
                .delay(function(d,i) {return i*100});

            var xAxis = d3.axisBottom()
                .scale(xScale);


            var yAxis = d3.axisLeft()
                .scale(yScale)
                .ticks(6);

            svg.append("g")
                .attr("transform", `translate(0, ${height - margin.bottom})`)
                .call(xAxis);


            svg.append("g")
                .attr("transform", `translate(${margin.left}, 0)`)
                .call(yAxis);

            svg.append("g")
                .append("text")
                .attr("transform", `translate(${margin.left}, ${height - margin.bottom + 40})`)
                .attr("class", "data-source")
                .text("Source: 311 Service Requests / City of Boston")


            svg.append("g")
                .append("text")
                .attr("transform", `translate(${margin.left}, ${height - margin.bottom + 60})`)
                .attr("class", "chart-description")
                .text("*Between May 2015 and October 2019")





        }
        else if (direction == "up") {


            $("#intro1").addClass("intro1-7");

            
            d3.selectAll("svg").remove();
            d3.select("#totalNeedle").remove();

        }

    }, { offset: "90%" });

  

    $pic9.waypoint(function (direction) {


        if (direction == "down") {

            $("#intro1").addClass("intro1-9");

            d3.selectAll("svg").remove();
            d3.select("#totalNeedle").remove();

            

        }
        else if (direction == "up") {

            $("#intro1").removeClass("intro1-9");

            d3.select("#intro1")
                .append("div")
                .attr("id", "totalNeedle")
                .html("<p><span id='needle-number'>17081</span> discarded needles were reported from 2015 to 2019.</p>");

            $("#needle-number").addClass("odometer");

            
            height = document.querySelector("#intro1").clientHeight - 150;
            width = document.querySelector("#intro1").clientWidth - 300;
            margin = { top: 50, left: 150, bottom: 100, right: 150 };
            
            
            if (window.matchMedia('screen and (max-width: 414px)').matches) {

                width = document.querySelector("#intro1").clientWidth;
                height = document.querySelector("#intro1").clientHeight - 100;
                margin = { top: 100, left: 50, bottom: 150, right: 30 };
            }
            svg = d3.select("#intro1")
                .append("svg")
                .attr("height", height)
                .attr("width", width);

            var data = [
                { year: "2015", number: 622 },
                { year: "2016", number: 1990 },
                { year: "2017", number: 3552 },
                { year: "2018", number: 4648 },
                { year: "2019", number: 6269 }
            ]


            var xScale = d3.scaleBand()
                .domain(["2015", "2016", "2017", "2018", "2019"])
                .range([margin.left, width - margin.right])
                .padding(0.5);

            var yScale = d3.scaleLinear()
                .domain([0, 6300])
                .range([height - margin.bottom, margin.top]);

            var yAxisLabel = svg.append("text")
                .attr("class", "axisLabel")
                .attr("transform", "rotate(-90)")
                .attr("x", - (height / 2) -50)
                .attr("y", margin.left - 50)
                .text("Number of 311 needle pickup requests");

            var rect = svg.append("g")
                .attr("transform", `translate(0,0)`)
                .selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", function (d) { return xScale(d.year) })
                .attr("width", xScale.bandwidth())
                .attr("height", function (d) { return height - yScale(0) - margin.bottom })
                .attr("y", function (d) { return yScale(0) })
                .attr("fill", "#bb2828");


            svg.selectAll("rect")
                .transition()
                .duration(800)
                .attr("height", function (d) { return height - yScale(d.number) - margin.bottom })
                .attr("y", function (d) { return yScale(d.number) })
                .delay(function (d,i) { return i * 100 });

            var xAxis = d3.axisBottom()
                .scale(xScale);


            var yAxis = d3.axisLeft()
                .scale(yScale)
                .ticks(6);

            svg.append("g")
                .attr("transform", `translate(0, ${height - margin.bottom})`)
                .call(xAxis);


            svg.append("g")
                .attr("transform", `translate(${margin.left}, 0)`)
                .call(yAxis);
            
            svg.append("g")
                .append("text")
                .attr("transform", `translate(${margin.left}, ${height - margin.bottom + 40})`)
                .attr("class", "data-source")
                .text("Source: 311 Service Requests / City of Boston")


            svg.append("g")
                .append("text")
                .attr("transform", `translate(${margin.left}, ${height - margin.bottom + 60})`)
                .attr("class", "chart-description")
                .text("*Between May 2015 and October 2019")

        }

    }, { offset: "90%" });

$pic10.waypoint(function (direction) {


    if (direction == "down") {

        $("#intro1").removeClass("intro1-9");
        $("#intro1").addClass("intro1-10");

    }

    else if (direction == "up") {
        $("#intro1").removeClass("intro1-10");
        $("#intro1").addClass("intro1-9");


    }
}, { offset: "90%" });



    //South end part
    var $pic2_1 = $("#pic2-1");
    var $pic2_2 = $("#pic2-2");


    $pic2_1.waypoint(function (direction) {

        if (direction == "down") {

            $("#intro2").addClass("intro2-1");

        }

    }, { offset: "90%" });


$pic2_2.waypoint(function (direction) {


        if (direction == "down") {

            $("#intro2").removeClass("intro2-1");
            $("#intro2").addClass("intro2-2");
            d3.select("#intro2")
                .append("div")
                .attr("class", "photo-credit")
                .html("<p>photo: <a href='https://commons.wikimedia.org/wiki/File:Ventura_Street_Playground_Neponset_River_Reservation_Dorchester_Massachusetts.jpg'>Swampyank on Wikimedia Commons</a></p>");


        }

        else if (direction == "up") {
            $("#intro2").removeClass("intro2-2");
            $("#intro2").addClass("intro2-1");

            d3.selectAll(".photo-credit").remove()
            

        }
    }, { offset: "90%" });




//long island

var $pic3_1 = $("#pic3-1");
var $pic3_2 = $("#pic3-2");
var $pic3_3 = $("#pic3-3");
var $pic3_5 = $("#pic3-5");
var $pic3_6 = $("#pic3-6");


$pic3_1.waypoint(function (direction) {


    if (direction == "down") {

        $("#intro3").addClass("intro3-1").addClass("fadeIn");
        d3.select("#intro3")
            .append("div")
            .attr("class", "photo-credit")
            .html("<p>photo: <a href='https://commons.wikimedia.org/wiki/File:Northern_Tip_of_Long_Island_in_Boston_Harbor.jpg'>Melikamp on Wikimedia Commons</a></p>");



    }

    if (direction == "up"){
        d3.selectAll(".photo-credit").remove()
    }

}, { offset: "100%" });



$pic3_2.waypoint(function (direction) {


    if (direction == "down") {

        d3.selectAll(".photo-credit").remove()

        $("#intro3").removeClass("intro3-1");
        $("#intro3").addClass("intro3-2");

        d3.select("#intro3")
            .append("div")
            .attr("class", "photo-credit")
            .html("<p>photo: <a href='https://commons.wikimedia.org/wiki/File:Long_Island_Bridge_Supports_piers,_August_2017.jpg'>Eric Kilby on Wikimedia Commons</a></p>");


    }

    else if (direction == "up") {
        d3.selectAll(".photo-credit").remove();
        $("#intro3").removeClass("intro3-2");
        $("#intro3").addClass("intro3-1");
        d3.select("#intro3")
            .append("div")
            .attr("class", "photo-credit")
            .html("<p>photo: <a href='https://commons.wikimedia.org/wiki/File:Northern_Tip_of_Long_Island_in_Boston_Harbor.jpg'>Melikamp on Wikimedia Commons</a></p>");



    }

}, { offset: "90%" });



var convert = function (d) {
    return {
        number: +d.number,
        time: new Date(d.time)
    }
}

$pic3_3.waypoint(function (direction) {


    if (direction == "down") {
        
        d3.selectAll(".photo-credit").remove();

        $("#intro3").removeClass("intro3-2");
        

        d3.select("#intro3")
            .append("div")
            .attr("id", "opioid-ems")
            .html("<p>EMS Reponses to Opioid-Related Incidents in Boston</p>");


            height = document.querySelector("#intro1").clientHeight - 150;
            width = document.querySelector("#intro1").clientWidth - 300;
            margin = { top: 50, left: 150, bottom: 100, right: 150 };
       
        if (window.matchMedia('screen and (max-width: 414px)').matches) {

            width = document.querySelector("#intro1").clientWidth;
            height = document.querySelector("#intro1").clientHeight - 100;
            margin = { top: 100, left: 50, bottom: 150, right: 30 };
        }
        
        svg = d3.select("#intro3")
            .append("svg")
            .attr("height", height)
            .attr("width", width);


        var yAxisLabel = svg.append("text")
            .attr("class", "axisLabel")
            .attr("transform", "rotate(-90)")
            .attr("x", - (height / 2) + 10)
            .attr("y", margin.left - 50)
            .text("Number of incidents");

        d3.csv("data/opioid_related_ems_incidents_Boston.csv", convert).then(function (data) {

            var xScale = d3.scaleTime()
                .domain([d3.min(data, function(d){return d.time}), d3.max(data, function(d){return d.time})])
                .range([margin.left, width - margin.right]);

            var yScale = d3.scaleLinear()
                .domain([0, d3.max(data, function(d){return d.number;})])
                .range([height - margin.bottom, margin.top]);

            
            var line = d3.line()
                .x(function (d) { return xScale(d.time); })
                .y(function (d) { return yScale(d.number); })
                .curve(d3.curveCatmullRom);

            var xAxis = svg.append("g")
                .attr("class", "axis")
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom().scale(xScale).tickFormat(d3.timeFormat("%Y-%m")));
           
            var yAxis = svg.append("g")
                .attr("class", "axis")
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft().scale(yScale));

            var path = svg.append("path")
                .datum(data)
                .attr("d", function (d) { return line(d); })
                .attr("stroke", "#bb2828")
                .attr("fill", "none")
                .attr("stroke-width", 3);
            
            
             svg.append("g")
                .append("text")
                .attr("transform", `translate(${margin.left}, ${height - margin.bottom + 40})`)
                .attr("class", "data-source")
                .text("Source: Massachusetts Department of Public Health")
            
            $("#intro3").addClass("fadeIn");


        });

    }
    else if (direction == "up") {


        $("#intro3").addClass("intro3-2").addClass("fadeIn");


        d3.selectAll("svg").remove();
        d3.select("#opioid-ems").remove();
        
         d3.select("#intro3")
            .append("div")
            .attr("class", "photo-credit")
            .html("<p>photo: <a href='https://commons.wikimedia.org/wiki/File:Long_Island_Bridge_Supports_piers,_August_2017.jpg'>Eric Kilby on Wikimedia Commons</a></p>");

    }

}, { offset: "90%" });


$pic3_5.waypoint(function (direction) {


    if (direction == "down") {

        d3.selectAll("svg").remove();
        d3.select("#opioid-ems").remove();
        $("#intro3").addClass("intro3-5");

    }

    else if (direction == "up") {
        $("#intro3").removeClass("intro3-5");
        d3.select("#intro3")
            .append("div")
            .attr("id", "opioid-ems")
            .html("<p>EMS Reponses to Opioid-Related Incidents in Boston</p>");


            height = document.querySelector("#intro1").clientHeight - 150;
            width = document.querySelector("#intro1").clientWidth - 300;
            margin = { top: 50, left: 150, bottom: 100, right: 150 };
        if (window.matchMedia('screen and (max-width: 414px)').matches) {

            width = document.querySelector("#intro1").clientWidth;
            height = document.querySelector("#intro1").clientHeight - 100;
            margin = { top: 100, left: 50, bottom: 150, right: 30 };
        }
        svg = d3.select("#intro3")
            .append("svg")
            .attr("height", height)
            .attr("width", width);

        var yAxisLabel = svg.append("text")
            .attr("class", "axisLabel")
            .attr("transform", "rotate(-90)")
            .attr("x", - (height / 2) + 10)
            .attr("y", margin.left - 50)
            .text("Number of incidents");

        d3.csv("data/opioid_related_ems_incidents_Boston.csv", convert).then(function (data) {

            var xScale = d3.scaleTime()
                .domain([d3.min(data, function (d) { return d.time }), d3.max(data, function (d) { return d.time })])
                .range([margin.left, width - margin.right]);

            var yScale = d3.scaleLinear()
                .domain([0, d3.max(data, function (d) { return d.number; })])
                .range([height - margin.bottom, margin.top]);


            var line = d3.line()
                .x(function (d) { return xScale(d.time); })
                .y(function (d) { return yScale(d.number); })
                .curve(d3.curveCatmullRom);

            var xAxis = svg.append("g")
                .attr("class", "axis")
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom().scale(xScale).tickFormat(d3.timeFormat("%Y-%m")));

            var yAxis = svg.append("g")
                .attr("class", "axis")
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft().scale(yScale));

            var path = svg.append("path")
                .datum(data)
                .attr("d", function (d) { return line(d); })
                .attr("stroke", "#bb2828")
                .attr("fill", "none")
                .attr("stroke-width", 3);
            
            svg.append("g")
                .append("text")
                .attr("transform", `translate(${margin.left}, ${height - margin.bottom + 40})`)
                .attr("class", "data-source")
                .text("Source: Massachusetts Department of Public Health")
        
            }) 
        }

    

}, { offset: "90%" });

$pic3_6.waypoint(function (direction) {


    if (direction == "down") {

        $("#intro3").removeClass("intro3-5");
        $("#intro3").addClass("intro3-6");
        
    }

    else if (direction == "up") {
        $("#intro3").removeClass("intro3-6");
        $("#intro3").addClass("intro3-5");

    }

}, { offset: "90%" });


var $pic4_1 = $("#pic4-1");
var $pic4_2 = $("#pic4-2");


$pic4_1.waypoint(function (direction) {


    if (direction == "down") {


        $("#intro4").addClass("intro4-1");

    }

}, { offset: "90%" });

$pic4_2.waypoint(function (direction) {


    if (direction == "down") {

        $("#intro4").removeClass("intro4-1");
        $("#intro4").addClass("intro4-2");

    }

    else if (direction == "up") {
        $("#intro4").removeClass("intro4-2");
        $("#intro4").addClass("intro4-1");

    }

}, { offset: "90%" });



var $pic5_1 = $("#pic5-1");
var $pic5_2 = $("#pic5-2");


$pic5_1.waypoint(function (direction) {


    if (direction == "down") {


        $("#intro5").addClass("intro5-1");

    }

}, { offset: "90%" });

$pic5_2.waypoint(function (direction) {


    if (direction == "down") {

        $("#intro5").removeClass("intro5-1");
        $("#intro5").addClass("intro5-2");

    }

    else if (direction == "up") {
        $("#intro5").removeClass("intro5-2");
        $("#intro5").addClass("intro5-1");

    }

}, { offset: "90%" });

