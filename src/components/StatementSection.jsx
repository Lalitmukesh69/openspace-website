import React from 'react';

export default function StatementSection() {
  return (
    <div style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'}}>
      <section
        className="bg-[var(--color-canvas-soft)]"
        style={{paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)', borderBottom: '1px solid var(--color-border)'}}
      >
        <div style={{padding: '0 clamp(24px, 5vw, 64px)'}}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 4vw, 32px)',
              fontWeight: '500',
              letterSpacing: '-1.2px',
              lineHeight: '1.25',
              margin: '0',
              maxWidth: '920px',
              color: 'var(--color-heading)'
            }}
          >
            Connect OpenSpace with Claude, ChatGPT, and compatible AI tools to give them context from your knowledge.{' '}
            <span style={{color: 'var(--color-foreground-muted)'}}>
              Get better help with your work, research, planning, and everyday tasks without starting from scratch every time.
            </span>
          </h2>
        </div>
      </section>
    </div>
  );
}
