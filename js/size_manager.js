
var SizeManager = {

    // Извлекаем объекты

    background_image: document.getElementById("background_image"),
    loader_background_image: document.getElementById("loader_background_image"),
    logo_menu_open: document.getElementById("logo_menu_open"),
    background_switcher: document.getElementById("background_switcher"),
    project_shower: document.getElementById("project_shower"),
    
    // ..

    client_width: document.body.offsetWidth,
    client_height: document.body.offsetHeight,

    // functions

    onResize: function () {
        SizeManager.client_width = document.documentElement.clientWidth;
        SizeManager.client_height = document.documentElement.clientHeight;

        // Background Image Config

        BackgroundImage.obj.style.width = SizeManager.client_width + "px";
        BackgroundImage.obj.style.height = SizeManager.client_height + 20 + "px";
        BackgroundImage.loader_background_image.style.left = SizeManager.client_width / 2 + "px";
        BackgroundImage.loader_background_image.style.top = SizeManager.client_height / 2 + "px";
        
        if (SizeManager.client_width < 1000) {

            // Menu
            Menu.width = SizeManager.client_width;
            Menu.obj.style.height = SizeManager.client_height - 70 + "px";
            Menu.obj.style.fontSize = "200%";

            // BackgroundSwitcher

            BackgroundSwitcher.obj.style.width = SizeManager.client_width + "px";
            BackgroundSwitcher.obj.style.left = "0px";
            BackgroundSwitcher.obj.style.bottom = "0px";
            BackgroundSwitcher.obj.style.right = "";

            // Project shower

            ProjectShower.width = SizeManager.client_width;

        } else {

            // Menu

            Menu.obj.style.height = SizeManager.client_height - 20 + "px";
            Menu.obj.style.fontSize = "100%";
            Menu.width = 300;

            // BackgroundSwitcher

            BackgroundSwitcher.obj.style.left = "";
            BackgroundSwitcher.obj.style.width = "300px";
            BackgroundSwitcher.obj.style.right = "30px";
            BackgroundSwitcher.obj.style.bottom = "30px";

            // Project shower

            ProjectShower.width = SizeManager.client_width - Menu.width;

        }

        ProjectShower.obj.style.height = SizeManager.client_height + "px";
        ProjectShower.obj.style.width = ProjectShower.width + "px";
        ProjectShower.Header.obj.style.width = ProjectShower.obj.style.width;

        if (Menu.hidden) {
            Menu.obj.style.left = -(Menu.width) + "px";
        } else {
            Menu.obj.style.left = "0px";
        }

        if (ProjectShower.hidden) {
            ProjectShower.obj.style.left = -(ProjectShower.width) + "px";
        } else {
            if (SizeManager.client_width < 1000) {
                ProjectShower.obj.style.left = "0px";
            } else {
                ProjectShower.obj.style.left = Menu.width + "px";
            }
        }



        Menu.obj.style.width = Menu.width - 20 + "px";
    }
}

window.onresize = SizeManager.onResize;