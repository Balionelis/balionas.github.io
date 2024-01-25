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

