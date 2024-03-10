//Create a stage by getting a reference to the canvas

setTimeout(() => {
    const stage = new createjs.Stage("inbetween-title-canvas");
    const catWalkLength = document.getElementById("inbetween-title-canvas").width;
    console.log(catWalkLength);

    const spriteSheet = new createjs.SpriteSheet({
    framerate: 8,
    images: ["/media/cat_walking.png"],
    frames: { regX: 0, regY: 0, width: 18, height: 15, count: 17 },
    animations: {
        walk: [0, 7, "walk", 8/8],
        sitWalk: [8, 8, "sit", 4/8],
        sit: [9, 16, "sit", 2/8],
    },
    });

    const cat = new createjs.Sprite(spriteSheet, "walk");
    cat.gotoAndPlay("walk");
    cat.x = catWalkLength;
    stage.addChild(cat);

    createjs.Ticker.framerate = 8;
    createjs.Ticker.addEventListener("tick", tick);

    function tick(event) {
    if (cat.currentAnimation === "walk") {
        cat.x -= 2;

        if (cat.x <= 0) {
            cat.gotoAndPlay("sitWalk");
        }
    }
    stage.update(event);
    }
}, 100);