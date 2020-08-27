import React from 'react';

import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () =>{
    return(
        <header>
            <section className="about-me">
                <div className="about-me__name">
                    <h1>Erik Guevara</h1>
                    <div className="socials">
                        <a href="/"><FontAwesomeIcon icon={faFacebook}/></a>
                        <a href="/"><FontAwesomeIcon icon={faTwitter}/></a>
                        <a href="/"><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="/"><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="/"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                    <p className="about-me__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis magni, nemo omnis
                        debitis reprehenderit ipsam eveniet eum, praesentium alias repudiandae totam tenetur error vitae
                        beatae aspernatur molestias fugit sequi.</p>
                </div>      
            </section>
        </header>
    );
};

export default Header;