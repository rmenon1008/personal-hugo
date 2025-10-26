//Create a stage by getting a reference to the canvas

setTimeout(() => {
    const stage = new createjs.Stage("inbetween-title-canvas");
    stage.enableMouseOver();
    const catWalkLength = document.getElementById("inbetween-title-canvas").width;
    console.log(catWalkLength);

    const blueSheet = new createjs.SpriteSheet({
        framerate: 8,
        images: ["/media/blue_walking.png"],
        frames: { regX: 0, regY: 0, width: 18, height: 16, count: 25 },
        animations: {
            walk: [0, 7, "walk", 6 / 8],
            walkToSit: [8, 9, "sit", 7 / 8],
            sit: [10, 17, "sit", 4 / 8],
            nuzzleEnter: [18, 18, "nuzzle", 6 / 8],
            nuzzle: [19, 22, "nuzzle", 8 / 8],
            nuzzleExit: [23, 24, "sit", 6 / 8],
        },
    });

    const lucySheet = new createjs.SpriteSheet({
        framerate: 8,
        images: ["/media/lucy_walking.png"],
        frames: { regX: 0, regY: 0, width: 18, height: 16, count: 25 },
        animations: {
            walk: [0, 7, "walk", 8 / 8],
            walkToSit: [8, 9, "sit", 8 / 8],
            sit: [10, 17, "sit", 7 / 8],
            nuzzleEnter: [18, 18, "nuzzle", 6 / 8],
            nuzzle: [19, 22, "nuzzle", 8 / 8],
            nuzzleExit: [23, 24, "sit", 6 / 8],
        },
    });

    const blue = new createjs.Sprite(blueSheet, "walk");
    const lucy = new createjs.Sprite(lucySheet, "walk");
    blue.gotoAndPlay("walk");
    lucy.gotoAndPlay("walk");
    blue.x = catWalkLength;
    lucy.x = catWalkLength + 70;
    blue.addEventListener("mousedown", nuzzleEnterBlue);
    blue.addEventListener("pressup", nuzzleExitBlue);
    lucy.addEventListener("mousedown", nuzzleEnterLucy);
    lucy.addEventListener("pressup", nuzzleExitLucy);
    stage.addChild(blue);
    stage.addChild(lucy);
    createjs.Ticker.framerate = 8;
    createjs.Ticker.addEventListener("tick", tick);

    function tick(event) {
        if (blue.currentAnimation === "walk") {
            blue.x -= 2;

            if (blue.x <= 0) {
                blue.gotoAndPlay("walkToSit");
            }
        }
        if (lucy.currentAnimation === "walk") {
            lucy.x -= 3;

            if (lucy.x <= 10) {
                lucy.gotoAndPlay("walkToSit");
            }
        }
        stage.update(event);
    }

    function nuzzleEnterBlue() {
        if (blue.currentAnimation === "sit") {
            blue.gotoAndPlay("nuzzleEnter");
        }
    }

    function nuzzleEnterLucy() {
        if (lucy.currentAnimation === "sit") {
            lucy.gotoAndPlay("nuzzleEnter");
        }
    }

    function nuzzleExitBlue() {
        if (blue.currentAnimation === "nuzzle" || blue.currentAnimation === "nuzzleEnter") {
            blue.gotoAndPlay("nuzzleExit");
        }
    }

    function nuzzleExitLucy() {
        if (lucy.currentAnimation === "nuzzle" || lucy.currentAnimation === "nuzzleEnter") {
            lucy.gotoAndPlay("nuzzleExit");
        }
    }
}, 100);