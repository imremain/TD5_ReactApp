import React from 'react';

const Header = () =>{
    return(
        <header>
            <section className="about-me">
                <div className="about-me__name">
                    <h1>Erik Guevara</h1>
                    <div className="socials">
                        <a href="/"><span className="flaticon-001-facebook"></span></a>
                        <a href="/"><span className="flaticon-002-twitter"></span></a>
                        <a href="/"><span className="flaticon-011-instagram"></span></a>
                        <a href="/"><span className="flaticon-010-linkedin"></span></a>
                        <a href="/"><span className="flaticon-008-youtube"></span></a>
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