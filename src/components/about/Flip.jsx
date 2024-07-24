import React, { useState } from "react";
import "./Flip.css"; /* change all css related to flip */

/* section id="about" */

const Flip = ({ one, two, alt }) => {
    const [over, setOver] = useState(false);
    return (
            <div className="">
                <div
                    className="flip__me"
                    onMouseOver={() => setOver(true)}
                    onMouseOut={() => setOver(false)}
                >
                    <img
                        className={over ? "flip__me-image" : "flip__me-cartoon"}
                        src={over ? two : one}
                        alt={alt && "on closer inspection this item is somehting else, this is a lil eye trick i built in, not really alt worthy, but ig you are here hai!"}
                    />
                </div>
            </div>
    );
};

export default Flip;
