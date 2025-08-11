import React, { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import "./header.css"

function EmailCopyComponent() {
  const emailAddress = 'alientorontoart@gmail.com';
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyStatus('Email copied!');
      // Optionally, clear the status message after a short delay
      setTimeout(() => setCopyStatus(''), 2000); 
    } catch (err) {
      setCopyStatus('Failed to copy email.');
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="email__style">

      <span 
        onClick={handleCopyClick} 
        style={{ margin: '-11px', paddingLeft: '4px', paddingRight: '4px', color:' rgba(255, 230, 8, 0.733)', fontsize: '3rem'}}
      >
        < HiOutlineMail  />
      </span>
      {copyStatus && <p style={{ position: 'fixed', index: '1000', transform: 'translate(-50%, -50%)', left: '50%', top: '50%', padding: '10px', color:' rgb(177, 60, 147)', background: ' rgba(255, 230, 8, 0.77)', borderRadius: '20px' }}>{copyStatus}</p>}
    </div>
  );
}

export default EmailCopyComponent;