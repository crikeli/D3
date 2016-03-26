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