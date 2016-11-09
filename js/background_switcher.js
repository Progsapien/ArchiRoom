

(function () {
    var buttons = document.getElementsByClassName("background_switcher_buttons");
    var background_switcher = document.getElementById("background_switcher");


    // Для 0 и 2 действия из background_image.js

    buttons[0].onclick = previousBackgroundImage;
    buttons[2].onclick = nextBackgroundImage;

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onmouseover = onOverButton;
        buttons[i].onmouseout = onOutButton;
    }

    // ..

    function onOverButton() {
        this.style.background = "rgba(200,200,200,0.8)";
        this.style.cursor = "pointer";
    }

    function onOutButton() {
        this.style.background = "rgba(255,255,255,0.8)";
    }

    function onResizeWindow() {

        if (document.documentElement.clientWidth < 1000) {
            background_switcher.style.width = document.documentElement.clientWidth + "px";
            background_switcher.style.left = "0px";
            background_switcher.style.bottom = "0px";
            background_switcher.style.right = "";
        } else {
            background_switcher.style.left = "";
            background_switcher.style.width = "300px";
            background_switcher.style.right = "30px";
            background_switcher.style.bottom = "30px";
        }
    }

    function onLoadWindow() {
        onResizeWindow();
    }

    functions_load.push(onLoadWindow);
    functions_resize.push(onResizeWindow);

}())
