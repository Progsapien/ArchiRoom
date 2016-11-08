
var buttons = document.getElementsByClassName("background_switcher_buttons");


// Для 0 и 2 действия из background_image.js

buttons[0].onclick = previousImage;
buttons[2].onclick = nextImage;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onmouseover = onOverButton;
    buttons[i].onmouseout = onOutButton;
}

// ..

function onOverButton() {
    this.style.background = "white";
    this.style.cursor = "pointer";
}

function onOutButton() {
    this.style.background = "rgba(255,255,255,0.8)";
}