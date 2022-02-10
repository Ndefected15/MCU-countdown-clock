// SIDEBAR
const sidetext = document.querySelectorAll(".side-text")

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.querySelector(".sidebar").style.width = "200px";
    document.querySelector(".container").style.marginLeft = "200px";
    document.querySelector(".menu").style.display = "none";
    sidetext.forEach(sidetext => sidetext.style.display = "block");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.querySelector(".sidebar").style.width = "50px";
    document.querySelector(".container").style.marginLeft = "0";
    sidetext.forEach(sidetext => sidetext.style.display = "none");
    document.querySelector(".menu").style.display = "block";
}