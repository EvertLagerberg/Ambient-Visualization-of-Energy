



var width = 1000,
    height = 1000;

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];






var svg = d3.select("#year").append("svg")
    .attr("width", width)
    .attr("height", height)





d3.tsv("data/30-1001-KV-dygn-fixed.tsv", function(error, data) {
 
coldWater= cleanMonths(data,"Volume");

max = Math.max.apply(Math, coldWater); 
min = getMin(coldWater);
console.log(min);
console.log(max);

var chart = circularHeatChart()
.margin({top: 160, left: 329})
.innerRadius(100)
.numSegments(12)
.segmentHeight(70)
.domain([min,max])
.range(coldRange);

var first = svg.selectAll(".coldWaterX")
.data([coldWater])
.enter()                                               
.append('g')               
.attr('class', 'coldWaterX')
.call(chart);



});




d3.tsv("data/30-1001-VV-dygn-fixed.tsv", function(error, data) {
 
hotWater= cleanMonths(data,"Volume");

max = Math.max.apply(Math, hotWater); 
min = getMin(hotWater);
console.log(min);
console.log(max);

chart = circularHeatChart()
.margin({top: 90, left: 259})
.innerRadius(170)
.numSegments(12)
.segmentHeight(70)
.domain([min,max])
.range(hotRange);

var second = svg.selectAll(".hotWater")
.data([hotWater])
.enter()                                               
.append('g')               
.attr('class', 'hotWater')
.call(chart);

});



d3.tsv("data/30-1001-EL-dygn-fixed.tsv", function(error, data) {
 
electricity = cleanMonths(data,"energy");

max = Math.max.apply(Math, electricity); 
min = getMin(electricity);
console.log(min);
console.log(max);

chart = circularHeatChart()
.margin({top: 20, left: 189})
.innerRadius(240)
.numSegments(12)
.segmentHeight(70)
.domain([min,max])
.range(electricityRange);

var third = svg.selectAll(".electricity")
.data([electricity])
.enter()                                               
.append('g')               
.attr('class', 'electricity')
.call(chart);

});


d3.tsv("data/30-1001-EL-dygn-fixed.tsv", function(error, data) {
set = [1,1,1,1,1,1,1,1,1,1,1,1];
chart = circularHeatChart()
.margin({top: 10, left: 179})
.innerRadius(310)
.numSegments(12)
.segmentHeight(10)
.segmentLabels(months)
.range(["black", "black"]);

var third = svg.selectAll(".outer")
.data([set])
.enter()                                               
.append('g')               
.attr('class', 'outer')
.call(chart);

});