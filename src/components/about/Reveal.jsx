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
       style={{ cursor: 'pointer'}}
      >
        {isRevealed ? 'alientorontoart@gmail.com' : 'email'}
      </button>
  );
}

export default Reveal;