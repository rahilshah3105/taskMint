import React, { useEffect, useRef } from 'react';

function loadAdSenseScript(client) {
  if (!client || typeof document === 'undefined') {
    return;
  }

  // Prevent loading the script multiple times
  const existingScript = document.querySelector('script[data-textmint-adsense="true"]');
  if (existingScript) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  script.setAttribute('data-ad-client', client);
  script.setAttribute('data-textmint-adsense', 'true');
  document.head.appendChild(script);
}

export default function AdBanner({ client, slot, mode = 'light', className = '', ariaLabel = 'Advertisement', minHeight = '90px' }) {
  const adRef = useRef(null);

  useEffect(() => {
    // Only push ads if keys are present
    if (!client || !slot || typeof window === 'undefined') {
      return;
    }

    loadAdSenseScript(client);

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (e) {
      // Ad scripts can fail silently in dev or without a valid account.
    }
  }, [client, slot]);

  // Fallback / Placeholder when environment variables are missing or are placeholder values
  const isPlaceholder = !client || !slot || client.includes('YOUR_PUBLISHER_ID') || slot === '1234567890' || slot === '0987654321';

  if (isPlaceholder) {
    return (
      <div
        className={`ad-banner ad-banner--placeholder ${className}`.trim()}
        role="note"
        aria-label={ariaLabel}
        style={{
          border: `1px dashed ${mode === 'dark' ? '#4b5563' : '#cbd5e1'}`,
          borderRadius: '14px',
          padding: '16px',
          minHeight,
          background: mode === 'dark' ? '#1e293b' : '#f8fafc',
          color: mode === 'dark' ? '#cbd5e1' : '#475569',
          maxWidth: '728px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          margin: '0 auto',
        }}
      >
        <strong style={{ display: 'block', marginBottom: '4px', color: mode === 'dark' ? '#f1f5f9' : '#0f172a' }}>
          Ad Space Reserved
        </strong>
        <span style={{ fontSize: '12px' }}>
          Configure environment variables (`VITE_ADSENSE_CLIENT_ID` and slots) to enable live ads in production.
        </span>
      </div>
    );
  }

  // Live Google Ad
  return (
    <div className={`ad-banner ${className}`.trim()} aria-label={ariaLabel} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', minHeight, width: '100%', maxWidth: '728px' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
