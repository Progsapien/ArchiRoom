
project_showSection = null;

(function () {

    // Извлекаем объекты

    var project_shower = document.getElementById("project_shower");
    var shower_buttons = document.getElementById("shower_buttons");
    var about_project = document.getElementById("about_project");
    var project = document.getElementById("project");
    var project_label = document.getElementById("project_label");
    var close_button = document.getElementById("close_project_button");
    var top = 0;
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

        top = hidden ? width : 0;
        if (document.documentElement.clientWidth > 1000) {
            left = 300;
        } else {
            left = 0;
        }

        project_shower.style.height = document.documentElement.clientHeight + "px";
        project_shower.style.left = left + "px";
        project_shower.style.top = top + "px";
        project_shower.style.width = width + "px";
        shower_buttons.style.width = width + "px";
        console.log(project_shower.style.left + " " + project_shower.style.width);
    }


    // Close button;

    close_button.onmouseover = function () {
        this.style.opacity = 0.4;
        this.style.cursor = "pointer";
    }

    close_button.onmouseout = function () {
        this.style.opacity = 1;
    }

    close_button.onclick = function () {
        clearInterval(timer_id);
        timer_id = setInterval(hide, 1);
    }
    // .. 

    function showSection(section) {

        top = document.documentElement.clientHeight / 2;

        timer_id = setInterval(show, 1);
        project_label.innerHTML = section;

        for (var i = 0; i != projects.length; i++) {
            if (section == projects[i].section.toUpperCase()) {
                //project_label.innerHTML += projects[i].title;
            }
        }
    }

    function showProject(projectNumber) {

    }

    function show() {
        console.log(2);
        if (hidden) {
            top > 0 ? top -= 15 : top = 0;

            if (top == 0) {
                clearInterval(timer_id);
                hidden = false;
            }

            project_shower.style.top = top + "px";
        } else {
            clearInterval(timer_id);
        }

    }

    function hide() {
        if (!hidden) {
            top < width ? top += 15 : top = width;
            if (top == width) {
                clearInterval(timer_id);
                hidden = true;
            }
            project_shower.style.top = top + "px";
        } else {
            clearInterval(timer_id);
        }
    }

    functions_load.push(onLoad);
    functions_resize.push(onResize);
    project_showSection = showSection;

}())