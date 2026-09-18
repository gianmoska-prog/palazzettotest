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

  const serviceNoticeCopy = {
    it: {
      title: "Colazione e pasti, secondo i tuoi ritmi.",
      body: "La cucina comune è attrezzata con tutto il necessario per preparare in autonomia colazione e pasti; la colazione non viene servita dalla struttura.",
    },
    en: {
      title: "Breakfast and meals, at your own pace.",
      body: "The shared kitchen has everything needed to prepare breakfast and meals independently; breakfast is not served by the property.",
    },
    fr: {
      title: "Petit-déjeuner et repas, à votre rythme.",
      body: "La cuisine commune offre tout le nécessaire pour préparer petit-déjeuner et repas en autonomie ; le petit-déjeuner n'est pas servi par l'établissement.",
    },
    es: {
      title: "Desayuno y comidas, a tu ritmo.",
      body: "La cocina común cuenta con todo lo necesario para preparar el desayuno y las comidas de forma autónoma; el alojamiento no sirve desayuno.",
    },
    de: {
      title: "Frühstück und Mahlzeiten, in Ihrem Rhythmus.",
      body: "Die Gemeinschaftsküche bietet alles für die selbstständige Zubereitung von Frühstück und Mahlzeiten; ein Frühstücksservice wird nicht angeboten.",
    },
  };

  function currentLanguage() {
    return (document.documentElement.lang || "it").slice(0, 2).toLowerCase();
  }

  function currentEntranceCopy() {
    const lang = currentLanguage();
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

  function patchServiceNotice() {
    const notice = document.querySelector("#servizi .service-notice");
    if (!notice) return;
    const copy = serviceNoticeCopy[currentLanguage()] || serviceNoticeCopy.it;
    const title = notice.querySelector("strong");
    const body = notice.querySelector("p");
    if (title) title.textContent = copy.title;
    if (body) body.textContent = copy.body;
  }

  if (!document.querySelector('link[data-entrance-feature-style]')) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "assets/css/entrance-feature.css?v=1";
    stylesheet.dataset.entranceFeatureStyle = "";
    document.head.appendChild(stylesheet);
  }

  if (!document.querySelector('link[data-client-final-style]')) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "assets/css/client-final.css?v=20260918-1";
    stylesheet.dataset.clientFinalStyle = "";
    document.head.appendChild(stylesheet);
  }

  patchEntranceFeature();
  patchServiceNotice();
  window.addEventListener("palazzetto:language", () => {
    patchEntranceFeature();
    patchServiceNotice();
  });

  const core = document.createElement("script");
  core.src = "assets/js/site-core.js?v=palazzetto-9";
  core.async = false;
  document.head.appendChild(core);
})();
