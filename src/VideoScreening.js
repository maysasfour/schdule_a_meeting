import React from 'react';

function VideoScreening({ onStart, onRecord }) {
  const iframeStyle = {
    border: 'none',
    borderRadius: '24px',
    width: '100%',
    height: '695px',
  };

  return (
    <div className="video-screening">
      <iframe
        src="https://www.videoask.com/fkf3kgm08"
        allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *"
        style={iframeStyle}
      ></iframe>

    </div>
  );
}

export default VideoScreening;