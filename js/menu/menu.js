
var Menu = {
    obj: document.getElementById("menu"),
    width: 0,
    hidden: true,
    logo: document.getElementById("logo_menu"),

    start: function () {
        Menu.OpenButton.start();
        Menu.CloseButton.start();
        Menu.left = -(Menu.width);
        Menu.MenuItems.parseItems();
        Menu.hide();
    },

    show: function() {
        Menu.hidden = false;
        Menu.obj.style.left = "0px";
        Menu.CloseButton.obj.style.transform = "rotate(180deg)";
        Menu.logo.style.transform = "scale(1)";
    },

    hide: function() {
        Menu.hidden = true;
        Menu.obj.style.left = -(Menu.width) + "px";
        Menu.CloseButton.obj.style.transform = "none";
        Menu.logo.style.transform = "scale(0)";
    },

    CloseButton: {
        obj: document.getElementById("close_menu_button"),

        show: function() {
            Menu.CloseButton.obj.hidden = "";
        },

        hide: function() {
            Menu.CloseButton.obj.hidden = "hidden";
        },

        start: function() {
            Menu.CloseButton.obj.onmouseout = Menu.CloseButton.onOut;
            Menu.CloseButton.obj.onmouseover = Menu.CloseButton.onOver;
            Menu.CloseButton.obj.onclick = Menu.hide;
        },

        onOver: function () {
            this.style.opacity = 0.4;
            this.style.cursor = "pointer";
        },

        onOut: function () {
            this.style.opacity = 1;
        },
    },

    OpenButton: {

        obj: document.getElementById("open_menu_button"),

        start: function () {
            Menu.OpenButton.obj.onclick = Menu.show;
            Menu.OpenButton.obj.onmouseover = Menu.OpenButton.onOver;
            Menu.OpenButton.obj.onmouseout = Menu.OpenButton.onOut;
        },

        onOut: function () {
            this.style.opacity = 1;
        },

        onOver: function () {
            this.style.opacity = 0.4;
            this.style.cursor = "pointer";
        }
    },

    MenuItems: {
        obj: 0,
        menu_elements: document.getElementById("menu_elements"),

        parseItems: function () {
            Menu.MenuItems.menu_elements.innerHTML = "<p class=\"menu_item\">ВСЕ ПРОЕКТЫ</p>";
            var list_projects = [];
            for (var i = 0; i < projects.length; i++) {
                if (list_projects.indexOf(projects[i].section.toUpperCase()) == -1) {
                    Menu.MenuItems.menu_elements.innerHTML += '<p class="menu_item">' + projects[i].section.toUpperCase() + '<p class="menu_item">' + projects[i].section.toUpperCase() + '<p class="menu_item">' + projects[i].section.toUpperCase() + '<p class="menu_item">' + projects[i].section.toUpperCase() + '<p class="menu_item">' + projects[i].section.toUpperCase() + '<p class="menu_item">' + projects[i].section.toUpperCase() + '<p class="menu_item">' + projects[i].section.toUpperCase() + '<p class="menu_item">' + projects[i].section.toUpperCase() + '<p class="menu_item">' + projects[i].section.toUpperCase() + '<p class="menu_item">' + projects[i].section.toUpperCase() + '<p class="menu_item">' + projects[i].section.toUpperCase();
                    list_projects.push(projects[i].section.toUpperCase());
                }
            }
            Menu.MenuItems.menu_elements.innerHTML += "------------<br><p class=\"menu_item\">КОНТАКТЫ</p>";

            obj = document.getElementsByClassName("menu_item");
            for (var i = 0; i < obj.length; i++) {
                obj[i].onmouseover = Menu.MenuItems.onOver;
                obj[i].onmouseout = Menu.MenuItems.onOut;
                obj[i].onclick = Menu.MenuItems.onClick;
            }
        },

        onOver: function () {
            this.style.cursor = "pointer";
            this.style.color = "rgb(249, 135, 12)";
        },

        onOut: function () {
            this.style.color = "white";
        },

        onClick: function () {
            ProjectShower.showSection(this.innerHTML);
        }
    }
}