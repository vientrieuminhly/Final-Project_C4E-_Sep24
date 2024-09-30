const footer = document.getElementById("page-footer");

const footerElement = document.createElement("div");
footerElement.className = "page-footer-container";

footerElement.innerHTML = `
            <div class="footer-content">
                <div class="footer-logo-container">
                    <div class="footer-logo">
                        <img src="image/Page_logo.png">
                        EduPress            
                    </div>
                    <p style="font-family: Jost; font-size: 18px; font-weight: 400;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua.
                    </p>
                </div>
                <div class="get-help">
                    <div style="font-size: 20px; font-weight: 600;">GET HELP</div>
                    <div style="margin-top: 12px;color: darkgrey;font-size: 18px; font-weight: 500; font-family: jost;">
                        <p> <a href="page-contact.html" style = "text-decoration: none;">Contact us</a></p>
                        <p> <a  href="blog-single.html" style = "text-decoration: none;"> Latest Articles </a></p>
                        <p><a href="page-faqs.html" style = "text-decoration: none;">FAQ</a></p>
                    </div>
                </div>
                <div class="program">
                    <div style="font-size: 20px; font-weight: 600;">PROGRAMS</div>
                    <div style="margin-top: 12px;color: darkgrey;font-size: 18px; font-weight: 500; font-family: jost;">
                        <p>Art and Design</p>
                        <p>Business</p>
                        <p>IT & Software</p>
                        <p>Languages</p>
                        <p>Programming</p>
                    </div>
                </div>
                <div class="contact-us">
                    <div style="font-size: 20px; font-weight: 600;">CONTACT US</div>
                    <p style="font-family: Jost; font-size: 18px; font-weight: 400;">
                        Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA
                    </p>
                    <p style="font-family: Jost; font-size: 18px; font-weight: 400;">
                        <p>Tel: + (123) 2500-567-8988</p>
                        <p>Mail: supportlms@gmail.com</p>
                    </p>
                    <img src="image/footericon.png" style="height: 20px ;">
                </div>
            </div>
            <div class="copyright">
                <p style="font-family: Jost; font-size: 18px; font-weight: 400;">
                    Copyright © 2024 LearnPress LMS | Powered by ThimPress 
                </p>
            </div>
`;
footer.appendChild(footerElement);