/**
 * Progressive enhancement for header chrome.
 * Works even if React hydration fails (e.g. flaky tunnel / HMR).
 */
(function () {
  var KEY = "az-lang";

  function currentLang() {
    try {
      var s = localStorage.getItem(KEY);
      if (s === "ku" || s === "en") return s;
    } catch (e) {}
    return "en";
  }

  function applyLang(lang) {
    var root = document.documentElement;
    if (lang === "ku") {
      root.lang = "ckb";
      root.dir = "rtl";
      root.dataset.lang = "ku";
    } else {
      lang = "en";
      root.lang = "en";
      root.dir = "ltr";
      root.dataset.lang = "en";
    }
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {}
    // Reload so all translated copy updates even without React
    location.reload();
  }

  function toggleMenu() {
    var header = document.querySelector("[data-az-header]");
    var btn = document.querySelector("[data-menu-toggle]");
    if (!header) return;
    var open = header.classList.toggle("az-menu-open");
    if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  document.addEventListener(
    "click",
    function (e) {
      var langBtn = e.target.closest && e.target.closest("[data-set-lang]");
      if (langBtn) {
        e.preventDefault();
        e.stopImmediatePropagation();
        var next = langBtn.getAttribute("data-set-lang");
        if (next === currentLang()) return;
        applyLang(next);
        return;
      }
      var menuBtn = e.target.closest && e.target.closest("[data-menu-toggle]");
      if (menuBtn) {
        e.preventDefault();
        e.stopImmediatePropagation();
        toggleMenu();
        return;
      }
      var link = e.target.closest && e.target.closest("#mobile-nav-panel a");
      if (link) {
        var header = document.querySelector("[data-az-header]");
        var btn = document.querySelector("[data-menu-toggle]");
        if (header) header.classList.remove("az-menu-open");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    },
    true
  );
})();
