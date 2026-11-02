const RECIPIENT = 'hello@beanandbatch.co.za';  // contact form emails are addressed to this
const ENDPOINT = '';                           // optional: paste a Formspree URL to also POST enquiries
const nameRule = v => v.length < 2 ? 'Please enter your full name (at least 2 characters).' : '';
const emailRule = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'Please enter a valid email address.';
const phoneRule = v => v && !/^(\+27|0)[0-9]{9}$/.test(v.replace(/[\s-]/g, '')) ? 'Use a South African number, e.g. 0821234567 or +27821234567.' : '';
const msgRule = v => v.length < 20 ? 'Please write at least 20 characters.' : v.length > 500 ? 'Please keep it under 500 characters.' : '';
const todayStr = () => new Date(Date.now() - new Date().getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
const V = {
  'enquiry-type': v => v ? '' : 'Please choose an enquiry type.',
  'full-name': nameRule, 'c-name': nameRule, email: emailRule, 'c-email': emailRule,
  phone: phoneRule, 'c-phone': phoneRule, message: msgRule, 'c-message': msgRule,
  quantity: v => v && (v < 1 || v > 1000) ? 'Enter a quantity between 1 and 1000.' : '',
  'event-date': v => v && v < todayStr() ? 'The date cannot be in the past.' : '',
  'c-type': v => v ? '' : 'Please choose a message type.'
};
function setErr(input, msg) {
  let s = document.getElementById(input.id + '-err');
  if (!s) { s = document.createElement('small'); s.id = input.id + '-err'; s.className = 'error'; input.after(s); input.setAttribute('aria-describedby', s.id); }
  s.textContent = msg; input.setAttribute('aria-invalid', !!msg);
}
function validate(f) {
  let first = null;
  Object.keys(V).forEach(n => {
    const i = f.elements[n]; if (!i) return;
    const msg = V[n](i.value.trim()); setErr(i, msg); if (msg && !first) first = i;
  });
  if (first) first.focus();
  return !first;
}
function estimate(d, r) {
  const first = d['full-name'].split(' ')[0];
  if (!r) return ['Thank you, ' + first + '!', 'We will reply within two working days.'];
  let q = +d.quantity || r.min; const out = [];
  if (q < r.min) { out.push('Minimum order is ' + r.min + ' ' + r.unit + '; the estimate uses the minimum.'); q = r.min; }
  let total = q * r.price;
  if (r.discountOver && q >= r.discountOver) { total *= 1 - r.discount; out.push(r.discount * 100 + '% volume discount applied.'); }
  out.unshift('Estimated cost: R' + total.toLocaleString('en-ZA') + ' for ' + q + ' ' + r.unit + '.');
  if (d['event-date']) {
    const days = Math.ceil((new Date(d['event-date']) - new Date()) / 864e5);
    out.push(days >= r.notice ? 'Availability: your date meets our ' + r.notice + '-day notice period.' : 'Your date is inside our ' + r.notice + '-day notice period; we will confirm if we can still fit you in.');
  } else out.push('Availability: we need ' + r.notice + ' days notice. Roast days are Tuesday and Friday.');
  out.push('This is an estimate; our team will confirm within two working days.');
  return ['Thank you, ' + first + '!'].concat(out);
}
document.querySelectorAll('form').forEach(f => f.addEventListener('focusout', e => {   // live validation on blur
  const n = e.target.name; if (V[n]) setErr(e.target, V[n](e.target.value.trim()));
}));
const ef = document.getElementById('enquiry-form');
if (ef) ef.addEventListener('submit', async e => {
  e.preventDefault(); if (!validate(ef)) return;
  const note = ef.querySelector('.form-note'), btn = ef.querySelector('button[type=submit]');
  btn.disabled = true; note.hidden = false; note.textContent = 'Sending…';
  try {   // AJAX: no page reload
    const d = Object.fromEntries(new FormData(ef));
    if (ENDPOINT) await fetch(ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(ef) });
    const rates = await (await fetch('data/pricing.json')).json();
    const [head, ...lines] = estimate(d, rates[d['enquiry-type']]);
    const ul = document.createElement('ul'); lines.forEach(t => { const li = document.createElement('li'); li.textContent = t; ul.append(li); });
    note.replaceChildren(head, ul); ef.reset();
  } catch { note.textContent = 'Something went wrong. Please try again or email ' + RECIPIENT + '.'; }
  btn.disabled = false;
});
const cf = document.getElementById('contact-form');
if (cf) cf.addEventListener('submit', e => {
  e.preventDefault(); if (!validate(cf)) return;
  const d = Object.fromEntries(new FormData(cf));
  const body = 'Name: ' + d['c-name'] + '\nEmail: ' + d['c-email'] + '\nPhone: ' + (d['c-phone'] || 'not given') + '\nCafé: ' + (d['c-location'] || 'no preference') + '\nType: ' + d['c-type'] + '\n\n' + d['c-message'];
  const url = 'mailto:' + RECIPIENT + '?subject=' + encodeURIComponent('Website message: ' + d['c-type']) + '&body=' + encodeURIComponent(body);
  const note = cf.querySelector('.form-note'), a = document.createElement('a');
  a.href = url; a.textContent = 'Click here if your email app did not open';
  note.hidden = false; note.replaceChildren('Your message is ready to send to ' + RECIPIENT + '. ', a);
  window.location.href = url;
});
