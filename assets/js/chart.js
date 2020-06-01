function drawChart(selector, grpdata, linedata){

    // set the dimensions and margins of the graph
var margin = {top: 10, right: 60, bottom: 50, left: 70},
width = 550 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

var formatDecimalComma = d3.format(",.2f")
var formatComma = d3.format(",")

d3.select(selector).html(null)
// append the svg object to the body of the page
var svg = d3.select(selector)
.append("svg")
.attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
.attr("preserveAspectRatio", "xMinYMin")
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

var subgroups = ["No. of Confirmed Cases","No. of Deaths","No. of Tests"]

var replaceCat = {
  "No. of Confirmed Cases": "No. of confirmed cases",
  "No. of Deaths": "No. of deaths",
  "No. of Tests": "No. of tests"
}

// List of groups = species here = value of the first column called group -> I show them on the X axis
var groups = ["Lock Down 1.0", "Lock Down 2.0", "Lock Down 3.0", "Lock Down 4.0"]

var maxno = d3.max(grpdata, function(dd){
// console.log("dd", dd["No of Tests"]);
return dd["No. of Tests"];
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
        return "<b>" + d.group + "</b><br>LPR: "+ formatDecimalComma(d.lpr);
    });
    svg.call(tool_tipline);

  var tool_tipbar = d3.tip()
    .attr("class", "d3-tip")
    .offset([-20, 0])
    .html(function(d){
        console.log(d);
        return d.key + ": "+ formatComma(d.value);
    });
    svg.call(tool_tipbar);


// Add X axis
var x = d3.scaleBand()
  .domain(groups)
  .range([0, width])
  .padding([0.2])

svg.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x).tickSize(10))
.attr("class", "axis xAxis");

// Add Y axis
var y = d3.scaleLinear()
.domain([0, maxno])
.range([ height, 0 ]);
svg.append("g")
.call(d3.axisLeft(y))
.attr("class", "axis");

// Another scale for subgroup position?
var xSubgroup = d3.scaleBand()
.domain(subgroups)
.range([0, x.bandwidth()])
.padding([0.05])

// color palette = one color per subgroup
var color = d3.scaleOrdinal()
.domain(subgroups)
.range(['#D55D29','#6CA44B','#3B7AC9'])

svg.selectAll(".groupbg")
    .data(grpdata).enter()
    .append("rect")
    .attr("class", "groupbg")
    .attr("width", "80px")
    .attr("fill", "#e8e8e8")
    .attr("x", function(D, i){
      return x(D["group"])
    })
    .attr("y", function(D){ return 0 })
    .attr("height", function(D){ return height})


// svg.selectAll(".groupbg")
//     .data(grpdata).enter()
//     .append("rect")
//     .attr("class", "groupbg")
//     .attr("width", "80px")
//     .attr("fill", "#e8e8e8")
//     .attr("x", function(D, i){
//       // console.log(D["No. of Tests"]);
//       return x(D["group"])
//     })
//     .attr("y", function(D){ return y(0) })
//     .attr("height", function(D){ return height - y(0) })

// svg.selectAll(".groupbg")
//     .transition().duration(1000)
//     .attr("y", function(D){
//       return y(D["No. of Tests"])
//     })
//     .attr("height", function(D){
//       return height - y(D["No. of Tests"])
//     })

// Show the bars
svg.append("g")
.selectAll("g")
// Enter in data = loop group per group
.data(grpdata)
.enter()
.append("g")
  .attr("class", "lockdown-group")
  .attr("transform", function(d) { return "translate(" + x(d.group) + ",0)"; })
.selectAll(".bar")
.data(function(d) { 
  var pd = subgroups.map(function(key) { 
    // console.log("key", key);
    // console.log("d",  d[key]);
    
    return {key: key, value: parseInt(d[key])}; 
  })
  return pd; 
})
.enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return xSubgroup(d.key); })
    .attr("y", function(d) { return y(0); })
    .attr("width", xSubgroup.bandwidth())
    .attr("height", function(d) { return height - y(0); })
    .on('mouseover', tool_tipbar.show)
    .on('mouseout', tool_tipbar.hide)
    
    svg.selectAll(".bar")
    .transition().duration(1000)
    .attr("y", function(d) { return y(d.value); })
    .attr("height", function(d) { return height - y(d.value); })
    .attr("fill", function(d) { return color(d.key); })

svg.append("g")
  .selectAll("g")
    .data(grpdata)
    .enter()
    .append("g")
      .attr("class", "lockdown-text-group")
      .attr("transform", function(d) { return "translate(" + x(d.group) + ",0)"; })
    .selectAll(".bar-text")
    .data(function(d) { 
      var pd = subgroups.map(function(key) { 
        // console.log("key", key);
        // console.log("d",  d[key]);
        
        return {key: key, value: parseInt(d[key])}; 
      })
      return pd; 
    })
    .enter().append("text")
        .attr("class", "bar-text")
        .attr("x", function(d) { 
          
          return xSubgroup(d.key) + 12; 
        })
        .attr("y", function(d) { return y(d.value) - 15; })
        .attr("dy", "0.22em")
        .attr("text-anchor", "middle")
        .text(function(d){
          console.log(d.value);

          if(d.key === "No. of Deaths"){
            return d.value
          }
          
        })


// Add Y axis

var yScale = d3.scaleLinear()
.domain([0, Math.round(linemaxno+2)]) // input 
.range([height, 0]);
svg.append("g")
.attr("transform", "translate("+ width +",0)")
.call(d3.axisRight(yScale))
.attr("class", "axis");

var line = d3.line()
.x(function(d) { return x(d['group']) + 40; })
.y(function(d) { return yScale(d['lpr']); });

path = svg.append("g")
  .append("path")
  .attr("class", "line")
  .attr("d", line(linedata))

var totalLength = path.node().getTotalLength();

  // Set Properties of Dash Array and Dash Offset and initiate Transition
  path
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition() // Call Transition Method
    .duration(1000) // Set Duration timing (ms)
    .ease(d3.easeLinear) // Set Easing option
    .attr("stroke-dashoffset", 0); // Set final value of dash-offset for transition

  // console.log("line", line(data2));
  

svg.selectAll(".dot")
.data(linedata)
.enter().append("circle") // Uses the enter().append() method
  .attr("class", "dot") // Assign a class for styling
  .attr("cx", function(d, i) { 
    // console.log("cx", x(d['group']) );
    return x(d['group']) + 40
  })
  .attr("cy", function(d) { 
    // console.log("cy", yScale(d['lpr']));
    return yScale(d['lpr'])
  })
  .attr("r", 4)
  .attr("fill", "#9C51b6")
  .on('mouseover', tool_tipline.show)
  .on('mouseout', tool_tipline.hide)

svg.append("text")
  .attr("class", "y label")
  .attr("text-anchor", "end")
  .attr("x", -75)
  .attr("y", -65)
  .attr("dy", ".75em")
  .attr("transform", "rotate(-90)")
  .text("No. of cases");

svg.append("text")
  .attr("class", "y label")
  .attr("text-anchor", "end")
  .attr("x", -75)
  .attr("y", 450)
  .attr("dy", ".75em")
  .attr("transform", "rotate(-90)")
  .text("LPR");


}