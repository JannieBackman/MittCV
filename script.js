window.addEventListener('load', (event) => {
      });


/**
 * Makes the SideNav slide out when user clicks on hamburger-menu 
 * @param {*} event 
 */

function openSideNav(event) {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("smaller-screens").style.marginLeft = "250px";
}



/** Makes the SideNav slide in when user clicks on 'x' -close-button*/
function closeSideNav() {
    document.getElementById("mySideNav").style.width ="0";
    document.getElementById("smaller-screens").style.width="0;"
}



/**
 * Function that displays the next sibling p-tag on buttonclick.
 * @param {*} event 
 */
 function showHiddenInfo(event){
    let info = event.target.nextElementSibling;
    if (info.style.display ==='none') {
        info.style.display ='flex';
    } else {
        info.style.display ='none';
    }
}

/**
 * Function that displays and minimize readMore info on buttonclick.
 */
function readMore() {
    let more =document.getElementById ("more");
    let moreText = document.getElementById ("more-info");
    let btnText = document.getElementById("btn-more");
    if (more.style.display === "none") {
        more.style.display="inline-flex ";
        btnText.innerHTML ="Läs mer";
        moreText.style.display="none";
    } else {
         more.style.display = "none";
        btnText.innerHTML = "Minimera";
        moreText.style.display ="inline-flex";
    }

    
}

