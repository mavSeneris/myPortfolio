import React from "react";
import profileImage from "../assets/images/sample-image.jpg"
import github from "../assets/images/github.png"
import mail from "../assets/images/mail.png"
import linkedin from "../assets/images/linkedin.png"
import pdf from "../assets/images/pdf.png"
import waveEmoji from "../assets/images/wave-emoji.png"
import heroImage from "../assets/images/hero.png"




export default function About() {


    return (
        <section className="about">
            <div className="about-container container">
                <img className="about-image" src={profileImage} />
                <div className="text-center">
                    <h1>Hi, my name is Mav <img className="wave" src={waveEmoji} /></h1>
                    <div class="container container--narrow">
                        <p>I'm a self-taught software engineer from Manila, Philippines </p>
                    </div>
                    <div className="about-social">
                        <a><img src={github} className="social-logo"/></a>
                        <a><img src={linkedin} className="social-logo"/></a>
                        <a><img src={mail} className="social-logo"/></a>
                        <a><img src={pdf} className="social-logo"/></a>
                    </div>
                    <img src={heroImage} className="about-hero_image" />
                </div>
            </div>


        </section>
    )
}