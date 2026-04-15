import { useEffect } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { aboutUsContent } from '../content/aboutUs';
import ceoHeadshot from '../../imports/dr-najwa-new-headshot.webp';

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-block px-6 py-2 mb-6 rounded-full border"
      style={{
        borderColor: '#8b5cf6',
        color: '#8b5cf6',
      }}
    >
      <span className="text-sm uppercase tracking-widest">{children}</span>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <ScrollReveal>
      <div className="text-center mb-16 max-w-5xl mx-auto">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h2
          className="text-2xl sm:text-3xl md:text-[2.5rem] lg:text-5xl mb-4"
          style={{
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.03em',
          }}
        >
          {title}
        </h2>
        {body ? (
          <p
            className="text-base sm:text-lg md:text-xl mt-4 md:mt-6 max-w-4xl mx-auto px-4"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            {body}
          </p>
        ) : null}
      </div>
    </ScrollReveal>
  );
}

function StatCard({ label, value, delay = 0 }: { label: string; value: string; delay?: number }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <div
        className="card-hover-glow p-6 sm:p-8 md:p-10 rounded-3xl text-center h-full"
        style={{
          border: '1px solid rgba(139, 92, 246, 0.3)',
          background: 'rgba(255, 255, 255, 0.02)',
          transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div className="text-xs uppercase tracking-widest text-neutral-500 mb-3">{label}</div>
        <div
          className="text-2xl sm:text-3xl md:text-4xl text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {value}
        </div>
      </div>
    </ScrollReveal>
  );
}

function InfoCard({
  title,
  body,
  delay = 0,
}: {
  title: string;
  body: string;
  delay?: number;
}) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <div
        className="card-hover-glow p-6 sm:p-8 md:p-10 rounded-3xl h-full flex flex-col"
        style={{
          border: '1px solid rgba(255, 255, 255, 0.05)',
          background: 'rgba(255, 255, 255, 0.02)',
          backdropFilter: 'blur(16px)',
          transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <h3
          className="text-xl sm:text-2xl mb-3 sm:mb-4 flex-shrink-0"
          style={{
            color: '#8b5cf6',
            fontFamily: 'var(--font-heading)',
          }}
        >
          {title}
        </h3>
        <p className="text-sm sm:text-base leading-relaxed flex-grow" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          {body}
        </p>
      </div>
    </ScrollReveal>
  );
}

function PersonCard({
  name,
  role,
  bio,
  image,
  delay = 0,
  compact = false,
}: {
  name: string;
  role: string;
  bio: string;
  image?: string;
  delay?: number;
  compact?: boolean;
}) {
  const profileImage = image === 'dr-najwa-new-headshot' ? ceoHeadshot : undefined;

  return (
    <ScrollReveal delay={delay} className="h-full">
      <div
        className={`card-hover-glow rounded-3xl h-full flex flex-col ${compact ? 'p-6 sm:p-8' : 'p-8 sm:p-10 md:p-12'}`}
        style={{
          border: '1px solid rgba(139, 92, 246, 0.2)',
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
          backdropFilter: 'blur(16px)',
          transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div
          className={`${compact ? 'w-14 h-14' : 'w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem]'} rounded-full mb-5 flex items-center justify-center overflow-hidden`}
          style={{
            background: 'rgba(139, 92, 246, 0.12)',
            border: '1px solid rgba(139, 92, 246, 0.24)',
          }}
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span
              className="text-lg sm:text-xl"
              style={{ color: '#8b5cf6', fontFamily: 'var(--font-heading)' }}
            >
              {name
                .split(' ')
                .map((part) => part[0])
                .join('')
                .slice(0, 2)}
            </span>
          )}
        </div>
        <h3
          className={`${compact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'} mb-2`}
          style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}
        >
          {name}
        </h3>
        <p className="text-sm sm:text-base mb-4" style={{ color: '#8b5cf6' }}>
          {role}
        </p>
        <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          {bio}
        </p>
      </div>
    </ScrollReveal>
  );
}

export function AboutPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = document
      .querySelector('meta[name="description"]')
      ?.getAttribute('content');

    document.title = aboutUsContent.seo.title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', aboutUsContent.seo.description);

    return () => {
      document.title = previousTitle;
      if (previousDescription) {
        meta?.setAttribute('content', previousDescription);
      }
    };
  }, []);

  return (
    <main>
      <section className="relative z-10 min-h-[100svh] flex items-center justify-center px-4 sm:px-6 md:px-12 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-14 md:pb-16">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div
            className="max-w-5xl mx-auto rounded-3xl px-6 sm:px-10 md:px-14 py-10 sm:py-12 md:py-16"
          >
            <ScrollReveal>
              <div className="mb-8">
                <div
                  className="inline-block px-4 py-2 mb-6 rounded-full"
                  style={{
                    background: 'rgba(139, 92, 246, 0.1)',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="text-sm uppercase tracking-wider" style={{ color: '#8b5cf6' }}>
                    {aboutUsContent.hero.eyebrow}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 md:mb-8 px-4"
                style={{
                  lineHeight: '0.9',
                  fontFamily: 'var(--font-heading)',
                  marginInline: 'auto',
                }}
              >
                <span className="block">{aboutUsContent.hero.headline}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p
                className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4"
                style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {aboutUsContent.hero.subheadline}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="max-w-6xl mx-auto rounded-3xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12"
          >
            <SectionIntro eyebrow={aboutUsContent.mission.sectionTitle} title={aboutUsContent.mission.headline} />
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <ScrollReveal delay={100}>
                <div
                  className="card-hover-glow p-6 sm:p-8 md:p-10 rounded-3xl h-full"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(16px)',
                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                  }}
                >
                  {aboutUsContent.mission.body.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={`text-base md:text-lg leading-relaxed ${index < aboutUsContent.mission.body.length - 1 ? 'mb-6' : ''}`}
                      style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </ScrollReveal>
              <div className="grid gap-6">
                {aboutUsContent.values.items.slice(0, 2).map((item, index) => (
                  <InfoCard key={item.title} title={item.title} body={item.body} delay={180 + index * 80} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto relative z-10">
          <div
            className="max-w-6xl mx-auto rounded-3xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12"
          >
            <SectionIntro
              eyebrow={aboutUsContent.team.sectionTitle}
              title={aboutUsContent.team.headline}
              body={aboutUsContent.team.intro}
            />
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
              {aboutUsContent.team.founders.map((person, index) => (
                <PersonCard key={person.name} {...person} delay={index * 120} />
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {aboutUsContent.team.leadership.map((person, index) => (
                <PersonCard key={person.name} {...person} compact delay={index * 80} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
