const backToTop = document.getElementById("back-to-top");
const scrollToTop = document.getElementById("scroll-to-top");

window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
        backToTop.style.display = "flex"
    }
    else {
        backToTop.style.display = "none"
    }
}

backToTop.onclick = () => {
    scrollToTop.scrollIntoView({
        behavior: "smooth",
    })
}

function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

function toggleFaqContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

function switchTab(tabName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("each-box-menu-unactive");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("each-box-menu-active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("each-box-menu-active");
  }
// Activate the first tab by default
document.onload = switchTab('overview');

