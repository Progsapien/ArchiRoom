
var Menu = {
    obj: document.getElementById("menu"),

    // ...

    timer_id: 0,
    width: 0,
    left: 0,

    start: function () {
        Menu.OpenButton.start();
        Menu.CloseButton.start();
        Menu.left = -(Menu.width);
        Menu.MenuItems.parseItems();
    },

    showMenu: function () {
        if(Menu.left < 0) {
            Menu.left += 15;
            Menu.obj.hidden = "";
        } else {
            Menu.left = 0;
            clearInterval(Menu.timer_id);
        }
        Menu.obj.style.left = Menu.left + "px";
    },

    hideMenu: function() {
        if (Menu.left > -(Menu.width)) {
            Menu.left -= 15;
        } else {
            Menu.left = -(Menu.width);
            clearInterval(Menu.timer_id);
            Menu.obj.hidden = "hidden";
        }
        Menu.obj.style.left = Menu.left + "px";
    },

    CloseButton: {
        obj: document.getElementById("close_menu_button"),

        start: function() {
            Menu.CloseButton.obj.onmouseout = Menu.CloseButton.onOut;
            Menu.CloseButton.obj.onmouseover = Menu.CloseButton.onOver;
            Menu.CloseButton.obj.onclick = Menu.CloseButton.onClick;
        },

        onOver: function () {
            this.style.opacity = 0.4;
            this.style.cursor = "pointer";
        },

        onOut: function () {
            this.style.opacity = 1;
        },

        onClick: function() {
            Menu.timer_id = setInterval(Menu.hideMenu, 1);
        }
    },

    OpenButton: {

        obj: document.getElementById("open_menu_button"),

        start: function () {
            Menu.OpenButton.obj.onclick = Menu.OpenButton.onClick;
            Menu.OpenButton.obj.onmouseover = Menu.OpenButton.onOver;
            Menu.OpenButton.obj.onmouseout = Menu.OpenButton.onOut;
        },

        onClick: function () {
            Menu.timer_id = setInterval(Menu.showMenu, 1);
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
                    Menu.MenuItems.menu_elements.innerHTML += '<p class="menu_item">' + projects[i].section.toUpperCase() + "</p>";
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