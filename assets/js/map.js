function map_function(selector, chosenStateMap, stateCode){

    // var stateName = chosenStateMap[0].properties.ST_NM
    
    // var stateCode = chosenStateMap[0].properties.ST_VC

    var latLong = _.filter(stateInfo, function(obj){
        return obj["STATE_CODE"] === stateCode
    })

    // console.log("latLong", JSON.stringify(chosenStateMap));
    

    var width = 500, height = 500, scale = latLong[0].SCALE , center = latLong[0].CENTER;
    var source = "assets/map/india_state_2019.json";

    d3.select(selector).html(null)

    var svg = d3.select(selector)
    .append("svg")
    .attr("class", "india map")
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("preserveAspectRatio", "xMinYMin")

    

    var g = svg.append("g")

   
    
    


    var projection = d3.geoMercator()
    .scale(scale)
    .center(center)
    .translate([width / 2, height / 2])

    var geoPath = d3.geoPath()
    .projection(projection)

    // console.log("chosenStateMap", chosenStateMap)

    g.selectAll(".selectedstate")
            .data(chosenStateMap).enter().append("path")
                .attr("d", geoPath)
                .attr("class", "selectedstate")
                .attr("stroke", "#000000")
                .attr("stroke-width", 1)
                .attr('fill', function(d,i){
                    return "#800020"   
                })

}

function drawIndiaMap(selector){
    var width = 300, height = 332, scale = 580, center = [82.8, 23.4];
    var source = "assets/map/india_state_2019.json";
    var svg = d3.select(selector)
    .append("svg")
    .attr("class", "india map")
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("preserveAspectRatio", "xMinYMin")

    var g = svg.append("g")

    var tool_tip = d3.tip()
    .attr("class", "d3-tip")
    .offset([35, 0])
    .html(function(d){
        // console.log(d);
        return d.properties.ST_NM
    });
    if($(window).width() > 767) {
        console.log("tooltip")
        svg.call(tool_tip);
    }
    var projection = d3.geoMercator()
    .scale(scale)
    .center(center)
    .translate([width / 2, height / 2])

    var geoPath = d3.geoPath()
    .projection(projection)

    d3.json(source, function(error, mapboundary){
        
        var statewise = topojson.feature(mapboundary, mapboundary.objects.collection).features;
        
        // var stateCentroid = centroids(statewise);
        g.selectAll(".state")
            .data(statewise).enter().append("path")
                .attr("d", geoPath)
                .attr("class", "state")
                .attr("stroke", "#000000")
                .attr("stroke-width", 0.2)
                .attr('fill', "#FFCCCB")
                .on('mouseover', tool_tip.show)
                .on('mouseout', tool_tip.hide)
                .on("click", function(d,i){

                    console.log(d)
                    d3.selectAll(".state").attr("fill", "#FFCCCB")
                    d3.select(this).attr("fill", "#800020")

                    var filterState =  _.filter(statewise, function(item){
                        // console.log(item.properties.ST_NM == "Nagaland");
                        return item.properties.ST_NM === d.properties.ST_NM
                    })

                    var stateName = filterState[0].properties.ST_NM
                    var stateCode = filterState[0].properties.ST_VC

                    var fdBar = _.filter(lockdowndata, function(obj){
                        return obj.StateFilter === stateName
                    })
                    var fdLine = _.filter(posititvityrate, function(obj){
                        return obj.StateFilter === stateName
                    })

                    console.log("fd", fdBar.length, fdLine/length) 

                    drawChart(".generatedchart", fdBar, fdLine)

                    // console.log("filterState", stateCode, stateName)


                    d3.select("#state-name").text(stateName)

                    map_function(".selectedmap", filterState, stateCode)

                    drawChart(".generatedchart", fdBar, fdLine)
                   
                    

                   
                    
                })
    
    });//d3.json

} // end of drawIndiaMap()
