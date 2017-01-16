
var BackgroundSwitcher = {
    obj: document.getElementById("background_switcher"),

    start: function () {
        BackgroundSwitcher.obj.hidden = "";
        BackgroundSwitcher.Buttons.start();
        BackgroundSwitcher.TitleButton.start();
    },

    Buttons: {
        obj: document.getElementsByClassName("background_switcher_buttons"),

        start: function () {
            for (var i = 0; i < BackgroundSwitcher.Buttons.obj.length; i++) {
                BackgroundSwitcher.Buttons.obj[i].onmouseout = BackgroundSwitcher.Buttons.onOut;
                BackgroundSwitcher.Buttons.obj[i].onmouseover = BackgroundSwitcher.Buttons.onOver;
                if (i == 0 || i == 2) {
                    BackgroundSwitcher.Buttons.obj[i].onclick = BackgroundSwitcher.Buttons.onClick;
                }
            }

        },

        onOut: function() {
            this.style.opacity = 0.5;
            this.style.cursor = "pointer";
        },

        onOver: function() {
            this.style.opacity = 1;
        },

        onClick: function() {
            if (this == BackgroundSwitcher.Buttons.obj[0]) {
                BackgroundSwitcher.TitleButton.obj.innerHTML = BackgroundImage.prevImage();
            } else if (this == BackgroundSwitcher.Buttons.obj[2]) {
                BackgroundSwitcher.TitleButton.obj.innerHTML = BackgroundImage.nextImage();
            }
        }
    },

    TitleButton: {
        obj: document.getElementById("name_project_button"),

        start: function () {
            BackgroundSwitcher.TitleButton.obj.onclick = BackgroundSwitcher.TitleButton.onClick;
            BackgroundSwitcher.TitleButton.obj.innerHTML = BackgroundImage.nextImage();
        },

        onClick: function () {
            // show project
        }
    }
}