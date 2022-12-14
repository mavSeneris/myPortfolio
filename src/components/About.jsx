import profileImage from "../assets/images/sample-image.jpg"
import waveEmoji from "../assets/images/wave-emoji.png"
import heroImage from "../assets/images/hero.png"
import heroImageDark from "../assets/images/hero-dark.png"

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
                        <a><i className="fab fa-linkedin-in"></i></a>
                        <a><i className="fab fa-github"></i></a>
                        <a><i className="far fa-envelope"></i></a>
                        <a><i className="fas fa-file-pdf"></i></a>
                    </div>
                    <img src={props.darkMode ? heroImageDark : heroImage} className="about-hero_image" />
                </div>
            </div>
        </section>
    )
}