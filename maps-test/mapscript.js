function SecretPlot(plotName, latitude, longitude, description, plotSize, produce, blog) {
  this.plotName = plotName;
  this.latitude = latitude;
  this.longitude = longitude;
  this.plotDescription = description;
  this.plotSize = plotSize;
  this.plotProduce = produce;
  this.plotBlog = blog;
}
var secretPlotGCO = new SecretPlot("Gabriel Community Orchard", 45.470266, -122.720072, 'Located adjacent to Gabriel Community Garden at 4151 SW Canby St in Southwest Portland, Gabriel Community Orchard is home to more than 40 mature fruit trees, the perfect orchard for any apple lover. ', 'big', [' apples', ' other'], [{plotter: 'Bob', message:'Im way down here!'},{plotter: 'Tina', message: 'Ya me too!'}]);

var secretPlotPCUCC = new SecretPlot("Parkrose Community United Church of Christ", 45.534277, -122.533966, 'Parkrose Community Orchard is our fifth and newest orchard. Located on the property of Parkrose Community United Church of Christ, it is home to about 30 fruit trees and dozens of understory and native plants.', 'big',[' apples', ' other'],[{plotter: 'Bob', message:'Im way down here!'},{plotter: 'Tina', message: 'Ya me too!'}]);

var secretPlotSCO = new SecretPlot("Sabin Community Orchard", 45.553035, -122.647525, 'Fourteen new fruit trees were planted in 2010 and 2011, to accompany two existing cherry trees and an apple tree. In 2011 we established under-story plantings around each fruit tree, water catching swales along the slope, sheet mulch, edging, and signs at both entrances.', 'big', [' cherries', ' apples'], [{plotter: 'Steve', message:'I can has cherries!'},{plotter: 'Tina', message: 'Ya me too!'}]);

var secretPlotGTCO = new SecretPlot("Green Thumb Community Orchard",45.562162, -122.644807, "Owned by Portland Parks and Recreation, and co-operatively managed by Portland Community Gardens and the Portland Fruit Tree Project, the Green Thumb Orchard is a historic orchard that hosts a great deal of activities. PFTP's Green Thumb Stewards maintain the orchard's trees, and share in the harvest through our harvesting parties.", 'big', ['fruit'], [{plotter: 'Bob', message:'Im way down here!'},{plotter: 'Tina', message: 'Ya me too!'}]);

var secretPlotFOD = new SecretPlot("Fruits of Diversity Community Orchard", 45.590446, -122.711207, 'Currently, the orchard is home to over 40 fruit trees, dozens of edible shrubs, and countless understory and companion plants and will continue to grow each year! ', ' big', [' fruits', ' edible shrubs' ], [{plotter: 'Bob', message:'I love this garden!'},{plotter: 'Tina', message: 'Ya me too!'}]);




var secretPlots= [secretPlotPCUCC, secretPlotGCO, secretPlotGTCO, secretPlotSCO, secretPlotFOD ];

/// sorts secretPlots Array by latitude to match labels.
secretPlots.sort(function(a, b){
    return a.latitude-b.latitude;
});



