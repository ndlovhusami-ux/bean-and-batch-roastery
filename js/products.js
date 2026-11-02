(() => {
  const grid = document.getElementById('product-grid'); if (!grid) return;
  const $ = id => document.getElementById(id); let items = [];
  const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };
  function card(p) {
    const c = el('div', 'card pop'), m = el('div', 'roast-meter'); m.setAttribute('aria-hidden', 'true');
    for (let i = 1; i <= 5; i++) m.append(el('span', i <= p.level ? 'filled' : ''));
    const b = el('button', 'btn btn-primary', 'Details'); b.dataset.id = p.id;
    c.append(el('span', 'roast-badge', p.roast + ' Roast'), el('h3', '', p.name), m, el('p', '', p.notes + ' R' + p.price + ' / 250g'), b);
    return c;
  }
  function render() {
    const q = $('q').value.trim().toLowerCase(), r = $('roast').value, s = $('sort').value;
    const sorts = { name: (a, b) => a.name.localeCompare(b.name), 'price-asc': (a, b) => a.price - b.price, 'price-desc': (a, b) => b.price - a.price, roast: (a, b) => a.level - b.level };
    const list = items.filter(p => (!r || p.roast === r) && (!q || (p.name + p.origin + p.notes).toLowerCase().includes(q))).sort(sorts[s]);
    grid.replaceChildren(...list.map(card));
    $('count').textContent = list.length ? list.length + ' bean(s) shown' : 'No beans match your search.';
  }
  grid.addEventListener('click', e => {   // event delegation -> modal
    const b = e.target.closest('button[data-id]'); if (!b) return;
    const p = items.find(x => String(x.id) === b.dataset.id), d = $('product-modal');
    const close = el('button', 'btn btn-primary', 'Close'); close.addEventListener('click', () => d.close());
    d.replaceChildren(el('h3', '', p.name), el('p', '', p.origin + ' · ' + p.roast + ' roast'), el('p', '', p.desc), el('p', '', 'R' + p.price + ' per 250g'), close);
    d.showModal();
  });
  $('product-modal').addEventListener('click', e => { if (e.target.id === 'product-modal') e.target.close(); });
  ['q', 'roast', 'sort'].forEach(id => $(id).addEventListener(id === 'q' ? 'input' : 'change', render));
  fetch('data/products.json').then(r => r.json()).then(j => { items = j; render(); })
    .catch(() => { $('count').textContent = 'Could not load products. Please refresh the page.'; });
})();
