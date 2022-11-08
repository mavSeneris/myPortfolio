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
                    <img className="stack-logo" src={html} />
                    <img className="stack-logo" src={css} />
                    <img className="stack-logo" src={javaScript} />
                    <img className="stack-logo" src={react} />
                </div>
            </div>
        </section>
    )
}