function myFunction() {
    
    "use strict";
    
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    
}

var $;

$(function () {
    
    "use strict";
    
    $(".fa-bars").click(function () {
        
        $(".fa-bars").css("display", "none");
        $(".fa-times").css("display", "block");
        
    });
    
    $(".fa-times").click(function () {
        
        $(".fa-times").css("display", "none");
        $(".fa-bars").css("display", "block");
        
    });

});
