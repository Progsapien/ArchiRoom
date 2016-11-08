
// Извлекаем объект;
nextBackgroundImage = null;
previousBackgroundImage = null;
onLoadBackground = null;
onResizeBackground = null;

(function () {
    var background_image = document.getElementById("background_image");
    var background_images = [];
    var image_object = new Image();
    var image_index = 0;
    var background_image_timer_id = -1;
    var background_image_opacity = 0;


    function parseImages() {
        var request_images = new XMLHttpRequest();

        request_images.open("GET", "php/parseImages.php", true);

        request_images.onload = function () {
            background_images = this.responseText.split("<sep>");
            background_images.length = background_images.length - 1;
            nextImage();
        }
        request_images.send();
    }

    function onResize() {
        background_image.style.width = document.documentElement.clientWidth + "px";
        background_image.style.height = document.documentElement.clientHeight + "px";
    }

    function onLoad() {
        onResize();
        parseImages();
    }


    function nextImage() {
        if (++image_index == background_images.length) {
            image_index = 0;
        }
        clearInterval(background_image_timer_id);
        background_image_timer_id = setInterval(hideImage, 1);
    }

    function previousImage() {
        if (--image_index < 0) {
            image_index = background_images.length - 1;
        };
        clearInterval(background_image_timer_id);
        background_image_timer_id = setInterval(hideImage, 1);
    }

    function hideImage() {
        console.log("HIDING");
        if (background_image_opacity >= 0) {
            background_image_opacity -= 0.1;
            background_image.style.opacity = background_image_opacity;
        } else {
            clearInterval(background_image_timer_id);
            image_object.src = background_images[image_index];
        }
    }

    function showImage() {
        if (background_image_opacity <= 1) {
            background_image_opacity += 0.02;
            background_image.style.opacity = background_image_opacity;
        } else {
            clearInterval(background_image_timer_id);
        }
    }

    image_object.onload = function () {
        clearInterval(background_image_timer_id);
        background_image.style.backgroundImage = "url(" + image_object.src + ")";
        background_image_timer_id = setInterval(showImage, 1);
    }

    nextImageF = nextImage;
    previousImageF = previousImage;
    onLoadBackground = onLoad;
    onResizeBackground = onResize;
}());
