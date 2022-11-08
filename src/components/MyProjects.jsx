import React from "react";

export default function MyProjects() {

    return (
        <div className="MyProjects">
            <div className="container">
                <div className="text-center">
                    <h2>Here are some of  <span className="color-accent">my projects</span> </h2>
                </div>
                <div className="Projects">
                    <div className="tenzies text-center">
                        <h3>Tenzies</h3>
                    </div>
                    <div className="e-commerce tenzies text-center">
                        <h3>E-commerce</h3>
                    </div>
                    <div className="messaging-app tenzies text-center">
                        <h3>Messaging-app</h3>
                    </div>
                    <div className="calculator tenzies text-center">
                        <h3>Calculator</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}