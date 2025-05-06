const contents = [content1, content2, content3];
const buttons = [btn1, btn2, btn3];

function openTab(tabIndex) {
    contents.forEach((content, index) => {
        if (index === tabIndex) {
            content.style.transform = "translateX(0)";
            content.style.transitionDelay = "0.3s";
        } else {
            content.style.transform = "translateX(100%)";
            content.style.transitionDelay = "0s";
        }
    });

    buttons.forEach((btn, index) => {
        btn.style.color = index === tabIndex ? "#ff7846" : "#000";
    });
}
