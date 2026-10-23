import React from 'react';

const STATS_ITEMS = [
  {
    bigText: '01',
    headline: 'One Agentic Workspace',
    supporting: 'Your knowledge, ideas, and work connected in one place.',
    badge: 'ALL-IN-ONE'
  },
  {
    bigText: '∞',
    headline: 'More From What You Know',
    supporting: 'Turn saved information into research, plans, insights, and action.',
    badge: 'CONTINUOUS AI'
  },
  {
    bigText: 'MCP',
    headline: 'Your AI, With Context',
    supporting: 'Connect OpenSpace with Claude, ChatGPT, and compatible AI tools.',
    badge: 'PROTOCOL'
  },
  {
    bigText: '03',
    headline: 'Capture Everywhere',
    supporting: 'Desktop, browser, and phone — keep your workflow connected.',
    badge: 'CROSS-PLATFORM'
  }
];

export default function StatsStrip() {
  return (
    <section
      style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-canvas)'
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-border)]">
        {STATS_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center text-center transition-all duration-300 hover:bg-[var(--color-canvas-soft)] group"
            style={{
              padding: 'var(--space-7) clamp(18px, 2.5vw, 32px)',
              borderColor: 'var(--color-border)'
            }}
          >
            {/* Ambient subtle futuristic badge */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9.5px',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '14px',
                fontWeight: '600'
              }}
            >
              {item.badge}
            </div>

            {/* Big futuristic glyph / stat */}
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(38px, 4.4vw, 54px)',
                fontWeight: '600',
                letterSpacing: item.bigText === 'MCP' ? '-1px' : '-2px',
                lineHeight: '1',
                color: 'var(--color-foreground)',
                fontVariantNumeric: 'tabular-nums'
              }}
            >
              {item.bigText}
            </div>

            {/* Headline */}
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                fontWeight: '600',
                letterSpacing: '-0.3px',
                color: 'var(--color-heading)',
                marginTop: '12px',
                lineHeight: '1.3'
              }}
            >
              {item.headline}
            </div>

            {/* Supporting Text */}
            <p
              style={{
                fontSize: '13.5px',
                color: 'var(--color-foreground-muted)',
                lineHeight: '1.5',
                marginTop: '6px',
                maxWidth: '240px'
              }}
            >
              {item.supporting}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
