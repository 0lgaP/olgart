import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { FiMic } from "react-icons/fi";
import { GiHeartBottle } from "react-icons/gi";
import { FaHatWizard } from "react-icons/fa";
import { RiAliensFill } from "react-icons/ri";


const icons = {
  check: <BsPatchCheckFill className="experience__details-icon" />,
  mic: <FiMic className="experience__details-icon" />,
  heart: <GiHeartBottle className="experience__details-icon" />,
  hat: <FaHatWizard className="experience__details-icon" />,
  alien: <RiAliensFill className="experience__details-icon" />,

};

interface Skills {
  skills: string[];
  icon: string;
}

export const FullDevExperience = (props: Skills) => {
  const { skills, icon } = props;
  const useIcon = icons[icon];
  return skills?.map((each) => (
    <li key={each} className="experience__details">
      {useIcon}
      <p>{each}</p>
    </li>
  ));
};
