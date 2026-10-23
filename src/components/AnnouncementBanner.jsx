import React from 'react';

export default function AnnouncementBanner() {
  return (
    <div
      className="relative block w-full overflow-hidden transition-colors"
      style={{background: 'var(--color-announce-bg)', color: 'var(--color-announce-foreground)'}}
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{overflow: 'hidden', zIndex: '0'}}></div>
      <div
        className="relative z-[1] w-full max-w-[1360px] mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center"
        style={{padding: '11px 24px', fontFamily: 'var(--font-sans)', fontSize: '13px', letterSpacing: '0.2px', lineHeight: '1.4'}}
      >
        <span style={{opacity: '0.95', fontWeight: '500'}}>
          Your ideas deserve a better space. Meet <strong style={{fontWeight: '700'}}>OpenSpace</strong> — your personal AI workspace.
        </span>
      </div>
    </div>
  );
}
