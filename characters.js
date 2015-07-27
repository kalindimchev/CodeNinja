var Characters = function() {

    var CONSTANTS = {
        NINJA_START_X: 0,
        NINJA_START_Y: 0
        },
        startX = CONSTANTS.NINJA_START_X,
        startY = CONSTANTS.NINJA_START_Y,

        cloak = [
            startX, startY + 92,
            startX + 20, startY + 90,
            startX + 39, startY + 106,
            startX + 105, startY + 108,
            startX + 95, startY + 80,
            startX + 95, startY + 58
        ],
        head = [
            startX + 56, startY + 75,
            startX + 34, startY + 44,
            startX + 45, startY + 7,
            startX + 58, startY + 10,
            startX + 110, startY + 11,
            startX + 122, startY + 32,
            startX + 100, startY + 60
        ],
        face = [
            startX + 52, startY + 39,
            startX + 85, startY + 36,
            startX + 100, startY + 18,
            startX + 100, startY + 18,
            startX + 111, startY + 27,
            startX + 111, startY + 35,
            startX + 102, startY + 42,
            startX + 87, startY + 45,
            startX + 87, startY + 42,
            startX + 87, startY + 45,
            startX + 77, startY + 58,
            startX + 67, startY + 61,
            startX + 60, startY + 60,
            startX + 52, startY + 47,
            startX + 52, startY + 39,
        ],
        body = [
            startX + 20, startY + 128,
            startX + 65, startY + 75,
            startX + 95, startY + 62,
            startX + 140, startY + 37,
            startX + 146, startY + 41,
            startX + 142, startY + 50,
            startX + 100, startY + 73,
            startX + 100, startY + 73,
            startX + 90, startY + 100,
            startX + 63, startY + 138,
            startX + 45, startY + 138,
            startX + 57, startY + 120,
            startX + 57, startY + 115,
            startX + 41, startY + 125,
            startX + 30, startY + 133
        ],
        arm = [
            startX + 70, startY + 72,
            startX + 20, startY + 90,
            startX + 18, startY + 95,
            startX + 24, startY + 98,
            startX + 65, startY + 85
        ],
        logo = [
            startX + 68, startY + 30,
            startX + 68, startY + 25,
            startX + 85, startY + 25,
            startX + 85, startY + 32,
            startX + 77, startY + 32,
            startX + 77, startY + 17,
            startX + 82, startY + 17
        ],
        leftEyebrow = [
            startX + 61, startY + 46,
            startX + 79, startY + 44,
        ],
        rightEyebrow = [
            startX + 95, startY + 36,
            startX + 102, startY + 25,
        ]

    });

    tempStage = new Kinetic.Stage({
        container: 'canvas-cont',
        width: 800,
        height: 600
    });

    function ninja () {
        var layer = new Kinetic.Layer();

        layer.add(drawNinjaPart(cloak, 'yellowgreen', 'yellowgreen', 0.2));
        layer.add(drawNinjaPart(arm, 'yellowgreen', 'black', 0.4))
        layer.add(drawNinjaPart(body, 'yellowgreen', 'black', 0.5));
        layer.add(drawNinjaPart(head, 'yellowgreen', 'black', 0.4));
        layer.add(drawNinjaPart(face, 'black', 'white', 0.4));
        layer.add(drawLine(logo, 'yellowgreen', 2));
        layer.add(drawLine(leftEyebrow, 'black', 3));
        layer.add(drawLine(rightEyebrow, 'black', 3));
        layer.add(drawEye(startX + 73, startY + 48, 5, 'black'));
        layer.add(drawEye(startX + 100, startY + 34, 4, 'black'));

        tempStage.add(layer);
        }

        function drawNinjaPart(points, strokeColor, fillColor, tension) {
            var jumpingNinja = new Kinetic.Line({
                points: points,
                stroke: strokeColor,
                fill: fillColor,
                strokeWidth: 4,
                tension: tension,
                closed: true
            });

            return jumpingNinja;
        };

        function drawLine(points, strokeColor, width) {
            var line = new Kinetic.Line({
                points: points,
                stroke: strokeColor,
                strokeWidth: width,
            });

            return line;
        };

        function drawEye(x, y, radius, color) {
            var eye = new Kinetic.Circle({
                x: x,
                y: y,
                radius: radius,
                fill: color
            });

            return eye;
        };

        //function drawJumpingNinja () {
            //drawNinjaPart(cloak, 'yellowgreen', 'yellowgreen', 0.2);
            //drawNinjaPart(arm, 'yellowgreen', 'black', 0.4)
            //drawNinjaPart(body, 'yellowgreen', 'black', 0.5);
            //drawNinjaPart(head, 'yellowgreen', 'black', 0.4);
            //drawNinjaPart(face, 'black', 'white', 0.4);
            //drawLine(logo, 'yellowgreen', 2);
            //drawLine(leftEyebrow, 'black', 3);
            //drawLine(rightEyebrow, 'black', 3);
            //drawEye(startX + 73, startY + 48, 5, 'black');
            //drawEye(startX + 100, startY + 34, 4, 'black');

           //return stage.add(layer);
        //};

        var tempCanvas = document.getElementById("canvas");
        var context = tempCanvas.getContext("2d");

        return
    }
}();