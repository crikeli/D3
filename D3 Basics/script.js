//Working with selectors D3.js
//Just uncomment particular d3.select blocks individually and open them in a browser to see the effects in action.


//Basic inserting and appending
// d3.select("#chart")
//     .insert("span", ":nth-child(2)")
//     .html("<strong>Ninu</strong>")
//     .append("div")
//     .html("<strong>Sanu</strong>")


//Removes the 4th Element
// d3.select("#chart .item:nth-child(4)")
//     .remove()

//Selecting certain attributes of html and controlling them
// d3.selectAll(".item")
//     .attr("class", "highlight")

//This is how I can select a specific item and control it's features and chose whether I want a particular class activated for it or not.
// d3.selectAll(".item:nth-child(2)")
//     .classed({
//         'highlight': true
//     })

//Most commonly used way of adding style to certain elements
// d3.selectAll(".item:nth-child(2)")
//     .style({
//         "background": "green",
//         "padding": "10px",
//         "color": "yellow"
//     })


//The makings of a bar graph.

//I first created an array that holds objects with information regarding color and width.
var myStyles = [{
    width: 200,
    color: '#A57706'
}, {
    width: 230,
    color: '#BD3613'
}, {
    width: 220,
    color: '#D11C24'
}, {
    width: 290,
    color: '#C61C6F'
}, {
    width: 236,
    color: '#595AB7'
}, {
    width: 230,
    color: '#2176C7'
}];

//Using a d3.selectAll method to apply 
d3.selectAll('.item')
//Here I declare the data source for the .item attribute
.data(myStyles)
//This is where I declare the styles for each of the items.
.style({
    //Font color set to white
    'color': 'white',
    //the background color is set as a function of the data that is returned by the myStyles array
    'background': function(d) {
        return d.color;
    },
    //appended the px, because the unit of the width is px.
    width: function(d) {
        return d.width + 'px';
    }
})

d3.select("#containerthree")
    .append("svg")
    .attr("width", 600)
    .attr("height", 400)
    .style("background", "#93A1A1")
// .append("rect")
// .attr("x", 200)
// .attr("y", 100)
// .attr("height", 200)
// .attr("width", 200)
// .style("fill", "#CB4B19")
// d3.select("svg")
.append("circle")
    .attr("cx", 300)
    .attr("cy", 200)
    .attr("r", 50)
    .style("fill", "#840043")


//Last 4-04 and 5-01
// var bardata = [50, 100, 200, 300, 400, 500, 288, 196, 160, 440, 224, 363, 553, 453, 124, 441];
var bardata = [];

//This loop provides different graphs everytime
for (var i = 0; i < 20; i++) {
    bardata.push(Math.random() * 30)
}

var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

//Dictates the color scheme of the bars.
var colors = d3.scale.linear()
    .domain([0, bardata.length * .33, bardata.length * .66, bardata.length])
    .range(['#B58929', '#C61C6F', '#268BD2', '#85922C'])

//Allows for the mapping of a series of values from the domain onto a range
var yScale = d3.scale.linear()
    .domain([0, d3.max(bardata)])
    .range([0, height])

//Allows for mapping of a series of values from domain to the rangeband.
var xScale = d3.scale.ordinal()
    .domain(d3.range(0, bardata.length))
    .rangeBands([0, width])

d3.select("#bchart").append('svg')
    .attr('width', width)
    .attr('height', height)
// .style("background", '#C9D7D6')
.selectAll('rect').data(bardata)
    .enter().append('rect')
    .style('fill', function(d, i) {
        return colors(i)
    })
    .attr('width', xScale.rangeBand())
    .attr('height', function(d) {
        return yScale(d);
    })
    .attr('x', function(d, i) {
        return xScale(i);
    })
    .attr('y', function(d) {
        return height - yScale(d);
    })

//Adding events
.on('mouseover', function(d) {
    tempColor = this.style.fill;
    d3.select(this)
        .transition()
        .style('opacity', .5)
        .style('fill', 'yellow')
})
    .on('mouseout', function(d) {
        d3.select(this)
            .transition()
            .style('opacity', 1)
            .style('fill', tempColor)

    })