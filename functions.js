// Navigatsiooniriba: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
// Eraldi JS fail: https://blog.hubspot.com/website/call-javascript-function-html
var button = document.getElementById("icon"); // otsib icon-klassi objekti
button.addEventListener("click", myFunction); // "kuulaja", käivitab funktsiooni alles vajutamisel

function myFunction() { // defineerime funktsiooni
    var x = document.getElementById("myTopnav"); // leia element ID-ga "topnav"
    if (x.className === "topnav") { // kui objekt, millel funktsiooni välja kutsusime, on "topnav"
        x.className += " responsive"; // siis lisab CSS tingimuse "responsive"
    } else {
        x.className = "topnav"; // vastasel juhul määrab objekti topnav-iks
    }
}