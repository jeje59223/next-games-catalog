import React from "react";

const Footer = () => {

    const moonLanding = new Date().getFullYear();

    return (
        <footer className="page-footer font-small cyan darken-3 fixed-bottom">
        <div className="footer-copyright text-center py-3 bg-primary">© {moonLanding} Copyright:
            <a href="https://www.linkedin.com/in/jerome-cnockaert-359a20181/" target="blanck"> CNOCKAERT Jérôme</a>
        </div>

        </footer>
    )
}
export default Footer;
