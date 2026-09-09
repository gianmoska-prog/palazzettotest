(() => {
  "use strict";

  const entranceCopy = {
    it: {
      kicker: "L'ingresso",
      title: "Un ingresso raccolto, che introduce alla dimora.",
      body: "La scala conduce agli ambienti della casa attraverso un passaggio intimo e luminoso, tra legno, volte chiare e dettagli essenziali.",
      alt: "Ingresso e scala interna de Il Palazzetto Farnese",
    },
    en: {
      kicker: "The entrance",
      title: "An intimate entrance that introduces the house.",
      body: "The staircase leads into the house through a quiet, light-filled passage of warm wood, pale vaults and restrained details.",
      alt: "Entrance and internal staircase at Il Palazzetto Farnese",
    },
    fr: {
      kicker: "L'entrée",
      title: "Une entrée intime qui introduit la demeure.",
      body: "L'escalier mène aux espaces de la maison par un passage calme et lumineux, entre bois chaleureux, voûtes claires et détails sobres.",
      alt: "Entrée et escalier intérieur de Il Palazzetto Farnese",
    },
    es: {
      kicker: "La entrada",
      title: "Una entrada íntima que introduce a la casa.",
      body: "La escalera conduce a los espacios de la casa a través de un paso tranquilo y luminoso, entre madera cálida, bóvedas claras y detalles discretos.",
      alt: "Entrada y escalera interior de Il Palazzetto Farnese",
    },
    de: {
      kicker: "Der Eingang",
      title: "Ein zurückhaltender Eingang, der in das Haus führt.",
      body: "Die Treppe führt durch einen ruhigen, hellen Übergang mit warmem Holz, hellen Gewölben und zurückhaltenden Details in die Räume des Hauses.",
      alt: "Eingang und Innentreppe von Il Palazzetto Farnese",
    },
  };

  function currentEntranceCopy() {
    const lang = (document.documentElement.lang || "it").slice(0, 2).toLowerCase();
    return entranceCopy[lang] || entranceCopy.it;
  }

  function patchEntranceFeature() {
    const copy = currentEntranceCopy();
    const dimoraHero = document.querySelector("#dimora .page-hero");
    const dimoraHeroPhoto = dimoraHero?.querySelector(".page-hero__photo");
    if (dimoraHero && dimoraHeroPhoto) {
      dimoraHero.classList.add("page-hero--lane");
      dimoraHeroPhoto.src = "assets/img/real/14-view-to-lane.webp";
      dimoraHeroPhoto.alt = "";
      dimoraHeroPhoto.removeAttribute("srcset");
    }

    const feature = document.querySelector("#dimora .agri-feature");
    const featureText = feature?.querySelector(".agri-feature__text");
    const featurePhoto = feature?.querySelector(".palazzetto-still img");
    if (!feature || !featureText || !featurePhoto) return;

    feature.classList.add("agri-feature--entrance");
    featurePhoto.src = "assets/img/real/12-entrance-staircase.webp";
    featurePhoto.alt = copy.alt;
    featurePhoto.width = 1024;
    featurePhoto.height = 1536;
    featurePhoto.loading = "lazy";
    featurePhoto.decoding = "async";

    const kicker = featureText.querySelector(".kicker");
    const title = featureText.querySelector("h3");
    const body = featureText.querySelector("h3 + p");
    if (kicker) kicker.textContent = copy.kicker;
    if (title) title.textContent = copy.title;
    if (body) body.textContent = copy.body;

    featureText.querySelector(".button")?.remove();
  }

  if (!document.querySelector('link[data-entrance-feature-style]')) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "assets/css/entrance-feature.css?v=1";
    stylesheet.dataset.entranceFeatureStyle = "";
    document.head.appendChild(stylesheet);
  }

  patchEntranceFeature();
  window.addEventListener("palazzetto:language", patchEntranceFeature);

  const core = document.createElement("script");
  core.src = "assets/js/site-core.js?v=palazzetto-9";
  core.async = false;
  document.head.appendChild(core);
})();
