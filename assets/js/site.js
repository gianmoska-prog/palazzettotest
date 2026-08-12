const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const main = document.getElementById("main");
const pages = Array.from(document.querySelectorAll("[data-page]"));
const pageLinks = Array.from(document.querySelectorAll("[data-page-link]"));
const translated = (text) => window.palazzettoI18n?.translate(text) || text;

function closeMenu({ restoreFocus = false } = {}) {
  document.body.classList.remove("is-locked");
  mobileMenu?.classList.remove("is-open");
  mobileMenu?.setAttribute("aria-hidden", "true");
  if (mobileMenu) mobileMenu.inert = true;
  header?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", translated("Apri menu"));
  if (main) main.inert = false;
  if (restoreFocus) menuToggle?.focus();
}

function openMenu() {
  document.body.classList.add("is-locked");
  mobileMenu?.classList.add("is-open");
  mobileMenu?.setAttribute("aria-hidden", "false");
  if (mobileMenu) mobileMenu.inert = false;
  header?.classList.add("is-open");
  menuToggle?.setAttribute("aria-expanded", "true");
  menuToggle?.setAttribute("aria-label", translated("Chiudi menu"));
  if (main) main.inert = true;
  requestAnimationFrame(() => mobileMenu?.querySelector("a")?.focus());
}

function pageFromHash() {
  const hash = location.hash.replace("#", "");
  if (hash === "richiesta") return "contatti";
  return pages.some((page) => page.dataset.page === hash) ? hash : "home";
}

function showPage(id, push = true, requestedHash = null) {
  const next = pages.find((page) => page.dataset.page === id) || pages[0];
  pages.forEach((page) => {
    const active = page === next;
    page.classList.toggle("is-active", active);
    page.toggleAttribute("hidden", !active);
  });
  pageLinks.forEach((link) => {
    const active = link.dataset.pageLink === next.dataset.page;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  closeMenu();
  const destination = requestedHash || `#${next.dataset.page}`;
  if (push) history.pushState({ page: next.dataset.page }, "", destination);
  if (destination === "#richiesta") {
    requestAnimationFrame(() => document.getElementById("richiesta")?.scrollIntoView());
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
  requestAnimationFrame(() => main?.focus({ preventScroll: true }));
}

pageLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetHash = link.getAttribute("href") || `#${link.dataset.pageLink}`;
    showPage(link.dataset.pageLink, true, targetHash);
  });
});

menuToggle?.addEventListener("click", () => {
  if (menuToggle.getAttribute("aria-expanded") === "true") closeMenu({ restoreFocus: true });
  else openMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu?.classList.contains("is-open")) closeMenu({ restoreFocus: true });
});

function setHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
}

window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("popstate", () => showPage(pageFromHash(), false, location.hash));

const carouselTrack = document.querySelector("[data-carousel-track]");
const carouselSlides = Array.from(document.querySelectorAll(".carousel-slide"));
const carouselPrev = document.querySelector("[data-carousel-prev]");
const carouselNext = document.querySelector("[data-carousel-next]");
const carouselCount = document.querySelector("[data-carousel-count]");
const carouselDots = document.querySelector("[data-carousel-dots]");
let carouselIndex = 0;

function updateCarousel() {
  if (!carouselTrack || !carouselSlides.length) return;
  carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;
  if (carouselCount) carouselCount.textContent = `${String(carouselIndex + 1).padStart(2, "0")} / ${String(carouselSlides.length).padStart(2, "0")}`;
  carouselSlides.forEach((slide, index) => slide.classList.toggle("is-active", index === carouselIndex));
  carouselDots?.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    const active = index === carouselIndex;
    dot.classList.toggle("is-active", active);
    dot.setAttribute("aria-current", active ? "true" : "false");
  });
}

function moveCarousel(direction) {
  carouselIndex = (carouselIndex + direction + carouselSlides.length) % carouselSlides.length;
  updateCarousel();
}

carouselSlides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = "carousel-dot";
  dot.dataset.i18nCarouselDot = String(index + 1);
  dot.setAttribute("aria-label", translated(`Vai all'immagine ${index + 1}`));
  dot.addEventListener("click", () => {
    carouselIndex = index;
    updateCarousel();
  });
  carouselDots?.appendChild(dot);
});
carouselPrev?.addEventListener("click", () => moveCarousel(-1));
carouselNext?.addEventListener("click", () => moveCarousel(1));
document.querySelector("[data-carousel]")?.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") moveCarousel(-1);
  if (event.key === "ArrowRight") moveCarousel(1);
});
updateCarousel();

const mapFrame = document.querySelector("[data-map-frame]");
document.querySelector("[data-map-activate]")?.addEventListener("click", () => {
  if (!mapFrame || mapFrame.querySelector("iframe")) return;
  const iframe = document.createElement("iframe");
  iframe.title = translated("Mappa de Il Palazzetto Farnese");
  iframe.loading = "lazy";
  iframe.referrerPolicy = "no-referrer-when-downgrade";
  iframe.src = mapFrame.dataset.mapSrc;
  iframe.setAttribute("allowfullscreen", "");
  mapFrame.replaceChildren(iframe);
});

const enquiryForm = document.querySelector("[data-enquiry-form]");
const formStatus = document.querySelector("[data-form-status]");
enquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!enquiryForm.reportValidity()) return;
  const data = new FormData(enquiryForm);
  const subject = translated("Richiesta disponibilità - Il Palazzetto Farnese");
  const body = [
    `${translated("Nome")}: ${data.get("name") || ""}`,
    `E-mail: ${data.get("email") || ""}`,
    `${translated("Telefono")}: ${data.get("phone") || ""}`,
    `${translated("Tipo di soggiorno")}: ${translated(data.get("type") || "")}`,
    `${translated("Data o periodo")}: ${data.get("date") || ""}`,
    `${translated("Numero di ospiti")}: ${data.get("guests") || ""}`,
    "",
    `${translated("Messaggio")}: ${data.get("message") || ""}`,
  ].join("\n");
  if (formStatus) formStatus.textContent = translated("Apertura del programma e-mail…");
  location.href = `mailto:ilpalazzettofarnese@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

pages.forEach((page) => page.toggleAttribute("hidden", !page.classList.contains("is-active")));
showPage(pageFromHash(), false, location.hash || "#home");
setHeaderState();

window.addEventListener("palazzetto:language", () => {
  menuToggle?.setAttribute("aria-label", translated(menuToggle.getAttribute("aria-expanded") === "true" ? "Chiudi menu" : "Apri menu"));
  document.querySelectorAll("[data-i18n-carousel-dot]").forEach((dot) => {
    dot.setAttribute("aria-label", translated(`Vai all'immagine ${dot.dataset.i18nCarouselDot}`));
  });
});
