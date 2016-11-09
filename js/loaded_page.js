

(function () {

    window.onload = onLoad;
    window.onresize = onResize;

    function onLoad() {
        for (var i = 0; i != functions_load; i++) {
            functions_load[i]();
        }
    }

    function onResize() {
        for (var i = 0; i != functions_resize; i++) {
            functions_resize[i]();
        }
    }
}())