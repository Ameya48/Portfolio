import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { DesignSystem } from '@/pages/DesignSystem';
import { portfolioData } from '@/lib/data';

/**
 * App — root component.
 *
 * Phase 0: Renders the design system demo page.
 * Phase 1+: Replace <DesignSystem /> with actual content sections.
 */
function App() {
  const { person } = portfolioData;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{person.name} — Portfolio</title>
        <meta name="description" content={`Portfolio of ${person.name} — developer, builder, and creative technologist.`} />
        <meta name="author" content={person.name} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${person.name} — Portfolio`} />
        <meta property="og:description" content={`Portfolio of ${person.name} — developer, builder, and creative technologist.`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${person.name} — Portfolio`} />
        <meta name="twitter:description" content={`Portfolio of ${person.name} — developer, builder, and creative technologist.`} />
        <link rel="canonical" href="https://ameyasagwekar.dev" />
        <meta name="theme-color" content="#080808" />
      </Helmet>

      {/* Skip to main content — accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[var(--z-cursor)] focus:px-4 focus:py-2 focus:bg-[var(--color-accent)] focus:text-black focus:rounded-[var(--radius-md)] focus:font-medium focus:text-[14px]"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main" role="main" tabIndex={-1}>
        {/*
          Phase 0: Design system demo.
          Replace this with section components in Phase 1+:
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        */}
        <DesignSystem />
      </main>

      <Footer />
    </HelmetProvider>
  );
}

export default App;
