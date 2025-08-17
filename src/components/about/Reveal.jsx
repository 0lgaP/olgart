import React, { useState } from 'react';
import "./about.css";

function Reveal() {
  const [isRevealed, setIsRevealed] = useState(false);

  const toggleReveal = () => {
    setIsRevealed(!isRevealed); // Toggles the boolean state
  };

  return (

      <button onClick={toggleReveal}
       className='reveal__button'
      >
        {isRevealed ? 'alientorontoart@gmail.com' : 'Click to reveal my email address'}
      </button>
  );
}

export default Reveal;