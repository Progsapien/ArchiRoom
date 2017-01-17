var ProjectShower = {

    obj: document.getElementById("project_shower"),
    top: document.documentElement.clientHeight,
    timer_id: 0,
    opacity: 0,

    start: function() {
        ProjectShower.Header.Buttons.start();
        ProjectShower.obj.style.top = ProjectShower.top + "px";
    },

    showProject: function(project_index) {

    },

    showSection: function (section_title) {
        ProjectShower.Header.Title.setTitle(section_title);
        Menu.CloseButton.hide();
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
            ProjectShower.top -= 18;
        } else {
            ProjectShower.top = 0;
            clearInterval(ProjectShower.timer_id);
        };

        if (ProjectShower.opacity < 1) {
            ProjectShower.opacity += 0.05;
        } else {
            ProjectShower.opacity = 1;
        }

        ProjectShower.obj.style.opacity = ProjectShower.opacity;
        ProjectShower.obj.style.top = ProjectShower.top + "px";
    },

    hidding: function () {

        if (ProjectShower.top < SizeManager.client_height) {
            ProjectShower.top += 18;
        } else {
            clearInterval(ProjectShower.timer_id);
            ProjectShower.obj.hidden = "hidden";
        }

        if (ProjectShower.opacity > 0) {
            ProjectShower.opacity -= 0.05;
        } else {
            ProjectShower.opacity = 0;
        }

        ProjectShower.obj.style.opacity = ProjectShower.opacity;
        ProjectShower.obj.style.top = ProjectShower.top + "px";
    },

    Header: {
        obj: document.getElementById("project_shower_header"),
        
        Buttons: {
            close: document.getElementById("project_shower_header_close"),

            start: function() {
                ProjectShower.Header.Buttons.close.onmouseover = ProjectShower.Header.Buttons.onOverClose;
                ProjectShower.Header.Buttons.close.onmouseout = ProjectShower.Header.Buttons.onOutClose;
                ProjectShower.Header.Buttons.close.onclick = ProjectShower.Header.Buttons.onClickClose;
            },

            onOverClose: function () {
                this.style.opacity = 0.4;
                this.style.cursor = "pointer";
            },

            onOutClose: function () {
                this.style.opacity = 1;
            },

            onClickClose: function () {
                //..
                Menu.CloseButton.show();
                ProjectShower.hide();
            }
        },

        Title: {
            obj: document.getElementById("project_shower_header_title"),

            setTitle: function (title) {
                if (typeof title == "string" || typeof title == "number") {
                    ProjectShower.Header.Title.obj.innerHTML = title;
                }
            },

            getTitle: function() {
                return ProjectShower.Header.Title.obj.innerHTML;
            }
        }
    },

    About: {
        obj: document.getElementById("project_shower_about")
    },

    Projects: {
        obj: document.getElementById("project_shower_projects")
    }
}