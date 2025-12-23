import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const WebinarRoomPage = () => {
  const { roomName } = useParams();
  const navigate = useNavigate();
  const jitsiContainerRef = useRef(null);
  const jitsiApiRef = useRef(null);

  useEffect(() => {
    if (!roomName) {
      navigate('/webinars');
      return;
    }

    // Load Jitsi Meet API
    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;
    script.onload = () => initializeJitsi();
    document.body.appendChild(script);

    return () => {
      if (jitsiApiRef.current) {
        jitsiApiRef.current.dispose();
      }
      document.body.removeChild(script);
    };
  }, [roomName, navigate]);

  const initializeJitsi = () => {
    const domain = 'meet.jit.si';
    const options = {
      roomName: `KatisaTech_${roomName}`,
      width: '100%',
      height: '100%',
      parentNode: jitsiContainerRef.current,
      configOverwrite: {
        startWithAudioMuted: true,
        startWithVideoMuted: false,
        enableWelcomePage: false,
        prejoinPageEnabled: true,
        disableDeepLinking: true,
      },
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        TOOLBAR_BUTTONS: [
          'microphone',
          'camera',
          'closedcaptions',
          'desktop',
          'fullscreen',
          'fodeviceselection',
          'hangup',
          'profile',
          'chat',
          'recording',
          'livestreaming',
          'etherpad',
          'sharedvideo',
          'settings',
          'raisehand',
          'videoquality',
          'filmstrip',
          'feedback',
          'stats',
          'shortcuts',
          'tileview',
          'download',
          'help',
          'mute-everyone',
        ],
      },
    };

    jitsiApiRef.current = new window.JitsiMeetExternalAPI(domain, options);

    // Event listeners
    jitsiApiRef.current.addEventListener('readyToClose', () => {
      navigate('/webinars');
    });
  };

  return (
    <div className="fixed inset-0 bg-black">
      <div ref={jitsiContainerRef} className="w-full h-full" />
    </div>
  );
};

export default WebinarRoomPage;
