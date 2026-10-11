
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".md-sidebar--primary");
  const header = document.querySelector(".md-header__inner");

  if (!sidebar || !header) return;

  if (document.querySelector(".iyg-menu-toggle")) return;

  const button = document.createElement("button");
  button.className = "md-header__button iyg-menu-toggle";
  button.type = "button";
  button.setAttribute("aria-label", "Abrir menú");
  button.setAttribute("aria-expanded", "false");
  button.innerHTML = '<i class="ti ti-menu-2" aria-hidden="true"></i>';

  header.prepend(button);

  const overlay = document.createElement("div");
  overlay.className = "iyg-menu-overlay";
  overlay.setAttribute("aria-hidden", "true");
  document.body.appendChild(overlay);

  function closeMenu() {
    document.body.classList.remove("iyg-nav-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Abrir menú");
  }

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
});

