import React from 'react';

import profile from '../assets/images/tecnic-profile.svg';
import code from '../assets/images/code.svg';
import power from '../assets/images/power-1.png';
import weakness from '../assets/images/weakness-1.png';

const Main = (props) => {
  return (
    <main>
      <section className='profile'>
        <div className='section-title'>
          <img className='icon' src={profile} alt='' />
          <h2>Technical Profile</h2>
        </div>
        <div className='profile__container'>
          <div className='profile__card card-1'>
            <h3>Experience</h3>
            <p>
              {props.info.Experience}
            </p>
          </div>
          <div className='profile__card card-2'>
            <h3>Objectives</h3>
            <p>
              {props.info.Objectives}
            </p>
          </div>
          <div className='profile__card card-3'>
            <h3>Soft Skills</h3>
            <p>
              {props.info.softSkills}
            </p>
          </div>
          <div className='profile__card card-4'>
            <h3>Influences</h3>
            <p>
              {props.info.Influences}
            </p>
          </div>
          <div className='tools'>
            <div className='profile__tools'>
              <div className='section-title'>
                <img className='icon' src={code} alt='tools' />
                <h2>
                  Tools, languages
                  <br />
                  {' '}
                  and frameworks
                </h2>
              </div>
              <div>
                <ul className='profile__skills-bars'>
                  <li className='bar-10'>{props.info.Tools[0].name}</li>
                  <li className='bar-20'>{props.info.Tools[1].name}</li>
                  <li className='bar-30'>{props.info.Tools[2].name}</li>
                  <li className='bar-50'>{props.info.Tools[3].name}</li>
                  {/* <li className='bar-100'>{props.info.Tools[4].name}</li> */}
                </ul>
              </div>
            </div>
            <div className='english-level'>

              <h2>
                <span>{props.info.englishLevel}0%</span>
                English Level
              </h2>
            </div>
          </div>
          <div className='power profile__values'>

            <img src={power} alt='' />

            <div className='profile__values__desc'>
              <h3>Mi super poder</h3>
              <p>
                {props.info.mySuperPower}
              </p>
            </div>
          </div>
          <div className='weakness profile__values'>

            <img src={weakness} alt='' />

            <div className='profile__values__desc'>
              <h3>Mi mayor debilidad</h3>
              <p>
                {props.info.myBiggestWeakness}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
