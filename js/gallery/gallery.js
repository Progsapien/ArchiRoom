var Gallery = {
    obj: document.getElementById("gallery"),

    start: function() {
        Gallery.Buttons.start();
        Gallery.Image.start();
    },

    Image: {
        obj: document.getElementById("gallery_image"),
        paths_array: 0,
        current_image: 0,
        image_object: new Image(),

        start: function() {
            Gallery.Image.image_object.onload = Gallery.Image.onLoaded;
        },

        loadImages: function (project_id) {
            Gallery.Image.paths_array = Project.getImagesPaths(project_id);
        },

        loadImage: function (image_id) {
            if (image_id <= Gallery.Image.paths_array.length && image_id >= 0) {
                Gallery.obj.hidden = "";
                Gallery.Image.current_image = image_id;
                Gallery.Image.obj.src = "img/loader.gif";
                Gallery.Image.obj.style.width = "50px";
                Gallery.Image.image_object.src = Gallery.Image.paths_array[image_id];
            }
            console.log(Gallery.Image.paths_array[image_id]);
            Gallery.Caption.setCaption(++image_id + " / " + Gallery.Image.paths_array.length);
        },

        onLoaded: function () {
            // ... 
            
            Gallery.Image.obj.style.width = "auto";
            Gallery.Image.obj.style.height = "auto";
            Gallery.Image.obj.src = Gallery.Image.image_object.src;
        },

        configSize: function () {
            if (Gallery.Image.image_object.width > Gallery.Image.image_object.height) {

            }
        }
    },


    Buttons: {

        start: function() {
            Gallery.Buttons.Previous.start();
            Gallery.Buttons.Next.start();
            Gallery.Buttons.Close.start();
        },

        Previous: {
            obj: document.getElementById("gallery_prev_button"),

            start: function () {
                Gallery.Buttons.Previous.obj.onclick = Gallery.Buttons.Previous.onClick;
            },

            onClick: function () {
                if (--Gallery.Image.current_image == -1) {
                    Gallery.Image.current_image = Gallery.Image.current_image = Gallery.Image.paths_array.length - 1;
                }
                Gallery.Image.loadImage(Gallery.Image.current_image);
            }
        },

        Next: {
            obj: document.getElementById("gallery_next_button"),

            start: function () {
                Gallery.Buttons.Next.obj.onclick = Gallery.Buttons.Next.onClick;
            },

            onClick: function () {
                if (++Gallery.Image.current_image == Gallery.Image.paths_array.length) {
                    Gallery.Image.current_image = 0;
                };
                Gallery.Image.loadImage(Gallery.Image.current_image);
            }
        },

        Close: {
            obj: document.getElementById("gallery_close_button"),

            start: function () {
                Gallery.Buttons.Close.obj.onclick = Gallery.Buttons.Close.onClick;
            },

            onClick: function () {
                Gallery.obj.hidden = "hidden";
            }
        }

    },

    Caption: {
        obj: document.getElementById("gallery_caption"),

        setCaption: function (caption) {
            Gallery.Caption.obj.innerHTML = caption;
        }
    }

}