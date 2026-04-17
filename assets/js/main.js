/* ============================================================
   AgentsGuard – Main JavaScript
   ============================================================ */

/* ============================================================
   Demo Modal
============================================================ */
function openDemoModal() {
  const modal = document.getElementById('demoModal');
  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}

function closeDemoModal() {
  const modal = document.getElementById('demoModal');
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    // Reset form back to original state
    const form = document.getElementById('demoForm');
    const formWrap = document.getElementById('demoFormWrap');
    const success = document.getElementById('demoSuccess');
    if (form) {
      form.reset();
      form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
      form.querySelectorAll('.field-error').forEach(el => el.remove());
      const countrySelect = document.getElementById('demoCountry');
      if (countrySelect) countrySelect.classList.remove('has-value');
    }
    if (formWrap) formWrap.style.display = '';
    if (success) success.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const demoModal = document.getElementById('demoModal');
  const demoModalOverlay = document.getElementById('demoModalOverlay');
  const demoModalClose = document.getElementById('demoModalClose');

  if (demoModal) {
    demoModalOverlay?.addEventListener('click', closeDemoModal);
    demoModalClose?.addEventListener('click', closeDemoModal);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && demoModal.classList.contains('is-open')) closeDemoModal();
    });
  }

  const countrySelect = document.getElementById('demoCountry');
  const phoneInput    = document.getElementById('demoPhone');

  countrySelect?.addEventListener('change', function () {
    this.classList.toggle('has-value', this.value !== '');
  });

  // Only allow digits
  phoneInput?.addEventListener('keypress', e => {
    if (!/[0-9]/.test(e.key)) e.preventDefault();
  });

  phoneInput?.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });

  function setError(id, msg) {
    const input = document.getElementById(id);
    if (!input) return;
    input.classList.add('is-invalid');
    let err = input.parentElement.querySelector('.field-error');
    if (!err) {
      err = document.createElement('span');
      err.className = 'field-error';
      input.parentElement.appendChild(err);
    }
    err.textContent = msg;
  }

  function clearError(id) {
    const input = document.getElementById(id);
    if (!input) return;
    input.classList.remove('is-invalid');
    input.parentElement.querySelector('.field-error')?.remove();
  }

  // Clear error on input
  ['demoName', 'demoEmail', 'demoOrg', 'demoPhone'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', () => clearError(id));
  });

  document.getElementById('demoForm')?.addEventListener('submit', e => {
    e.preventDefault();

    const name  = document.getElementById('demoName')?.value.trim();
    const email = document.getElementById('demoEmail')?.value.trim();
    const org   = document.getElementById('demoOrg')?.value.trim();
    const phone = document.getElementById('demoPhone')?.value.trim();

    // Clear all errors first
    ['demoName', 'demoEmail', 'demoOrg', 'demoPhone'].forEach(clearError);

    let valid = true;

    if (!name) {
      setError('demoName', 'Name is required.');
      valid = false;
    }

    if (!email) {
      setError('demoEmail', 'Email is required.');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('demoEmail', 'Enter a valid email address.');
      valid = false;
    }

    if (!org) {
      setError('demoOrg', 'Organisation is required.');
      valid = false;
    }

    if (!phone) {
      setError('demoPhone', 'Phone number is required.');
      valid = false;
    } else if (phone.length < 5) {
      setError('demoPhone', 'Enter a valid phone number.');
      valid = false;
    }

    if (!valid) return;

    document.getElementById('demoFormWrap').style.display = 'none';
    document.getElementById('demoSuccess').style.display = 'block';
  });
});

document.addEventListener('DOMContentLoaded', () => {

  /* 1. Hamburger / Mobile Menu
  ------------------------------------------------------------ */
  const hamburger = document.querySelector('.hamburger');
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
  const tabs = document.querySelectorAll('.threat-tab');
  const panels = document.querySelectorAll('.threat-panel');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
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
