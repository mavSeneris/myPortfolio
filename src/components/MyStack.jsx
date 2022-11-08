import React from "react";
import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import javaScript from "../assets/images/javaScript.png"
import react from "../assets/images/react.png"



export default function MyStack() {

    return (
        <section id="languages" className="my-stack bg-accent">
            <div className="my-stack-flex-container container">
                <div className="text-center">
                    <h2>These are my <span className="color-accent">technology stacks</span> </h2>
                </div>
                <div className="tech-stack">
                    <div className="language">
                        <figure className="language-image-wrapper">
                            <img className="language-image" src={html} />
                        </figure>
                        <span className="language-name">HTML</span>

                    </div>
                    <div className="language">
                        <figure className="language-image-wrapper">
                            <img className="language-image" src={css} />
                        </figure>
                        <span className="language-name">CSS</span>
                    </div>
                    <div className="language">
                        <figure className="language-image-wrapper">
                            <img className="language-image" src={javaScript} />
                        </figure>
                        <span className="language-name">JavaScript</span>

                    </div>
                    <div className="language">
                        <figure className="language-image-wrapper">
                            <img className="language-image" src={react} />
                        </figure>
                        <span className="language-name">React</span>

                    </div>
                    

                </div>
            </div>
        </section>
    )
}