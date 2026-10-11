document.addEventListener("DOMContentLoaded", () => {
  initCustomMenu();
  initArticleToc();
});

// ========================================
// MENÚ LATERAL PERSONALIZADO
// ========================================

function initCustomMenu() {
  const sidebar = document.querySelector(".md-sidebar--primary");
  const header = document.querySelector(".md-header__inner");

  if (!sidebar || !header) return;

  let button = header.querySelector(".iyg-menu-toggle");

  if (!button) {
    button = document.createElement("button");
    button.className = "md-header__button iyg-menu-toggle";
    button.type = "button";
    button.setAttribute("aria-label", "Abrir menú");
    button.setAttribute("aria-expanded", "false");
    button.innerHTML =
      '<i class="ti ti-menu-2" aria-hidden="true"></i>';

    header.prepend(button);
  }

  let overlay = document.querySelector(".iyg-menu-overlay");

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "iyg-menu-overlay";
    overlay.setAttribute("aria-hidden", "true");
    document.body.appendChild(overlay);
  }

  function closeMenu() {
    document.body.classList.remove("iyg-nav-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Abrir menú");
  }

  if (button.dataset.initialized !== "true") {
    button.dataset.initialized = "true";

    button.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("iyg-nav-open");

      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
      );
    });

    overlay.addEventListener("click", closeMenu);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    sidebar.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
  }
}

// ========================================
// ÍNDICE DE CONTENIDOS DESPLEGABLE
// ========================================

function initArticleToc() {
  const content = document.querySelector(".md-content__inner");
  const sidebar = document.querySelector(".md-sidebar--secondary");

  if (!content || !sidebar) return;

  // Localizar el índice nativo de Material.
  const toc = sidebar.querySelector(".md-nav--secondary");

  if (!toc || !toc.querySelector("a")) return;

  // Evitar crear el botón más de una vez.
  let wrapper = content.querySelector(".iyg-toc");

  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.className = "iyg-toc";

    const button = document.createElement("button");
    button.className = "iyg-toc__toggle";
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.innerHTML =
      '<i class="ti ti-list" aria-hidden="true"></i>' +
      "<span>En esta página</span>" +
      '<i class="ti ti-chevron-down iyg-toc__chevron" aria-hidden="true"></i>';

    const panel = document.createElement("div");
    panel.className = "iyg-toc__panel";
    panel.hidden = true;

    // Copiar los enlaces del índice nativo.
    const tocCopy = toc.cloneNode(true);
    tocCopy.removeAttribute("id");
    panel.appendChild(tocCopy);

    wrapper.append(button, panel);
    content.prepend(wrapper);

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
      wrapper.classList.toggle("iyg-toc--open", !isOpen);
    });

    panel.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        closeToc(wrapper);
      }
    });

    document.addEventListener("click", (event) => {
      if (!wrapper.contains(event.target)) {
        closeToc(wrapper);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeToc(wrapper);
      }
    });
  }

  // Ocultar el índice lateral original.
  sidebar.classList.add("iyg-toc-sidebar-hidden");
}

function closeToc(wrapper) {
  const button = wrapper.querySelector(".iyg-toc__toggle");
  const panel = wrapper.querySelector(".iyg-toc__panel");

  if (!button || !panel) return;

  button.setAttribute("aria-expanded", "false");
  panel.hidden = true;
  wrapper.classList.remove("iyg-toc--open");
}

// ========================================
// NAVEGACIÓN INSTANTÁNEA DE MATERIAL
// ========================================

if (typeof document$ !== "undefined") {
  document$.subscribe(() => {
    initCustomMenu();
    initArticleToc();
  });
}