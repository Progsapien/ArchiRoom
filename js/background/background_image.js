
var BackgroundImage = {
    obj: document.getElementById("background_image"),
    loader_background_image: document.getElementById("loader_background_image"),
    background_images: [],
    image_object: new Image(),
    image_index: 0,
    project_index: 0,
    timer_id: 0,
    opacity: 0,

    start: function () {
        BackgroundImage.image_object.onload = function () {
            BackgroundImage.loader_background_image.hidden = "hidden";
            clearInterval(BackgroundImage.timer_id);
            BackgroundImage.obj.style.backgroundImage = "url(" + BackgroundImage.image_object.src + ")";
            BackgroundImage.timer_id = setInterval(BackgroundImage.showImage, 1);
        }
    },

    nextImage: function () {
        if (++BackgroundImage.image_index == projects[BackgroundImage.project_index].pictures.length) {
            BackgroundImage.image_index = 0;
            if (++BackgroundImage.project_index == projects.length) {
                BackgroundImage.image_index = 0;
                BackgroundImage.project_index = 0;
            }
        }
        clearInterval(BackgroundImage.timer_id);
        BackgroundImage.timer_id = setInterval(BackgroundImage.hideImage, 1);
        return projects[BackgroundImage.project_index].title;
    },

    prevImage: function () {
        if (--BackgroundImage.image_index < 0) {
            BackgroundImage.image_index = projects[BackgroundImage.project_index].pictures.length - 1;
            if (--BackgroundImage.project_index < 0) {
                BackgroundImage.image_index = projects[projects.length - 1].pictures.length - 1;
                BackgroundImage.project_index = projects.length - 1;
            }
        }
        clearInterval(BackgroundImage.timer_id);
        BackgroundImage.timer_id = setInterval(BackgroundImage.hideImage, 1);
        return projects[BackgroundImage.project_index].title;
    },

    showImage: function () {
        if (BackgroundImage.opacity <= 1) {
            BackgroundImage.opacity += 0.02;
            BackgroundImage.obj.style.opacity = BackgroundImage.opacity;
        } else {
            clearInterval(BackgroundImage.timer_id);
        }
    },

    hideImage: function () {
        if (BackgroundImage.opacity >= 0) {
            BackgroundImage.opacity -= 0.1;
            BackgroundImage.obj.style.opacity = BackgroundImage.opacity;
        } else {
            BackgroundImage.loader_background_image.hidden = "";
            clearInterval(BackgroundImage.timer_id);
            BackgroundImage.image_object.src = projects[BackgroundImage.project_index].path + "/" + projects[BackgroundImage.project_index].pictures[BackgroundImage.image_index];
        }
    }
}