var arr = [], counter, ended = false;
function restartGame() {
    document.getElementById("start").style.display = "none";
    document.getElementById("group").style.display = "inline";
    ended = false;
    counter = 0;
    document.getElementById("buttonsArea").innerHTML="";
}

function createButtons() {
    var buttons = document.getElementById("buttonNr").value;
    buttons = (buttons < 3) ? 3 : buttons;
    arr.length = buttons;
    var rightButton = Math.floor(Math.random() * buttons) + 1;
    var buttonsArea = document.getElementById("buttonsArea");
    for (let i = 0; i < buttons; i++) {
        arr[i] = (i == rightButton - 1) ? 1 : 0;
        let nr = i + 1;
        buttonsArea.innerHTML += "<button class='buttons' onclick='endGame(" + 
        i + ")'>Button " + nr + "</button>";
    }
    document.getElementById("group").style.display = "none";
    document.getElementById("start").style.display = "inline";
}

function endGame(id) {
    counter++;
    if (ended) {
        return;
    }
    if (arr[id] == 1) {
        alert("You guessed the button");
        ended = true;
        return;
    } else {
        alert("wrong button");
    }
    if (counter == 3) {
        alert("Game over");
        ended = true;
    }
}