import React from 'react';
import claudeInterfaceImg from '../assets/claude-interface.png';
import collectionsGridImg from '../assets/collections-dashboard-grid.png';

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
            <div className="showcase-canvas-edge-fade flex items-center justify-center" style={{flex: '1', padding: 'clamp(24px, 3vw, 40px) clamp(16px, 2vw, 28px)', minHeight: '368px', overflow: 'hidden'}}>
              <div style={{width: '100%', maxWidth: '510px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                  src={collectionsGridImg}
                  alt="Dark collections dashboard grid"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '322px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    filter: 'drop-shadow(0 18px 36px color-mix(in srgb, var(--shadow-ink) 22%, transparent))',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    transformOrigin: 'center'
                  }}
                  className="hover:scale-[1.03]"
                />
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
            <div className="showcase-canvas-edge-fade flex items-center justify-center" style={{flex: '1', padding: 'clamp(24px, 3vw, 40px) clamp(16px, 2vw, 28px)', minHeight: '368px', overflow: 'hidden'}}>
              <div style={{width: '100%', maxWidth: '510px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img
                  src={claudeInterfaceImg}
                  alt="Claude dark mode OpenSpace interface"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '322px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    filter: 'drop-shadow(0 18px 36px color-mix(in srgb, var(--shadow-ink) 22%, transparent))',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    transformOrigin: 'center'
                  }}
                  className="hover:scale-[1.03]"
                />
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
