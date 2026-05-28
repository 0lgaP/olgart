import React from "react";
import "./experience.css";
import { FullDevExperience } from "./experiance.tsx";
import { DevSkills, SoftSkills, ArtSkills, AlienBirthday, AlienBusker, AlienTorontoParty } from "./resume";
import Thumb from "../../assets/Taco.png"
import Cheek from '../../assets/Cheekhold.png'
import Leg from '../../assets/Folded.png'
import MissALien from '../../assets/Blur _ leg up.png'

const ExperienceBlock = () => {
  return (
    <section >
      <br></br>
      <br></br>
      <h2>Private Events </h2>
      <div className="aliens">
      <img src={Thumb}/>
      <img src={Cheek}/>
      <img src={Leg}/>
      </div>
    

      <article className="container experience__container">
        <div>
          <div >

          <h2>Alien Tarot Party</h2>

          </div>
          <ul className="experience__content">
            <FullDevExperience icon="hat" skills={AlienTorontoParty} />
          </ul>
    
        </div>
        

        <div className="experience__frontend">
          <h2>Alien Birthday</h2>
          <ul className="experience__content">
            <FullDevExperience icon="alien" skills={AlienBirthday} />
            
          </ul>
        </div>

        <div className="experience__frontend">
          <h2>Alien Busker</h2>
          <ul className="experience__content">
            <FullDevExperience icon="check" skills={AlienBusker} />
          </ul>
        </div>


      </article>
    </section>
  );
};

export default ExperienceBlock;
