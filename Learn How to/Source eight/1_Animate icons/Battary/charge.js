function chargebattery() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf244;";
    setTimeout(function () {
        a.innerHTML = "&#xf243;";
    }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf242;";
    }, 2000);
    setTimeout(function () {
        a.innerHTML = "&#xf241;";
    }, 3000);
    setTimeout(function () {
        a.innerHTML = "&#xf240;";
    }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);
