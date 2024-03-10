//Create a stage by getting a reference to the canvas

setTimeout(() => {
    const stage = new createjs.Stage("inbetween-title-canvas");
    stage.enableMouseOver();
    const catWalkLength = document.getElementById("inbetween-title-canvas").width;
    console.log(catWalkLength);

    const spriteSheet = new createjs.SpriteSheet({
        framerate: 8,
        images: ["/media/cat_walking.png"],
        frames: { regX: 0, regY: 0, width: 18, height: 16, count: 25 },
        animations: {
            walk: [0, 7, "walk", 8 / 8],
            walkToSit: [8, 9, "sit", 8 / 8],
            sit: [10, 17, "sit", 5 / 8],
            nuzzleEnter: [18, 18, "nuzzle", 6 / 8],
            nuzzle: [19, 22, "nuzzle", 6 / 8],
            nuzzleExit: [23, 24, "sit", 6 / 8],
        },
    });

    const cat = new createjs.Sprite(spriteSheet, "walk");
    cat.gotoAndPlay("walk");
    cat.x = catWalkLength;
    cat.addEventListener("mousedown", nuzzleEnter);
    cat.addEventListener("pressup", nuzzleExit);
    stage.addChild(cat);

    createjs.Ticker.framerate = 8;
    createjs.Ticker.addEventListener("tick", tick);

    function tick(event) {
        if (cat.currentAnimation === "walk") {
            cat.x -= 2;

            if (cat.x <= 0) {
                cat.gotoAndPlay("walkToSit");
            }
        }
        stage.update(event);
    }

    function nuzzleEnter() {
        if (cat.currentAnimation === "sit") {
            cat.gotoAndPlay("nuzzleEnter");
        }
    }

    function nuzzleExit() {
        if (cat.currentAnimation === "nuzzle" || cat.currentAnimation === "nuzzleEnter") {
            cat.gotoAndPlay("nuzzleExit");
        }
    }
}, 100);