import React from "react";
import html from "../assets/images/html.png"
import css from "../assets/images/css.png"
import javaScript from "../assets/images/javaScript.png"
import react from "../assets/images/react.png"



export default function MyStack(){

    return(
        <section className="MyStack">
            <div className="text-wrapper">
                <h2>This are my tech stacks</h2>
                <div className="tech-stack">
                    <img src={html}/>
                    <img src={css}/>
                    <img src={javaScript}/>
                    <img src={react}/>
                </div>
            </div>
        </section>
    )
}