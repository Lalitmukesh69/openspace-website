import React from 'react';

export default function Footer() {
  return (
    <footer style={{background: 'var(--color-footer-band)', color: 'var(--color-footer-band-foreground)'}}>
      <div className="w-full max-w-[1360px] mx-auto pt-16 pb-8" style={{paddingLeft: 'clamp(24px, 5vw, 64px)', paddingRight: 'clamp(24px, 5vw, 64px)'}}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-12">
          
          {/* Brand & Description */}
          <div>
            <div className="mb-5 flex items-center gap-1.5" style={{fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--color-footer-band-foreground)', fontWeight: '400', lineHeight: '1.1'}}>
              <span>OpenSpace</span>
              <span style={{fontFamily: 'var(--font-sans)', fontSize: '8.5px', color: 'var(--color-footer-band-foreground)', opacity: 0.75, fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase', border: '1px solid rgba(250, 248, 239, 0.25)', borderRadius: '2.5px', padding: '1px 3.5px', lineHeight: '1', display: 'inline-block'}}>Beta</span>
            </div>
            <p className="text-[14px] max-w-[340px]" style={{color: 'var(--color-footer-band-foreground)', fontFamily: 'var(--font-sans)', lineHeight: '1.7', letterSpacing: '0.3px', opacity: '0.85'}}>
              Your agentic workspace for connecting knowledge, working smarter with AI, and getting more done — across your PC, browser, and phone.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h6 className="text-[12px] mb-5" style={{fontFamily: 'var(--font-sans)', color: 'var(--color-footer-band-foreground)', letterSpacing: '1.2px', fontWeight: '700', textTransform: 'uppercase', lineHeight: '1.8'}}>
              PRODUCT
            </h6>
            <ul className="flex flex-col gap-3 text-sm" style={{fontFamily: 'var(--font-sans)', lineHeight: '1.8', letterSpacing: '0.4px'}}>
              <li>
                <a className="transition-colors active hover:opacity-100" href="#features" style={{color: 'var(--color-footer-band-foreground)', opacity: '0.85'}}>
                  Features
                </a>
              </li>
              <li>
                <a className="transition-colors hover:opacity-100" href="/download" style={{color: 'var(--color-footer-band-foreground)', opacity: '0.85'}}>
                  Download OpenSpace
                </a>
              </li>
              <li>
                <a className="transition-colors hover:opacity-100" href="/mcp" style={{color: 'var(--color-footer-band-foreground)', opacity: '0.85'}}>
                  MCP Server
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h6 className="text-[12px] mb-5" style={{fontFamily: 'var(--font-sans)', color: 'var(--color-footer-band-foreground)', letterSpacing: '1.2px', fontWeight: '700', textTransform: 'uppercase', lineHeight: '1.8'}}>
              RESOURCES
            </h6>
            <ul className="flex flex-col gap-3 text-sm" style={{fontFamily: 'var(--font-sans)', lineHeight: '1.8', letterSpacing: '0.4px'}}>
              <li>
                <a href="/docs" style={{color: 'var(--color-footer-band-foreground)', opacity: '0.85'}} className="transition-colors hover:opacity-100">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/about" style={{color: 'var(--color-footer-band-foreground)', opacity: '0.85'}} className="transition-colors hover:opacity-100">
                  About
                </a>
              </li>
              <li>
                <a href="https://x.com/Lalit20054411" target="_blank" rel="noopener noreferrer" style={{color: 'var(--color-footer-band-foreground)', opacity: '0.85'}} className="transition-colors hover:opacity-100">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 text-xs" style={{borderTop: '1px solid rgba(250, 248, 239, 0.15)', color: 'var(--color-footer-band-foreground)', opacity: '0.7', fontFamily: 'var(--font-sans)', letterSpacing: '0.4px'}}>
          <span>© 2026 OpenSpace. All rights reserved.</span>
          <span className="flex flex-wrap items-center gap-4">
            <a href="/terms" style={{color: 'inherit'}} className="hover:opacity-100">Terms</a>
            <a href="/privacy" style={{color: 'inherit'}} className="hover:opacity-100">Privacy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
