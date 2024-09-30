const header = document.getElementById("page-header");

const headerElement = document.createElement("div");
headerElement.className = "header-container";

const pathName = location.pathname;

headerElement.innerHTML = `
     <div class="page-logo">
            <img src="image/Page_logo.png">
            EduPress            
        </div>
        <div class="page-menu">
            <div><a href="index.html" class="${pathName == "/BAI%20TAP%20CUOI%20KHOA/index.html" ? "page-menu-active" : "page-menu-unactive"}">Home</a></div>
            <div><a href="course.html" class="${ ((pathName == "/BAI%20TAP%20CUOI%20KHOA/course.html") || (pathName == "/BAI%20TAP%20CUOI%20KHOA/course-single.html")) ? "page-menu-active" : "page-menu-unactive"}">Courses</a></div>
            <div><a href="blog.html" class="${((pathName == "/BAI%20TAP%20CUOI%20KHOA/blog.html") || (pathName == "/BAI%20TAP%20CUOI%20KHOA/blog-single.html")) ? "page-menu-active" : "page-menu-unactive"}">Blog</a></div>
            <div><a href="page-contact.html" class="${((pathName == "/BAI%20TAP%20CUOI%20KHOA/page-contact.html") || (pathName == "/BAI%20TAP%20CUOI%20KHOA/page-faqs.html")) ? "page-menu-active" : "page-menu-unactive"}">Page <img src="image/Icon-down.png"></a></div>
            <div><a href="error.html" class="${pathName == "/BAI%20TAP%20CUOI%20KHOA/error.html" ? "page-menu-active" : "page-menu-unactive"}">LearnPress Add-On</a></div>
            <div class="page-menu-unactive">Premium Theme</div>
        </div>
        <div class="page-login-register">
            <div><a class="page-login-register" href="login-register.html">Login / Register</a></div>
            <img src="image/Search.png" style="height: 40px;">
        </div>
`;
header.appendChild(headerElement);

