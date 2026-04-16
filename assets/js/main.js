/* ============================================================
   AgentsGuard – Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* 1. Hamburger / Mobile Menu
  ------------------------------------------------------------ */
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });

    // Close when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* 2. Threat Landscape Tabs
  ------------------------------------------------------------ */
  const tabs   = document.querySelectorAll('.threat-tab');
  const panels = document.querySelectorAll('.threat-panel');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t   => t.classList.remove('is-active'));
      panels.forEach(p => p.classList.remove('is-active'));
      tab.classList.add('is-active');
      if (panels[index]) panels[index].classList.add('is-active');
    });
  });

  /* 3. Capabilities Accordion
  ------------------------------------------------------------ */
  document.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-header');
    header?.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      // Close all
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('is-open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('is-open');
    });
  });

  /* 4. ScrollReveal via IntersectionObserver
  ------------------------------------------------------------ */
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px',
  });

  revealEls.forEach(el => observer.observe(el));

  /* 5. Active nav link highlight on scroll
  ------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__link');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes(id)) {
              link.style.color = '#8b5cf6';
            } else {
              link.style.color = '';
            }
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => sectionObserver.observe(s));
  }

  /* 6. Diagram – Flow Row Highlight & Click Ripple
  ------------------------------------------------------------ */
  const diagram = document.querySelector('.ag-diagram');

  if (diagram) {
    // Highlight all comp boxes in a row on hover
    diagram.querySelectorAll('.frow').forEach(row => {
      const boxes = row.querySelectorAll('.comp');
      row.addEventListener('mouseenter', () => {
        boxes.forEach((b, i) => setTimeout(() => b.style.borderColor = '#5B00D6', i * 60));
      });
      row.addEventListener('mouseleave', () => {
        boxes.forEach(b => b.style.borderColor = '');
      });
    });

    // Click ripple effect
    diagram.querySelectorAll('.comp, .agent-card, .node-card, .de-card, .z3-node').forEach(el => {
      el.addEventListener('click', e => {
        const r = document.createElement('span');
        r.style.cssText = `
          position:absolute;border-radius:50%;pointer-events:none;
          background:rgba(91,0,214,.18);transform:scale(0);
          animation:agRipple .55s ease-out;
          width:56px;height:56px;margin:-28px;
          left:${e.offsetX}px;top:${e.offsetY}px;
        `;
        el.style.position = 'relative';
        el.appendChild(r);
        setTimeout(() => r.remove(), 580);
      });
    });

    // Inject ripple keyframe once
    if (!document.getElementById('ag-ripple-style')) {
      const s = document.createElement('style');
      s.id = 'ag-ripple-style';
      s.textContent = '@keyframes agRipple { to { transform:scale(4); opacity:0; } }';
      document.head.appendChild(s);
    }
  }

});
