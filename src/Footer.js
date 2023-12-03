import React from "react";
import './Fotter.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
       
        <p>
         <strong>Why am I receiving this invitation?</strong> 
        </p>
        <p>
          This invitation is automatically sent to you, once job opportunity
          match your public profile to invite you for job hiring process.
        </p>
        <p>
          To stop receiving these emails, please <strong> send "unsubscribe" email to
          jobtalents@talentspace.ai</strong>
        </p>
        {/* <img src="https://talentspace.ai/wp-content/uploads/2023/04/logo_dark-copy.png"></img> */}
      </div>
    </footer>
  );
};

export default Footer;