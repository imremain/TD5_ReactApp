import React from 'react';

const Navbar = () =>{
    return(
        <nav class="slide">
            <div class="slide__group">
                <a class="slide__item fourth-position" href="/"><img src="../assets/images/img-perfil-1.jpeg" alt=""/>Jobana Garavito</a>
                <a class="slide__item third-position" href="/"><img src="../assets/images/img-perfil-2.jpeg" alt=""/>Omar Montoya</a>
                <a class="slide__item second-position" href="/"><img src="../assets/images/img-perfil-3.jpeg" alt=""/>María Andrea Perico</a>
                <a class="slide__item first-position" href="/"><img src="../assets/images/img-perfil-2.jpeg" alt=""/>Erik Manuel Guevara</a>
                <a class="slide__item second-position" href="/"><img src="../assets/images/img-perfil-1.jpeg" alt=""/>Paola Porras</a>
                <a class="slide__item third-position" href="/"><img src="../assets/images/img-perfil-2.jpeg" alt=""/>Sergio Ruiz</a>
                <a class="slide__item fourth-position" href="/"><img src="../assets/images/img-perfil-1.jpeg" alt=""/>Jaime Escobedo</a>
            </div>
            <div class="slide__buttons">
                <button class="slide__buttons-single"><span></span></button>                    
                <button class="slide__buttons-single"><span></span></button>
            </div>
        </nav>
    );
};

export default Navbar;