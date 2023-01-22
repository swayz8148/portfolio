function DarkMode() {
    var body = document.body;
    body.classList.toggle("dark-body")

    var nav = document.getElementById("nav")
    nav.classList.toggle("dark-nav")

    var button = document.getElementById("btn")
    button.classList.toggle("fa-sun")
    if (button.classList.toggle("fa-sun")) {
        button.classList.toggle("fa-moon")
    } else {
        button.classList.toggle("fa-sun")
    }

    var footer = document.getElementById("footer")
    footer.classList.toggle("dark-footer")
}

document.getElementById("scroll-to-top-button").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});