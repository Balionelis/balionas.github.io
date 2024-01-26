document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var aboutMeElement = document.querySelector(".about-me");
        var aboutMePosition = aboutMeElement.getBoundingClientRect().top;

        var triggerPoint = window.innerHeight - 240;

        if (aboutMePosition < triggerPoint) {
            aboutMeElement.classList.add("active");
        } else {
            aboutMeElement.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var h1Element = document.querySelector(".landing-page h1");
    var h2Element = document.querySelector(".landing-page h2");
    var mouseCursor = document.querySelector(".mouse-cursor");

    setTimeout(function() {
        h1Element.classList.add("active");
        h2Element.classList.add("active");
        mouseCursor.classList.add("active");
    }, 800);
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }