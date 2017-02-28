var ProjectShower = {

    obj: document.getElementById("project_shower"),
    width: 0,
    hidden: true,
    current_section: "",

    start: function () {
        ProjectShower.Header.Buttons.start();
        ProjectShower.About.start();
        ProjectShower.hide();
    },

    showProject: function (project_index) {
        console.log(Project.getImages(1));
        ProjectShower.Projects.obj.innerHTML = Project.getImages(1);
    },


    showSection: function (section_title) {

        ProjectShower.Projects.obj.innerHTML = "";
        ProjectShower.Header.Title.setTitle(section_title);
        ProjectShower.current_section = section_title;
        Menu.CloseButton.hide();
        ProjectShower.About.hideFull();
        ProjectShower.show();

        for (var i = 0; i < projects.length; i++) {
            if (projects[i].section.toUpperCase() == section_title) {
                ProjectShower.Projects.obj.innerHTML += Project.toUI(i);
            } else if (section_title == "ВСЕ ПРОЕКТЫ") {
                ProjectShower.Projects.obj.innerHTML += Project.toUI(i);
            } else if (section_title == "КОНТАКТЫ") {

            }
        }

        ProjectShower.Projects.updateList();
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
            start: function() {
                ProjectShower.Header.Buttons.Close.start();
                ProjectShower.Header.Buttons.Back.start();
            },


            Close: {
                obj: document.getElementById("project_shower_header_close"),

                start: function () {
                    ProjectShower.Header.Buttons.Close.obj.onclick = ProjectShower.Header.Buttons.Close.onClick;
                },

                onClick: function () {
                    Menu.CloseButton.show();
                    ProjectShower.hide();
                }
            },

            Back: {
                obj: document.getElementById("project_shower_header_back"),

                start: function () {
                    ProjectShower.Header.Buttons.Back.obj.onclick = ProjectShower.Header.Buttons.Back.onClick;
                },

                onClick: function () {
                    ProjectShower.showSection(ProjectShower.current_section);
                }
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
        obj: document.getElementById("project_shower_about"),
        hidden: true,
        height: 0,

        start: function() {
            ProjectShower.About.Title.start();
            ProjectShower.About.height = 450;
        },

        show: function () {
            // Подводит About для того чтобы юзер мог открыть секцию "подробнее"
            ProjectShower.About.obj.style.top = SizeManager.client_height - 30 - ProjectShower.About.Title.obj.style.height + "px";
            ProjectShower.About.obj.style.height = "30px";
            console.log(ProjectShower.About.obj.style.height);
            ProjectShower.About.obj.hidden = "";
        },

        showFull: function() {
            ProjectShower.About.hidden = false;
            ProjectShower.About.Title.setTitle("Скрыть");
            ProjectShower.About.obj.style.top = SizeManager.client_height - ProjectShower.About.height + "px";
        },

        hide: function () {
            ProjectShower.About.hidden = true;
            ProjectShower.About.Title.setTitle("Показать");
            ProjectShower.About.show();
        },

        hideFull: function() {
            // Полностью скрывает из поля зрения юзера
            ProjectShower.About.obj.style.top = ProjectShower.obj.style.height;
            ProjectShower.About.obj.hidden = "hidden";
        },

        Title: {
            obj: document.getElementById("project_shower_about_title"),

            start: function() {
                ProjectShower.About.Title.obj.onclick = ProjectShower.About.Title.onClick;
            },

            setTitle: function (title) {
                ProjectShower.About.Title.obj.innerHTML = title;
            },

            onClick: function() {
                if(ProjectShower.About.hidden) {
                    ProjectShower.About.showFull();
                } else {
                    ProjectShower.About.hide();
                }
            },
        },

        Body: {
            obj: document.getElementById("project_shower_about_body"),

            setBody: function (body) {
                ProjectShower.About.Body.obj.innerHTML = body;
            }
        }
    },

    Projects: {
        obj: document.getElementById("project_shower_projects"),
        list: "",

        updateList: function () {
            ProjectShower.Projects.list = document.getElementsByClassName("section_item");
            for (var i = 0; i < ProjectShower.Projects.list.length; i++) {
                ProjectShower.Projects.list[i].onclick = ProjectShower.Projects.onClickProject;
            }
        },

        onClickProject: function () {
            ProjectShower.Projects.obj.innerHTML = "";
            ProjectShower.Header.Title.setTitle(this.innerHTML);
            ProjectShower.About.show();
            ProjectShower.showProject(0);
        }
    }
}