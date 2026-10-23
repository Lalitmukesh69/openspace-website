import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('vibecoder-kit-theme');
      if (stored) return stored;
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  const [lang, setLang] = useState('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('vibecoder-kit-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="sticky top-0 z-50" style={{background: 'var(--color-background)', borderBottom: '1px solid var(--color-border)'}}>
      <div className="w-full max-w-[1360px] mx-auto h-16 flex items-center justify-between" style={{padding: '0 24px'}}>
        <div className="flex items-center gap-8">
          <a aria-label="OpenSpace Beta" className="flex items-center gap-1.5 shrink-0 active" href="/" data-status="active" aria-current="page">
            <span className="text-[24px]" style={{fontFamily: 'var(--font-display)', color: 'var(--color-foreground)', fontWeight: '400', letterSpacing: '0', lineHeight: '1.2'}}>OpenSpace</span>
            <span style={{fontFamily: 'var(--font-sans)', fontSize: '8.5px', color: 'var(--color-foreground-muted)', fontWeight: '600', letterSpacing: '0.5px', textTransform: 'uppercase', border: '1px solid var(--color-border)', borderRadius: '2.5px', padding: '1px 3.5px', lineHeight: '1', display: 'inline-block'}}>Beta</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            <a style={{color: 'var(--color-foreground)', fontFamily: 'var(--font-sans)', fontWeight: '600', letterSpacing: '0'}} href="/" className="inline-flex items-center gap-1.5 text-[14px] whitespace-nowrap hover:text-[var(--color-foreground)] transition-colors" data-status="active" aria-current="page">
              <span className="nav-label">Home</span>
            </a>
            <a href="#features" style={{color: 'var(--color-foreground-muted)', fontFamily: 'var(--font-sans)', fontWeight: '500', letterSpacing: '0'}} className="inline-flex items-center gap-1.5 text-[14px] whitespace-nowrap hover:text-[var(--color-foreground)] transition-colors">
              <span className="nav-label">Features</span>
            </a>
            <a href="/about" style={{color: 'var(--color-foreground-muted)', fontFamily: 'var(--font-sans)', fontWeight: '500', letterSpacing: '0'}} className="inline-flex items-center gap-1.5 text-[14px] whitespace-nowrap hover:text-[var(--color-foreground)] transition-colors">
              <span className="nav-label">About</span>
            </a>
            <a href="/contact" style={{color: 'var(--color-foreground-muted)', fontFamily: 'var(--font-sans)', fontWeight: '500', letterSpacing: '0'}} className="inline-flex items-center gap-1.5 text-[14px] whitespace-nowrap hover:text-[var(--color-foreground)] transition-colors">
              <span className="nav-label">Contact</span>
            </a>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div role="group" aria-label="Language" className="inline-flex items-center" style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '2px', gap: '2px'}}>
              <button 
                type="button" 
                onClick={() => setLang('EN')}
                aria-pressed={lang === 'EN'} 
                aria-label="Switch language to EN" 
                className="inline-flex items-center justify-center h-7 px-2 rounded-[calc(var(--radius-md)-3px)] transition-colors cursor-pointer" 
                style={{
                  background: lang === 'EN' ? 'var(--color-foreground)' : 'transparent', 
                  color: lang === 'EN' ? 'var(--color-background)' : 'var(--color-foreground-muted)', 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '11px', 
                  fontWeight: '600', 
                  letterSpacing: '0.5px', 
                  border: 'none'
                }}
              >
                EN
              </button>
              <button 
                type="button" 
                onClick={() => setLang('ES')}
                aria-pressed={lang === 'ES'} 
                aria-label="Switch language to ES" 
                className="inline-flex items-center justify-center h-7 px-2 rounded-[calc(var(--radius-md)-3px)] transition-colors cursor-pointer" 
                style={{
                  background: lang === 'ES' ? 'var(--color-foreground)' : 'transparent', 
                  color: lang === 'ES' ? 'var(--color-background)' : 'var(--color-foreground-muted)', 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '11px', 
                  fontWeight: '600', 
                  letterSpacing: '0.5px', 
                  border: 'none'
                }}
              >
                ES
              </button>
            </div>

            {/* Theme Toggle Button */}
            <button 
              type="button" 
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} 
              className="inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius-md)] hover:bg-[var(--color-muted)] transition-colors cursor-pointer" 
              style={{color: 'var(--color-foreground)'}}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a href="/login" className="inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-sm)] font-semibold leading-tight tracking-[0.162px] transition-colors cursor-pointer bg-[var(--color-secondary-button-bg)] text-[var(--color-foreground)] border border-[var(--color-foreground)] hover:bg-[var(--color-background-deep)] px-5 h-11 text-[13px] !h-9 !px-3.5 !text-[13px] !bg-[var(--color-canvas)] dark:!bg-[var(--color-secondary-button-bg)] !border-[var(--color-border-soft)]">Sign in</a>
            <a href="/register" className="inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-sm)] font-semibold leading-tight tracking-[0.162px] transition-colors cursor-pointer bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-active)] px-5 h-11 text-[13px] !h-9 !px-3.5 !text-[13px]">Sign up</a>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <button 
          type="button" 
          aria-label="Toggle menu" 
          aria-expanded={mobileMenuOpen} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-[var(--radius-sm)] hover:bg-[var(--color-muted)] justify-self-end cursor-pointer"
          style={{color: 'var(--color-foreground)'}}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--color-border)] p-6 bg-[var(--color-background)] flex flex-col gap-4">
          <nav className="flex flex-col gap-3">
            <a href="/" className="font-semibold text-sm hover:text-[var(--color-accent)]">Home</a>
            <a href="#features" className="text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]">Features</a>
            <a href="/about" className="text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]">About</a>
            <a href="/contact" className="text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]">Contact</a>
          </nav>
          <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
            <button 
              type="button"
              onClick={toggleTheme}
              className="text-xs flex items-center gap-2 text-[var(--color-foreground-muted)] cursor-pointer"
            >
              <span>{theme === 'dark' ? 'Light theme' : 'Dark theme'}</span>
            </button>
            <div className="flex gap-2">
              <a href="/login" className="text-xs px-3 py-1.5 border border-[var(--color-border)] rounded">Sign in</a>
              <a href="/register" className="text-xs px-3 py-1.5 bg-[var(--color-primary)] text-[var(--color-primary-foreground)] rounded">Sign up</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
