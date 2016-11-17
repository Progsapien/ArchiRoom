
projects = [];

functions_load = [];
functions_resize = [];

var request = new XMLHttpRequest();
request.open("GET", "php/parseProjects.php", false);
request.onload = function () {

    projects = JSON.parse(this.responseText);
    projects.length = projects.length - 1;

    for (var i = 0; i != projects.length; i++) {
        projects[i].pictures.length = projects[i].pictures.length - 1;
    }

}

request.send();