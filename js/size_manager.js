
var SizeManager = {

    // Извлекаем объекты

    background_image: document.getElementById("background_image"),
    loader_background_image: document.getElementById("loader_background_image"),
    logo_menu_open: document.getElementById("logo_menu_open"),
    background_switcher: document.getElementById("background_switcher"),
    project_shower: document.getElementById("project_shower"),
    
    // ..

    client_width: document.documentElement.clientWidth,
    client_height: document.documentElement.clientHeight,

    // functions

    onResize: function () {
        SizeManager.client_width = document.documentElement.clientWidth;
        SizeManager.client_height = document.documentElement.clientHeight;
        // Background Image Config

        SizeManager.background_image.style.width = SizeManager.client_width + "px";
        SizeManager.background_image.style.height = SizeManager.client_height + "px";
        SizeManager.loader_background_image.style.left = SizeManager.client_width / 2 + "px";
        SizeManager.loader_background_image.style.top = SizeManager.client_height / 2 + "px";
        
        if (SizeManager.client_width < 1000) {

            // Background image

            SizeManager.background_switcher.style.width = SizeManager.client_width + "px";
            SizeManager.background_switcher.style.left = "0px";
            SizeManager.background_switcher.style.bottom = "0px";
            SizeManager.background_switcher.style.right = "";

            // Menu
            Menu.width = SizeManager.client_width;
            Menu.obj.style.height = SizeManager.client_height - 70 + "px";
            Menu.obj.style.fontSize = "200%";

        } else {

            // Background image

            SizeManager.background_switcher.style.left = "";
            SizeManager.background_switcher.style.width = "300px";
            SizeManager.background_switcher.style.right = "30px";
            SizeManager.background_switcher.style.bottom = "30px";

            // Menu

            Menu.obj.style.height = SizeManager.client_height - 20 + "px";
            Menu.obj.style.fontSize = "100%";
            Menu.width = 300;
        }
        if (Menu.obj.hidden) {
            Menu.obj.left = -(Menu.width);
            Menu.left = -(Menu.width);
        } else {
            Menu.left = 0;
        }

        Menu.obj.style.width = Menu.width - 20 + "px";
        Menu.obj.style.left = Menu.left + "px";
    }
}

window.onresize = SizeManager.onResize;