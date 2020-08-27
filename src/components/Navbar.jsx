import React from 'react';

import avatar1 from '../assets/images/img-perfil-1.jpeg';
import avatar2 from '../assets/images/img-perfil-2.jpeg';
import avatar3 from '../assets/images/img-perfil-3.jpg';

const Navbar = () =>{
    return(
        <nav className="slide">
            <div className="slide__group">
                <a className="slide__item fourth-position" href="/"><img src={avatar1} alt=""/>Jobana Garavito</a>
                <a className="slide__item third-position" href="/"><img src={avatar2} alt=""/>Omar Montoya</a>
                <a className="slide__item second-position" href="/"><img src={avatar3} alt=""/>María Andrea Perico</a>
                <a className="slide__item first-position" href="/"><img src={avatar2} alt=""/>Erik Manuel Guevara</a>
                <a className="slide__item second-position" href="/"><img src={avatar1} alt=""/>Paola Porras</a>
                <a className="slide__item third-position" href="/"><img src={avatar2} alt=""/>Sergio Ruiz</a>
                <a className="slide__item fourth-position" href="/"><img src={avatar1} alt=""/>Jaime Escobedo</a>
            </div>
            <div className="slide__buttons">
                <button className="slide__buttons-single"><span>PREV</span></button>                    
                <button className="slide__buttons-single"><span>NEXT</span></button>
            </div>
        </nav>
    );
};

export default Navbar;