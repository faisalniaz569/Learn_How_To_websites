function myFunction(mgs) {
    
    var expandImg = document.getElementById("expandedImg");
    var imgText   = document.getElementById("imgtext");
    
    expandImg.src = mgs.src;
    imgText.innerHtml = mgs.alt;
    
    expandImg.parentElement.style.display = "block";
    
}