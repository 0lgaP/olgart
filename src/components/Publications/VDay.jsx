import React, { useState } from "react";
import "./public.css";
import olga_head from "../../assets/Empress.png";



const VDay = () => {
    const [over, setOver] = useState(false);
    return (
        <section id="public">
            <div className="public__container reddy">

                <div className="reddy ">

                    <img
                        className={"public__me-image"}
                        src={olga_head}
                        alt=""
                    />
                    <div>
                        <div className=" public__textbox white">
                       

                            <h3>
                        👽 Valentimes
                            </h3>
                            <p>
            
                                What time is it? It's ValenTimes!
                                <br></br>
                                Join me Feb 14th for a special Valentine's Day reading in the Distillery District
                            </p>
                    
                        </div>
                        <br></br>
                        <a href="https://www.eventbrite.com/e/alien-tarot-reading-tickets-1981951679827?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
                            className="public__link_white"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="new tab to Aubirn Lane article"
                        >
                            
                                Eventbright⚡
                            
                        </a>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default VDay;
