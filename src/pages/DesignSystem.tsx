import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Tag } from '@/components/ui/Tag';
import { Divider } from '@/components/ui/Divider';
import { FadeIn } from '@/components/motion/FadeIn';
import { SlideUp } from '@/components/motion/SlideUp';
import { StaggerChildren, itemVariants } from '@/components/motion/StaggerChildren';
import { motion } from 'framer-motion';

/**
 * DesignSystem — visual reference page for all design tokens and components.
 * This is Phase 0 output. Remove before production.
 */
export function DesignSystem() {
  return (
    <div className="min-h-screen py-20 bg-[var(--color-bg)]">
      <div className="container space-y-20">

        {/* Header */}
        <FadeIn>
          <div className="space-y-4">
            <p className="text-label text-[var(--color-text-tertiary)]">Phase 0 — Design System</p>
            <h1 className="text-h1 text-[var(--color-text-primary)]">
              Ameya Sagwekar<br />
              <span className="text-[var(--color-accent)]">Portfolio Design System</span>
            </h1>
            <p className="text-body max-w-xl">
              Visual reference for all design tokens, typography, components, and animations.
              This page exists to validate the system before building content sections.
            </p>
          </div>
        </FadeIn>

        <Divider />

        {/* Typography */}
        <SlideUp>
          <section aria-labelledby="typography-heading" className="space-y-8">
            <p className="text-label text-[var(--color-text-tertiary)]">01 / Typography</p>
            <div className="space-y-6">
              <div>
                <p className="text-label text-[var(--color-text-tertiary)] mb-2">Display (Hero)</p>
                <p className="text-display text-[var(--color-text-primary)] leading-none">Ameya.</p>
              </div>
              <div>
                <p className="text-label text-[var(--color-text-tertiary)] mb-2">H1</p>
                <h1 id="typography-heading" className="text-h1 text-[var(--color-text-primary)]">Building things that matter.</h1>
              </div>
              <div>
                <p className="text-label text-[var(--color-text-tertiary)] mb-2">H2</p>
                <h2 className="text-h2 text-[var(--color-text-primary)]">Featured Projects</h2>
              </div>
              <div>
                <p className="text-label text-[var(--color-text-tertiary)] mb-2">H3</p>
                <h3 className="text-h3 text-[var(--color-text-primary)]">Project Alpha</h3>
              </div>
              <div>
                <p className="text-label text-[var(--color-text-tertiary)] mb-2">Body</p>
                <p className="text-body max-w-2xl">
                  I'm a developer who cares deeply about craft — writing code that's not just functional
                  but thoughtful. I build for the web because it's the most accessible platform on earth.
                </p>
              </div>
              <div>
                <p className="text-label text-[var(--color-text-tertiary)] mb-2">Mono Label</p>
                <p className="text-label">02 / Skills &amp; Technologies</p>
              </div>
            </div>
          </section>
        </SlideUp>

        <Divider />

        {/* Color Palette */}
        <SlideUp delay={0.05}>
          <section aria-labelledby="colors-heading" className="space-y-8">
            <p className="text-label text-[var(--color-text-tertiary)]">02 / Color Palette</p>
            <h2 id="colors-heading" className="sr-only">Color Palette</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { name: 'Background', token: 'var(--color-bg)', hex: '#080808' },
                { name: 'Surface', token: 'var(--color-surface)', hex: '#0f0f0f' },
                { name: 'Surface 2', token: 'var(--color-surface-2)', hex: '#161616' },
                { name: 'Border', token: 'var(--color-border)', hex: '#1f1f1f' },
                { name: 'Border Hover', token: 'var(--color-border-hover)', hex: '#2d2d2d' },
                { name: 'Accent ★', token: 'var(--color-accent)', hex: '#e8ff47' },
                { name: 'Text Primary', token: 'var(--color-text-primary)', hex: '#f0f0f0' },
                { name: 'Text Secondary', token: 'var(--color-text-secondary)', hex: '#888888' },
              ].map((color) => (
                <div
                  key={color.name}
                  className="rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-border)]"
                >
                  <div
                    className="h-16"
                    style={{ background: color.token }}
                    aria-hidden="true"
                  />
                  <div className="p-3 bg-[var(--color-surface)]">
                    <p className="text-[12px] font-medium text-[var(--color-text-primary)]">{color.name}</p>
                    <p className="text-[11px] font-mono text-[var(--color-text-secondary)]">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </SlideUp>

        <Divider />

        {/* Buttons */}
        <SlideUp delay={0.05}>
          <section aria-labelledby="buttons-heading" className="space-y-8">
            <p className="text-label text-[var(--color-text-tertiary)]">03 / Buttons</p>
            <h2 id="buttons-heading" className="sr-only">Buttons</h2>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="accent" size="lg">Accent Large</Button>
              <Button variant="primary" size="md">Primary</Button>
              <Button variant="secondary" size="md">Secondary</Button>
              <Button variant="ghost" size="md">Ghost</Button>
              <Button variant="accent" size="sm">Accent SM</Button>
              <Button variant="secondary" size="sm" href="https://github.com/Ameya48" external>
                GitHub ↗
              </Button>
            </div>
          </section>
        </SlideUp>

        <Divider />

        {/* Badges & Tags */}
        <SlideUp delay={0.05}>
          <section aria-labelledby="badges-heading" className="space-y-8">
            <p className="text-label text-[var(--color-text-tertiary)]">04 / Badges &amp; Tags</p>
            <h2 id="badges-heading" className="sr-only">Badges and Tags</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 items-center">
                <Badge variant="default">Default</Badge>
                <Badge variant="accent">Live</Badge>
                <Badge variant="outline">WIP</Badge>
                <Badge variant="subtle">Archived</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Vite', 'Framer Motion', 'Tailwind CSS', 'Node.js', 'Python'].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </section>
        </SlideUp>

        <Divider />

        {/* Dividers */}
        <SlideUp delay={0.05}>
          <section aria-labelledby="dividers-heading" className="space-y-6">
            <p className="text-label text-[var(--color-text-tertiary)]">05 / Dividers</p>
            <h2 id="dividers-heading" className="sr-only">Dividers</h2>
            <Divider />
            <Divider accent />
          </section>
        </SlideUp>

        <Divider />

        {/* Animations */}
        <section aria-labelledby="animations-heading" className="space-y-8">
          <p className="text-label text-[var(--color-text-tertiary)]">06 / Animations</p>
          <h2 id="animations-heading" className="sr-only">Animations</h2>
          <StaggerChildren className="space-y-3">
            {['FadeIn entrance', 'SlideUp entrance', 'Staggered list item 1', 'Staggered list item 2', 'Staggered list item 3'].map((label) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="px-5 py-4 rounded-[var(--radius-md)] bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] text-[14px] font-mono"
              >
                {label}
              </motion.div>
            ))}
          </StaggerChildren>
        </section>

        <Divider />

        {/* Available indicator */}
        <SlideUp delay={0.05}>
          <section className="space-y-6">
            <p className="text-label text-[var(--color-text-tertiary)]">07 / Status Indicators</p>
            <div className="flex items-center gap-3">
              <span className="dot-live" />
              <span className="text-[13px] font-mono text-[var(--color-text-secondary)]">
                Available for work
              </span>
            </div>
          </section>
        </SlideUp>

        <Divider />

        {/* System footer */}
        <FadeIn delay={0.1}>
          <div className="text-center py-10 space-y-2">
            <p className="text-label text-[var(--color-text-tertiary)]">Phase 0 complete</p>
            <p className="text-[13px] text-[var(--color-text-tertiary)]">
              Design system validated. Ready for Phase 1 — Hero &amp; Layout sections.
            </p>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
