import React from 'react';

import avatar1 from '../assets/images/img-perfil-1.jpeg';
import avatar2 from '../assets/images/img-perfil-2.jpeg';
import avatar3 from '../assets/images/img-perfil-3.jpg';

const Navbar = () =>{
    return(
        <nav class="slide">
            <div class="slide__group">
                <a class="slide__item fourth-position" href="/"><img src={avatar1} alt=""/>Jobana Garavito</a>
                <a class="slide__item third-position" href="/"><img src={avatar2} alt=""/>Omar Montoya</a>
                <a class="slide__item second-position" href="/"><img src={avatar3} alt=""/>María Andrea Perico</a>
                <a class="slide__item first-position" href="/"><img src={avatar2} alt=""/>Erik Manuel Guevara</a>
                <a class="slide__item second-position" href="/"><img src={avatar1} alt=""/>Paola Porras</a>
                <a class="slide__item third-position" href="/"><img src={avatar2} alt=""/>Sergio Ruiz</a>
                <a class="slide__item fourth-position" href="/"><img src={avatar1} alt=""/>Jaime Escobedo</a>
            </div>
            <div class="slide__buttons">
                <button class="slide__buttons-single"><span></span></button>                    
                <button class="slide__buttons-single"><span></span></button>
            </div>
        </nav>
    );
};

export default Navbar;