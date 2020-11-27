var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 4, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2],
    [2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 4, 2, 2, 2, 0, 2, 0, 2, 2, 2, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 0, 2, 2, 0, 2, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 2, 2, 0, 2, 1, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 1, 2, 0, 2, 2, 2, 2, 2, 0, 2, 1, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 4, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 2, 1, 1, 1, 2],
    [2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2],
    [2, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
// horizontal tengo x 735px
// vertical tengo y 770px
var pac = {
    x: 0,
    y: 0
};
var ghost1 = {
    x: 0,
    y: 0
}
var ghost2 = {
    x: 0,
    y: 0
}

function displayPacman() {
    var output = '';
    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] === 2)
                output += "<div class='brick'></div>";
            else if (world[i][j] === 1)
                output += "<div class='coin'></div>";
            else if (world[i][j] === 0)
                output += "<div class='empty'></div>";
            else {
                output += "<div class='cereza'></div>";
            }
        }
        output += "\n</div>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPac() {
    document.getElementById('pac').style.top = pac.y + 35 + "px"
    document.getElementById('pac').style.left = pac.x + 35 + "px"
        // document.getElementById('pac').style.bottom = pac.y + 35 + "px"
        // document.getElementById('pac').style.right = pac.x + 35 + "px"
}

function displayGhost() {
    document.getElementById('ghost1').style.bottom = ((ghost1.y + 35) * 11) + "px"
    document.getElementById('ghost1').style.right = ((ghost1.x + 35) * -10) + "px"
    document.getElementById('ghost2').style.bottom = ((ghost2.y + 35) * 11) + "px"
    document.getElementById('ghost2').style.left = ((ghost2.x + 35) * 10) + "px"
}
displayGhost();
displayPacman();
displayPac();


document.onkeydown = function(z) {
    if (z.keyCode === 37) {
        pac.x -= 35;
        if (world[((pac.y / 35) + 1)][((pac.x / 35) + 1)] === 2) {
            pac.x += 35;
        }
    } else if (z.keyCode === 39) {
        pac.x += 35;
        if (world[((pac.y / 35) + 1)][((pac.x / 35) + 1)] === 2) {
            pac.x -= 35;
        }
    } else if (z.keyCode === 38) {
        pac.y -= 35;
        if (world[((pac.y / 35) + 1)][((pac.x / 35) + 1)] === 2) {
            pac.y += 35;
        }
    } else if (z.keyCode === 40) {
        pac.y += 35;
        if (world[((pac.y / 35) + 1)][((pac.x / 35) + 1)] === 2) {
            pac.y -= 35;
        }
    }
    if (world[((pac.y / 35) + 1)][((pac.x / 35) + 1)] === 1) {
        world[((pac.y / 35) + 1)][((pac.x / 35) + 1)] = 0;

    }
    if (world[((pac.y / 35) + 1)][((pac.x / 35) + 1)] === 4) {
        world[((pac.y / 35) + 1)][((pac.x / 35) + 1)] = 0;
    }

    displayPacman();
    displayPac();
    displayGhost();
    // console.log(z.keyCode);
}


// abajo 40
// arriba 38
// left 37
// rigth 39


// \n nueva linea de texto
// \t espacio dado con tab