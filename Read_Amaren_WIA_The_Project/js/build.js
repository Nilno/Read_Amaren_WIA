/**
 * Created by Amaren Read on 10/21/15.
 */

window.onload = function() {

    $(".image").click(function (e) {

        //Prevent images loading to another page
        e.preventDefault();

        //Get link href
        var img_href = $(this).attr("href");

        //Setup lightbox if it does not exist/Use lightbox if it does exist
        if ($("#lightbox").length > 0) {

            //Placing clicked href into img tag
            $("#content").html('<img src="' + img_href + '"/>');

            $("#lightbox").fadeIn(1000);

        } else {
            //1st lightbox div not exist/Set it up

            var lightbox =
                '<div id="lightbox">' +
                "<p>Click To Close</p>" +
                '<div id="content">' +
                    //Insert clicked link href into image
                '<img src="' + img_href + '" />' +
                '</div>' +
                '</div>';

            //Insert lightbox HTML
            $("body").append(lightbox);

            $("#lightbox").hide();
            $("#lightbox").fadeIn(1000);


        }

    });

    //Click to close function
    $("#lightbox").live('click', function () {

        $("#lightbox").fadeOut(1000);

    });
}
    //To get audio from html page by id
    $("#audio").click(function () {
        audio = document.getElementById("audio");

    });

    if (Modernizr.audio.ogg){

        audio.src="audio/Cool-Castle-in-the-Clouds.ogg";

    }else{

    audio.src =  Modernizr.audio.mp3 ? 'audio/Cool-Castle-in-the-Clouds.mp3': 'audio/Cool-Castle-in-the-Clouds.ogg';

    }

    //To skip 2 seconds on button click
    function clicked() {
        audio.currentTime += 2;
}


    //Variable For video
    var video = $('vid')[0];

    //To get video from html page by id
    $("#vid").click(function(){

        vid = document.getElementById("vid");
    });

    if (Modernizr.video.mp4){

    video.src="video/6479489.mp4";

    }else{

    video.src =  'Modernizr.video.flv' ? 'video/6479489.flv': 'video/6479489.wmv';

}

    //Pause function for video
    function pToggle() {

        //determine if video is paused or not
        if (vid.paused) {
            vid.play(); //Play video
        } else {
            vid.pause(); //Pause video
        }
    }