/**
 * Created by Tearz on 10/23/15.
 */

//Google vis library & core chart pack

google.load("visualization", "1", {packages:["corechart"]});

//Library loaded run function

google.setOnLoadCallback(drawChart);

//Make drawChart function

function drawChart(){
    //Draw chart with data table with array

    var data = google.visualization.arrayToDataTable([

        ["Console", "Millions in units"],
        ["WiiU", 10.3],
        ["Xbox One", 13.9],
        ["PS4", 25.4],
        ["3DS", 54.1],
        ["PSVita", 12.4]
    ]);

     var options = {

         title: "Here are our current stats on global console sales. (This generation)",
         is3D: true,
         pieStartAngle: -55,
         legend:{position:"labeled"}
     };

    //Make chart variable

    var chart = new google.visualization.PieChart(document.getElementById("piechart"));

    //Draw chart

    chart.draw(data, options);

}
