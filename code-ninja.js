window.onload = function() {
    function drawSky() {
        var sky = new Kinetic.Rect({
            x: CONSTANTS.MAP_START,
            y: 0,
            width: CONSTANTS.MAP_WIDTH,
            height: CONSTANTS.MAP_HEIGHT,
            fill: 'lightblue'
        });

        layer.add(sky);
    }

    function drawGround() {
        var i,
            len,
            groundCell;

        for (i = 0, len = CONSTANTS.MAP_WIDTH / CONSTANTS.GROUND_CELL_WIDTH; i < len; i += 1) {
            groundCell = new Kinetic.Rect({
                x: i * CONSTANTS.GROUND_CELL_WIDTH, // TODO: Check if Start is not at x=0
                y: CONSTANTS.GROUND_HEIGHT,
                width: CONSTANTS.GROUND_CELL_WIDTH,
                height: CONSTANTS.GROUND_CELL_HEIGHT,
                fill: '#EFE4B0',
                stroke: '#B97A57'
            });
            layer.add(groundCell);

            groundCell = new Kinetic.Rect({
                x: i * CONSTANTS.GROUND_CELL_WIDTH, // TODO: Check if Start is not at x=0
                y: CONSTANTS.GROUND_HEIGHT + CONSTANTS.GROUND_CELL_HEIGHT,
                width: CONSTANTS.GROUND_CELL_WIDTH,
                height: CONSTANTS.GROUND_CELL_HEIGHT,
                fill: '#EFE4B0',
                stroke: '#B97A57'
            });
            layer.add(groundCell);
        }
    }

    function drawBigDarkBushes(startScreen, endScreen) {
        var i,
            len,
            startingPoints = bigDarkBushesInScreenCoordinates.filter(function(coord) {
                return ((coord  >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 5 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 5 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
            startX,
            y = CONSTANTS.GROUND_HEIGHT + 5,
            darkBush;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            darkBush = new Kinetic.Line({
                points: [startX, y,
                    startX + 60, y - 80,
                    startX + 125, y - 120,
                    startX + 190, y - 80,
                    startX + 250, y],
                stroke: 'black',
                fill: '#22B14C',
                strokeWidth: 2,
                lineJoin: 'round',
                closed: true,
                tension: 0.3
            });

            layer.add(darkBush);
        }
    }

    function drawSmallDarkBushes(startScreen, endScreen) {
        var i,
            len,
            startingPoints = smallDarkBushesInScreenCoordinates.filter(function(coord) {
                return ((coord  >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 3 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 3 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
            startX,
            y = CONSTANTS.GROUND_HEIGHT + 5,
            darkBush;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            darkBush = new Kinetic.Line({
                points: [startX, y,
                    startX + 75, y - 60,
                    startX + 150, y],
                stroke: 'black',
                fill: '#22B14C',
                strokeWidth: 2,
                lineJoin: 'round',
                closed: true,
                tension: 0.4
            });

            layer.add(darkBush);
        }
    }

    function drawBigLightBushes(startScreen, endScreen) {
        var i,
            len,
            startingPoints = bigLightBushesInScreenCoordinates.filter(function(coord) {
                return ((coord  >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 4 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 4 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
            startX,
            y = CONSTANTS.GROUND_HEIGHT + 5,
            lightBush;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            lightBush = new Kinetic.Line({
                points: [startX, y,
                    startX + 25, y - 30,
                    startX + 50, y - 45,
                    startX + 75, y - 30,
                    startX + 100, y - 45,
                    startX + 125, y - 30,
                    startX + 150, y - 45,
                    startX + 175, y - 30,
                    startX + 200, y],
                stroke: 'black',
                fill: '#B5E61D',
                strokeWidth: 2,
                lineJoin: 'round',
                closed: true,
                tension: 0.35
            });

            layer.add(lightBush);
        }
    }

    function drawSmallLightBushes(startScreen, endScreen) {
        var i,
            len,
            startingPoints = smallLightBushesInScreenCoordinates.filter(function(coord) {
                return ((coord  >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 2 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 2 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
            startX,
            y = CONSTANTS.GROUND_HEIGHT + 5,
            lightBush;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            lightBush = new Kinetic.Line({
                points: [startX, y,
                    startX + 25, y - 30,
                    startX + 50, y - 45,
                    startX + 75, y - 30,
                    startX + 100, y],
                stroke: 'black',
                fill: '#B5E61D',
                strokeWidth: 2,
                lineJoin: 'round',
                closed: true,
                tension: 0.35
            });

            layer.add(lightBush);
        }
    }

    function drawPipes(startScreen, endScreen) {
        var i,
            len,
            startingPoints = pipesInScreenCoordinates.filter(function(coord) {
                return ((coord  >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 2 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 2 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
            startX,
            y = CONSTANTS.GROUND_HEIGHT,
            pipe;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            pipe = new Kinetic.Rect({
                x: startX,
                y: y - 65,
                width: 90,
                height: 65,
                stroke: 'black',
                fill: '#B5E61D',
                strokeWidth: 2
            });
            layer.add(pipe);

            pipe = new Kinetic.Rect({
                x: startX - 5,
                y: y - 100,
                width: 100,
                height: 35,
                stroke: 'black',
                fill: '#B5E61D',
                strokeWidth: 2
            });
            layer.add(pipe);
        }
    }

    function drawSpecialBricks(startScreen, endScreen) {
        var i,
            len,
            startingPoints = specialBricksInScreenCoordinates.filter(function(coord) {
                return ((coord  >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) || (coord + 1 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 1 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
            startX,
            y = CONSTANTS.FIRST_RAW_BRICK_HEIGHT,
            specialBrick;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            specialBrick = new Kinetic.Rect({
                x: startX,
                y: y,
                width: CONSTANTS.GROUND_CELL_WIDTH,
                height: CONSTANTS.GROUND_CELL_HEIGHT,
                stroke: 'black',
                fill: 'red',
                strokeWidth: 2
            });
            layer.add(specialBrick);
        }
    }

    function drawRegularBricks(startScreen, endScreen) {
        var i,
            len,
            startingPoints = regularBricksInScreenCoordinates.filter(function(coord) {
                return ((coord  >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) ||
                        (coord + 1 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 1 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
            startX,
            y = CONSTANTS.FIRST_RAW_BRICK_HEIGHT,
            regularBrick;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            regularBrick = new Kinetic.Rect({
                x: startX,
                y: y,
                width: CONSTANTS.GROUND_CELL_WIDTH,
                height: CONSTANTS.GROUND_CELL_HEIGHT,
                stroke: 'black',
                fill: 'blue',
                strokeWidth: 2
            });
            layer.add(regularBrick);
        }
    }

    function drawUpStairs(startScreen, endScreen) {
        var i,
            j,
            k,
            len,
            startingPoints = upstairsInScreenCoordinates.filter(function(coord) {
                return ((coord  >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) ||
                        (coord + 4 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 4 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
            startX,
            stairsHeight = 4,
            x,
            y = CONSTANTS.GROUND_HEIGHT,
            stairCell;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            for (j = 1; j <= stairsHeight; j += 1) {
                x = startX + ((j - 1) * CONSTANTS.GROUND_CELL_WIDTH);

                for (k = 1; k <=j; k += 1) {
                    stairCell = new Kinetic.Rect({
                        x: x,
                        y: y - k*CONSTANTS.GROUND_CELL_HEIGHT,
                        width: CONSTANTS.GROUND_CELL_WIDTH,
                        height: CONSTANTS.GROUND_CELL_HEIGHT,
                        stroke: 'black',
                        fill: 'pink',
                        strokeWidth: 2
                    });
                    layer.add(stairCell);
                }
            }

        }
    }

    function drawDownStairs(startScreen, endScreen) {
        var i,
            j,
            k,
            len,
            startingPoints = downstairsInScreenCoordinates.filter(function(coord) {
                return ((coord  >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) ||
                        (coord + 4 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 4 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
            startX,
            stairsHeight = 4,
            x,
            y = CONSTANTS.GROUND_HEIGHT,
            stairCell;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            for (j = 1; j <= stairsHeight; j += 1) {
                x = startX + ((stairsHeight - j) * CONSTANTS.GROUND_CELL_WIDTH);

                for (k = 1; k <=j; k += 1) {
                    stairCell = new Kinetic.Rect({
                        x: x,
                        y: y - k*CONSTANTS.GROUND_CELL_HEIGHT,
                        width: CONSTANTS.GROUND_CELL_WIDTH,
                        height: CONSTANTS.GROUND_CELL_HEIGHT,
                        stroke: 'black',
                        fill: 'pink',
                        strokeWidth: 2
                    });
                    layer.add(stairCell);
                }
            }

        }
    }

    function drawText(startScreen, endScreen) {
        var i,
            len,
            startingPoints = textInScreenCoordinates.filter(function(coord) {
                return ((coord  >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)) ||
                        (coord + 1 >= startScreen / CONSTANTS.GROUND_CELL_WIDTH && coord + 1 <= (endScreen / CONSTANTS.GROUND_CELL_WIDTH)));
            }),
            startX,
            y = CONSTANTS.GROUND_HEIGHT,
            text;

        for (i = 0, len = startingPoints.length; i < len; i += 1) {
            startX = startingPoints[i] * CONSTANTS.GROUND_CELL_WIDTH;

            text = new Kinetic.Text({
                x: startX,
                y: y + 10,
                text: 'JS',
                fontSize: 40,
                fontFamily: 'Arial',
                fill: '#A0F'
            });
            layer.add(text);
        }
    }

    function calculateNewCoordinates(updateX) {
        bigDarkBushesInScreenCoordinates = bigDarkBushesInScreenCoordinates.map(function(itemX) {
            return itemX + updateX;
        });
        smallDarkBushesInScreenCoordinates = smallDarkBushesInScreenCoordinates.map(function(itemX) {
            return itemX + updateX;
        });
        bigLightBushesInScreenCoordinates = bigLightBushesInScreenCoordinates.map(function(itemX) {
            return itemX + updateX;
        });
        smallLightBushesInScreenCoordinates = smallLightBushesInScreenCoordinates.map(function(itemX) {
            return itemX + updateX;
        });
        pipesInScreenCoordinates = pipesInScreenCoordinates.map(function(itemX) {
            return itemX + updateX;
        });
        regularBricksInScreenCoordinates = regularBricksInScreenCoordinates.map(function(itemX) {
            return itemX + updateX;
        });
        specialBricksInScreenCoordinates = specialBricksInScreenCoordinates.map(function(itemX) {
            return itemX + updateX;
        });
        upstairsInScreenCoordinates = upstairsInScreenCoordinates.map(function(itemX) {
            return itemX + updateX;
        });
        downstairsInScreenCoordinates = downstairsInScreenCoordinates.map(function(itemX) {
            return itemX + updateX;
        });
    }

    function drawLandscape() {
        drawSky();
        drawBigDarkBushes(screenStart, screenEnd);
        drawSmallDarkBushes(screenStart, screenEnd);
        drawBigLightBushes(screenStart, screenEnd);
        drawSmallLightBushes(screenStart, screenEnd);
        drawPipes(screenStart, screenEnd);
        drawRegularBricks(screenStart, screenEnd);
        drawSpecialBricks(screenStart, screenEnd);
        drawUpStairs(screenStart, screenEnd);
        drawDownStairs(screenStart, screenEnd);
        drawGround();
        drawText(screenStart, screenEnd);
        hero.draw(heroX, heroY);

    }

    var stage,
        layer,
        heroLayer,
        CONSTANTS = {
            MAP_START : 0,
            MAP_END : 12000,
            MAP_WIDTH : 12000,
            MAP_HEIGHT : 500,
            SCREEN_WIDTH : 1200,
            GROUND_CELL_WIDTH: 50,
            GROUND_CELL_HEIGHT: 50,
            GROUND_HEIGHT: 400,
            FIRST_RAW_BRICK_HEIGHT: 200,
            INITIAL_BIG_DARK_BUSHES_COORDINATES : [0, 49, 97, 147, 208],
            INITIAL_SMALL_DARK_BUSHES_COORDINATES : [17, 65, 113, 172],
            INITIAL_BIG_LIGHT_BUSHES_COORDINATES : [12, 61, 91, 141],
            INITIAL_SMALL_LIGHT_BUSHES_COORDINATES : [25, 43, 73, 109, 121, 180],
            INITIAL_PIPES_COORDINATES : [29, 39, 47, 58, 175, 195],
            INITIAL_SPECIAL_BRICKS_COORDINATES : [17, 22, 24, 66, 67, 68, 89, 107, 110, 113, 131, 134, 157, 158, 159, 165, 166, 182, 184, 186],
            INITIAL_REGULAR_BRICKS_COORDINATES : [21, 23, 25, 65, 69, 88, 90, 95, 101, 102, 119, 132, 133, 160, 161, 162, 163, 164, 167, 168, 183, 185],
            INITIAL_UPSTAIRS_COORDINATES : [137, 200],
            INITIAL_DOWNSTAIRS_COORDINATES : [143, 206],
            INITIAL_TEXT_COORDINATES : [17]
        },
        bigDarkBushesInScreenCoordinates = CONSTANTS.INITIAL_BIG_DARK_BUSHES_COORDINATES,
        smallDarkBushesInScreenCoordinates = CONSTANTS.INITIAL_SMALL_DARK_BUSHES_COORDINATES,
        bigLightBushesInScreenCoordinates = CONSTANTS.INITIAL_BIG_LIGHT_BUSHES_COORDINATES,
        smallLightBushesInScreenCoordinates = CONSTANTS.INITIAL_SMALL_LIGHT_BUSHES_COORDINATES,
        pipesInScreenCoordinates = CONSTANTS.INITIAL_PIPES_COORDINATES,
        specialBricksInScreenCoordinates = CONSTANTS.INITIAL_SPECIAL_BRICKS_COORDINATES,
        regularBricksInScreenCoordinates = CONSTANTS.INITIAL_REGULAR_BRICKS_COORDINATES,
        upstairsInScreenCoordinates = CONSTANTS.INITIAL_UPSTAIRS_COORDINATES,
        downstairsInScreenCoordinates = CONSTANTS.INITIAL_DOWNSTAIRS_COORDINATES,
        textInScreenCoordinates = CONSTANTS.INITIAL_TEXT_COORDINATES,
        screenStart = 0,
        screenEnd = screenStart + CONSTANTS.SCREEN_WIDTH,
        heroX = 250,
        heroY = 300;

    stage = new Kinetic.Stage({
        container: 'container',
        width: CONSTANTS.SCREEN_WIDTH,
        height: CONSTANTS.MAP_HEIGHT,
        fill: 'lightblue'
    });
    layer = new Kinetic.Layer();
    heroLayer = new Kinetic.Layer();

    var hero = {
        top: 300,
        right: 300,
        bottom: 400,
        left: 250,
        draw: function(left, top) {
            var h = new Kinetic.Rect({
                x: left,
                y: top,
                width: 50,
                height: 100,
                stroke: 'yellow',
                fill: 'orange',
                strokeWidth: 2
            });
            layer.add(h);
        }
    };

    document.body.addEventListener('keydown', function(ev) {
        var update;

        switch (ev.keyCode) {
            case 37:
                update = 1;
                break; // left
            case 39:
                update = -1;
                break; // right
        }

        console.log('Clicked');
        layer = new Kinetic.Layer();
        calculateNewCoordinates(update);
        drawLandscape();
        return stage.add(layer);
    });

    //TODO: Make holes - 70-72, 87-90, 165-167, 167-171
    //TODO: Second  raw of bricks
    //TODO: Enemies
    //TODO: Create second layer
    //TODO: Create svg for statistics
    //TODO: Arrays with coordinates of objects
    //TODO: Hero object
    //TODO: Events for keyboard arrows
    //TODO: Implement bonusJS for special bricks

    function anim() {
        layer = new Kinetic.Layer();
        drawLandscape();
        //setTimeout(anim, 10);
        return stage.add(layer);
    }

    anim();

};