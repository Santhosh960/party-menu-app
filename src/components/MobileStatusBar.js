import React, { useState, useEffect } from 'react';

const MobileStatusBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  return (
    <div className="mobile-status-bar">
      <div className="status-time">
        {formatTime(currentTime)}
      </div>
      
      <div className="status-icons">
        {/* Signal Icon */}
        <svg className="signal-icon" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="8" width="2" height="4" rx="0.5"/>
          <rect x="4" y="6" width="2" height="6" rx="0.5"/>
          <rect x="8" y="4" width="2" height="8" rx="0.5"/>
          <rect x="12" y="2" width="2" height="10" rx="0.5"/>
          <rect x="16" y="0" width="2" height="12" rx="0.5"/>
        </svg>
        
        {/* WiFi Icon */}
        <svg className="wifi-icon" viewBox="0 0 18 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12c0.6 0 1-0.4 1-1s-0.4-1-1-1-1 0.4-1 1 0.4 1 1 1z"/>
          <path d="M12.3 8.7c0.4-0.4 0.4-1 0-1.4-1.6-1.6-4.2-1.6-5.8 0-0.4 0.4-0.4 1 0 1.4 0.4 0.4 1 0.4 1.4 0 0.8-0.8 2.2-0.8 3 0 0.4 0.4 1 0.4 1.4 0z"/>
          <path d="M15.5 5.5c0.4-0.4 0.4-1 0-1.4-3.1-3.1-8.1-3.1-11.2 0-0.4 0.4-0.4 1 0 1.4 0.4 0.4 1 0.4 1.4 0 2.3-2.3 6.1-2.3 8.4 0 0.4 0.4 1 0.4 1.4 0z"/>
        </svg>
        
        {/* Battery Icon */}
        <svg className="battery-icon" viewBox="0 0 24 12" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="2" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
          <rect x="21.5" y="4.5" width="1.5" height="3" rx="0.5" fill="currentColor"/>
          <rect x="2" y="3" width="16" height="6" rx="1" fill="currentColor"/>
        </svg>
      </div>
    </div>
  );
};

export default MobileStatusBar;