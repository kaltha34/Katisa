'use client';

import { useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function WebinarRoomPage() {
  const params = useParams();
  const router = useRouter();
  const roomName = params?.roomName;
  const jitsiContainerRef = useRef(null);
  const jitsiApiRef = useRef(null);

  useEffect(() => {
    if (!roomName) {
      router.push('/webinars');
      return undefined;
    }

    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;
    script.onload = () => {
      const domain = 'meet.jit.si';
      jitsiApiRef.current = new window.JitsiMeetExternalAPI(domain, {
        roomName: `KatisaTech_${roomName}`,
        width: '100%',
        height: '100%',
        parentNode: jitsiContainerRef.current,
        configOverwrite: {
          startWithAudioMuted: true,
          startWithVideoMuted: false,
          enableWelcomePage: false,
          prejoinPageEnabled: true,
          disableDeepLinking: false,
        },
        userInfo: { displayName: 'Guest' },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
        },
      });

      jitsiApiRef.current.addEventListener('readyToClose', () => {
        router.push('/webinars');
      });
    };
    document.body.appendChild(script);

    return () => {
      if (jitsiApiRef.current) jitsiApiRef.current.dispose();
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, [roomName, router]);

  return (
    <div className="fixed inset-0 bg-black">
      <div ref={jitsiContainerRef} className="h-full w-full" />
    </div>
  );
}
