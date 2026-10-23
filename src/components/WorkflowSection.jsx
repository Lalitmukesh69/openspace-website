import React, { useState } from 'react';

const WORKFLOW_TABS = [
  {
    id: 'research',
    num: '01',
    title: '01. Research that connects the dots',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width: '17px', height: '17px'}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    description: 'Bring together webpages, screenshots, and notes. Let AI help you find patterns, summarize what matters, and understand the bigger picture.',
    quoteTitle: 'Synthesize research in seconds.',
    quoteDesc: 'Articles, bookmarks, and screenshots automatically analyzed to reveal key takeaways.'
  },
  {
    id: 'full-picture',
    num: '02',
    title: '02. Give your AI the full picture',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width: '17px', height: '17px'}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    description: 'Connect OpenSpace with Claude, ChatGPT, and compatible AI tools so they can use relevant context from your knowledge.',
    quoteTitle: 'Instant context injection.',
    quoteDesc: 'Your AI assistants answer with your exact notes, specs, and knowledge.'
  },
  {
    id: 'thoughts-to-action',
    num: '03',
    title: '03. Turn thoughts into action',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width: '17px', height: '17px'}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    description: 'Capture an idea by voice or text, then use AI to help turn it into clear notes, plans, and next steps.',
    quoteTitle: 'Voice & text to structured execution.',
    quoteDesc: 'Transform quick voice memos into project roadmaps and actionable task lists.'
  },
  {
    id: 'one-workspace',
    num: '04',
    title: '04. One workspace for work and life',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{width: '17px', height: '17px'}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
    description: 'Keep projects, personal goals, useful information, and everyday plans connected so you can pick up where you left off.',
    quoteTitle: 'Pick up right where you left off.',
    quoteDesc: 'Connected cross-device hub for personal ideas, company projects, and daily notes.'
  }
];

