function drawChart(selector, grpdata, linedata){

    // set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 20, left: 50},
width = 550 - margin.left - margin.right,
height = 350 - margin.top - margin.bottom;

d3.select(selector).html(null)
// append the svg object to the body of the page
var svg = d3.select(selector)
.append("svg")
.attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
.attr("preserveAspectRatio", "xMinYMin")
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

var subgroups = ["No of Confirmed Cases",	"No of Deaths",	"No of Tests"]

// List of groups = species here = value of the first column called group -> I show them on the X axis
var groups = ["Lock Down 1.0", "Lock Down 2.0", "Lock Down 3.0", "Lock Down 4.0"]

var maxno = d3.max(grpdata, function(dd){
// console.log("dd", dd["No of Tests"]);
return dd["No of Tests"];
})

var linemaxno = d3.max(linedata, function(dd){
// console.log("dd", dd["No of Tests"]);
return dd["lpr"];
})

// console.log("maxno", maxno);

var tool_tipline = d3.tip()
    .attr("class", "d3-tip")
    .offset([-20, 0])
    .html(function(d){
        // console.log(d);
        // return d.properties.ST_NM
        return "<b>" + d.group + "</b><br>LPR: "+ d.lpr;
    });
    svg.call(tool_tipline);

    var tool_tipbar = d3.tip()
    .attr("class", "d3-tip")
    .offset([-20, 0])
    .html(function(d){
        // console.log(d);
        return d.key + ": "+ d.value;
    });
    svg.call(tool_tipbar);


// Add X axis
var x = d3.scaleBand()
  .domain(groups)
  .range([0, width])
  .padding([0.2])
svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x).tickSize(0));

// Add Y axis
var y = d3.scaleLinear()
.domain([0, maxno])
.range([ height, 0 ]);
svg.append("g")
.call(d3.axisLeft(y));

// Another scale for subgroup position?
var xSubgroup = d3.scaleBand()
.domain(subgroups)
.range([0, x.bandwidth()])
.padding([0.05])

// color palette = one color per subgroup
var color = d3.scaleOrdinal()
.domain(subgroups)
.range(['#D55D29','#6CA44B','#3B7AC9'])

// Show the bars
svg.append("g")
.selectAll("g")
// Enter in data = loop group per group
.data(grpdata)
.enter()
.append("g")
  .attr("transform", function(d) { return "translate(" + x(d.group) + ",0)"; })
.selectAll("rect")
.data(function(d) { 
  var pd = subgroups.map(function(key) { 
    // console.log("key", key);
    // console.log("d",  d[key]);
    
    return {key: key, value: parseInt(d[key])}; 
  })
  return pd; 
})
.enter().append("rect")
  .attr("x", function(d) { return xSubgroup(d.key); })
  .attr("y", function(d) { return y(d.value); })
  .attr("width", xSubgroup.bandwidth())
  .attr("height", function(d) { return height - y(d.value); })
  .attr("fill", function(d) { return color(d.key); })
  .on('mouseover', tool_tipbar.show)
  .on('mouseout', tool_tipbar.hide)


// Add Y axis

var yScale = d3.scaleLinear()
.domain([0, Math.round(linemaxno)]) // input 
.range([height, 0]);
svg.append("g")
.attr("transform", "translate("+ width +",0)")
.call(d3.axisRight(yScale));

var line = d3.line()
.x(function(d) { return x(d['group']); })
.y(function(d) { return yScale(d['lpr']); });

svg.append("g")
  .append("path")
  .attr("class", "line")
  .attr("d", line(linedata))

  // console.log("line", line(data2));
  

svg.selectAll(".dot")
.data(linedata)
.enter().append("circle") // Uses the enter().append() method
  .attr("class", "dot") // Assign a class for styling
  .attr("cx", function(d, i) { 
    console.log("cx", x(d['group']) );
    return x(d['group'])
  })
  .attr("cy", function(d) { 
    console.log("cy", yScale(d['lpr']));
    return yScale(d['lpr'])
  })
  .attr("r", 3)
  .attr("fill", "#AB1016")
  .on('mouseover', tool_tipline.show)
  .on('mouseout', tool_tipline.hide)


}