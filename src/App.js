import React, { useState } from 'react';
import VerifyInformation from './VerifyInformation';
import VideoScreening from './VideoScreening';
import GreetingsAndConfirmation from './GreetingsAndConfirmation';

function App() {
  const [isVerified, setVerified] = useState(false);
  const [showGreetings, setShowGreetings] = useState(true);
  const [showVerifyInformation, setShowVerifyInformation] = useState(false);
  const [showVideoScreening, setShowVideoScreening] = useState(false);

  const handleVerification = (formData) => {
    setVerified(true);
    setShowGreetings(false);
    setShowVerifyInformation(true);
  };

  const handleNextPage = () => {
    setShowVerifyInformation(true);
    setShowGreetings(false);
  };

  const handleStartScreening = () => {
    setShowVideoScreening(true);
    setShowVerifyInformation(false);
  };

  return (
    <div className="app-container">
      {showGreetings && (
        <GreetingsAndConfirmation onNextPage={handleNextPage} />
      )}
      {showVerifyInformation && (
        <VerifyInformation onVerification={handleVerification} onStartScreening={handleStartScreening} />
      )}
      {showVideoScreening && <VideoScreening />}
      {isVerified && !showVerifyInformation && !showVideoScreening && (

        <div>
          <p>Verification complete. Thank you!</p>
        </div>
      )}
    </div>
  );
}

export default App;