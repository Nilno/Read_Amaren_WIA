/*
     Name: Amaren Read
     Date: Oct. 1, 2015
     Class & Section:  WIA-01
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

    //Window.onload function
    window.onload = function() {

        //Variable to get id from html
        var canvas = document.getElementById("Canvas1");

        if (canvas && canvas.getContext) {
            var ctx = canvas.getContext("2d");

            //Stroke and fill of rectangle
            if (ctx) {
                ctx.strokeStyle = "black";
                ctx.fillStyle = "blue";
                ctx.strokeRect(0, 0, 50, 100);
                ctx.fillRect(0, 0, 50, 100);

            }
        }


        /*******************************************
         PART 2

         Draw a circle starting at point (50 ,50)
         That has a radius of 20 px
         Set the color of the circle to a shade of red and set the alpha to .5
         Set the stroke color to black and use a radius of 30px for this circle.

         Reminder - set the style first then draw.
         Use the arc method
         ********************************************/


//Draw Circle here

        //Variable to get id from html
        var canvas2 = document.getElementById("Canvas2");

        if (canvas2 && canvas2.getContext) {
            var ctx = canvas2.getContext("2d");

            if (ctx) {

                //Stroke style for circle
                ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
                ctx.fillStyle = "red";
                ctx.lineWidth = 5;

                //Full circle
                var degrees = 360;
                var radians = (degrees / 180) * Math.PI;

                //Begin path
                ctx.beginPath();
                ctx.arc(50, 50, 20, 0, radians);
                ctx.fill();
                ctx.stroke();

            }

        }


        /*******************************************
         PART 3

         Practice using Path drawing.
         Create a 5-point star shaped pattern using the lineTo method.
         Begin this shape at (100, 100)

         Height and width and color are up to you.

         ********************************************/


//Draw Star here

        //Variable to get id from html
        var canvas3 = document.getElementById("Canvas3");

        if (canvas3 && canvas3.getContext) {
            var ctx = canvas3.getContext("2d");


            if (ctx) {

                //Begin path and lines
                ctx.beginPath();
                ctx.moveTo(65, -90);
                ctx.lineTo(141, 67);
                ctx.lineTo(215, 78);
                ctx.lineTo(161, 130);
                ctx.lineTo(174, 205);
                ctx.lineTo(107, 170);
                ctx.lineTo(41, 205);
                ctx.lineTo(53, 130);
                ctx.lineTo(0.0, 78);
                ctx.lineTo(74, 67);
                ctx.lineTo(107, 1);

                //Stroke and fill styles
                ctx.strokeStyle = "black";
                ctx.fillStyle = "rgb(255, 255, 77)";
                ctx.lineWidth = 5;
                ctx.stroke();
                ctx.fill();

            }
        }

        /*******************************************
         PART 4

         Practice drawing with Bezier curves.
         Try drawing the top to an umbrella.
         This should have one large arc (a half circle) on the top and scalloped edges on the bottom.
         Position, height, width and color are your choice.
         Do not overlap any other object.

         ********************************************/

//Draw Umbrella top here


        //Variable to get id from html
        var canvas4 = document.getElementById("Canvas4");

        if (canvas4 && canvas4.getContext) {
            var ctx = canvas4.getContext("2d");


            if (ctx) {
                ctx.strokeStyle = "black";
                ctx.fillStyle = "red";
                ctx.lineWidth = 5;

                //half circle
                var degrees = 180;
                var radians = (degrees / 180) * Math.PI;

                //begin path of half circle
                ctx.beginPath();
                ctx.arc(150, 50, 100, 0, radians);
                ctx.fill();
                ctx.stroke();

                //stroke and line width
                ctx.strokeStyle = "blue";
                ctx.lineWidth = 5;

                //begin path for bezier curve 1
                ctx.beginPath();
                ctx.moveTo(50, 50);

                //bezierCurveTo(cx1, cy1, cx2, cy2, x, y)1
                ctx.bezierCurveTo(50, 100, 100, 100, 100, 50);
                ctx.stroke();

                //begin path for bezier curve 2
                ctx.beginPath();
                ctx.moveTo(110, 50);

                //bezierCurveTo(cx1, cy1, cx2, cy2, x, y)2
                ctx.bezierCurveTo(110, 100, 160, 100, 160, 50);
                ctx.stroke();

                //begin path for bezier curve 3
                ctx.beginPath();
                ctx.moveTo(170, 50);

                //bezierCurveTo(cx1, cy1, cx2, cy2, x, y)3
                ctx.bezierCurveTo(170, 100, 220, 100, 220, 50);
                ctx.stroke();

            }
        }


        /*******************************************
         PART 5

         Practice using text.
         Draw text into your canvas.  It can said whatever you would like in any color.

         ********************************************/

