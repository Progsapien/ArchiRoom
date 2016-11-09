
(function () {

    var menu = document.getElementById("menu");
    var close_menu_button = document.getElementById("close_menu_button");
    var menu_items = document.getElementsByClassName("menu_item");
    var open_menu_button = document.getElementById("open_menu_button");
    var timer_id;
    var menu_layout_position;
    var hidden = true;
    // ..

    function onLoad() {
        onResize();
       // showMenu();
    }

    function onResize() {
        if (document.documentElement.clientWidth < 1000) {
            menu.style.width = document.documentElement.clientWidth-20 + "px";
            menu.style.height = document.documentElement.clientHeight - 65 + "px";
            menu.style.fontSize = "200%";
        } else {
            menu.style.width = "300px";
            menu.style.height = document.documentElement.clientHeight - 20 + "px";
            menu.style.fontSize = "100%";
        }
    }

    // Menu layout

    function showMenu() {
        if (timer_id == -1) {
            timer_id = setInterval(showMenu, 1);
        } else {
            console.log(1);
            if (menu.style.top < 0) {
                menu.style.top -= 0.1;
            } else {
                menu.style.top = 0;
                clearInterval(timer_id);
                timer_id = -1;
            }
        }
        console.log("stopped");
    }

    function closeMenu() {

    }

    // Close button

    function onOverCloseButton() {
        this.style.opacity = 0.4;
        this.style.cursor = "pointer";
    }

    function onOutCloseButton() {
        this.style.opacity = 1;
    }

    // Open button

    open_menu_button.onmouseover = function () {
        this.style.cursor = "pointer";
    }

    open_menu_button.onclick = showMenu;

    // Menu items;

    function parseItems() {

    }

    function configItems() {
        for (var i = 0; i < menu_items.length; i++) {
            menu_items[i].onmouseover = onOverItem;
            menu_items[i].onmouseout = onOutItem;
        }
    }

    function onOverItem() {
        this.style.cursor = "pointer";
        this.style.color = "rgb(249, 135, 12)";
    }

    function onOutItem() {
        this.style.color = "white";
    }

    close_menu_button.onmouseover = onOverCloseButton;
    close_menu_button.onmouseout = onOutCloseButton;
    
    configItems();

    functions_load.push(onResize);
    functions_resize.push(onResize);
}())