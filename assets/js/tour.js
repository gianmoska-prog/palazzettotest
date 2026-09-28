(() => {
  "use strict";

  const teaser = document.querySelector("[data-tour-teaser]");
  const preview = document.querySelector("[data-tour-preview]");
  const openButton = document.querySelector("[data-tour-open]");
  const dialog = document.querySelector("[data-tour-dialog]");
  const fullVideo = document.querySelector("[data-tour-video]");
  const closeButton = document.querySelector("[data-tour-close]");
  const fallback = document.querySelector("[data-tour-fallback]");
  if (!teaser || !preview || !openButton || !dialog || !fullVideo || !closeButton || !fallback) return;

  const previewUrl = "assets/video/palazzetto-preview.mp4";
  const filmUrl = "assets/video/palazzetto-tour.mp4?v=slow09-grade1";
  const mobileFilmUrl = "assets/video/palazzetto-tour-mobile.mp4?v=iphone1";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let teaserVisible = false;
  let fallbackTimer;

  function syncPreview() {
    const allowed = teaserVisible && !document.hidden && !dialog.open &&
      !reducedMotion.matches && !navigator.connection?.saveData;
    if (!allowed) {
      preview.pause();
      return;
    }
    if (!preview.getAttribute("src")) preview.src = previewUrl;
    preview.play().catch(() => {
      // The still poster remains visible when a browser blocks inline playback.
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      teaserVisible = entry.isIntersecting;
      syncPreview();
    }, { threshold: 0.15 });
    observer.observe(teaser);
  }

  openButton.addEventListener("click", () => {
    if (dialog.open) return;
    preview.pause();
    const chosenUrl = window.matchMedia("(max-width: 760px)").matches ? mobileFilmUrl : filmUrl;
    fallback.href = chosenUrl;
    fallback.hidden = true;
    dialog.showModal();
    fullVideo.src = chosenUrl;
    fullVideo.preload = "auto";
    closeButton.focus({ preventScroll: true });
    fullVideo.play().catch(() => {
      // iOS may reject scripted playback; offer its native player instead.
      fallback.hidden = false;
    });
    fallbackTimer = window.setTimeout(() => {
      if (dialog.open && fullVideo.readyState < 2) fallback.hidden = false;
    }, 7000);
  });

  fullVideo.addEventListener("error", () => { fallback.hidden = false; });
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => {
    window.clearTimeout(fallbackTimer);
    fullVideo.pause();
    fullVideo.removeAttribute("src");
    fullVideo.load();
    fallback.hidden = true;
    openButton.focus({ preventScroll: true });
    syncPreview();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) fullVideo.pause();
    syncPreview();
  });
  reducedMotion.addEventListener?.("change", syncPreview);
})();
