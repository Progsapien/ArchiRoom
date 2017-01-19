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
        return "<div class=\"section_item\">"+Project.title;
    }
}