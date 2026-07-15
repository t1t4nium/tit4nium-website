(function() {
  'use strict';

  // Fermeture du menu hamburger au clic sur un lien
  var toggle = document.getElementById('nav-toggle');
  if (toggle) {
    document.querySelectorAll('.nav-links a').forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.checked = false;
      });
    });
  }

  // Uptime sur la page a-propos
  var uptime = document.getElementById('uptime');
  if (uptime) {
    var start = 517104000000;
    var now = Date.now();
    var days = Math.floor((now - start) / (86400 * 1000));
    uptime.textContent = days.toLocaleString('fr-FR') + ' days';
  }
})();
