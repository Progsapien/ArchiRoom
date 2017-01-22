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

    toUI: function (project_id) {
        Project.parseInfo(project_id);
        var div_image = "<div class=\"section_item\"";
        var div_img = Project.path+"/"+Project.pictures[0];
        var div_style = "width: 300px; height: 300px; background-image: url("+div_img+");";
        var span_project_title = Project.title;
        var span_style = "position: inherit; background-color: white; width: 300px; height: 20px; color: black; top: 280px; left: 0;";
        var span_title = "<div style=\"" + span_style + "\">" + span_project_title + "</div>";
        div_image = div_image + " style=\"" + div_style + "\">"+span_title+"</div>";
        return div_image+div_image;
    }
}