////////UI///////////
function initMap() {

var mapNeighbourhood = {
    center: new google.maps.LatLng(45.590604, -122.711207),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('map'), mapNeighbourhood);

var mapFruitsOfDiversity = {
    position: new google.maps.LatLng(secretPlotFOD.latitude, secretPlotFOD.longitude),
    map: map
};
var mapSabinCommunityOrchard = {
    position: new google.maps.LatLng(secretPlotSCO.latitude, secretPlotSCO.longitude),
    map: map
};
var mapGabrielCommunityOrchard = {
    position: new google.maps.LatLng(secretPlotGCO.latitude, secretPlotGCO.longitude),
    map: map
};
var mapGTCO = {
    position: new google.maps.LatLng(secretPlotGTCO.latitude, secretPlotGTCO.longitude),
    map: map
};
var mapPCUCC = {
    position: new google.maps.LatLng(secretPlotPCUCC.latitude, secretPlotPCUCC.longitude),
    map: map
};

var markerFOD = new google.maps.Marker(mapFruitsOfDiversity);
var markerSCO = new google.maps.Marker(mapSabinCommunityOrchard);
var markerGCO = new google.maps.Marker(mapGabrielCommunityOrchard);
var markerGTCO = new google.maps.Marker(mapGTCO);
var markerPCUCC = new google.maps.Marker(mapPCUCC);
markerGTCO.setMap(map);




var markers = [markerFOD, markerSCO, markerGCO, markerGTCO, markerPCUCC];
var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

var infoWindowOptionsFOD = {
    content: secretPlotFOD.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotFOD.plotSize + ' <br>produce: ' + secretPlotFOD.plotProduce,
};
var infoWindowOptionsSCO = {
    content: secretPlotSCO.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotSCO.plotSize + ' <br>produce: ' + secretPlotSCO.plotProduce,
};
var infoWindowOptionsGCO = {
    content: secretPlotGCO.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotGCO.plotSize + ' <br>produce: ' + secretPlotGCO.plotProduce,
};
var infoWindowOptionsGTCO = {
    content: secretPlotGTCO.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotGTCO.plotSize + ' <br>produce: ' + secretPlotGTCO.plotProduce,
};
var infoWindowOptionsPCUCC = {
    content: secretPlotPCUCC.plotName + '<br>Plot stats: <br>plot size: ' + secretPlotPCUCC.plotSize + ' <br>produce: ' + secretPlotPCUCC.plotProduce,
};
var infoWindowFOD = new google.maps.InfoWindow(infoWindowOptionsFOD);
google.maps.event.addListener(markerFOD,'click',function(e){
  infoWindowFOD.open(map, markerFOD);
  $("#plot-title").text(secretPlotFOD.plotName);
  $("#plot-description").text(secretPlotFOD.plotDescription);
  $("#blog-plotter1").text(secretPlotFOD.plotBlog[0].plotter);
  $("#blog-message1").text(secretPlotFOD.plotBlog[0].message);
  $("#blog-plotter2").text(secretPlotFOD.plotBlog[1].plotter);
  $("#blog-message2").text(secretPlotFOD.plotBlog[1].message);
  $("#plot-size").text(secretPlotFOD.plotSize);
  $("#plot-produce").text(secretPlotFOD.plotProduce);
});
var infoWindowSCO = new google.maps.InfoWindow(infoWindowOptionsSCO);
google.maps.event.addListener(markerSCO,'click',function(e){
  infoWindowSCO.open(map, markerSCO);
  $("#plot-title").text(secretPlotSCO.plotName);
  $("#plot-description").text(secretPlotSCO.plotDescription);
  $("#blog-plotter1").text(secretPlotSCO.plotBlog[0].plotter);
  $("#blog-message1").text(secretPlotSCO.plotBlog[0].message);
  $("#blog-plotter2").text(secretPlotSCO.plotBlog[1].plotter);
  $("#blog-message2").text(secretPlotSCO.plotBlog[1].message);
  $("#plot-size").text(secretPlotSCO.plotSize);
  $("#plot-produce").text(secretPlotSCO.plotProduce);
});
var infoWindowGCO = new google.maps.InfoWindow(infoWindowOptionsGCO);
google.maps.event.addListener(markerGCO,'click',function(e){
  infoWindowGCO.open(map, markerGCO);
  $("#plot-title").text(secretPlotGCO.plotName);
  $("#plot-description").text(secretPlotGCO.plotDescription);
  $("#blog-plotter1").text(secretPlotGCO.plotBlog[0].plotter);
  $("#blog-message1").text(secretPlotGCO.plotBlog[0].message);
  $("#blog-plotter2").text(secretPlotGCO.plotBlog[1].plotter);
  $("#blog-message2").text(secretPlotGCO.plotBlog[1].message);
  $("#plot-size").text(secretPlotGCO.plotSize);
  $("#plot-produce").text(secretPlotGCO.plotProduce);
});
var infoWindowGTCO = new google.maps.InfoWindow(infoWindowOptionsGTCO);
google.maps.event.addListener(markerGTCO,'click',function(e){
  infoWindowGTCO.open(map, markerGTCO);
  $("#plot-title").text(secretPlotGTCO.plotName);
  $("#plot-description").text(secretPlotGTCO.plotDescription);
  $("#blog-plotter1").text(secretPlotGTCO.plotBlog[0].plotter);
  $("#blog-message1").text(secretPlotGTCO.plotBlog[0].message);
  $("#blog-plotter2").text(secretPlotGTCO.plotBlog[1].plotter);
  $("#blog-message2").text(secretPlotGTCO.plotBlog[1].message);
  $("#plot-size").text(secretPlotGTCO.plotSize);
  $("#plot-produce").text(secretPlotGTCO.plotProduce);
});
var infoWindowPCUCC = new google.maps.InfoWindow(infoWindowOptionsPCUCC);
google.maps.event.addListener(markerPCUCC,'click',function(e){
  infoWindowPCUCC.open(map, markerPCUCC);
  $("#plot-title").text(secretPlotPCUCC.plotName);
  $("#plot-description").text(secretPlotPCUCC.plotDescription);
  $("#blog-plotter1").text(secretPlotPCUCC.plotBlog[0].plotter);
  $("#blog-message1").text(secretPlotPCUCC.plotBlog[0].message);
  $("#blog-plotter2").text(secretPlotPCUCC.plotBlog[1].plotter);
  $("#blog-message2").text(secretPlotPCUCC.plotBlog[1].message);
  $("#plot-size").text(secretPlotPCUCC.plotSize);
  $("#plot-produce").text(secretPlotPCUCC.plotProduce);
});


}
