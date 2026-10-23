import React from 'react';

export default function FeaturesBento() {
  return (
    <div id="features" style={{opacity: 1, transform: 'translateY(0)', transition: 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'}}>
      <section className="bg-[var(--color-canvas-soft)]" style={{paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)', borderBottom: '1px solid var(--color-border)'}}>
        <div style={{padding: '0 clamp(24px, 5vw, 64px)'}}>
          
          {/* Section Header */}
          <div style={{marginBottom: 'var(--space-7)'}}>
            <div style={{fontFamily: 'var(--font-mono)', fontSize: '18px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '12px', fontWeight: '500'}}>
              Features
            </div>
            <h2 style={{fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: '500', letterSpacing: '-1.5px', margin: '0 0 12px', color: 'var(--color-heading)'}}>
              Everything your AI needs to work smarter.
            </h2>
            <p style={{fontSize: '16px', color: 'var(--color-foreground-muted)', lineHeight: '1.6', margin: '0', maxWidth: '680px'}}>
              Connect your knowledge, automate everyday tasks, and turn scattered information into meaningful action with OpenSpace.
            </p>
          </div>

          {/* Top Row: 2 Large Bento Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2" style={{gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)'}}>
            
            {/* Card 1: Give AI the Context It Needs */}
            <div className="flat-dark-surfaces" style={{background: 'var(--color-canvas)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
              <div style={{padding: '26px 26px 0'}}>
                <h3 style={{fontFamily: 'var(--font-display)', fontSize: '21px', fontWeight: '600', letterSpacing: '-0.5px', margin: '0', color: 'var(--color-heading)'}}>
                  Give AI the Context It Needs
                </h3>
                <p style={{fontSize: '15px', color: 'var(--color-foreground-muted)', lineHeight: '1.55', margin: '8px 0 0', maxWidth: '480px'}}>
                  Connect OpenSpace with Claude, ChatGPT, and compatible AI tools to get more relevant, personalized help.
                </p>
              </div>

              <div className="showcase-canvas-edge-fade" style={{marginTop: '20px', height: '290px', overflow: 'hidden', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '10px 26px 0'}}>
                <div style={{width: '100%', maxWidth: '440px'}}>
                  <div style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas)', padding: '14px', overflow: 'hidden', boxShadow: '0 16px 38px color-mix(in srgb, var(--shadow-ink) 12%, transparent)', minHeight: '300px'}}>
                    
                    {/* Model Switcher Bar */}
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px', paddingBottom: '11px', borderBottom: '1px solid var(--color-border)'}}>
                      <span style={{display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 9px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '10.5px', fontWeight: '600', color: 'var(--color-foreground)'}}>
                        <img src="/logos/services/anthropic.svg" alt="" style={{width: '12px', height: '12px', display: 'block', filter: 'grayscale(1)'}} />
                        Claude 3.5 Sonnet
                        <span style={{color: 'var(--color-foreground-muted)'}}>▾</span>
                      </span>
                      <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                        <img src="/logos/services/openai.svg" alt="ChatGPT" title="ChatGPT" style={{width: '13px', height: '13px', display: 'block', opacity: '0.6', filter: 'grayscale(1)'}} />
                        <img src="/logos/services/anthropic.svg" alt="Claude" title="Claude" style={{width: '13px', height: '13px', display: 'block', opacity: '0.6', filter: 'grayscale(1)'}} />
                        <img src="/logos/services/gemini.svg" alt="Gemini" title="Gemini" style={{width: '13px', height: '13px', display: 'block', opacity: '0.6', filter: 'grayscale(1)'}} />
                      </span>
                    </div>

                    {/* Context Bridge Strip */}
                    <div style={{display: 'flex', alignItems: 'center', gap: '6px', padding: '5px 8px', borderRadius: '4px', background: 'var(--color-canvas-soft)', border: '1px solid var(--color-border)', marginBottom: '10px', fontSize: '10px', color: 'var(--color-foreground-muted)'}}>
                      <span style={{color: 'var(--color-accent)', fontWeight: 'bold'}}>⚡ OpenSpace Context:</span>
                      <span>4 notes, 2 screenshots, 1 audio memo injected</span>
                    </div>

                    {/* Chat Exchanges */}
                    <div style={{display: 'flex', flexDirection: 'column', gap: '7px'}}>
                      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <span style={{maxWidth: '85%', fontSize: '11.5px', lineHeight: '1.4', padding: '7px 10px', borderRadius: 'var(--radius-sm)', background: 'var(--color-foreground)', color: 'var(--color-foreground-on-primary)', border: 'none'}}>
                          What were the key decisions from my architecture brainstorm?
                        </span>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <span style={{maxWidth: '88%', fontSize: '11.5px', lineHeight: '1.4', padding: '7px 10px', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas-soft)', color: 'var(--color-foreground)', border: '1px solid var(--color-border)'}}>
                          Based on your voice memo from 2 PM and yesterday's whiteboard capture: you decided on local-first storage with an MCP context bridge.
                        </span>
                      </div>
                      
                      {/* Attached Knowledge Sources */}
                      <div style={{display: 'flex', alignItems: 'center', gap: '6px', paddingLeft: '2px', marginTop: '2px'}}>
                        <span style={{fontFamily: 'var(--font-mono)', fontSize: '8.5px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-foreground-muted)'}}>SOURCES</span>
                        <span style={{fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-foreground-muted)', padding: '2px 7px', border: '1px solid var(--color-border)', borderRadius: '999px'}}>voice-oct22.m4a</span>
                        <span style={{fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-foreground-muted)', padding: '2px 7px', border: '1px solid var(--color-border)', borderRadius: '999px'}}>architecture.png</span>
                      </div>

                      {/* Prompt Bar */}
                      <div style={{marginTop: '4px', height: '32px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-soft)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px 0 10px', fontSize: '11px', color: 'var(--color-foreground-tertiary)'}}>
                        Ask Claude, ChatGPT, or your workspace…
                        <span style={{width: '24px', height: '24px', borderRadius: 'var(--radius-sm)', background: 'var(--color-foreground)', color: 'var(--color-foreground-on-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px'}}>
                          ↑
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Capture Anything, Anywhere */}
            <div className="flat-dark-surfaces" style={{background: 'var(--color-canvas)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
              <div style={{padding: '26px 26px 0'}}>
                <h3 style={{fontFamily: 'var(--font-display)', fontSize: '21px', fontWeight: '600', letterSpacing: '-0.5px', margin: '0', color: 'var(--color-heading)'}}>
                  Capture Anything, Anywhere
                </h3>
                <p style={{fontSize: '15px', color: 'var(--color-foreground-muted)', lineHeight: '1.55', margin: '8px 0 0', maxWidth: '480px'}}>
                  Save screenshots, links, notes, and voice recordings across your PC, browser, and phone.
                </p>
              </div>

              <div className="showcase-canvas-edge-fade" style={{marginTop: '20px', height: '290px', overflow: 'hidden', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '10px 26px 0'}}>
                <div style={{width: '100%', maxWidth: '440px'}}>
                  <div style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas)', padding: '14px', overflow: 'hidden', boxShadow: '0 16px 38px color-mix(in srgb, var(--shadow-ink) 12%, transparent)'}}>
                    
                    {/* Device Surfaces Bar */}
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '14px'}}>
                      <div style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '9px', textAlign: 'center'}}>
                        <div style={{fontSize: '16px'}}>🖥️</div>
                        <div style={{fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-foreground)', marginTop: '4px', fontWeight: '600'}}>Desktop App</div>
                        <div style={{fontFamily: 'var(--font-mono)', fontSize: '8.5px', color: 'var(--color-foreground-muted)'}}>Hotkeys &amp; Snips</div>
                      </div>
                      <div style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '9px', textAlign: 'center'}}>
                        <div style={{fontSize: '16px'}}>🌐</div>
                        <div style={{fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-foreground)', marginTop: '4px', fontWeight: '600'}}>Browser Ext</div>
                        <div style={{fontFamily: 'var(--font-mono)', fontSize: '8.5px', color: 'var(--color-foreground-muted)'}}>1-Click Save</div>
                      </div>
                      <div style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', padding: '9px', textAlign: 'center'}}>
                        <div style={{fontSize: '16px'}}>📱</div>
                        <div style={{fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-foreground)', marginTop: '4px', fontWeight: '600'}}>Phone App</div>
                        <div style={{fontFamily: 'var(--font-mono)', fontSize: '8.5px', color: 'var(--color-foreground-muted)'}}>Voice &amp; Photos</div>
                      </div>
                    </div>

                    {/* Live Capture Feed Mockup */}
                    <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '8px'}}>
                      <span style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>Recent Captures</span>
                      <span style={{fontFamily: 'var(--font-mono)', fontSize: '8.5px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-foreground-muted)'}}>SYNCED ACROSS ALL DEVICES</span>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 9px', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                          <span style={{fontSize: '12px'}}>📸</span>
                          <div>
                            <div style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>API Architecture Figma Frame</div>
                            <div style={{fontSize: '9.5px', color: 'var(--color-foreground-muted)'}}>🖥️ PC Desktop • Screenshot</div>
                          </div>
                        </div>
                        <span style={{fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-foreground-muted)'}}>Just now</span>
                      </div>

                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 9px', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                          <span style={{fontSize: '12px'}}>🎙️</span>
                          <div>
                            <div style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>Voice Memo: Q4 Product Strategy</div>
                            <div style={{fontSize: '9.5px', color: 'var(--color-foreground-muted)'}}>📱 Mobile App • Transcribed</div>
                          </div>
                        </div>
                        <span style={{fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-foreground-muted)'}}>12m ago</span>
                      </div>

                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 9px', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                          <span style={{fontSize: '12px'}}>🔗</span>
                          <div>
                            <div style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>Model Context Protocol Specification</div>
                            <div style={{fontSize: '9.5px', color: 'var(--color-foreground-muted)'}}>🌐 Chrome • Full-page article</div>
                          </div>
                        </div>
                        <span style={{fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-foreground-muted)'}}>1h ago</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Row: 3 Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3" style={{gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)', borderTop: 'none'}}>
            
            {/* Card 3: Turn Thoughts Into Action */}
            <div className="flat-dark-surfaces" style={{background: 'var(--color-canvas)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
              <div style={{padding: '26px 26px 0'}}>
                <h3 style={{fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', letterSpacing: '-0.5px', margin: '0', color: 'var(--color-heading)'}}>
                  Turn Thoughts Into Action
                </h3>
                <p style={{fontSize: '15px', color: 'var(--color-foreground-muted)', lineHeight: '1.55', margin: '8px 0 0', maxWidth: '480px'}}>
                  Use AI to organize ideas, plan tasks, summarize research, and move work forward.
                </p>
              </div>

              <div className="showcase-canvas-edge-fade" style={{marginTop: '20px', height: '220px', overflow: 'hidden', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '10px 26px 0'}}>
                <div style={{width: '100%', maxWidth: '300px'}}>
                  <div style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas)', padding: '14px', overflow: 'hidden', boxShadow: '0 16px 38px color-mix(in srgb, var(--shadow-ink) 12%, transparent)', minHeight: '300px'}}>
                    
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '9px', borderBottom: '1px solid var(--color-border)', marginBottom: '10px'}}>
                      <span style={{fontFamily: 'var(--font-mono)', fontSize: '9px', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: '600'}}>
                        AI ACTION PLAN
                      </span>
                      <span style={{fontSize: '9px', padding: '1px 5px', borderRadius: '3px', background: 'rgba(22, 163, 74, 0.12)', color: 'var(--color-badge-new)', fontWeight: 'bold'}}>
                        ✓ Generated
                      </span>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '7px'}}>
                      <div style={{padding: '8px 10px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas-soft)'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px'}}>
                          <span style={{color: 'var(--color-badge-new)', fontSize: '11px'}}>✓</span>
                          <span style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>Finalize MCP Server Spec</span>
                        </div>
                        <div style={{fontSize: '9.5px', color: 'var(--color-foreground-muted)'}}>Extracted from voice memo • High priority</div>
                      </div>

                      <div style={{padding: '8px 10px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas-soft)'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px'}}>
                          <span style={{color: 'var(--color-badge-new)', fontSize: '11px'}}>✓</span>
                          <span style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>Draft Launch Announcement</span>
                        </div>
                        <div style={{fontSize: '9.5px', color: 'var(--color-foreground-muted)'}}>Synthesized from 3 research notes</div>
                      </div>

                      <div style={{padding: '8px 10px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas-soft)'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px'}}>
                          <span style={{color: 'var(--color-badge-new)', fontSize: '11px'}}>✓</span>
                          <span style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>Review Android &amp; Chrome Sync</span>
                        </div>
                        <div style={{fontSize: '9.5px', color: 'var(--color-foreground-muted)'}}>Auto-assigned from roadmap screenshot</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Connect the Dots Automatically */}
            <div className="flat-dark-surfaces" style={{background: 'var(--color-canvas)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
              <div style={{padding: '26px 26px 0'}}>
                <h3 style={{fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', letterSpacing: '-0.5px', margin: '0', color: 'var(--color-heading)'}}>
                  Connect the Dots Automatically
                </h3>
                <p style={{fontSize: '15px', color: 'var(--color-foreground-muted)', lineHeight: '1.55', margin: '8px 0 0', maxWidth: '480px'}}>
                  Bring related information together to uncover connections and understand the bigger picture.
                </p>
              </div>

              <div className="showcase-canvas-edge-fade" style={{marginTop: '20px', height: '220px', overflow: 'hidden', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '10px 26px 0'}}>
                <div style={{width: '100%', maxWidth: '300px'}}>
                  <div style={{width: '100%', height: '352px', display: 'flex', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', overflow: 'hidden', background: 'var(--color-canvas)', boxShadow: '0 18px 44px color-mix(in srgb, var(--shadow-ink) 13%, transparent)'}}>
                    
                    {/* Navigation Sidebar */}
                    <div style={{width: '130px', flexShrink: '0', background: 'var(--color-canvas-soft)', borderRight: '1px solid var(--color-border)', padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: '5px'}}>
                      <div style={{fontSize: '11px', fontWeight: '700', color: 'var(--color-foreground)', marginBottom: '4px'}}>
                        Clusters
                      </div>
                      <div style={{padding: '4px 6px', borderRadius: '4px', background: 'var(--color-accent-soft)', fontSize: '10px', fontWeight: '600', color: 'var(--color-foreground)'}}>
                        AI Workflows
                      </div>
                      <div style={{padding: '4px 6px', borderRadius: '4px', fontSize: '10px', color: 'var(--color-foreground-muted)'}}>
                        Architecture
                      </div>
                      <div style={{padding: '4px 6px', borderRadius: '4px', fontSize: '10px', color: 'var(--color-foreground-muted)'}}>
                        Personal Notes
                      </div>
                      <div style={{padding: '4px 6px', borderRadius: '4px', fontSize: '10px', color: 'var(--color-foreground-muted)'}}>
                        Roadmap
                      </div>
                    </div>

                    {/* Main Connected Graph Surface */}
                    <div style={{flex: '1', minWidth: '0', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                      <div style={{fontSize: '13px', fontWeight: '700', color: 'var(--color-foreground)'}}>
                        AI Workflows
                      </div>
                      <div style={{fontSize: '10px', color: 'var(--color-foreground-muted)', lineHeight: '1.4'}}>
                        4 connected items found across notes, voice, and bookmarks:
                      </div>

                      <div style={{display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '4px'}}>
                        <div style={{padding: '6px 8px', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)', fontSize: '9.5px'}}>
                          <span style={{color: 'var(--color-accent)', fontWeight: 'bold'}}>🔗 Voice memo</span> linked to <span style={{fontWeight: '600'}}>MCP doc</span>
                        </div>
                        <div style={{padding: '6px 8px', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)', fontSize: '9.5px'}}>
                          <span style={{color: 'var(--color-accent)', fontWeight: 'bold'}}>🔗 Figma snip</span> linked to <span style={{fontWeight: '600'}}>Launch plan</span>
                        </div>
                        <div style={{padding: '6px 8px', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)', fontSize: '9.5px'}}>
                          <span style={{color: 'var(--color-accent)', fontWeight: 'bold'}}>🔗 2 Web links</span> grouped into <span style={{fontWeight: '600'}}>Research</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Your Life, One Connected Workspace */}
            <div className="flat-dark-surfaces" style={{background: 'var(--color-canvas)', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
              <div style={{padding: '26px 26px 0'}}>
                <h3 style={{fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '600', letterSpacing: '-0.5px', margin: '0', color: 'var(--color-heading)'}}>
                  Your Life, One Connected Workspace
                </h3>
                <p style={{fontSize: '15px', color: 'var(--color-foreground-muted)', lineHeight: '1.55', margin: '8px 0 0', maxWidth: '480px'}}>
                  Keep work, personal plans, research, and everyday ideas organized in one place.
                </p>
              </div>

              <div className="showcase-canvas-edge-fade" style={{marginTop: '20px', height: '220px', overflow: 'hidden', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '10px 26px 0'}}>
                <div style={{width: '100%', maxWidth: '300px'}}>
                  <div style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas)', padding: '14px', overflow: 'hidden', boxShadow: '0 16px 38px color-mix(in srgb, var(--shadow-ink) 12%, transparent)', display: 'flex', flexDirection: 'column'}}>
                    
                    <div style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)', marginBottom: '8px'}}>
                      Unified Knowledge Hub
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 9px', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>
                          <span>💼</span> Work &amp; Projects
                        </div>
                        <span style={{fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-foreground-muted)'}}>48 items</span>
                      </div>

                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 9px', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>
                          <span>🔬</span> Research &amp; Articles
                        </div>
                        <span style={{fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-foreground-muted)'}}>112 items</span>
                      </div>

                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 9px', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>
                          <span>🌱</span> Personal &amp; Ideas
                        </div>
                        <span style={{fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-foreground-muted)'}}>34 items</span>
                      </div>
                    </div>

                    <div style={{marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                      <span style={{fontFamily: 'var(--font-mono)', fontSize: '8.5px', color: 'var(--color-foreground-muted)'}}>
                        SYNC STATUS
                      </span>
                      <span style={{fontSize: '9.5px', color: 'var(--color-badge-new)', fontWeight: '600'}}>
                        ● Synced &amp; Encrypted
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
