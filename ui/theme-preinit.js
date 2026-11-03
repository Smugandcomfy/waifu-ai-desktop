/* Apply the saved theme before first paint, so there's no flash of the wrong one.
   External (not inline) so it passes a strict script-src 'self' CSP. Light is the
   default; 'synth' (Miami) and 'dark' (Hacker) are the alternatives. */
try {
  var t = localStorage.getItem('codie-theme');
  document.documentElement.setAttribute('data-theme', t === 'synth' ? 'synth' : t === 'dark' ? 'dark' : 'light');
} catch (e) { /* storage blocked — fall back to CSS default */ }
