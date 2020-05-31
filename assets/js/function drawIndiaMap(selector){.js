function drawIndiaMap(selector){
    var width = 300, height = 332, scale = 580, center = [82.8, 23.4];
    var source = "http://localhost:9999/thefederal/lockdown-efficiency/assets/map/india_state_2019.json";
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

    d3.json(source, function(error, mapboundary){
        
        var statewise = topojson.feature(mapboundary, mapboundary.objects.collection).features;

        console.log(statewise);
        
        
        
        // var stateCentroid = centroids(statewise);
        g.selectAll(".state")
            .data(statewise).enter().append("path")
                .attr("d", geoPath)
                .attr("class", "state")
                .attr("stroke", "#000000")
                .attr("stroke-width", 0.2)
                .attr('fill', function(d,i){
                    return "#FFFFFF"
                    
                    
                })
                // .on('mouseover', tool_tip.show)
                // .on('mouseout', tool_tip.hide)
                .on("click", function(d,i){

                    console.log(d)

                    var filterState =  _.filter(statewise, function(item){
                        // console.log(item.properties.ST_NM == "Nagaland");
                        
                        return item.properties.ST_NM === d.properties.ST_NM
                    })

                    console.log("filterState", filterState)
                    var svg = d3.select(".selectedmap")
                        .append("svg")
                        .attr("class", "india map")
                        .attr("viewBox", "0 0 500 500")
                        .attr("preserveAspectRatio", "xMinYMin")
                    

                   
                    
                })
    
    });//d3.json

} // end of drawIndiaMap()