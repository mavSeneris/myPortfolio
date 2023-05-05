import resumeFile from "../assets/Resume/Resume.pdf";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer bg-dark">
            <div className="footer-grid-container container">
                <a href="#">
                    <div className="footer-title text-center">
                        <h3 className="ff-accent">Mav Seneris</h3>
                    </div>
                </a>
                <div className="footer-links">
                    <a href="https://github.com/mavSeneris" className="
                        footer-social-link 
                        link-hover-effect 
                        link-hover-effect--white"
                        target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/maverick-seneris-50800b275/" className="
                        footer-social-link 
                        link-hover-effect 
                        link-hover-effect--white"
                        target="_blank">linkedIn</a>
                    <a href="mailto:email@email.com" className="
                        footer-social-link 
                        link-hover-effect 
                        link-hover-effect--white"
                        target="_blank">Mail</a>
                    <a href={resumeFile} className="
                        footer-social-link 
                        link-hover-effect
                        link-hover-effect--white"
                        target="_blank">Resume</a>
                </div>
                <small className="text-center">Copyright {currentYear}&#169; Maverick Seneris</small>

            </div>
        </div>
    )
}