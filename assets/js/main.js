(function () {
  'use strict';

  var root = document.documentElement;
  var themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = root.dataset.theme === 'dark' ? 'dark' : 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      localStorage.setItem('theme', next);
      themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
    });
  }

  var navToggle = document.getElementById('nav-toggle');
  if (navToggle) {
    document.querySelectorAll('.nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.checked = false;
      });
    });
  }

  document.querySelectorAll('.post-content table').forEach(function (table) {
    var parent = table.parentNode;
    if (parent && parent.classList && parent.classList.contains('table-scroll')) {
      return;
    }
    var wrapper = document.createElement('div');
    wrapper.className = 'table-scroll';
    parent.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
})();
