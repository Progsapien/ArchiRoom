
// Извлекаем объект;

var background_image = document.getElementById("background_image");
var background_images = [];
var image_object = new Image();
var image_index = 0;

function parseImages() {
    var request_images = new XMLHttpRequest();

    request_images.open("GET", "php/parseImages.php", false);

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
    background_image.style.backgroundColor = "black";
    parseImages();
}


function nextImage() {
    image_object.src = background_images[image_index++];
    if (image_index == background_images.length) {
        image_index = 0;
    }

    background_image.style.backgroundImage = "url(" + image_object.src + ")";
}

function previousImage() {
    image_object.src = background_images[image_index--];
    if (image_index < 0) {
        image_index = background_images.length - 1;
    };

    background_image.style.backgroundImage = "url(" + image_object.src + ")";
}

// Сцепляем события с функцией;

window.onload = onLoad;
window.onresize = onResize;