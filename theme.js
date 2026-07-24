function toggletheme() {
    var element = document.getElementById("body");
    element.classList.toggle("bodydark");


    var element = document.getElementById("featuredprojects");
    element.classList.toggle("ourgamesdark");

    /* Selects and toggles all normalcontainer divs */
    var items = document.querySelectorAll(".normalcontainer");

    for (var i = 0; i < items.length; i++) {
     items[i].classList.toggle("normalcontainerdark");
    }


}
