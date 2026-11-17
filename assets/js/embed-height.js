(() => {
  'use strict';
  if (window.parent === window) return;

  document.documentElement.classList.add('pw-dashboard-embedded');
  const minimumHeight = 600;
  let automatic = false;
  let timer = null;
  let lastHeight = 0;
  let resetting = false;
  let pendingAnchor = null;
  let modalTrigger = null;

  const post = (message) => window.parent.postMessage(message, '*');
  const anchor = (element) => {
    if (!element?.isConnected) return;
    post({ type: 'pw-dashboard-anchor', top: Math.max(0, Math.round(element.getBoundingClientRect().top + window.scrollY)) });
  };
  const measure = () => {
    timer = null;
    if (!document.body) return;
    if (automatic) window.scrollTo(0, 0);
    const height = document.documentElement.scrollHeight;
    const style = getComputedStyle(document.body);
    const intrinsicHeight = Math.ceil(document.body.getBoundingClientRect().height
      + parseFloat(style.marginTop || 0) + parseFloat(style.marginBottom || 0));
    // scrollHeight has a viewport floor. Ask the parent for a fresh 600px
    // measuring viewport before reporting the actual scrollHeight after shrink.
    if (automatic && !resetting && lastHeight > minimumHeight
        && height <= lastHeight && intrinsicHeight < lastHeight - 4) {
      resetting = true;
      post({ type: 'pw-dashboard-measure' });
      return;
    }
    if (resetting) return;
    if (height !== lastHeight) {
      lastHeight = height;
      post({ type: 'pw-dashboard-height', height: document.documentElement.scrollHeight });
    }
    if (automatic && pendingAnchor) {
      anchor(pendingAnchor);
      pendingAnchor = null;
    }
  };
  const schedule = () => {
    if (timer === null) timer = window.setTimeout(measure, 100);
  };
  window.addEventListener('message', (event) => {
    if (event.source !== window.parent || event.data?.type !== 'pw-dashboard-embed-ready' || automatic) return;
    automatic = true;
    document.documentElement.classList.add('pw-dashboard-auto-height');
    schedule();
  });
  window.addEventListener('resize', () => {
    if (resetting) lastHeight = 0;
    resetting = false;
    schedule();
  });
  window.addEventListener('load', schedule);

  const start = () => {
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(document.body);
    const dialogs = [...document.querySelectorAll('[role="dialog"][aria-modal="true"]')];
    const modalObserver = new MutationObserver(() => {
      if (automatic) {
        const opened = dialogs.find(dialog => dialog.getAttribute('aria-hidden') === 'false' && !dialog.classList.contains('hidden'));
        pendingAnchor = opened || modalTrigger;
      }
      schedule();
    });
    dialogs.forEach(dialog => modalObserver.observe(dialog, { attributes: true, attributeFilter: ['class', 'aria-hidden'] }));
    document.addEventListener('click', (event) => {
      const control = event.target.closest?.('[aria-controls], [data-methodology-open]');
      if (control && dialogs.includes(document.getElementById(control.getAttribute('aria-controls') || control.dataset.methodologyOpen))) {
        modalTrigger = control;
      }
      const link = event.target.closest?.('a[href^="#"]');
      if (!automatic || !link || event.defaultPrevented || event.button !== 0
          || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      let target;
      try { target = document.getElementById(decodeURIComponent(link.hash.slice(1))); } catch { return; }
      if (!target) return;
      event.preventDefault();
      history.replaceState(null, '', link.hash);
      anchor(target);
    }, true);
    schedule();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