export default function WorkflowSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[var(--color-canvas-soft)]" style={{paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)', borderBottom: '1px solid var(--color-border)'}}>
      <div className="flat-dark-surfaces" style={{padding: '0 clamp(24px, 5vw, 64px)'}}>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch gap-10 lg:gap-0">
          
          {/* Left Column: Heading & Interactive Accordion */}
          <div className="flex flex-col" style={{order: '1'}}>
            <div style={{fontFamily: 'var(--font-mono)', fontSize: '18px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '12px', fontWeight: '500'}}>
              AGENTIC WORKSPACE
            </div>
            <h2 style={{fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: '500', letterSpacing: '-1.5px', margin: '0 0 12px', color: 'var(--color-heading)'}}>
              Put your knowledge to work.
            </h2>
            <p style={{fontSize: '16px', color: 'var(--color-foreground-muted)', lineHeight: '1.6', margin: '0 0 24px'}}>
              From complex research to everyday plans, OpenSpace connects your information with AI to help you think clearly, get things done, and move forward.
            </p>

            {/* Accordion Surface */}
            <div className="accordion-surfaces flex flex-col lg:h-[480px]" style={{marginTop: 'var(--space-2)', overflow: 'hidden', background: 'var(--color-canvas)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)'}}>
              {WORKFLOW_TABS.map((tab, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    aria-expanded={isActive}
                    className="text-left w-full cursor-pointer transition-colors"
                    style={{
                      flex: '0 0 auto',
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '15px 16px',
                      background: isActive ? 'var(--color-canvas-soft)' : 'var(--color-canvas)',
                      borderTop: idx > 0 ? '1px solid var(--color-border)' : 'none',
                      borderLeft: 'none',
                      borderRight: 'none',
                      borderBottom: 'none'
                    }}
                  >
                    <span style={{display: 'flex', alignItems: 'center', gap: '11px', width: '100%'}}>
                      <span className="shrink-0" style={{display: 'flex', color: isActive ? 'var(--color-accent)' : 'var(--color-foreground-muted)'}}>
                        {tab.icon}
                      </span>
                      <span style={{flex: '1', fontSize: '16px', fontWeight: isActive ? '600' : '500', color: 'var(--color-foreground)'}}>
                        {tab.title}
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
                          transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                    
                    <div
                      style={{
                        overflow: 'hidden',
                        maxHeight: isActive ? '160px' : '0',
                        opacity: isActive ? '1' : '0',
                        transition: 'max-height 0.34s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.28s ease'
                      }}
                    >
                      <p style={{fontSize: '15px', color: 'var(--color-foreground-muted)', lineHeight: '1.5', margin: '10px 0 0 28px'}}>
                        {tab.description}
                      </p>
                    </div>
                  </button>
                );
              })}

              {/* Bottom Quote Box */}
              <div style={{flex: '1', minHeight: '0', background: 'var(--color-canvas)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '22px 16px 18px', borderTop: '1px solid var(--color-border)', overflow: 'hidden'}}>
                <p style={{fontFamily: 'var(--font-display)', fontSize: 'clamp(17px, 1.8vw, 21px)', fontWeight: '500', letterSpacing: '-0.3px', lineHeight: '1.32', margin: '0', color: 'var(--color-foreground)', transition: 'all 0.25s ease'}}>
                  {WORKFLOW_TABS[activeTab].quoteTitle}
                  <span style={{display: 'block', marginTop: '8px', color: 'var(--color-foreground-muted)', fontSize: '14px', lineHeight: '1.5'}}>
                    {WORKFLOW_TABS[activeTab].quoteDesc}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Showcase Surface */}
          <div className="flex flex-col" style={{order: '2'}}>
            <div aria-hidden="true" className="hidden lg:block" style={{visibility: 'hidden', pointerEvents: 'none'}}>
              <div style={{fontFamily: 'var(--font-mono)', fontSize: '18px', marginBottom: '12px'}}>AGENTIC WORKSPACE</div>
              <h2 style={{fontSize: '38px', margin: '0 0 12px'}}>Put your knowledge to work.</h2>
              <p style={{fontSize: '16px', margin: '0 0 24px'}}>Placeholder spacer to align perfectly with left accordion.</p>
            </div>

            <div className="flex flex-col justify-start" style={{gap: 'var(--space-5)', marginTop: 'var(--space-2)'}}>
              <div
                className="showcase-canvas joined-right"
                style={{
                  border: '1px solid var(--color-border)',
                  padding: 'var(--space-6)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-5)',
                  height: '480px',
                  background: 'var(--color-canvas)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <div style={{flex: '1', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <div style={{width: '100%', maxWidth: '470px', height: '370px', position: 'relative'}}>
                    
                    {/* TAB 0: Research that connects the dots */}
                    {activeTab === 0 && (
                      <div className="w-full h-full relative" style={{animation: 'fadeIn 0.35s ease'}}>
                        {/* 3 top preview cards */}
                        <div style={{position: 'absolute', top: '0', left: '0', width: '146px', padding: '10px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-canvas)', boxShadow: '0 10px 22px rgba(0,0,0,0.08)'}}>
                          <div style={{height: '46px', borderRadius: '4px', background: 'linear-gradient(135deg, rgba(82, 85, 90, 0.15) 0%, rgba(82, 85, 90, 0.05) 100%)', border: '1px solid var(--color-border)', marginBottom: '8px', display: 'flex', alignItems: 'flex-end', gap: '3px', padding: '6px 8px'}}>
                            <div style={{width: '18%', height: '35%', background: 'var(--color-border)', borderRadius: '2px'}}></div>
                            <div style={{width: '18%', height: '65%', background: 'var(--color-border)', borderRadius: '2px'}}></div>
                            <div style={{width: '18%', height: '100%', background: 'var(--color-accent)', borderRadius: '2px'}}></div>
                            <div style={{width: '18%', height: '50%', background: 'var(--color-border)', borderRadius: '2px'}}></div>
                            <div style={{width: '18%', height: '80%', background: 'var(--color-border)', borderRadius: '2px'}}></div>
                          </div>
                          <div style={{fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '4px', fontWeight: '600'}}>
                            WEB ARTICLES · 4
                          </div>
                          <div style={{fontSize: '11.5px', fontWeight: '600', lineHeight: '1.25', color: 'var(--color-foreground)'}}>
                            Agent benchmarks &amp; paper
                          </div>
                        </div>

                        <div style={{position: 'absolute', top: '0', left: '154px', width: '146px', padding: '10px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-canvas)', boxShadow: '0 10px 22px rgba(0,0,0,0.08)'}}>
                          <div style={{height: '46px', borderRadius: '4px', background: 'linear-gradient(135deg, rgba(82, 85, 90, 0.15) 0%, rgba(82, 85, 90, 0.05) 100%)', border: '1px solid var(--color-border)', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px'}}>
                            <span style={{fontSize: '10px', fontFamily: 'var(--font-mono)', padding: '2px 5px', borderRadius: '3px', background: 'var(--color-canvas)', border: '1px solid var(--color-border)', fontWeight: '600'}}>2x</span>
                            <span style={{fontSize: '10px', color: 'var(--color-accent)'}}>→</span>
                            <span style={{fontSize: '10px', fontFamily: 'var(--font-mono)', padding: '2px 5px', borderRadius: '3px', background: 'var(--color-primary)', color: 'var(--color-primary-foreground)', fontWeight: '600'}}>OCR</span>
                          </div>
                          <div style={{fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '4px', fontWeight: '600'}}>
                            SCREENSHOTS · 2
                          </div>
                          <div style={{fontSize: '11.5px', fontWeight: '600', lineHeight: '1.25', color: 'var(--color-foreground)'}}>
                            Whiteboard architecture
                          </div>
                        </div>

                        <div style={{position: 'absolute', top: '0', left: '308px', width: '146px', padding: '10px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-canvas)', boxShadow: '0 10px 22px rgba(0,0,0,0.08)'}}>
                          <div style={{height: '46px', borderRadius: '4px', background: 'linear-gradient(135deg, rgba(82, 85, 90, 0.15) 0%, rgba(82, 85, 90, 0.05) 100%)', border: '1px solid var(--color-border)', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px'}}>
                            <span style={{fontSize: '14px'}}>🎙️</span>
                            <span style={{fontSize: '9.5px', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontWeight: '600'}}>Transcribed</span>
                          </div>
                          <div style={{fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '4px', fontWeight: '600'}}>
                            VOICE NOTES · 1
                          </div>
                          <div style={{fontSize: '11.5px', fontWeight: '600', lineHeight: '1.25', color: 'var(--color-foreground)'}}>
                            Product roadmap memo
                          </div>
                        </div>

                        {/* Foreground Highlight Card */}
                        <div style={{position: 'absolute', top: '118px', left: '50%', transform: 'translateX(-50%)', zIndex: '4', width: '316px', padding: '18px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-canvas)', boxShadow: '0 20px 40px rgba(0,0,0,0.18)'}}>
                          <div style={{fontFamily: 'var(--font-mono)', fontSize: '10.5px', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '9px', fontWeight: '600'}}>
                            AI SYNTHESIS · COMPREHENSIVE BRIEF
                          </div>
                          <div style={{fontSize: '19px', fontWeight: '700', lineHeight: '1.2', letterSpacing: '-0.4px', color: 'var(--color-foreground)', marginBottom: '12px'}}>
                            Connected patterns found across 7 sources
                          </div>
                          <div style={{display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '12px'}}>
                            <span style={{width: '26px', height: '26px', borderRadius: '999px', background: 'var(--color-accent)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold'}}>
                              OS
                            </span>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                              <span style={{fontSize: '12px', fontWeight: '600', color: 'var(--color-foreground)'}}>OpenSpace Research Agent</span>
                              <span style={{fontSize: '10px', color: 'var(--color-foreground-muted)'}}>Automated cross-document synthesis</span>
                            </div>
                          </div>
                          <div style={{height: '1px', background: 'var(--color-border)', margin: '0 0 12px'}}></div>
                          <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                            <span style={{height: '6px', width: '100%', borderRadius: '3px', background: 'var(--color-canvas-soft)'}}></span>
                            <span style={{height: '6px', width: '92%', borderRadius: '3px', background: 'var(--color-canvas-soft)'}}></span>
                            <span style={{height: '6px', width: '70%', borderRadius: '3px', background: 'var(--color-canvas-soft)'}}></span>
                          </div>
                          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'between', marginTop: '14px', paddingTop: '10px', borderTop: '1px solid var(--color-border)'}}>
                            <span style={{fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.02em', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: '600'}}>
                              Open Synthesized Summary →
                            </span>
                            <span style={{marginLeft: 'auto', fontSize: '10px', padding: '2px 6px', borderRadius: '3px', background: 'var(--color-canvas-soft)', border: '1px solid var(--color-border)', color: 'var(--color-foreground-muted)', fontFamily: 'var(--font-mono)'}}>
                              7 Sources
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TAB 1: Give your AI the full picture */}
                    {activeTab === 1 && (
                      <div className="w-full h-full flex flex-col gap-3" style={{animation: 'fadeIn 0.35s ease'}}>
                        {/* Context connection strip */}
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 12px', background: 'var(--color-canvas-soft)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)'}}>
                          <span style={{color: 'var(--color-accent)', fontWeight: 'bold', fontSize: '12px'}}>⚡</span>
                          <span style={{fontSize: '12px', color: 'var(--color-foreground)', fontWeight: '600', flex: '1'}}>OpenSpace Context Bridge (MCP)</span>
                          <span style={{fontSize: '10px', padding: '2px 6px', borderRadius: '3px', background: 'rgba(22, 163, 74, 0.12)', color: 'var(--color-badge-new)', fontWeight: 'bold'}}>
                            ● Active
                          </span>
                        </div>

                        {/* Interactive Context Exchange Card */}
                        <div style={{flex: '1', padding: '16px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-canvas)', display: 'flex', flexDirection: 'column', gap: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.06)'}}>
                          <div className="flex items-center justify-between">
                            <span style={{fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: '600'}}>
                              CONNECTED TO CLAUDE 3.5 SONNET
                            </span>
                            <span style={{fontFamily: 'var(--font-mono)', fontSize: '9.5px', color: 'var(--color-foreground-muted)'}}>
                              12 docs injected
                            </span>
                          </div>

                          <div style={{padding: '8px 10px', borderRadius: '4px', background: 'var(--color-foreground)', color: 'var(--color-foreground-on-primary)', fontSize: '11.5px', alignSelf: 'flex-end', maxWidth: '90%'}}>
                            What did we decide about the zero-retention data privacy policy?
                          </div>

                          <div style={{padding: '8px 10px', borderRadius: '4px', background: 'var(--color-canvas-soft)', color: 'var(--color-foreground)', border: '1px solid var(--color-border)', fontSize: '11.5px', alignSelf: 'flex-start', maxWidth: '95%', lineHeight: '1.4'}}>
                            According to your compliance notes from Oct 22: prompts are never retained or trained on, and all local vaults remain strictly encrypted at rest.
                          </div>

                          <div style={{marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div style={{display: 'flex', gap: '5px', fontSize: '9px', fontFamily: 'var(--font-mono)'}}>
                              <span style={{padding: '2px 6px', background: 'var(--color-canvas-soft)', border: '1px solid var(--color-border)', borderRadius: '3px'}}>compliance.md</span>
                              <span style={{padding: '2px 6px', background: 'var(--color-canvas-soft)', border: '1px solid var(--color-border)', borderRadius: '3px'}}>architecture-spec.md</span>
                            </div>
                            <span style={{fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)', fontWeight: '600'}}>
                              Verified Context ✓
                            </span>
                          </div>
                        </div>

                        {/* Compatible tools footer */}
                        <div className="flex items-center justify-between px-3 py-2 text-xs" style={{background: 'var(--color-canvas)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)'}}>
                          <span style={{fontSize: '11px', color: 'var(--color-foreground-muted)'}}>Compatible Assistants:</span>
                          <span style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>Claude • ChatGPT • Antigravity • Gemini</span>
                        </div>
                      </div>
                    )}

                    {/* TAB 2: Turn thoughts into action */}
                    {activeTab === 2 && (
                      <div className="w-full h-full flex flex-col gap-3" style={{animation: 'fadeIn 0.35s ease'}}>
                        {/* Audio capture banner */}
                        <div style={{padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-canvas)', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 6px 18px rgba(0,0,0,0.06)'}}>
                          <span style={{width: '28px', height: '28px', borderRadius: '999px', background: 'var(--color-accent)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px'}}>🎙️</span>
                          <div style={{flex: '1'}}>
                            <div style={{fontSize: '12px', fontWeight: '600', color: 'var(--color-foreground)'}}>"Let's organize the product launch for next Tuesday"</div>
                            <div style={{fontSize: '10px', color: 'var(--color-foreground-muted)'}}>Audio memo • Transcribed in 1.2s</div>
                          </div>
                          <span style={{fontSize: '9.5px', padding: '2px 6px', borderRadius: '3px', background: 'rgba(22, 163, 74, 0.12)', color: 'var(--color-badge-new)', fontWeight: 'bold'}}>
                            Converted
                          </span>
                        </div>

                        {/* Generated Action Plan */}
                        <div style={{flex: '1', padding: '14px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-canvas)', display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.06)'}}>
                          <div className="flex items-center justify-between">
                            <span style={{fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', color: 'var(--color-accent)', fontWeight: '600'}}>
                              STRUCTURED NEXT STEPS
                            </span>
                            <span style={{fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-badge-new)', fontWeight: 'bold'}}>
                              3 Tasks Created
                            </span>
                          </div>

                          <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                            <div style={{padding: '7px 9px', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                              <span style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>☑ Deploy production bundle to CDN</span>
                              <span style={{fontSize: '9px', color: 'var(--color-accent)', fontWeight: '600'}}>High Priority</span>
                            </div>
                            <div style={{padding: '7px 9px', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                              <span style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>☑ Update documentation &amp; quickstart</span>
                              <span style={{fontSize: '9px', color: 'var(--color-foreground-muted)'}}>In Progress</span>
                            </div>
                            <div style={{padding: '7px 9px', borderRadius: '4px', border: '1px solid var(--color-border)', background: 'var(--color-canvas-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                              <span style={{fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>☑ Send release notes to beta testers</span>
                              <span style={{fontSize: '9px', color: 'var(--color-foreground-muted)'}}>Scheduled Tue</span>
                            </div>
                          </div>

                          <div style={{marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <span style={{fontSize: '11px', color: 'var(--color-foreground-muted)'}}>Sync to Calendar &amp; Task Manager</span>
                            <span style={{fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)', fontWeight: '600'}}>Export Plan →</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TAB 3: One workspace for work and life */}
                    {activeTab === 3 && (
                      <div className="w-full h-full flex flex-col gap-3" style={{animation: 'fadeIn 0.35s ease'}}>
                        {/* Device Sync Strip */}
                        <div className="flex items-center justify-between" style={{padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas-soft)', border: '1px solid var(--color-border)'}}>
                          <span style={{fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '600', color: 'var(--color-foreground)'}}>
                            Cross-Device Sync
                          </span>
                          <span style={{fontSize: '10px', padding: '2px 6px', borderRadius: '3px', background: 'rgba(22, 163, 74, 0.12)', color: 'var(--color-badge-new)', fontWeight: 'bold'}}>
                            ● PC • Browser • Phone Synced
                          </span>
                        </div>

                        {/* Connected Workspaces list */}
                        <div style={{flex: '1', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                          {[
                            { name: '💼 Startup & Projects', desc: 'Active roadmaps, architecture diagrams, and meeting transcripts', count: '32 items', status: 'Updated 5m ago' },
                            { name: '🔬 Deep Research Vault', desc: 'AI research papers, bookmarks, and comparative benchmarks', count: '45 items', status: 'Synced' },
                            { name: '🌱 Personal & Creative Plans', desc: 'Reading lists, workout logs, travel notes, and weekend goals', count: '18 items', status: 'Updated today' },
                          ].map((item) => (
                            <div
                              key={item.name}
                              style={{
                                padding: '12px 14px',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--color-border)',
                                background: 'var(--color-canvas)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.04)'
                              }}
                            >
                              <div style={{display: 'flex', flexDirection: 'column', gap: '2px'}}>
                                <span style={{fontSize: '13px', fontWeight: '600', color: 'var(--color-foreground)'}}>
                                  {item.name}
                                </span>
                                <span style={{fontSize: '11px', color: 'var(--color-foreground-muted)'}}>
                                  {item.desc}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span style={{fontSize: '9px', fontFamily: 'var(--font-mono)', padding: '2px 5px', borderRadius: '3px', background: 'var(--color-canvas-soft)', border: '1px solid var(--color-border)', color: 'var(--color-foreground-muted)'}}>
                                  {item.count}
                                </span>
                                <span style={{fontSize: '10px', color: 'var(--color-badge-new)', fontWeight: '600'}}>
                                  {item.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Bottom note */}
                        <div style={{padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-canvas)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                          <span style={{fontSize: '11.5px', color: 'var(--color-foreground-muted)'}}>
                            Pick up right where you left off on any device
                          </span>
                          <span style={{fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-accent)', fontWeight: '600', cursor: 'pointer'}}>
                            Open Space Hub →
                          </span>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
