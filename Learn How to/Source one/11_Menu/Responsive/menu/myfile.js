function myFunction() {
    var x = document.getElementById("myTopnav");
    var barsIcon = x.querySelector(".fa-bars");
    var timesIcon = x.querySelector(".fa-times");

    if (x.className === "topnav") {
        x.className += " responsive";
        barsIcon.style.display = "none";
        timesIcon.style.display = "inline";
    } else {
        x.className = "topnav";
        barsIcon.style.display = "inline";
        timesIcon.style.display = "none";
    }
}

