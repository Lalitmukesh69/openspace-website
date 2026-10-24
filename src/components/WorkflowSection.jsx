import React, { useState } from 'react';
import minecraftDashboardImg from '../assets/minecraft-build-ideas.png';
import claudeInterfaceImg from '../assets/claude-interface.png';
import todoTasksWidgetImg from '../assets/todo-tasks-widget.png';
import collectionsGridImg from '../assets/collections-dashboard-grid.png';

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
                <div style={{flex: '1', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'}}>
                  <div style={{width: '100%', maxWidth: '500px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                    
                    {/* TAB 0: Minecraft Build Ideas */}
                    {activeTab === 0 && (
                      <div key="tab-0" className="w-full h-full flex items-center justify-center" style={{animation: 'fadeIn 0.35s ease'}}>
                        <img
                          src={minecraftDashboardImg}
                          alt="Minecraft build ideas dashboard"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '380px',
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
                    )}

                    {/* TAB 1: Claude Dark Mode Interface */}
                    {activeTab === 1 && (
                      <div key="tab-1" className="w-full h-full flex items-center justify-center" style={{animation: 'fadeIn 0.35s ease'}}>
                        <img
                          src={claudeInterfaceImg}
                          alt="Claude dark mode OpenSpace interface"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '380px',
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
                    )}

                    {/* TAB 2: Dark To-Do Tasks Widget */}
                    {activeTab === 2 && (
                      <div key="tab-2" className="w-full h-full flex items-center justify-center" style={{animation: 'fadeIn 0.35s ease'}}>
                        <img
                          src={todoTasksWidgetImg}
                          alt="Dark to-do tasks widget"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '380px',
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
                    )}

                    {/* TAB 3: Collections Dashboard Grid */}
                    {activeTab === 3 && (
                      <div key="tab-3" className="w-full h-full flex items-center justify-center" style={{animation: 'fadeIn 0.35s ease'}}>
                        <img
                          src={collectionsGridImg}
                          alt="Dark collections dashboard grid"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '380px',
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
