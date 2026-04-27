(function () {
  var html   = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var clock  = document.getElementById('sb-time');

  // ── Theme ──────────────────────────────────────────────────
  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    if (toggle) toggle.textContent = t === 'dark' ? '[light]' : '[dark]';
    localStorage.setItem('theme', t);
  }

  applyTheme(localStorage.getItem('theme') || 'dark');

  if (toggle) {
    toggle.addEventListener('click', function () {
      applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  // ── Clock ──────────────────────────────────────────────────
  function tick() {
    if (!clock) return;
    var d  = new Date();
    var hh = String(d.getHours()).padStart(2, '0');
    var mm = String(d.getMinutes()).padStart(2, '0');
    clock.textContent = hh + ':' + mm;
  }

  tick();
  setInterval(tick, 1000);
})();