//Draw text here


        //Variable to get id from html
        var canvas5 = document.getElementById("Canvas5");

        if (canvas5 && canvas5.getContext) {
            var ctx = canvas5.getContext("2d");


            if (ctx) {

                //Variable for text
                var aString = "Canvas text";

                //Text using defaults
                ctx.fillText(aString, 20, 20);

                //Font style
                ctx.font = "28pt Georgia";
                ctx.fillStyle = "blue";
                ctx.textBaseline = "middle";

                //Stroke style
                ctx.strokeStyle = "red";
                ctx.fillText(aString, 20, 160);
                ctx.strokeText(aString, 20, 160);

            }
        }


        /*******************************************
         PART 6

         Pixel manipulation.
         Draw the image logo.png into the canvas in the following 3 ways.
         1. The image exactly as it is.
         2. Shrink the image by 50%
         3. Slice a section of the logo out and draw that onto the canvas.

         Reminder to use the drawImage method for all 3 of the ways.

         ********************************************/

//Draw images here


        //Variable to get id from html
        var canvas6 = document.getElementById("Canvas6");

        if (canvas6 && canvas6.getContext) {
            var ctx = canvas6.getContext("2d");


            if (ctx) {

                //Variable to hold image
                var aImg = document.getElementById("img1");

                //Draw image directly onto canvas
                ctx.drawImage(aImg, 0, 0);

                //Scaled down image
                //drawImage(aImg, dx, dy, dw, dh)
                ctx.drawImage(aImg, -10, 50, 350, 240);

                //Slice image
                //drawImage(aImg, sx, sy, sw, sh, dx, dy, dw, dh)

                //Trying to target hand?
                ctx.drawImage(aImg, 81, 78, 81, 78, 10, 10, 162, 156);


            }
        }


        /*******************************************
         PART 7

         Putting it all together.

         Using a combination of all the methods.
         Create a complex scene.
         You must use at least 3 different methods.

         ********************************************/

// Draw scene here


        //Variable to get id from html
        var canvas7 = document.getElementById("Canvas7");

        if (canvas7 && canvas7.getContext) {
            var ctx = canvas7.getContext("2d");


            if (ctx) {

                //Scaled down image
                //drawImage(aImg, dx, dy, dw, dh)
                ctx.drawImage(aImg, 120, 45, 350, 240);

                //Variable for text
                var aString = "Canvas text";

                //Text using defaults
                ctx.fillText(aString, 20, 20);

                //Font style
                ctx.font = "28pt Georgia";
                ctx.fillStyle = "blue";
                ctx.textBaseline = "middle";
                ctx.strokeStyle = "red";
                ctx.fillText(aString, 20, 160);
                ctx.strokeText(aString, 20, 160);

                //Stroke style for circle
                ctx.strokeStyle = "rgba(0, 0, 0, 0.5)";
                ctx.fillStyle = "red";
                ctx.lineWidth = 5;

                //Full circle
                var degrees = 360;
                var radians = (degrees / 180) * Math.PI;

                //Begin path
                ctx.beginPath();
                ctx.arc(400, 290, 20, 0, radians);
                ctx.fill();
                ctx.stroke();

            }
        }
    };
