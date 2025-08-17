import React, { useState } from "react";
import "./public.css";
import olga_head from "../../assets/Magician.png";



const Public = () => {
    const [over, setOver] = useState(false);
    return (
        <section id="public">
            <div className="public__container">

                <div className=" public__card">

                    <img
                        className={"public__me-image"}
                        src={olga_head}
                        alt=""
                    />
                    <div className="public__textbox">

                        <h3>
                            🌹 Auburn Lane
                        </h3>
                        <p>
                            This wonderful female-lead publication catured some deep Alien Toronto lore. If you even wondered..."why?", this will answer some but not all of your questions!
                            <br></br>
                        </p>

                        <a href="https://www.auburnlane.com/alien-toronto-offers-cosmic-tarot-readings-at-buskerfest/"
                            className="public__link"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="new tab to Aubirn Lane article"
                        >
                            <div >
                                Take me there, I am a reader! ⚡
                            </div>
                        </a>
                    </div>
                </div>
            </div>
    
        </section >
    );
};

export default Public;
