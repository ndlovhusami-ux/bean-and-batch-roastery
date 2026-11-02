window.addEventListener('load', () => {
  const m = document.getElementById('map'); if (!m || !window.L) return;
  const map = L.map(m).setView([-26.162, 28.026], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
  [[-26.1467, 28.0436, 'Main Roastery &amp; Café — Rosebank', '14 Baker Street, Rosebank'],
   [-26.1769, 28.0087, 'Second Café — Melville', '52 7th Street, Melville']]
    .forEach(([a, b, t, s]) => L.marker([a, b]).addTo(map).bindPopup('<strong>' + t + '</strong><br>' + s));
});
