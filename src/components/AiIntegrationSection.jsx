import React from 'react';

export default function AiIntegrationSection() {
  return (
    <section
      className="bg-[var(--color-canvas-soft)]"
      style={{paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)', borderBottom: '1px solid var(--color-border)'}}
    >
      <div style={{padding: '0 clamp(24px, 5vw, 64px)'}}>
        <div className="grid grid-cols-1 lg:grid-cols-[500px_minmax(0,1fr)]" style={{gap: 'clamp(32px, 6vw, 88px)', alignItems: 'start'}}>
          
          {/* Left Column: Headline */}
          <div className="text-left lg:pt-2">
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 38px)',
                fontWeight: '500',
                letterSpacing: '-1.8px',
                lineHeight: '1.08',
                margin: '0',
                width: '100%',
                color: 'var(--color-heading)'
              }}
            >
              Bring your AI assistant. OpenSpace gives it context.
            </h2>
          </div>

          {/* Right Column: Subheadline & Tools Row */}
          <div className="text-left lg:border-l lg:border-[var(--color-border)] lg:pl-12">
            <p
              style={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'var(--color-foreground-muted)',
                lineHeight: '1.35',
                margin: '0'
              }}
            >
              Connect Claude, ChatGPT, and other compatible AI tools to your knowledge through OpenSpace. Get more relevant answers, tackle complex work, and simplify everyday tasks without starting from scratch.
            </p>

            <div className="flex flex-wrap items-start justify-start gap-x-8 gap-y-6" style={{maxWidth: '640px', marginTop: '28px'}}>
              
              {/* Claude */}
              <div className="flex flex-col items-center" style={{gap: '10px', minWidth: '58px'}}>
                <img src="/logos/claude.svg" alt="Claude" width="40" height="40" style={{width: '40px', height: '40px', objectFit: 'contain', display: 'block'}} />
                <span style={{fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-foreground-muted)', whiteSpace: 'nowrap'}}>Claude</span>
              </div>

              {/* OpenAI / ChatGPT */}
              <div className="flex flex-col items-center" style={{gap: '10px', minWidth: '58px'}}>
                <div style={{width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-foreground)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38" height="38" fill="currentColor">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.66-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1402-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.8956zm16.5991 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4041-.6669zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1635a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
                  </svg>
                </div>
                <span style={{fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-foreground-muted)', whiteSpace: 'nowrap'}}>OpenAI</span>
              </div>

              {/* Gemini */}
              <div className="flex flex-col items-center" style={{gap: '10px', minWidth: '58px'}}>
                <img src="/logos/gemini.svg" alt="Gemini" width="40" height="40" style={{width: '40px', height: '40px', objectFit: 'contain', display: 'block'}} />
                <span style={{fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-foreground-muted)', whiteSpace: 'nowrap'}}>Gemini</span>
              </div>

              {/* Cursor */}
              <div className="flex flex-col items-center" style={{gap: '10px', minWidth: '58px'}}>
                <img 
                  src="/logos/cursor.png" 
                  alt="Cursor" 
                  width="40" 
                  height="40" 
                  style={{width: '40px', height: '40px', objectFit: 'contain', display: 'block'}} 
                />
                <span style={{fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-foreground-muted)', whiteSpace: 'nowrap'}}>Cursor</span>
              </div>

              {/* Antigravity */}
              <div className="flex flex-col items-center" style={{gap: '10px', minWidth: '58px'}}>
                <img 
                  src="/logos/antigravity.png" 
                  alt="Antigravity" 
                  width="40" 
                  height="40" 
                  style={{width: '40px', height: '40px', objectFit: 'contain', display: 'block'}} 
                />
                <span style={{fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-foreground-muted)', whiteSpace: 'nowrap'}}>Antigravity</span>
              </div>

              {/* Grok */}
              <div className="flex flex-col items-center" style={{gap: '10px', minWidth: '58px'}}>
                <div style={{width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-foreground)'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <span style={{fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-foreground-muted)', whiteSpace: 'nowrap'}}>Grok</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
