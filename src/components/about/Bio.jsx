import React from "react";
import "./Bio.css";

const Bio = ({ bio }) => {
    return (
        <p>
            {bio ? bio : "Toronto artist specializing in acrylic paintings in the illustrative, representational, urban, lowbrow, comic, pop art style. Please enjoy my corner of the internet, and follow me on instagram for live updates."}
        </p>
    );
};

export default Bio;
