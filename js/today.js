
var width = 450,
    height = 450;


var hours = [
    'Midnite', '1am', '2am', '3am', '4am', '5am', '6am',
    '7am', '8am', '9am', '10am', '11am','12am','1pm',
    '2pm','3pm','4pm','5pm','6pm', '7pm', '8pm', '9pm', '10pm','11pm'];







var svg2 = d3.select("#today").append("svg")
    .attr("width", width)
    .attr("height", height)




//TODAY
d3.tsv("data/30-1001-KV-april-Sundays.tsv", function(error, data) {
 
coldWaterDay = averageDay(data,"Volume");

max = Math.max.apply(Math, coldWaterDay); 
min = getMin(coldWaterDay);

console.log("suncold");
console.log(min);



var chart = circularHeatChart()
.margin({top: 164.5, left: 164.5})
.innerRadius(50)
.numSegments(24)
.segmentHeight(35)
.domain([min,max])
.range(coldRange);

var dayBlue = svg2.selectAll(".coldWater")
.data([coldWaterDay])
.enter()                                               
.append('g')               
.attr('class', 'coldWater')
.call(chart);

});


//DAY
d3.tsv("data/30-1001-VV-april-Sundays.tsv", function(error, data) {
 
hotWaterDay = averageDay(data,"Volume");

max = Math.max.apply(Math, hotWaterDay); 
min = getMin(hotWaterDay);

console.log("sunhot");
console.log(min);


chart = circularHeatChart()
.margin({top: 129.5, left: 129.5})
.innerRadius(85)
.numSegments(24)
.segmentHeight(35)
.domain([min,max])
.range(hotRange);

var dayRed = svg2.selectAll(".hotWater")
.data([hotWaterDay])
.enter()                                               
.append('g')               
.attr('class', 'hotWater')
.call(chart);

});






d3.tsv("data/30-1001-EL-april-Sundays.tsv", function(error, data) {
 
electricityDay = averageDay(data,"energy");

max = Math.max.apply(Math, electricityDay); 
min = getMin(electricityDay);



console.log(min);
chart = circularHeatChart()
.margin({top: 94.5, left: 94.5})
.innerRadius(120)
.numSegments(24)
.segmentHeight(35)
.domain([min,max])
.range(electricityRange);

var dayGreen = svg2.selectAll(".electricity")
.data([electricityDay])
.enter()                                               
.append('g')               
.attr('class', 'electricity')
.call(chart);

});

d3.tsv("data/30-1001-EL-dygn-fixed.tsv", function(error, data) {
set = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
chart = circularHeatChart()
.margin({top: 89.5, left: 89.5})
.innerRadius(155)
.numSegments(24)
.segmentHeight(5)
.segmentLabels(hours)
.range(["black", "white"]);

var third = svg2.selectAll(".outer")
.data([set])
.enter()                                               
.append('g')               
.attr('class', 'outer')
.call(chart);

});






