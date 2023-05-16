var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("topnav").style.top = "0";
    } else {
        document.getElementById("topnav").style.top = "-70px";
    }

    prevScrollPos = currentScrollPos;
};

function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className.includes("responsive")) {
        x.className = x.className.replace(" responsive", "");
    } else {
        x.className += " responsive";
    }
}
