function map_function(selector, chosenStateMap, stateCode){

    // var stateName = chosenStateMap[0].properties.ST_NM
    
    // var stateCode = chosenStateMap[0].properties.ST_VC

    var latLong = _.filter(stateInfo, function(obj){
        return obj["STATE_CODE"] === stateCode
    })

    // console.log("latLong", JSON.stringify(chosenStateMap));
    

    var width = 500, height = 350, scale = latLong[0].SCALE , center = latLong[0].CENTER;
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
                .attr('fill', function(d,i){
                    return "#656565"   
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

    var colorScale = d3.scaleThreshold()
    .domain([0, 100, 500, 1000, 5000, 10000, 20000, 40000, 60000])
    .range([ "#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603","#7f2704"]);

    var formatComma = d3.format(",")


    var tool_tip = d3.tip()
    .attr("class", "d3-tip")
    .offset([20, 0])
    .html(function(d){
        var fdBarData = _.filter(totalConfirmedCases, function(obj){
            return obj.StateName === d.properties.ST_NM
        })
        if(fdBarData[0] !== undefined){
            return "<b>" + d.properties.ST_NM +"</b><br> Total confirmed cases: "+ formatComma(fdBarData[0]["totalIndianCases"])
        }else{
            return "<b>"+ d.properties.ST_NM+"</b>"
        }
        

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
                .attr('fill', function(d,i){
                    
                    var fdBarData = _.filter(totalConfirmedCases, function(obj){
                        // console.log(obj);
                        return obj.StateName === d.properties.ST_NM
                    })
                    // var fdBarData = _.filter(lockdowndata, function(obj){
                    //     // console.log(obj);
                    //     return obj.group === "Lock Down 4.0" && obj.StateFilter === d.properties.ST_NM
                    // })


                    // console.log(fdBarData[0]);

                    if(fdBarData[0] !== undefined){
                        return colorScale(fdBarData[0]["totalIndianCases"])
                    }else{
                        return "#FFFFFF"
                    }
                    // return colorScale(fdBar[0]["No. of Confirmed Cases"])
                    
                })
                .on('mouseover', tool_tip.show)
                .on('mouseout', tool_tip.hide)
                .on("click", function(d,i){


                    $(".state").removeClass("active")
                    $(this).addClass("active")

                    var filterState =  _.filter(statewise, function(item){
                        // console.log(item.properties.ST_NM == "Nagaland");
                        return item.properties.ST_NM === d.properties.ST_NM
                    })

                    var fdBarData = _.filter(totalConfirmedCases, function(obj){
                        return obj.StateName === d.properties.ST_NM
                    })

                    

                    var stateName = filterState[0].properties.ST_NM
                    var stateCode = filterState[0].properties.ST_VC

                    var fdBar = _.filter(lockdowndata, function(obj){
                        return obj.StateFilter === stateName
                    })
                    var fdLine = _.filter(posititvityrate, function(obj){
                        return obj.StateFilter === stateName
                    })

                    console.log("fdBar", fdBar[0]);

                    if(fdBarData[0] !== undefined){
                        d3.select("#tot-confirmed-cases").html("Total confirmed cases:<br><span>"+ formatComma(fdBarData[0]["totalIndianCases"])+"</span>")
                    }else{
                        d3.select("#tot-confirmed-cases").html("No Data Available")
                    }

                    
                    
                    if(fdBar[0] !== undefined){
                        drawChart(".generatedchart", fdBar, fdLine)
                    }else{
                        d3.select(".generatedchart").html(null)
                        d3.select(".generatedchart").html("<p> No Data Available </p>")
                    }

                    

                    // console.log("filterState", stateCode, stateName)


                    d3.select("#state-name").text(stateName)

                    map_function(".selectedmap", filterState, stateCode)

                    // drawChart(".generatedchart", fdBar, fdLine)
                   
                    

                   
                    
                })
    
    });//d3.json

} // end of drawIndiaMap()
