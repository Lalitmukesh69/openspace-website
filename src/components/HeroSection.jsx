import React, { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [promptText, setPromptText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDraft, setGeneratedDraft] = useState(null);
  const canvasRef = useRef(null);

  // Canvas generative animation (5th preset: Horizon Grid)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let step = 0;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      step += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      // Horizon Grid (3D perspective grid)
      ctx.strokeStyle = 'rgba(160, 175, 220, 0.18)';
      ctx.lineWidth = 1;
      const horizonY = h * 0.35;
      for (let y = horizonY; y < h; y += (y - horizonY) * 0.3 + 12) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      for (let x = -w; x <= w * 2; x += 60) {
        ctx.beginPath();
        ctx.moveTo(w * 0.5, horizonY);
        ctx.lineTo(x + Math.sin(step * 0.2) * 50, h);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleAiDraft = (e) => {
    e.preventDefault();
    if (!promptText.trim()) return;
    setIsGenerating(true);
    setGeneratedDraft(null);

    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedDraft(`🚀 Launching OpenSpace: The complete social publishing engine. Hooked into Instagram, X & LinkedIn in 1-click!`);
    }, 800);
  };

  return (
    <section className="hero-demo-stage relative overflow-hidden" style={{backgroundColor: 'var(--color-hero-band)', backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 5px, color-mix(in srgb, var(--color-hero-band-foreground) 5%, transparent) 5px, color-mix(in srgb, var(--color-hero-band-foreground) 5%, transparent) 6px)'}}>
      {/* Background canvas */}
      <div className="hero-background-canvas absolute inset-0" style={{zIndex: '0'}}>
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" style={{pointerEvents: 'none'}}></canvas>
      </div>

      {/* Hero band gradient overlay */}
      <div aria-hidden="true" className="absolute inset-0" style={{zIndex: '0', background: 'linear-gradient(90deg, color-mix(in srgb, var(--color-hero-band) 84%, transparent) 0%, color-mix(in srgb, var(--color-hero-band) 46%, transparent) 55%, color-mix(in srgb, var(--color-hero-band) 12%, transparent) 100%)'}}></div>

      {/* Main hero grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-[1.18fr_0.82fr] items-center" style={{zIndex: '1'}}>
        <div style={{padding: 'var(--space-9) clamp(24px, 5vw, 64px)'}}>

          <h1 style={{fontFamily: 'var(--font-display)', fontSize: 'clamp(38px, 4.8vw, 60px)', fontWeight: '600', lineHeight: '1.02', letterSpacing: '-2.5px', color: 'var(--color-heading)', margin: '0', maxWidth: '640px'}}>
            Don't just save information. <span style={{color: 'var(--color-accent)'}}>Put it to work.</span>
          </h1>

          <p style={{fontSize: '17px', color: 'var(--color-foreground-muted)', lineHeight: '1.6', margin: '22px 0 0', maxWidth: '520px'}}>
            OpenSpace connects your captures, ideas, and knowledge — then uses AI agents to help you make sense of it, uncover connections, and move from a scattered thought to your next big decision.
          </p>

          <div className="flex flex-wrap items-center gap-2.5" style={{marginTop: 'var(--space-6)'}}>
            <a href="/register" className="inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-sm)] font-semibold leading-tight tracking-[0.162px] transition-colors cursor-pointer bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-active)] px-8 h-12 text-[16px] !h-[41px]">
              Start free
            </a>
            <a href="#features" className="inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-sm)] font-semibold leading-tight tracking-[0.162px] transition-colors cursor-pointer bg-[var(--color-secondary-button-bg)] text-[var(--color-foreground)] border border-[var(--color-foreground)] hover:bg-[var(--color-background-deep)] px-8 h-12 text-[16px] !h-[41px] !bg-[var(--color-canvas)] dark:!bg-[var(--color-secondary-button-bg)] !border-[var(--color-border-soft)]">
              Explore features
            </a>
          </div>
        </div>

        {/* Hero Interactive Preview Surface Mockup */}
        <div className="px-[clamp(24px,5vw,64px)] lg:pl-0" style={{paddingTop: 'var(--space-2)', paddingBottom: 'var(--space-8)'}}>
          <div className="hero-preview-surfaces lg:w-[115%] lg:-translate-x-[10%]">
            <div style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', background: 'var(--color-canvas)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden'}}>
              
              {/* Window Header */}
              <div className="flex items-center gap-3" style={{padding: '10px 14px', borderBottom: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)'}}>
                <div className="flex gap-1.5">
                  <span style={{width: '10px', height: '10px', borderRadius: '9999px', background: '#ff5f57', opacity: '0.85'}}></span>
                  <span style={{width: '10px', height: '10px', borderRadius: '9999px', background: '#febc2e', opacity: '0.85'}}></span>
                  <span style={{width: '10px', height: '10px', borderRadius: '9999px', background: '#28c840', opacity: '0.85'}}></span>
                </div>
                <div className="flex-1 text-center" style={{fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-foreground-tertiary)'}}>
                  launchkit.dev/app
                </div>
                <div style={{width: '44px'}}></div>
              </div>

              {/* Window Body with Sidebar */}
              <div className="grid" style={{gridTemplateColumns: '150px 1fr', minHeight: '320px'}}>
                
                {/* Sidebar */}
                <aside style={{background: 'var(--color-canvas-soft)', borderRight: '1px solid var(--color-border)', padding: '14px 10px'}}>
                  <div style={{fontFamily: 'var(--font-display)', fontSize: '15px', color: 'var(--color-foreground)', padding: '0 8px', marginBottom: '14px', fontWeight: '600'}}>
                    LaunchKit
                  </div>
                  <div className="flex flex-col gap-1">
                    {[
                      { name: 'Overview', icon: '◇' },
                      { name: 'Calendar', icon: '▤' },
                      { name: 'Agent', icon: '◐' },
                      { name: 'Search', icon: '⌕' },
                      { name: 'Settings', icon: '◧' },
                    ].map(tab => (
                      <button
                        key={tab.name}
                        type="button"
                        onClick={() => setActiveTab(tab.name)}
                        className="flex items-center gap-2 cursor-pointer w-full text-left transition-colors"
                        style={{
                          padding: '7px 8px',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '12.5px',
                          background: activeTab === tab.name ? 'var(--color-foreground)' : 'transparent',
                          color: activeTab === tab.name ? 'var(--color-foreground-on-primary)' : 'var(--color-foreground-muted)',
                          fontWeight: activeTab === tab.name ? '600' : '400',
                          border: 'none'
                        }}
                      >
                        <span style={{width: '12px', textAlign: 'center', opacity: '0.75'}}>{tab.icon}</span>
                        {tab.name}
                      </button>
                    ))}
                  </div>
                </aside>

                {/* Main Dashboard Surface */}
                <div style={{padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '16px'}}>
                  
                  {/* Top Bar with Breadcrumbs & Channels */}
                  <div className="flex items-center justify-between" style={{gap: '12px'}}>
                    <div className="flex items-center gap-2" style={{fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-foreground-muted)'}}>
                      <span>/Channels</span>
                      <span style={{color: 'var(--color-foreground-tertiary)'}}>›</span>
                      <span style={{color: 'var(--color-foreground)'}}>{activeTab}</span>
                    </div>
                    <div className="flex items-center" style={{gap: '5px'}}>
                      {['instagram', 'x', 'linkedin', 'tiktok', 'youtube'].map(ch => (
                        <span key={ch} className="flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" style={{width: '22px', height: '22px', borderRadius: '9999px', border: '1px solid var(--color-border)', background: 'var(--color-canvas)'}}>
                          <img src={`/logos/channels/${ch}.svg`} alt={ch} style={{width: '12px', height: '12px', display: 'block'}} />
                        </span>
                      ))}
                    </div>
                  </div>

                  {activeTab === 'Overview' && (
                    <>
                      <div style={{fontFamily: 'var(--font-display)', fontSize: '24px', letterSpacing: '-1px', color: 'var(--color-foreground)', fontWeight: '500'}}>
                        Good morning, Alex.
                      </div>

                      {/* Metric cards */}
                      <div className="grid" style={{gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
                        <div style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '10px'}}>
                          <div style={{fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-foreground-muted)', marginBottom: '6px'}}>Scheduled</div>
                          <div style={{fontFamily: 'var(--font-display)', fontSize: '20px', letterSpacing: '-0.5px', color: 'var(--color-foreground)', fontWeight: '600'}}>38</div>
                          <div style={{fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-success)', marginTop: '2px'}}>+6 this week</div>
                        </div>
                        <div style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '10px'}}>
                          <div style={{fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-foreground-muted)', marginBottom: '6px'}}>Reach</div>
                          <div style={{fontFamily: 'var(--font-display)', fontSize: '20px', letterSpacing: '-0.5px', color: 'var(--color-foreground)', fontWeight: '600'}}>128k</div>
                          <div style={{fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-success)', marginTop: '2px'}}>+18%</div>
                        </div>
                        <div style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '10px'}}>
                          <div style={{fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-foreground-muted)', marginBottom: '6px'}}>Engagement</div>
                          <div style={{fontFamily: 'var(--font-display)', fontSize: '20px', letterSpacing: '-0.5px', color: 'var(--color-foreground)', fontWeight: '600'}}>4.6%</div>
                          <div style={{fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-success)', marginTop: '2px'}}>+0.4%</div>
                        </div>
                      </div>

                      {/* Interactive Prompt Bar */}
                      <form onSubmit={handleAiDraft} style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--color-canvas-soft)'}}>
                        <span style={{width: '24px', height: '24px', borderRadius: '9999px', background: 'var(--color-accent-soft)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: 'bold', flexShrink: 0}}>AI</span>
                        <input 
                          type="text" 
                          value={promptText}
                          onChange={(e) => setPromptText(e.target.value)}
                          placeholder="Draft next week's posts from one brief…"
                          className="flex-1 bg-transparent border-none text-[13px] outline-none text-[var(--color-foreground)]"
                        />
                        <button type="submit" className="text-xs px-2.5 py-1 rounded bg-[var(--color-foreground)] text-[var(--color-background)] font-medium cursor-pointer">
                          {isGenerating ? 'Drafting…' : 'Generate'}
                        </button>
                      </form>

                      {generatedDraft && (
                        <div className="p-2.5 rounded text-xs bg-[var(--color-canvas-soft)] border border-[var(--color-border)] animate-in fade-in">
                          <span className="text-[10px] text-[var(--color-accent)] font-mono uppercase block mb-1">Generated Post:</span>
                          {generatedDraft}
                        </div>
                      )}
                    </>
                  )}

                  {activeTab === 'Calendar' && (
                    <div className="flex flex-col gap-2">
                      <div className="text-sm font-semibold">Upcoming Schedule</div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="p-2 rounded border border-[var(--color-border)] bg-[var(--color-canvas-soft)]">
                          <span className="text-[10px] font-mono text-[var(--color-foreground-muted)] block">TUE 10:00 AM</span>
                          <span className="font-medium">Product launch thread</span>
                        </div>
                        <div className="p-2 rounded border border-[var(--color-border)] bg-[var(--color-canvas-soft)]">
                          <span className="text-[10px] font-mono text-[var(--color-foreground-muted)] block">WED 02:30 PM</span>
                          <span className="font-medium">Behind the scenes video</span>
                        </div>
                        <div className="p-2 rounded border border-[var(--color-border)] bg-[var(--color-canvas-soft)]">
                          <span className="text-[10px] font-mono text-[var(--color-foreground-muted)] block">FRI 09:15 AM</span>
                          <span className="font-medium">Weekly creator recap</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'Agent' && (
                    <div className="flex flex-col gap-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">Agent Settings</span>
                        <span className="text-green-500 font-mono text-[10px]">● Online</span>
                      </div>
                      <div className="p-2.5 rounded border border-[var(--color-border)] bg-[var(--color-canvas-soft)] flex flex-col gap-1.5">
                        <div className="flex justify-between items-center">
                          <span>Autonomous Draft Mode</span>
                          <span className="font-mono text-xs font-semibold">Enabled</span>
                        </div>
                        <div className="flex justify-between items-center text-[var(--color-foreground-muted)]">
                          <span>Tone Match</span>
                          <span>Concise & Technical</span>
                        </div>
                        <div className="flex justify-between items-center text-[var(--color-foreground-muted)]">
                          <span>Queue Approval Guard</span>
                          <span>Always Require</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'Search' && (
                    <div className="flex flex-col gap-2 text-xs">
                      <input 
                        type="text" 
                        placeholder="Search posts by hashtag, channel or keyword..."
                        className="w-full p-2 rounded border border-[var(--color-border)] bg-[var(--color-canvas-soft)] outline-none"
                      />
                      <div className="flex gap-1.5 flex-wrap">
                        {['#launch', '#growth', '#updates', '#tutorial'].map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded bg-[var(--color-canvas-soft)] border border-[var(--color-border)] text-[10px] cursor-pointer hover:border-[var(--color-foreground)]">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'Settings' && (
                    <div className="flex flex-col gap-2 text-xs">
                      <div className="font-semibold text-sm">Channel Connections</div>
                      <div className="flex flex-col gap-1.5">
                        {['Instagram (@alex)', 'X (@alex_builds)', 'LinkedIn (Alex Dev)'].map(acc => (
                          <div key={acc} className="flex justify-between p-2 rounded border border-[var(--color-border)] bg-[var(--color-canvas-soft)]">
                            <span>{acc}</span>
                            <span className="text-green-500 font-mono text-[10px]">Connected</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Trusted Strip Marquee */}
      <div className="hero-trusted-strip relative flex items-stretch" style={{zIndex: '1', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', background: 'var(--color-background)'}}>
        <span className="flex items-center shrink-0" style={{paddingTop: '8px', paddingBottom: '8px', paddingLeft: 'clamp(24px, 5vw, 64px)', paddingRight: '22px', borderRight: '1px solid var(--color-border)', background: 'var(--color-background)', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-foreground-muted)', whiteSpace: 'nowrap', zIndex: '1'}}>
          Used by social teams at
        </span>
        <div className="marquee" style={{flex: '1'}}>
          <div className="marquee-track" aria-label="Companies using the product">
            {[1, 2, 3, 4].map((setIndex) => (
              <React.Fragment key={setIndex}>
                {[
                  { name: 'NVIDIA', logo: 'nvidia.svg' },
                  { name: 'Google', logo: 'google.svg' },
                  { name: 'Shopify', logo: 'shopify.svg' },
                  { name: 'Airbnb', logo: 'airbnb.svg' },
                  { name: 'Netflix', logo: 'netflix.svg' },
                  { name: 'Spotify', logo: 'spotify.svg' },
                ].map((item, idx) => (
                  <span key={`${setIndex}-${idx}`} className="flex items-center shrink-0" style={{gap: '9px', padding: '8px 20px', borderRight: '1px solid var(--color-border)'}}>
                    <span className="flex items-center justify-center shrink-0" style={{background: 'var(--logo-chip-bg)', borderRadius: 'var(--radius-sm)', padding: '3px 5px', height: '28px'}}>
                      <img src={`/logos/trusted/${item.logo}`} alt={item.name} style={{height: '19px', width: 'auto', display: 'block'}} />
                    </span>
                    <span style={{fontSize: '14px', fontWeight: '500', color: 'var(--color-foreground)', whiteSpace: 'nowrap'}}>{item.name}</span>
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
