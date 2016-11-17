

(function () {

    var menu = document.getElementById("menu");
    var open_menu = document.getElementById("logo_menu_open");
    var close_menu_button = document.getElementById("close_menu_button");
    var menu_items = document.getElementsByClassName("menu_item");
    var menu_elements = document.getElementById("menu_elements");
    var open_menu_button = document.getElementById("open_menu_button");
    var timer_id;
    var hidden = true;
    var left;
    var width = 0;

    // ..

    function onLoad() {
        onResize();
        menu.hidden = "";
    }

    function onResize() {
        if (document.documentElement.clientWidth < 1000) {
            width = document.documentElement.clientWidth;
            menu.style.height = document.documentElement.clientHeight - 70 + "px";
            menu.style.fontSize = "200%";
        } else {
            width = 300;
            menu.style.height = document.documentElement.clientHeight - 20 + "px";
            menu.style.fontSize = "100%";
        }
        if (hidden) {
            left = -width;
        } else {
            left = 0;
        }
        menu.style.width = width-20 + "px";
        menu.style.left = left+"px";
    }

    // Menu layout

    function showMenu() {
        if (left < 0) {
            left += 15;
        } else {
            left = 0;
            clearInterval(timer_id);
            hidden = false;
        }
        menu.style.left = left + "px";
    }

    function hideMenu() {
        if (left > -(width)) {
            left -= 15;
        } else {
            left = -(width);
            hidden = true;
            open_menu.hidden = "";
            clearInterval(timer_id);
        }
        menu.style.left = left + "px";
    }

    // Close button

    function onOverCloseButton() {
        this.style.opacity = 0.4;
        this.style.cursor = "pointer";
    }

    function onOutCloseButton() {
        this.style.opacity = 1;
    }

    close_menu_button.onclick = function () {
        timer_id = setInterval(hideMenu, 1);
    }

    // Open button

    open_menu_button.onmouseover = function () {
        this.style.cursor = "pointer";
        this.style.opacity = 0.4;
    }

    open_menu_button.onmouseout = function () {
        this.style.opacity = 1;
    }

    open_menu_button.onclick = function () {
        open_menu.hidden = "hidden";
        timer_id = setInterval(showMenu, 1);
    }

    // Menu items;

    function parseItems() {
        menu_elements.innerHTML = "<p class=\"menu_item\">ВСЕ ПРОЕКТЫ</p>";
        var list_projects = [];
        for (var i = 0; i < projects.length; i++) {
            if (list_projects.indexOf(projects[i].section.toUpperCase()) == -1) {
                menu_elements.innerHTML += '<p class="menu_item">' + projects[i].section.toUpperCase() + "</p>";
                list_projects.push(projects[i].section.toUpperCase());
            }
        }
        menu_elements.innerHTML += "------------<br><p class=\"menu_item\">КОНТАКТЫ</p>";
        configItems();
    }

    function configItems() {
        for (var i = 0; i < menu_items.length; i++) {
            menu_items[i].onmouseover = onOverItem;
            menu_items[i].onmouseout = onOutItem;
            menu_items[i].onclick = onClickItem;
        }
    }

    function onOverItem() {
        this.style.cursor = "pointer";
        this.style.color = "rgb(249, 135, 12)";
    }

    function onOutItem() {
        this.style.color = "white";
    }

    function onClickItem() {
        console.log(123);
        project_showSection(this.innerHTML);
    }

    // ....

    close_menu_button.onmouseover = onOverCloseButton;
    close_menu_button.onmouseout = onOutCloseButton;
    parseItems();

    functions_load.push(onLoad);
    functions_resize.push(onResize);
}())