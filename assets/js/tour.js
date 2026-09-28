(() => {
  "use strict";

  const teaser = document.querySelector("[data-tour-teaser]");
  const preview = document.querySelector("[data-tour-preview]");
  const openButton = document.querySelector("[data-tour-open]");
  const dialog = document.querySelector("[data-tour-dialog]");
  const fullVideo = document.querySelector("[data-tour-video]");
  const closeButton = document.querySelector("[data-tour-close]");
  if (!teaser || !preview || !openButton || !dialog || !fullVideo || !closeButton) return;

  const previewUrl = "assets/video/palazzetto-preview.mp4";
  const filmUrl = "assets/video/palazzetto-tour.mp4?v=slow09-grade1";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let teaserVisible = false;

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
    fullVideo.src = filmUrl;
    fullVideo.preload = "metadata";
    fullVideo.load();
    dialog.showModal();
    closeButton.focus({ preventScroll: true });
    fullVideo.play().catch(() => {
      // Native controls allow a second tap if autoplay is denied on the device.
    });
  });

  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => {
    fullVideo.pause();
    fullVideo.removeAttribute("src");
    fullVideo.load();
    openButton.focus({ preventScroll: true });
    syncPreview();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) fullVideo.pause();
    syncPreview();
  });
  reducedMotion.addEventListener?.("change", syncPreview);
})();
