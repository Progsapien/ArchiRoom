

(function () {
    var buttons = document.getElementsByClassName("background_switcher_buttons");
    var background_switcher = document.getElementById("background_switcher");
    var name_project_button = document.getElementById("name_project_button");


    // Для 0 и 2 действия из background_image.js

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onmouseover = onOverButton;
        buttons[i].onmouseout = onOutButton;
        buttons[i].onclick = onClickButtons;
    }

    // ..

    function onClickButtons() {
        if (this == buttons[0]) {
            name_project_button.innerHTML = previousBackgroundImage();
        } else if (this == buttons[2]) {
            name_project_button.innerHTML = nextBackgroundImage();
        }
    }

    function onOverButton() {
        this.style.background = "rgba(255,255,255,0.8)";
        this.style.cursor = "pointer";
    }

    function onOutButton() {
        this.style.background = "rgba(200,200,200,0.8)";
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
        name_project_button.innerHTML = nextBackgroundImage();
    }

    functions_load.push(onLoadWindow);
    functions_resize.push(onResizeWindow);

}())
