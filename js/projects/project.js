var Project = {
    title: 0,
    section: 0,
    pictures: 0,
    path: 0,

    parseInfo: function (project_id) {
        Project.title = projects[project_id].title;
        Project.section = projects[project_id].section;
        Project.pictures = projects[project_id].pictures;
        Project.path = projects[project_id].path;
    },

    toUI: function () {
        var ui_component = "<div class=\"section_item\" style=\"position: inherit; padding-left: 10px; padding-top: 10px; background-size: 300px; background-position: -500px; width: 300px; height: 300px; background: url("+Project.path+"/"+Project.pictures[0]+");\">";
        return ui_component;
    }
}