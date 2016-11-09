
(function () {
    var menu = document.getElementById("menu");


    // ..

    function onLoad() {
        onResize();
    }

    function onResize() {
        if (document.documentElement.clientWidth < 900) {
            menu.style.width = document.documentElement.clientWidth-20 + "px";
            menu.style.height = document.documentElement.clientHeight - 65 + "px";
        } else {
            menu.style.width = "20%";
            menu.style.height = document.documentElement.clientHeight-20 + "px";
        }
    }

    functions_load.push(onResize);
    functions_resize.push(onResize);
}())