import React from "react";
import profileImage from "../assets/images/sample-image.jpg"
import github from "../assets/images/github.png"
import mail from "../assets/images/mail.png"
import linkedin from "../assets/images/linkedin.png"
import pdf from "../assets/images/pdf.png"
import waveEmoji from "../assets/images/wave-emoji.png"
import heroImage from "../assets/images/hero.png"




export default function About(){


    return(
        <section className="about">
            <img src={profileImage}/>
            <div className="text-wrapper">
                <h1>Hi, my name is Mav <img src={waveEmoji}/></h1>
                <p>I'm a self-taught software engineer from Manila, Philippines </p>
            </div>
            <div className="about-social">
                <a><img src={github}/></a>
                <a><img src={linkedin}/></a>
                <a><img src={mail}/></a>
                <a><img src={pdf}/></a>
            </div>
            <img src={heroImage} className="about-hero_image"/>

        </section>
    )
}