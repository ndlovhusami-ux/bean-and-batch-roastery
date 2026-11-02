(() => {
  const items = [...document.querySelectorAll('.g-item')]; if (!items.length) return;
  let i = 0, opener;
  const lb = document.createElement('div');
  lb.className = 'lightbox'; lb.hidden = true;
  lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Image viewer');
  lb.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button><button class="lb-prev" aria-label="Previous image">&#8249;</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-next" aria-label="Next image">&#8250;</button>';
  document.body.append(lb);
  const img = lb.querySelector('img'), cap = lb.querySelector('figcaption');
  const show = n => { i = (n + items.length) % items.length; const t = items[i].querySelector('img'); img.src = items[i].href; img.alt = t.alt; cap.textContent = t.alt; };
  const open = n => { opener = document.activeElement; show(n); lb.hidden = false; lb.querySelector('.lb-close').focus(); };
  const close = () => { lb.hidden = true; if (opener) opener.focus(); };
  items.forEach((a, n) => a.addEventListener('click', e => { e.preventDefault(); open(n); }));
  lb.addEventListener('click', e => {
    if (e.target === lb || e.target.closest('.lb-close')) close();
    else if (e.target.closest('.lb-prev')) show(i - 1);
    else if (e.target.closest('.lb-next')) show(i + 1);
  });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close(); else if (e.key === 'ArrowLeft') show(i - 1); else if (e.key === 'ArrowRight') show(i + 1);
  });
})();
