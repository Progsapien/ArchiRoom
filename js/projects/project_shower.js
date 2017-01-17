var ProjectShower = {

    obj: document.getElementById("project_shower"),
    top: 0,
    timer_id: 0,

    showProject: function(project_index) {

    },

    showSection: function (section_title) {
        //..
        if (ProjectShower.obj.hidden != "") {
            ProjectShower.show();
        }
    },

    show: function () {
        ProjectShower.obj.hidden = "";
        ProjectShower.timer_id = setInterval(ProjectShower.showing, 1);
    },

    hide: function() {
        ProjectShower.timer_id = setInterval(ProjectShower.hidding, 1);
    },

    showing: function () {
        if (ProjectShower.top > 0) {
            ProjectShower.top -= 10;
        } else {
            ProjectShower.top = 0;
            clearInterval(ProjectShower.timer_id);
        };
        
        ProjectShower.obj.style.top = ProjectShower.top + "px";
    },

    hidding: function () {

        if (ProjectShower.top < SizeManager.client_height) {
            ProjectShower.top += 10;
        } else {
            clearInterval(ProjectShower.timer_id);
            ProjectShower.obj.hidden = "hidden";
        }

        ProjectShower.obj.style.top = ProjectShower.top + "px";
    },

    Header: {
        obj: document.getElementById("project_shower_header")
    },

    About: {
        obj: document.getElementById("project_shower_about")
    },

    Projects: {
        obj: document.getElementById("project_shower_projects")
    }
}