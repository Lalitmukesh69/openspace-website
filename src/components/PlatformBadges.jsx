import React from 'react';

export default function PlatformBadges() {
  return (
    <section style={{borderBottom: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)'}}>
      <div className="mx-auto" style={{padding: 'var(--space-8) clamp(24px, 5vw, 64px)', maxWidth: '1180px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,0.85fr)_minmax(0,1.15fr)]" style={{gap: 'clamp(30px, 5vw, 72px)', alignItems: 'center'}}>
          
          {/* Left headline */}
          <div className="text-center lg:text-left">
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: '500',
                letterSpacing: '-1.5px',
                color: 'var(--color-heading)',
                lineHeight: '1.1',
                margin: '0',
                maxWidth: '440px'
              }}
            >
              Give your AI more to work with.
            </h2>
          </div>

          {/* Right content */}
          <div className="text-center lg:border-l lg:border-[var(--color-border)] lg:pl-12 lg:text-left">
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 2.5vw, 22px)',
                fontWeight: '500',
                letterSpacing: '-0.3px',
                color: 'var(--color-foreground)',
                lineHeight: '1.35',
                margin: '0'
              }}
            >
              OpenSpace connects your knowledge to compatible AI tools like Claude and ChatGPT.
            </p>
            <p
              style={{
                fontSize: '15.5px',
                color: 'var(--color-foreground-muted)',
                lineHeight: '1.6',
                margin: '12px 0 0'
              }}
            >
              Give your AI the context it needs to help you research, solve problems, plan projects, and handle everyday tasks.
            </p>

            <div className="flex items-center justify-center gap-6 lg:justify-start" style={{marginTop: '20px'}}>
              <a href="https://github.com/omeraplak" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group">
                <img src="/team/omeraplak.png" alt="@aplak" width="32" height="32" style={{borderRadius: '9999px', border: '1px solid var(--color-border)', display: 'block'}}/>
                <span className="group-hover:underline" style={{fontSize: '15px', color: 'var(--color-foreground-muted)', textUnderlineOffset: '3px', whiteSpace: 'nowrap'}}>@aplak</span>
              </a>
              <a href="https://github.com/necatiozmen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 group">
                <img src="/team/necatiozmen.png" alt="@ozmen" width="32" height="32" style={{borderRadius: '9999px', border: '1px solid var(--color-border)', display: 'block'}}/>
                <span className="group-hover:underline" style={{fontSize: '15px', color: 'var(--color-foreground-muted)', textUnderlineOffset: '3px', whiteSpace: 'nowrap'}}>@ozmen</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
