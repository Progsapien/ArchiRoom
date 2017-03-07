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

        loadImages: function (paths_array) {
            if (Gallery.Image.paths_array.length != 0) {
                Gallery.Image.paths_array = paths_array;
            }
        },

        loadImage: function(image_id) {
            if (image_id <= Gallery.Image.paths_array.length) {
                Gallery.Image.current_image = image_id;
                Gallery.Image.image_object.src = Gallery.Image.paths_array[image_id];
            }
        },

        onLoaded: function () {
            // ...  
        },
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

            }
        },

        Next: {
            obj: document.getElementById("gallery_next_button"),

            start: function () {

            }
        },

        Close: {
            obj: document.getElementById("gallery_close_button"),

            start: function () {

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