import React, { useState } from 'react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="dark-band" style={{borderBottom: '1px solid var(--color-border)'}}><div className="text-center mx-auto" style={{maxWidth: '640px', padding: 'var(--space-8) clamp(24px, 5vw, 64px)'}}><div className="inline-flex items-center gap-2"><span style={{color: 'var(--color-accent)', fontSize: '10px'}}>▸</span><span style={{fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-foreground-muted)'}}>Newsletter</span></div><h2 style={{fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: '500', letterSpacing: '-1.2px', margin: '12px 0 10px', color: 'var(--color-heading)'}}>Stay in the loop.</h2><p style={{fontSize: '15px', color: 'var(--color-foreground-muted)', lineHeight: '1.6', margin: '0 0 22px'}}>Product updates and team workflow tips, once a month.</p><form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mx-auto" style={{maxWidth: '440px'}}><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required="" placeholder="you@company.com" aria-label="Email address" className="flex-1" style={{height: '44px', padding: '0 14px', fontSize: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-canvas)', color: 'var(--color-foreground)', outline: 'none'}} value=""/><button type="submit" style={{height: '44px', padding: '0 22px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-foreground)', background: 'var(--color-foreground)', color: 'var(--color-background)', fontSize: '14px', fontWeight: '700', cursor: 'pointer', whiteSpace: 'nowrap'}}>Subscribe</button></form>{subscribed && <div className="mt-3 text-xs text-green-400 font-medium">✓ You're on the list! We'll keep you updated.</div>}<p style={{fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em', color: 'var(--color-foreground-muted)', margin: '14px 0 0'}}>No spam. Unsubscribe anytime.</p></div></section>
  );
}
