
var width = 450,
    height = 450;


var hours = [
    'Midnite', '1am', '2am', '3am', '4am', '5am', '6am',
    '7am', '8am', '9am', '10am', '11am','12am','1pm',
    '2pm','3pm','4pm','5pm','6pm', '7pm', '8pm', '9pm', '10pm','11pm'];

zeroset = [];
for(i=0;i<24;i++){
	zeroset.push(0);

}





var svg5 = d3.select("#now").append("svg")
    .attr("width", width)
    .attr("height", height)




//TODAY
d3.tsv("data/30-1001-KV-april-Sundays.tsv", function(error, data) {
 



var chart = circularHeatChart2()
.margin({top: 164.5, left: 164.5})
.innerRadius(50)
.numSegments(24)
.segmentHeight(35)
.message("a")
.range(["white", "blue"]);

var dayBlue = svg5.selectAll(".coldWater")
.data([zeroset])
.enter()                                               
.append('g')               
.attr('class', 'coldWater')
.call(chart);

});


//DAY
d3.tsv("data/30-1001-VV-april-Sundays.tsv", function(error, data) {
 
chart = circularHeatChart2()
.margin({top: 129.5, left: 129.5})
.innerRadius(85)
.numSegments(24)
.segmentHeight(35)
.domain([min,max])
.message("b")
.range(["white", "red"]);

var dayRed = svg5.selectAll(".hotWater")
.data([zeroset])
.enter()                                               
.append('g')               
.attr('class', 'hotWater')
.call(chart);

});






d3.tsv("data/30-1001-EL-april-Sundays.tsv", function(error, data) {
 



console.log("hejman");
console.log(min);
chart = circularHeatChart2()
.margin({top: 94.5, left: 94.5})
.innerRadius(120)
.numSegments(24)
.segmentHeight(35)
.message("c")
.range(["white", "green"]);

var dayGreen = svg5.selectAll(".electricity")
.data([zeroset])
.enter()                                               
.append('g')               
.attr('class', 'electricity')
.call(chart);

var colorColdWater = d3.scale.linear().domain([0,100]).range(coldRange);
var colorHotWater = d3.scale.linear().domain([0,100]).range(hotRange);
var colorElectricity = d3.scale.linear().domain([0,100]).range(electricityRange);

var randomCold = Math.floor( Math.random() * 24 );
var randomHot = Math.floor( Math.random() * 24 );
var randomElectricity = Math.floor( Math.random() * 24 );
for(i=0;i<24;i++){

	
	coldLevel = Math.floor( Math.random() * 100);
	if(coldLevel < 10){
		hotLevel = 10;
	}

	hotLevel = coldLevel + (Math.random() < 50 ? -20 : 20);
	if(hotLevel < 10){
		hotLevel = 10;
	}
	electricyLevel = coldLevel + (Math.random() < 50 ? -20 : 20);
		if(electricyLevel < 10){
		electricyLevel = 10;
	}
	var changecoldWater = d3.selectAll("#now")
		.selectAll(".a" + i)
		.transition().delay(1000*i)
		.duration(500)
		.style("fill",colorColdWater(coldLevel));


	var changehotWater = d3.selectAll("#now")
		.selectAll(".b" + i)
		.transition().delay(1000*i)
		.duration(500).style("fill",colorHotWater(hotLevel));

	var changeElectricity= d3.selectAll("#now")
		.selectAll(".c" + i).transition()
		.delay(1000*i).duration(500)
		.style("fill",colorElectricity(electricyLevel));



	var changeNumber = d3.select("#inserthour").transition().delay(1000*i).duration(500).text(i);



}




});


d3.tsv("data/30-1001-EL-dygn-fixed.tsv", function(error, data) {
set = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
chart = circularHeatChart()
.margin({top: 89.5, left: 89.5})
.innerRadius(155)
.numSegments(24)
.segmentHeight(5)
.segmentLabels(hours)
.range(["black", "black"]);

var third = svg5.selectAll(".outer")
.data([set])
.enter()                                               
.append('g')               
.attr('class', 'outer')
.call(chart);

});




