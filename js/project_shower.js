
(function () {

    // Извлекаем объекты

    var project_shower = document.getElementById("project_shower");
    var shower_buttons = document.getElementById("shower_buttons");
    var about_project = document.getElementById("about_project");
    var left = 0;
    var width = 0;
    var hidden = true;
    var timer_id;

    // ...

    function onLoad() {
        onResize();
    }

    function onResize() {

        width = document.documentElement.clientWidth < 1000 ? document.documentElement.clientWidth : document.documentElement.clientWidth - 300;

        left = hidden ? -width : 0;

        project_shower.style.height = document.documentElement.clientHeight + "px";
        project_shower.style.left = left + "px";
        project_shower.style.width = width + "px";
        console.log(project_shower.style.left + " " + project_shower.style.width);
    }

    function showSection(sectionNumber) {

    }

    function showProject(projectNumber) {

    }

    function showContacts() {

    }

    function show() {
        if (document.documentElement.clientWidth < 1000) {
            left < 0 ? left += 15 : left = 0;
            left == 0 ? clearInterval(timer_id) : 0;
        } else {
            left < 300 ? left += 15 : left = 300;
            left == 300 ? clearInterval(timer_id) : 0;
        }

        project_shower.style.left = left + "px";
        console.log(123);
    }

    functions_load.push(onLoad);
    functions_resize.push(onResize);
    timer_id = setInterval(show, 1);
}())