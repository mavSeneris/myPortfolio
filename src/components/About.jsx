import profileImage from "../assets/images/id.jpg"
import waveEmoji from "../assets/images/wave-emoji.png"
import heroImage from "../assets/images/hero.png"
import heroImageDark from "../assets/images/hero-dark.png"
import resumeFile from "../assets/Resume/Resume.pdf";

export default function About(props) {


    return (
        <section className="about">
            <div className="about-container container">
                <img className="about-image" src={profileImage} />
                <div className="text-center">
                    <h2 className="text-center">Hi, my name is <span className="color-accent ff-accent ">Mav</span> <img className="wave" src={waveEmoji} /></h2>
                    <div className="container container--narrow">
                        <p>I'm a self-taught frontend developer from Manila, Philippines </p>
                    </div>
                    <div className="about-links">
                        <a style={{color: props.darkMode && "white"}} href="https://www.linkedin.com/in/maverick-seneris-50800b275/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a style={{color: props.darkMode && "white"}} href="https://github.com/mavSeneris" target="_blank"><i className="fab fa-github"></i></a>
                        <a style={{color: props.darkMode && "white"}} href="mailto:email@email.com"><i className="far fa-envelope"></i></a>
                        <a style={{color: props.darkMode && "white"}} href={resumeFile} target="_blank"><i className="fas fa-file-pdf"></i></a>
                    </div>
                    <img src={props.darkMode ? heroImageDark : heroImage} className="about-hero_image" />
                </div>
            </div>
        </section>
    )
}