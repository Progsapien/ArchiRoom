
projects = [];

functions_load = [];
functions_resize = [];

var request = new XMLHttpRequest();
request.open("GET", "php/parseProjects.php", false);
request.onload = function () {
    console.log(this.responseText);
    projects = JSON.parse(this.responseText);
    projects.length = projects.length - 1;
    for (var i = 0; i != projects.length; i++) {
        projects[i].pictures.length = projects[i].pictures.length - 1;
    }
    console.log(projects[0].pictures + " " + projects[1].pictures);
}

request.send();