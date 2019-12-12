//https://developers.google.com/chart/interactive/docs/gallery/piechart#methods
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Medicamento', 'Más vendidos'],
    ['Vaporub', 1079],
    ['Hepalive', 1257],
    ['Listerine',926],
    ['Finalin', 2371],
    ['Bismutol',1805]
  ]);
var options = {
    backgroundColor: {
      fill: '#ffffff',
      fillOpacity: 0.65
    },
    'colors': ['#144c72', '#55a9e1', '#77bae7', '#4ed1ff', '#268fd6'],
    'is3D':true
};
  

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data,options);
}

$(window).on("resize", function (event) {
    var options = {
        width: '100%',
        height: '100%'
    };

    var data = google.visualization.arrayToDataTable([]);
    drawChart(data, options);
});
