
/** Makes the SideNav slide out when user clicks on hamburger-menu */

function openSideNav(event) {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("header").style.marginLeft = "250px";
}



/** Makes the SideNav slide in when user clicks on 'x' -close-button*/
function closeSideNav() {
    document.getElementById("mySideNav").style.width ="0";
    document.getElementById("header").style.width="0;"
}