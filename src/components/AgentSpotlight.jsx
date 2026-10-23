import React from 'react';

export default function AgentSpotlight() {
  return (
    <section className="bg-[var(--color-canvas-soft)] flat-dark-surfaces" style={{paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)', borderBottom: '1px solid var(--color-border)'}}>
      <div style={{padding: '0 clamp(24px, 5vw, 64px)'}}>
        
        {/* Section Header */}
        <div style={{marginBottom: 'var(--space-7)'}}>
          <div style={{fontFamily: 'var(--font-mono)', fontSize: '18px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '12px', fontWeight: '500'}}>
            THE AGENT
          </div>
          <h2 style={{fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: '500', letterSpacing: '-1.5px', margin: '0 0 12px', color: 'var(--color-heading)'}}>
            Meet the agent that moves things forward.
          </h2>
          <p style={{fontSize: '16px', color: 'var(--color-foreground-muted)', lineHeight: '1.6', margin: '0', maxWidth: '640px'}}>
            Give OpenSpace context from your captures, notes, and connected knowledge. It helps you research, plan, and take the next step — with compatible AI tools.
          </p>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2" style={{gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)', overflow: 'hidden', borderRadius: 'var(--radius-sm)'}}>
          
          {/* Card 1: Turn information overload into clear next steps */}
          <div className="flex flex-col" style={{background: 'var(--color-canvas)'}}>
            <div className="showcase-canvas-edge-fade flex items-center justify-center" style={{flex: '1', padding: 'clamp(32px, 4vw, 52px) clamp(24px, 3vw, 40px)', minHeight: '300px', overflow: 'hidden'}}>
              <div style={{width: '100%', maxWidth: '330px'}}>
                <div style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas)', padding: '14px', overflow: 'hidden', boxShadow: '0 16px 38px color-mix(in srgb, var(--shadow-ink) 12%, transparent)', minHeight: '300px'}}>
                  
                  {/* Model header */}
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '11px', paddingBottom: '11px', borderBottom: '1px solid var(--color-border)'}}>
                    <span style={{display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 9px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', fontSize: '10.5px', fontWeight: '600', color: 'var(--color-foreground)'}}>
                      <img src="/logos/claude.svg" alt="" style={{width: '12px', height: '12px', display: 'block'}} />
                      OpenSpace Assistant
                      <span style={{color: 'var(--color-foreground-muted)'}}>▾</span>
                    </span>
                    <span style={{fontSize: '9.5px', padding: '2px 6px', borderRadius: '3px', background: 'rgba(22, 163, 74, 0.12)', color: 'var(--color-badge-new)', fontWeight: 'bold'}}>
                      ● Context Active
                    </span>
                  </div>

                  {/* Chat exchanges */}
                  <div style={{display: 'flex', flexDirection: 'column', gap: '7px'}}>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                      <span style={{maxWidth: '85%', fontSize: '11.5px', lineHeight: '1.4', padding: '7px 10px', borderRadius: 'var(--radius-sm)', background: 'var(--color-foreground)', color: 'var(--color-foreground-on-primary)', border: 'none'}}>
                        Prepare a project brief from our meeting notes and customer research.
                      </span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                      <span style={{maxWidth: '88%', fontSize: '11.5px', lineHeight: '1.4', padding: '7px 10px', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas-soft)', color: 'var(--color-foreground)', border: '1px solid var(--color-border)'}}>
                        Drafted project brief: 3 deliverables identified, key risks summarized, and next steps prioritized for sprint planning.
                      </span>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center', gap: '6px', paddingLeft: '2px', marginTop: '2px'}}>
                      <span style={{fontFamily: 'var(--font-mono)', fontSize: '8.5px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-foreground-muted)'}}>SOURCES</span>
                      <span style={{fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-foreground-muted)', padding: '2px 7px', border: '1px solid var(--color-border)', borderRadius: '999px'}}>meeting-notes.md</span>
                      <span style={{fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-foreground-muted)', padding: '2px 7px', border: '1px solid var(--color-border)', borderRadius: '999px'}}>interviews.pdf</span>
                    </div>

                    <div style={{marginTop: '3px', height: '32px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-soft)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px 0 10px', fontSize: '11px', color: 'var(--color-foreground-tertiary)'}}>
                      Ask the agent to research or draft…
                      <span style={{width: '24px', height: '24px', borderRadius: 'var(--radius-sm)', background: 'var(--color-foreground)', color: 'var(--color-foreground-on-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px'}}>
                        ↑
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div style={{padding: '0 clamp(24px, 2.4vw, 32px) clamp(24px, 3vw, 30px)'}}>
              <div style={{fontSize: '17px', fontWeight: '600', color: 'var(--color-foreground)', marginBottom: '6px'}}>
                Turn information overload into clear next steps.
              </div>
              <div style={{fontSize: '15px', color: 'var(--color-foreground-muted)', lineHeight: '1.55', maxWidth: '470px'}}>
                Connect meeting notes, research, and project information. Let AI help you find answers, prepare briefs, and move projects forward with the right context.
              </div>
            </div>
          </div>

          {/* Card 2: For AI power users - Give Claude and ChatGPT the context they're missing */}
          <div className="flex flex-col" style={{background: 'var(--color-canvas)'}}>
            <div className="showcase-canvas-edge-fade flex items-center justify-center" style={{flex: '1', padding: 'clamp(32px, 4vw, 52px) clamp(24px, 3vw, 40px)', minHeight: '300px', overflow: 'hidden'}}>
              <div style={{width: '100%', maxWidth: '330px'}}>
                <div style={{border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas)', padding: '14px', overflow: 'hidden', boxShadow: '0 16px 38px color-mix(in srgb, var(--shadow-ink) 12%, transparent)', minHeight: '300px'}}>
                  
                  {/* Search / MCP Header */}
                  <div style={{height: '30px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border-soft)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 8px 0 10px', fontSize: '11px', color: 'var(--color-foreground-tertiary)', marginBottom: '10px'}}>
                    <span style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                      <span style={{color: 'var(--color-accent)', fontWeight: 'bold'}}>⚡</span>
                      MCP Context Server
                    </span>
                    <span style={{fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-foreground-muted)', padding: '2px 6px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)'}}>
                      v1.0
                    </span>
                  </div>

                  <div style={{fontFamily: 'var(--font-mono)', fontSize: '8.5px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-foreground-muted)', marginBottom: '7px'}}>
                    LIVE CONTEXT INJECTION
                  </div>

                  <div style={{display: 'flex', flexDirection: 'column', gap: '7px'}}>
                    <div style={{padding: '8px 10px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas-soft)'}}>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px'}}>
                        <span style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>Q4 Product Architecture Spec</span>
                        <span style={{fontFamily: 'var(--font-mono)', fontSize: '9.5px', color: 'var(--color-badge-new)', fontWeight: 'bold'}}>Claude</span>
                      </div>
                      <div style={{fontSize: '10px', color: 'var(--color-foreground-muted)', lineHeight: '1.4'}}>
                        98% relevance • 4 technical diagrams injected
                      </div>
                    </div>

                    <div style={{padding: '8px 10px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas-soft)'}}>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px'}}>
                        <span style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>Customer Interview Synthesis</span>
                        <span style={{fontFamily: 'var(--font-mono)', fontSize: '9.5px', color: 'var(--color-badge-new)', fontWeight: 'bold'}}>ChatGPT</span>
                      </div>
                      <div style={{fontSize: '10px', color: 'var(--color-foreground-muted)', lineHeight: '1.4'}}>
                        92% relevance • Transcripts &amp; pain points
                      </div>
                    </div>

                    <div style={{padding: '8px 10px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas-soft)'}}>
                      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3px'}}>
                        <span style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>Voice Memo: Roadmap Decisions</span>
                        <span style={{fontFamily: 'var(--font-mono)', fontSize: '9.5px', color: 'var(--color-badge-new)', fontWeight: 'bold'}}>Antigravity</span>
                      </div>
                      <div style={{fontSize: '10px', color: 'var(--color-foreground-muted)', lineHeight: '1.4'}}>
                        88% relevance • Audio key decisions extracted
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div style={{padding: '0 clamp(24px, 2.4vw, 32px) clamp(24px, 3vw, 30px)'}}>
              <div style={{fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.8px', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: '600', marginBottom: '4px'}}>
                For AI power users
              </div>
              <div style={{fontSize: '17px', fontWeight: '600', color: 'var(--color-foreground)', marginBottom: '6px'}}>
                Give Claude and ChatGPT the context they're missing.
              </div>
              <div style={{fontSize: '15px', color: 'var(--color-foreground-muted)', lineHeight: '1.55', maxWidth: '470px'}}>
                Connect OpenSpace through its MCP server so compatible AI tools can use relevant information from your workspace to help with complex tasks.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
