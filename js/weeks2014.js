
var width = 1000,
    height = 1000;


var weeks = [];

for(i=0;i<52;i++){
	weeks[i] = i+1;

}






var svg3 = d3.select("#week").append("svg")
    .attr("width", width)
    .attr("height", height) 






d3.tsv("data/30-1001-KV-dygn-fixed.tsv", function(error, data) {
 
coldWater= cleanWeeks(data,"Volume");

max = Math.max.apply(Math, coldWater); 
min = getMin(coldWater);

console.log("weeks coldWater");
console.log(max);
console.log(min);
console.log(max);

var chart = circularHeatChart()
.margin({top: 160, left: 329})
.innerRadius(100)
.numSegments(52)
.segmentHeight(70)
.domain([min,max])
.range(coldRange);

var first = svg3.selectAll(".coldWater")
.data([coldWater])
.enter()                                               
.append('g')               
.attr('class', 'coldWater')
.call(chart);

});



d3.tsv("data/30-1001-VV-dygn-fixed.tsv", function(error, data) {
 
hotWater= cleanWeeks(data,"Volume");

max = Math.max.apply(Math, hotWater); 
min = getMin(hotWater);
console.log("weeks hotdWater");
console.log(min);
console.log(max);

chart = circularHeatChart()
.margin({top: 90, left: 259})
.innerRadius(170)
.numSegments(52)
.segmentHeight(70)
.domain([min,max])
.range(hotRange);

var second = svg3.selectAll(".hotWater")
.data([hotWater])
.enter()                                               
.append('g')               
.attr('class', 'hotWater')
.call(chart);

});



d3.tsv("data/30-1001-EL-dygn-fixed.tsv", function(error, data) {
 
electricity = cleanWeeks(data,"energy");

max = Math.max.apply(Math, electricity); 
min = getMin(electricity);
console.log("weeks El");
console.log(min);
console.log(max);

chart = circularHeatChart()
.margin({top: 20, left: 189})
.innerRadius(240)
.numSegments(52)
.segmentHeight(70)
.domain([min,max])
.range(electricityRange);

var third = svg3.selectAll(".electricity")
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

var third = svg3.selectAll(".outer")
.data([set])
.enter()                                               
.append('g')               
.attr('class', 'outer')
.call(chart);

});
