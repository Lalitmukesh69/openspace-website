import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: "Can I try it for free?",
    a: "Yes. The Starter plan is free forever with up to 3 channels, and every paid plan starts with a 14-day trial. No credit card needed to begin."
  },
  {
    q: "Which networks can I post to?",
    a: "All the major ones: X, Instagram, Facebook, LinkedIn, TikTok, YouTube, Threads, Pinterest, and Mastodon, with more added regularly. One post can go out to any mix of them."
  },
  {
    q: "Does the agent post without asking me?",
    a: "Only if you want it to. Approval mode is on by default, so every draft waits for your click. Turn on auto-publish per channel once you trust the queue."
  },
  {
    q: "What counts as a channel?",
    a: "One connected account on one network. Your Instagram account is one channel and your X account is another. Plans are priced by how many channels you connect."
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, cancellation is self-serve from the billing page. Your posts and media stay exportable after you cancel, so you never lose your content."
  },
  {
    q: "Is my data secure?",
    a: "Data is encrypted in transit and at rest. The agent only reads the channels you connect, and you can disconnect a channel or delete your data whenever you want."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(prev => (prev === idx ? -1 : idx));
  };

  return (
    <div id="faq">
      <section className="bg-[var(--color-canvas-soft)] flat-dark-surfaces" style={{paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)', borderBottom: '1px solid var(--color-border)'}}>
        <div className="mx-auto" style={{padding: '0 clamp(24px, 5vw, 64px)', maxWidth: '880px'}}>
          <h2 className="text-center" style={{fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: '500', letterSpacing: '-1.5px', margin: '0 0 18px', color: 'var(--color-heading)'}}>
            FAQ
          </h2>
          <div>
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggle(idx)}
                  className="text-left w-full cursor-pointer bg-transparent border-none"
                  style={{display: 'block', width: '100%', padding: '13px 0'}}
                >
                  <span style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                    <span style={{flex: '1', fontSize: '16px', fontWeight: isOpen ? '600' : '500', color: 'var(--color-foreground)'}}>
                      {item.q}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      style={{
                        width: '16px',
                        height: '16px',
                        flexShrink: '0',
                        color: 'var(--color-foreground-muted)',
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                    </svg>
                  </span>
                  <span
                    style={{
                      display: 'block',
                      overflow: 'hidden',
                      maxHeight: isOpen ? '240px' : '0',
                      opacity: isOpen ? '1' : '0',
                      transition: 'max-height 0.34s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.28s ease'
                    }}
                  >
                    <span style={{display: 'block', fontSize: '15px', color: 'var(--color-foreground-muted)', lineHeight: '1.5', margin: '10px 0 0'}}>
                      {item.a}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
