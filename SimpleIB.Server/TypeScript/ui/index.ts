namespace app {

    let appLoader = document.getElementById("sib-app-loader");

    window.addEventListener('load', function (event) {
        if (document.readyState === "complete") {
            appLoader.style.display = "none";
        }
    });
}