function setup() {
    createCanvas(1600, 1000);
    background(0,0,0);

    //cyan
    stroke(0,262,244);
    noFill();
    for(var i = 24; i < 10000; i = i + 200) {
        for(var n = 0; n < 10000; n = n + 1000)
        circle(10000 - i, n, i / 10);
    }
    
    //yellow
    stroke(225,225,0);
    noFill();
    for(var n = 0; n < 1000; n = n + 20){
        circle(800, n, 1600);
    }

    //magenta
    stroke(255, 0, 81);
    noFill();
    for(var n = 0; n < 1000; n = n + 25) {
        circle(400, n, 800);
        circle(1200, n, 800);
    }

}