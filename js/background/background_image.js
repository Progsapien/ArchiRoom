
var BackgroundImage = {
    obj: document.getElementById("background_image"),
    loader_background_image: document.getElementById("loader_background_image"),
    background_images: [],
    image_object: new Image(),
    project_index: 0,

    start: function () {
        BackgroundImage.image_object.onload = function () {
            BackgroundImage.loader_background_image.hidden = "hidden";
            BackgroundImage.obj.style.backgroundImage = "url(" + BackgroundImage.image_object.src + ")";
            BackgroundImage.showImage();
        }
    },

    nextProject: function() {
        if (++BackgroundImage.project_index == projects.length) {
            BackgroundImage.project_index = 0;
        }

        BackgroundImage.hideImage();

        return projects[BackgroundImage.project_index].title;
    },

    previousProject: function() {
        if (--BackgroundImage.project_index < 0) {
            BackgroundImage.project_index = projects.length - 1;
        }

        BackgroundImage.hideImage();

        return projects[BackgroundImage.project_index].title;
    },

    showImage: function () {
        BackgroundImage.obj.style.opacity = 1;
    },

    hideImage: function () {
        BackgroundImage.obj.style.opacity = 0;
        BackgroundImage.loader_background_image.hidden = "";
        BackgroundImage.image_object.src = projects[BackgroundImage.project_index].path + "/" + projects[BackgroundImage.project_index].pictures[0];
    }
}