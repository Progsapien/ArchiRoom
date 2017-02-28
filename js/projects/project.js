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
        var div_style = "background-image: url(" + Project.path+"/"+Project.pictures[0] + ");";

        div_image = div_image + " style=\"" + div_style + "\">" + Project.title + "</div>";

        return div_image;
    },

    getImages: function (project_id) {
        Project.parseInfo(project_id);
        var div_images = "";
        for (var i = 0; i < Project.pictures.length; i++) {
            var tmp_height = Math.floor((Math.random() * 250) + 170) + "px";
            var tmp_div_image = "<div class=\"project_image\"";
            var tmp_div_style = "background-image: url(" + Project.path + "/" + Project.pictures[i] + ");";
            div_images += tmp_div_image + " style=\"" + tmp_div_style + "height:"+tmp_height+";\"></div>";
        }
        return div_images;
    }
}