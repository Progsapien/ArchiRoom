var ProjectShower = {

    obj: document.getElementById("project_shower"),
    width: 0,
    hidden: true,

    start: function () {
        ProjectShower.Header.Buttons.start();
        ProjectShower.hide();
    },

    showProject: function(project_index) {

    },

    showSection: function (section_title) {

        ProjectShower.Projects.obj.innerHTML = "";
        ProjectShower.Header.Title.setTitle(section_title);
        Menu.CloseButton.hide();
        ProjectShower.show();
        if (SizeManager.client_width < 1000) {
            Menu.hide();
        };

        for (var i = 0; i < projects.length; i++) {
            if (projects[i].section.toUpperCase() == section_title) {
                ProjectShower.Projects.obj.innerHTML += Project.toUI(i);
                console.log(Project.toUI(i));
            }
        }
    },

    show: function () {
        if (ProjectShower.width != SizeManager.client_width) {
            ProjectShower.obj.style.left = Menu.width + "px";
        } else {
            ProjectShower.obj.style.left = "0px";
        }
        ProjectShower.obj.style.opacity = 1;
        ProjectShower.hidden = false;
    },

    hide: function() {
        ProjectShower.obj.style.left = -(ProjectShower.width) + "px";
        ProjectShower.obj.style.opacity = 0;
        ProjectShower.hidden = true;
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
                Menu.setTheme("dark");
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