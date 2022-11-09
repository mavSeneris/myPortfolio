export default function Header(){
    
    
    
    return(
        <section className="Header">
            <div className="nav-flex-container container">
                <h1 className="logo ff-accent">Mav Seneris</h1>
                <div className="nav-links">
                    <a href="#languages" className="hidden">Languanges</a>
                    <a href="#projects" className="hidden">Projects</a>
                    {/* <a href="mailto:mavseneris@gmail.com" className="btn-contact">Contact</a> */}
                    <button className="btn-contact"><a href="mailto:mavseneris@gmail.com" >Contact</a></button>
                </div>
            </div>
        </section>

    )
}