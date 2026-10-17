/**
 * Progressive enhancement for header chrome.
 * Language switch: in-place when React is ready; no scroll jump.
 * Menu toggle works even without hydration.
 */
(function () {
  var KEY = "az-lang";
  var SCROLL_KEY = "az-scroll-y";

  function currentLang() {
    try {
      var s = localStorage.getItem(KEY);
      if (s === "ku" || s === "en") return s;
    } catch (e) {}
    return "en";
  }

  function setDocumentLang(lang) {
    var root = document.documentElement;
    var y = window.scrollY || window.pageYOffset || 0;
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
    // dir change can reset scroll — pin it back
    var restore = function () {
      window.scrollTo(0, y);
    };
    restore();
    requestAnimationFrame(function () {
      restore();
      requestAnimationFrame(restore);
    });
    return lang;
  }

  // Restore scroll after a rare no-hydrate reload fallback
  try {
    var saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved != null) {
      sessionStorage.removeItem(SCROLL_KEY);
      var y0 = parseInt(saved, 10) || 0;
      window.scrollTo(0, y0);
      requestAnimationFrame(function () {
        window.scrollTo(0, y0);
      });
    }
  } catch (e) {}

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
        var next = langBtn.getAttribute("data-set-lang");
        if (next !== "en" && next !== "ku") return;
        if (next === currentLang()) {
          e.preventDefault();
          return;
        }

        // React is ready — let its onClick run (in-place, no reload)
        if (window.__azLangReady) {
          return;
        }

        // No hydration yet: apply dir/storage and reload once, preserving scroll
        e.preventDefault();
        e.stopImmediatePropagation();
        try {
          sessionStorage.setItem(
            SCROLL_KEY,
            String(window.scrollY || window.pageYOffset || 0)
          );
        } catch (err) {}
        setDocumentLang(next);
        location.reload();
        return;
      }

      var menuBtn = e.target.closest && e.target.closest("[data-menu-toggle]");
      if (menuBtn) {
        // Prefer React when hydrated
        if (window.__azLangReady) return;
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
