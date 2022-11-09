export default function Header(props){
    

    return(
        <section className="Header">
            <div className="nav-flex-container container">
                <h1 className="logo ff-accent">Mav Seneris</h1>
                {!props.darkMode && <div className="nav-links">
                    <a href="#languages" className="
                        hidden
                        link-hover-effect
                        link-hover-effect--black
                    ">Languages</a>
                    <a href="#projects" className="
                        hidden
                        link-hover-effect
                        link-hover-effect--black
                    ">Projects</a>
                    <button className="btn-contact"><a href="mailto:mavseneris@gmail.com" >Contact</a></button>
                </div>}

                {props.darkMode && <div className="nav-links">
                    <a style={{color: "white"}} href="#languages" className="
                        hidden
                        link-hover-effect
                        link-hover-effect--white
                    ">Languages</a>
                    <a style={{color: "white"}} href="#projects" className="
                        hidden
                        link-hover-effect
                        link-hover-effect--white
                    ">Projects</a>
                    <button className="btn-contact"><a href="mailto:mavseneris@gmail.com" >Contact</a></button>
                </div>}
            </div>
        </section>

    )
}