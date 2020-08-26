import React from 'react';

import '../assets/styles/components/Main.scss';

const Main = () =>{
    return(
        <main>
            <section class="profile">
                <div class="section-title">
                    <img class="icon" src="./assets/img/tecnic-profile.svg" alt=""/>
                    <h2>Tecnic Profile</h2>
                </div>
                <div class="profile__container">
                    <div class="profile__card card-1">        
                        <h3>Habilidades</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea quod qui dolore quidem enim
                            maiores quo, deleniti sed voluptatibus harum corrupti eius sunt eaque laboriosam temporibus
                            facere
                            perspiciatis laborum?</p>
                    </div>
                    <div class="profile__card card-2">
                        <h3>Habilidades</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio itaque provident assumenda dolorum
                            blanditiis molestiae dolore, incidunt, nostrum quidem sequi accusantium sunt, ea vitae harum
                            inventore velit maiores ab? Hic.</p>
                    </div>
                    <div class="profile__card card-3">
                        <h3>Habilidades</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio itaque provident assumenda dolorum
                            blanditiis molestiae dolore, incidunt, nostrum quidem sequi accusantium sunt, ea vitae harum
                            inventore velit maiores ab? Hic.</p>
                    </div>
                    <div class="profile__card card-4">
                        <h3>Habilidades</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio itaque provident assumenda dolorum
                            blanditiis molestiae dolore, incidunt, nostrum quidem sequi accusantium sunt, ea vitae harum
                            inventore velit maiores ab? Hic.</p>
                    </div>                
                    <div class="tools">
                        <div class="profile__tools">
                            <div class="section-title">
                                <img class="icon" src="./assets/img/code.svg" alt="tools-image"/>
                                <h2>Tools, languages <br/> and frameworks</h2>
                            </div>
                            <div>
                                <ul class="profile__skills-bars">
                                    <li class="bar-10">html</li>
                                    <li class="bar-20">css</li>
                                    <li class="bar-30"> js</li>
                                    <li class="bar-50">laravel</li>
                                    <li class="bar-100">react</li>
                                </ul>
                            </div>
                        </div>
                        <div class="english-level">
                            
                            <h2><span>70%</span>English Level</h2>
                        </div>
                    </div>
                <div class="power profile__values">
                    <img src="./assets/img/power-1.png" alt=""/>
                    <div class="profile__values__desc">
                        <h3>Mi super poder</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ad a laboriosam aliquam eaque nulla
                            at numquam. Mollitia, iste sint.
                        </p>
                    </div>
                </div>
                <div class="weakness profile__values">
                    <img src="./assets/img/weakness-1.png" alt=""/>
                    <div class="profile__values__desc">
                        <h3>Mi mayor debilidad</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti magnam, earum ducimus
                            itaque tenetur nam inventore nihil aperiam velit?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
};

export default Main;