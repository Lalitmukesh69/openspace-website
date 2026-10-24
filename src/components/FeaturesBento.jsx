import React from 'react';
import deviceMockupImg from '../assets/device-mockup.png';
import todoTasksWidgetImg from '../assets/todo-tasks-widget.png';
import collectionsGridImg from '../assets/collections-dashboard-grid.png';
import minecraftDashboardImg from '../assets/minecraft-build-ideas.png';
import claudeInterfaceImg from '../assets/claude-interface.png';

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

              <div
                className="showcase-canvas-edge-fade"
                style={{
                  marginTop: '20px',
                  height: '290px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  padding: '10px 20px 0',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    maxWidth: '460px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  <img
                    src={claudeInterfaceImg}
                    alt="Claude dark mode OpenSpace context integration interface"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      objectPosition: 'bottom center',
                      display: 'block',
                      filter: 'drop-shadow(0 18px 36px color-mix(in srgb, var(--shadow-ink) 24%, transparent))',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      transformOrigin: 'bottom center'
                    }}
                    className="hover:scale-[1.03]"
                  />
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

              <div
                className="showcase-canvas-edge-fade"
                style={{
                  marginTop: '20px',
                  height: '290px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  padding: '10px 20px 0',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    maxWidth: '460px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  <img
                    src={deviceMockupImg}
                    alt="Open Space running across tablet, laptop, and phone in dark mode"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      objectPosition: 'bottom center',
                      display: 'block',
                      filter: 'drop-shadow(0 18px 36px color-mix(in srgb, var(--shadow-ink) 24%, transparent))',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      transformOrigin: 'bottom center'
                    }}
                    className="hover:scale-[1.03]"
                  />
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

              <div
                className="showcase-canvas-edge-fade"
                style={{
                  marginTop: '14px',
                  height: '245px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px 16px',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    maxWidth: '380px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  <img
                    src={todoTasksWidgetImg}
                    alt="Dark to-do tasks widget showing active and completed tasks"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      filter: 'drop-shadow(0 14px 28px color-mix(in srgb, var(--shadow-ink) 20%, transparent))',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      transformOrigin: 'center'
                    }}
                    className="hover:scale-[1.03]"
                  />
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

              <div
                className="showcase-canvas-edge-fade"
                style={{
                  marginTop: '14px',
                  height: '245px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px 16px',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    maxWidth: '380px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  <img
                    src={minecraftDashboardImg}
                    alt="Minecraft Build Ideas Dashboard showing collection summary, notes, checklist, and captures"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      filter: 'drop-shadow(0 14px 28px color-mix(in srgb, var(--shadow-ink) 20%, transparent))',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      transformOrigin: 'center'
                    }}
                    className="hover:scale-[1.03]"
                  />
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

              <div
                className="showcase-canvas-edge-fade"
                style={{
                  marginTop: '14px',
                  height: '245px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '4px 16px',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: '100%',
                    maxWidth: '380px',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  <img
                    src={collectionsGridImg}
                    alt="Dark collections dashboard grid showing Work & Ideas, Travel Plans, Personal Notes, and Project References"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto',
                      transform: 'scale(1.2)',
                      objectFit: 'contain',
                      display: 'block',
                      filter: 'drop-shadow(0 14px 28px color-mix(in srgb, var(--shadow-ink) 20%, transparent))',
                      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      transformOrigin: 'center'
                    }}
                    className="hover:scale-[1.24]"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
