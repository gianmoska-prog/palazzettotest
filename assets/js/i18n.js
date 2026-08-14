(() => {
  "use strict";

  const LANGS = {
    it: { code: "IT", html: "it", flag: "flag-it" },
    en: { code: "EN", html: "en", flag: "flag-gb" },
    fr: { code: "FR", html: "fr", flag: "flag-fr" },
    es: { code: "ES", html: "es", flag: "flag-es" },
    de: { code: "DE", html: "de", flag: "flag-de" },
  };

  // Italian source, followed by English, French, Spanish and German.
  const rows = [
    ["Vai al contenuto", "Skip to content", "Aller au contenu", "Ir al contenido", "Zum Inhalt"],
    ["Caprarola · Viterbo", "Caprarola · Viterbo", "Caprarola · Viterbo", "Caprarola · Viterbo", "Caprarola · Viterbo"],
    ["La dimora", "The house", "La demeure", "La casa", "Das Haus"],
    ["Le camere", "Rooms", "Les chambres", "Las habitaciones", "Zimmer"],
    ["Servizi", "Amenities", "Services", "Servicios", "Ausstattung"],
    ["Contatti", "Contact", "Contact", "Contacto", "Kontakt"],
    ["Richiedi disponibilità", "Check availability", "Demander les disponibilités", "Consultar disponibilidad", "Verfügbarkeit anfragen"],
    ["Chiama ora", "Call now", "Appeler", "Llamar ahora", "Jetzt anrufen"],
    ["Seleziona lingua", "Select language", "Choisir la langue", "Seleccionar idioma", "Sprache wählen"],
    ["Navigazione principale", "Main navigation", "Navigation principale", "Navegación principal", "Hauptnavigation"],
    ["Navigazione mobile", "Mobile navigation", "Navigation mobile", "Navegación móvil", "Mobile Navigation"],
    ["Apri menu", "Open menu", "Ouvrir le menu", "Abrir menú", "Menü öffnen"],
    ["Chiudi menu", "Close menu", "Fermer le menu", "Cerrar menú", "Menü schließen"],

    ["Due camere nel cuore di Caprarola, a circa 50 metri da Palazzo Farnese.", "Two rooms in the heart of Caprarola, about 50 metres from Palazzo Farnese.", "Deux chambres au cœur de Caprarola, à environ 50 mètres du Palazzo Farnese.", "Dos habitaciones en el corazón de Caprarola, a unos 50 metros del Palazzo Farnese.", "Zwei Zimmer im Herzen von Caprarola, rund 50 Meter vom Palazzo Farnese entfernt."],
    ["Scopri la dimora", "Discover the house", "Découvrir la demeure", "Descubrir la casa", "Das Haus entdecken"],
    ["Guest house · Caprarola · Tuscia", "Guest house · Caprarola · Tuscia", "Maison d'hôtes · Caprarola · Tuscia", "Casa de huéspedes · Caprarola · Tuscia", "Gästehaus · Caprarola · Tuscia"],
    ["Il Palazzetto Farnese · Guest house", "Il Palazzetto Farnese · Guest house", "Il Palazzetto Farnese · Maison d'hôtes", "Il Palazzetto Farnese · Casa de huéspedes", "Il Palazzetto Farnese · Gästehaus"],
    ["Un palazzetto raccolto, nel cuore della storia.", "An intimate townhouse at the heart of history.", "Une demeure intime au cœur de l'histoire.", "Una casa íntima en el corazón de la historia.", "Ein intimes Stadthaus im Herzen der Geschichte."],
    ["Una casa autentica nel centro storico di Caprarola, pensata per soggiorni semplici, confortevoli e indipendenti.", "An authentic home in Caprarola's historic centre, designed for simple, comfortable and independent stays.", "Une maison authentique dans le centre historique de Caprarola, pensée pour des séjours simples, confortables et indépendants.", "Una casa auténtica en el casco histórico de Caprarola, pensada para estancias sencillas, cómodas e independientes.", "Ein authentisches Haus in Caprarolas Altstadt, für unkomplizierte, komfortable und unabhängige Aufenthalte."],
    ["Sentirsi a casa, a pochi passi dal Palazzo.", "Feel at home, steps from the Palazzo.", "Comme chez soi, à quelques pas du Palazzo.", "Sentirse en casa, a pocos pasos del Palazzo.", "Wie zu Hause, nur wenige Schritte vom Palazzo entfernt."],
    ["Il nome lega la dimora al simbolo storico e culturale di Caprarola. Gli ambienti riprendono questa identità con fotografie, dettagli e richiami artistici dedicati a Palazzo Farnese.", "The name links the house to Caprarola's historic and cultural landmark. Its interiors echo this identity through photographs, details and artistic references to Palazzo Farnese.", "Le nom relie la demeure au symbole historique et culturel de Caprarola. Les intérieurs prolongent cette identité par des photographies, des détails et des références artistiques au Palazzo Farnese.", "El nombre vincula la casa con el símbolo histórico y cultural de Caprarola. Los interiores reflejan esta identidad con fotografías, detalles y referencias artísticas al Palazzo Farnese.", "Der Name verbindet das Haus mit Caprarolas historischem und kulturellem Wahrzeichen. Fotografien, Details und künstlerische Bezüge zum Palazzo Farnese greifen diese Identität auf."],
    ["Posizione", "Location", "Emplacement", "Ubicación", "Lage"],
    ["Circa 50 metri.", "About 50 metres.", "Environ 50 mètres.", "Unos 50 metros.", "Rund 50 Meter."],
    ["Palazzo Farnese e i suoi giardini si raggiungono in pochi minuti a piedi dalla porta della struttura.", "Palazzo Farnese and its gardens are a few minutes' walk from the front door.", "Le Palazzo Farnese et ses jardins sont à quelques minutes à pied de la maison.", "El Palazzo Farnese y sus jardines están a pocos minutos a pie.", "Der Palazzo Farnese und seine Gärten sind in wenigen Minuten zu Fuß erreichbar."],
    ["Atmosfera", "Atmosphere", "Atmosphère", "Ambiente", "Atmosphäre"],
    ["Intima e familiare.", "Intimate and welcoming.", "Intime et chaleureuse.", "Íntima y acogedora.", "Intim und familiär."],
    ["Una dimora curata e indipendente, dove vivere il borgo con libertà senza rinunciare all'assistenza dell'host.", "A thoughtfully kept, independent house where you can enjoy the village freely, with your host on hand when needed.", "Une demeure soignée et indépendante pour vivre le village en toute liberté, avec l'aide de votre hôte si nécessaire.", "Una casa cuidada e independiente para disfrutar del pueblo con libertad y contar con la ayuda del anfitrión cuando sea necesario.", "Ein gepflegtes, unabhängiges Haus, in dem Sie den Ort frei erleben und bei Bedarf auf Ihren Gastgeber zählen können."],
    ["Territorio", "Surroundings", "Territoire", "Entorno", "Umgebung"],
    ["Caprarola e la Tuscia.", "Caprarola and Tuscia.", "Caprarola et la Tuscia.", "Caprarola y la Tuscia.", "Caprarola und Tuscia."],
    ["Un punto di partenza naturale per il Lago di Vico, i borghi, i paesaggi e le testimonianze storiche della Tuscia.", "A natural base for Lake Vico, Tuscia's villages, landscapes and historic heritage.", "Un point de départ naturel vers le lac de Vico, les villages, les paysages et le patrimoine historique de la Tuscia.", "Un punto de partida ideal para el lago de Vico, los pueblos, paisajes y testimonios históricos de la Tuscia.", "Ein idealer Ausgangspunkt für den Vico-See, die Orte, Landschaften und historischen Zeugnisse der Tuscia."],
    ["L'ingresso", "The entrance", "L'entrée", "La entrada", "Der Eingang"],
    ["Il borgo comincia fuori dalla porta.", "The village begins right outside the door.", "Le village commence au pas de la porte.", "El pueblo empieza justo al salir.", "Der Ort beginnt direkt vor der Tür."],
    ["Via Filippo Nicolai, Santa Teresa, le ex Scuderie Farnese, bar, ristoranti e minimarket sono tutti raggiungibili a piedi.", "Via Filippo Nicolai, Santa Teresa, the former Farnese Stables, cafés, restaurants and a minimarket are all within walking distance.", "Via Filippo Nicolai, Santa Teresa, les anciennes Écuries Farnèse, les cafés, restaurants et la supérette sont tous accessibles à pied.", "Via Filippo Nicolai, Santa Teresa, las antiguas Caballerizas Farnesio, bares, restaurantes y el supermercado están a poca distancia a pie.", "Via Filippo Nicolai, Santa Teresa, die ehemaligen Farnese-Ställe, Cafés, Restaurants und ein Minimarkt sind zu Fuß erreichbar."],
    ["Apri la mappa", "Open map", "Ouvrir la carte", "Abrir mapa", "Karte öffnen"],
    ["Prossimamente", "Coming soon", "Prochainement", "Próximamente", "Demnächst"],
    ["Video drone", "Drone video", "Vidéo par drone", "Vídeo con dron", "Drohnenvideo"],
    ["Dal Palazzetto al Palazzo Farnese.", "From the Palazzetto to Palazzo Farnese.", "Du Palazzetto au Palazzo Farnese.", "Del Palazzetto al Palazzo Farnese.", "Vom Palazzetto zum Palazzo Farnese."],
    ["È in preparazione una ripresa aerea professionale che partirà dalla struttura e allargherà lo sguardo verso Palazzo Farnese e il borgo di Caprarola.", "A professional aerial film is in preparation, beginning at the house and opening out towards Palazzo Farnese and Caprarola.", "Une prise de vue aérienne professionnelle est en préparation : elle partira de la demeure et s'ouvrira sur le Palazzo Farnese et Caprarola.", "Se está preparando una filmación aérea profesional que partirá de la casa y se abrirá hacia el Palazzo Farnese y Caprarola.", "Eine professionelle Luftaufnahme ist in Vorbereitung; sie beginnt am Haus und öffnet den Blick auf den Palazzo Farnese und Caprarola."],
    ["Galleria", "Gallery", "Galerie", "Galería", "Galerie"],
    ["La casa, il borgo e Palazzo Farnese.", "The house, the village and Palazzo Farnese.", "La demeure, le village et le Palazzo Farnese.", "La casa, el pueblo y el Palazzo Farnese.", "Das Haus, der Ort und der Palazzo Farnese."],
    ["Una prima selezione elaborata a partire dagli ambienti reali della dimora, in attesa del servizio fotografico definitivo.", "An initial selection developed from the house's real interiors, pending the final photo shoot.", "Une première sélection créée à partir des espaces réels de la demeure, en attendant le reportage photographique définitif.", "Una primera selección elaborada a partir de los espacios reales de la casa, a la espera del reportaje fotográfico definitivo.", "Eine erste Auswahl auf Grundlage der realen Räume, bis das endgültige Fotoshooting vorliegt."],
    ["Scopri le camere", "Discover the rooms", "Découvrir les chambres", "Descubrir las habitaciones", "Zimmer entdecken"],

    ["Due camere indipendenti, due prospettive sul borgo.", "Two independent rooms, two views of the village.", "Deux chambres indépendantes, deux regards sur le village.", "Dos habitaciones independientes, dos perspectivas del pueblo.", "Zwei unabhängige Zimmer, zwei Perspektiven auf den Ort."],
    ["Bagno privato, comfort essenziali e nomi ispirati agli ambienti di Palazzo Farnese.", "Private bathrooms, essential comforts and names inspired by the rooms of Palazzo Farnese.", "Salle de bains privée, confort essentiel et noms inspirés des salles du Palazzo Farnese.", "Baño privado, comodidades esenciales y nombres inspirados en las salas del Palazzo Farnese.", "Eigenes Bad, wesentlicher Komfort und Namen, die von den Räumen des Palazzo Farnese inspiriert sind."],
    ["Ospitalità", "Hospitality", "Hospitalité", "Hospitalidad", "Gastlichkeit"],
    ["Spazi concreti, soggiorni flessibili.", "Practical spaces, flexible stays.", "Des espaces pratiques, des séjours flexibles.", "Espacios prácticos, estancias flexibles.", "Praktische Räume, flexible Aufenthalte."],
    ["Le due camere possono accogliere coppie, famiglie e piccoli gruppi. Entrambe hanno bagno privato, Wi-Fi gratuito, Smart TV, asciugacapelli e ventilatori.", "The two rooms welcome couples, families and small groups. Both have a private bathroom, free Wi-Fi, Smart TV, hairdryer and fans.", "Les deux chambres accueillent couples, familles et petits groupes. Toutes deux disposent d'une salle de bains privée, du Wi-Fi gratuit, d'une Smart TV, d'un sèche-cheveux et de ventilateurs.", "Las dos habitaciones alojan a parejas, familias y pequeños grupos. Ambas cuentan con baño privado, Wi-Fi gratuito, Smart TV, secador y ventiladores.", "Die beiden Zimmer eignen sich für Paare, Familien und kleine Gruppen. Beide bieten ein eigenes Bad, kostenloses WLAN, Smart-TV, Haartrockner und Ventilatoren."],
    ["01 · Stanza del Mappamondo", "01 · Map Room", "01 · Chambre du Mappamondo", "01 · Habitación del Mappamondo", "01 · Mappamondo-Zimmer"],
    ["Raccolta, versatile, fino a tre ospiti.", "Intimate and versatile, for up to three guests.", "Intime et polyvalente, jusqu'à trois personnes.", "Íntima y versátil, para hasta tres huéspedes.", "Intim und vielseitig, für bis zu drei Gäste."],
    ["Una camera matrimoniale di circa 14 m², configurabile anche come tripla con l'aggiunta di un letto singolo. Bagno privato e culla per neonati disponibile su richiesta.", "A double room of about 14 m², also configurable as a triple with an added single bed. Private bathroom and cot available on request.", "Une chambre double d'environ 14 m², également aménageable en triple avec un lit simple. Salle de bains privée et lit bébé sur demande.", "Una habitación doble de unos 14 m², también configurable como triple añadiendo una cama individual. Baño privado y cuna bajo petición.", "Ein Doppelzimmer mit ca. 14 m², durch ein Einzelbett auch als Dreibettzimmer nutzbar. Eigenes Bad und Babybett auf Anfrage."],
    ["Superficie", "Size", "Surface", "Superficie", "Größe"],
    ["Ospiti", "Guests", "Hôtes", "Huéspedes", "Gäste"],
    ["Massimo 3", "Up to 3", "Maximum 3", "Máximo 3", "Maximal 3"],
    ["Bagno", "Bathroom", "Salle de bains", "Baño", "Bad"],
    ["Privato", "Private", "Privée", "Privado", "Privat"],
    ["Wi-Fi gratuito", "Free Wi-Fi", "Wi-Fi gratuit", "Wi-Fi gratuito", "Kostenloses WLAN"],
    ["Asciugacapelli", "Hairdryer", "Sèche-cheveux", "Secador", "Haartrockner"],
    ["Ventilatori", "Fans", "Ventilateurs", "Ventiladores", "Ventilatoren"],
    ["Biancheria da letto", "Bed linen", "Linge de lit", "Ropa de cama", "Bettwäsche"],
    ["Biancheria da bagno", "Bathroom linen", "Linge de toilette", "Ropa de baño", "Handtücher"],
    ["Culla su richiesta", "Cot on request", "Lit bébé sur demande", "Cuna bajo petición", "Babybett auf Anfrage"],
    ["02 · Stanza del Belvedere Farnese", "02 · Belvedere Farnese Room", "02 · Chambre du Belvedere Farnese", "02 · Habitación del Belvedere Farnese", "02 · Belvedere-Farnese-Zimmer"],
    ["Più ampia, da uno a quattro ospiti.", "More spacious, for one to four guests.", "Plus spacieuse, pour une à quatre personnes.", "Más amplia, para uno a cuatro huéspedes.", "Geräumiger, für ein bis vier Gäste."],
    ["Circa 20 m² pensati per coppie, famiglie e piccoli gruppi, con bagno privato e configurazione flessibile. Culla disponibile su richiesta e previa conferma.", "About 20 m² designed for couples, families and small groups, with a private bathroom and flexible layout. Cot available on request and subject to confirmation.", "Environ 20 m² pour couples, familles et petits groupes, avec salle de bains privée et configuration flexible. Lit bébé sur demande et sous réserve de confirmation.", "Unos 20 m² para parejas, familias y pequeños grupos, con baño privado y configuración flexible. Cuna bajo petición y confirmación.", "Rund 20 m² für Paare, Familien und kleine Gruppen, mit eigenem Bad und flexibler Aufteilung. Babybett auf Anfrage und nach Bestätigung."],
    ["Da 1 a 4", "1 to 4", "De 1 à 4", "De 1 a 4", "1 bis 4"],
    ["20 m² circa", "About 20 m²", "Environ 20 m²", "Unos 20 m²", "Ca. 20 m²"],
    ["Soggiorni prolungati", "Longer stays", "Séjours prolongés", "Estancias prolongadas", "Längere Aufenthalte"],
    ["Più tempo, la stessa cura.", "More time, the same care.", "Plus longtemps, avec la même attention.", "Más tiempo, el mismo cuidado.", "Mehr Zeit, dieselbe Sorgfalt."],
    ["Per le permanenze più lunghe è prevista la sostituzione della biancheria da letto e da bagno ogni tre giorni.", "For longer stays, bed linen and towels are changed every three days.", "Pour les séjours prolongés, le linge de lit et de toilette est changé tous les trois jours.", "Para estancias prolongadas, la ropa de cama y baño se cambia cada tres días.", "Bei längeren Aufenthalten werden Bettwäsche und Handtücher alle drei Tage gewechselt."],
    ["Nota sulle immagini", "Image note", "Note sur les images", "Nota sobre las imágenes", "Hinweis zu den Bildern"],
    ["Le visualizzazioni attuali sono elaborate a partire dagli ambienti reali e saranno sostituite dalle fotografie definitive della struttura.", "The current visuals are based on the real interiors and will be replaced by final photographs of the property.", "Les visuels actuels sont élaborés à partir des espaces réels et seront remplacés par les photographies définitives.", "Las imágenes actuales se basan en los espacios reales y serán sustituidas por las fotografías definitivas.", "Die aktuellen Visualisierungen basieren auf den realen Räumen und werden durch endgültige Fotos ersetzt."],
    ["Chiama", "Call", "Appeler", "Llamar", "Anrufen"],

    ["La libertà di una casa, l'attenzione di un host.", "The freedom of a home, the care of a host.", "La liberté d'une maison, l'attention d'un hôte.", "La libertad de una casa, la atención de un anfitrión.", "Die Freiheit eines Hauses, die Aufmerksamkeit eines Gastgebers."],
    ["Una cucina comune attrezzata, check-in autonomo e tutto l'essenziale per vivere il soggiorno con semplicità.", "A fully equipped shared kitchen, self check-in and everything essential for an easy stay.", "Une cuisine commune équipée, une arrivée autonome et tout l'essentiel pour un séjour en toute simplicité.", "Una cocina común equipada, llegada autónoma y todo lo esencial para una estancia sencilla.", "Eine ausgestattete Gemeinschaftsküche, selbstständiger Check-in und alles Wesentliche für einen unkomplizierten Aufenthalt."],
    ["Area comune", "Shared area", "Espace commun", "Zona común", "Gemeinschaftsbereich"],
    ["I tuoi pasti, secondo il tuo ritmo.", "Your meals, at your own pace.", "Vos repas, à votre rythme.", "Tus comidas, a tu ritmo.", "Ihre Mahlzeiten, in Ihrem Rhythmus."],
    ["Lo spazio condiviso è completamente attrezzato per preparare i pasti in autonomia: un vantaggio concreto per una notte o per soggiorni di più giorni.", "The shared space is fully equipped for preparing your own meals—a practical benefit for one night or a longer stay.", "L'espace commun est entièrement équipé pour préparer vos repas en autonomie, un véritable atout pour une nuit comme pour plusieurs jours.", "El espacio común está totalmente equipado para preparar comidas de forma autónoma, una ventaja práctica para una noche o varios días.", "Der Gemeinschaftsbereich ist komplett zur Selbstverpflegung ausgestattet – praktisch für eine Nacht wie für mehrere Tage."],
    ["gratuito in struttura.", "free throughout the property.", "gratuit dans toute la maison.", "gratuito en el alojamiento.", "kostenlos im gesamten Haus."],
    ["per il check-in autonomo.", "for self check-in.", "pour l'arrivée autonome.", "para la llegada autónoma.", "für den selbstständigen Check-in."],
    ["Cucina", "Kitchen", "Cuisine", "Cocina", "Küche"],
    ["comune e completamente attrezzata.", "shared and fully equipped.", "commune et entièrement équipée.", "común y totalmente equipada.", "gemeinschaftlich und voll ausgestattet."],
    ["disponibile durante il soggiorno.", "available during your stay.", "disponible pendant votre séjour.", "disponible durante la estancia.", "während Ihres Aufenthalts erreichbar."],
    ["Preparare", "Prepare", "Préparer", "Preparar", "Zubereiten"],
    ["Piano cottura, padelle, stoviglie, piatti, bicchieri e forno elettrico.", "Hob, pans, cookware, plates, glasses and electric oven.", "Plaque de cuisson, poêles, ustensiles, assiettes, verres et four électrique.", "Placa, sartenes, utensilios, platos, vasos y horno eléctrico.", "Kochfeld, Pfannen, Geschirr, Teller, Gläser und Elektrobackofen."],
    ["Conservare e servire", "Store and serve", "Conserver et servir", "Conservar y servir", "Aufbewahren und servieren"],
    ["Frigorifero, congelatore, tostapane, macchina per il caffè e bollitore.", "Fridge, freezer, toaster, coffee machine and kettle.", "Réfrigérateur, congélateur, grille-pain, machine à café et bouilloire.", "Frigorífico, congelador, tostadora, cafetera y hervidor.", "Kühlschrank, Gefrierschrank, Toaster, Kaffeemaschine und Wasserkocher."],
    ["Arrivare con libertà", "Arrive freely", "Arriver librement", "Llegar con libertad", "Flexibel ankommen"],
    ["Check-in autonomo tramite key box dopo l'invio dei documenti richiesti.", "Self check-in via key box after submitting the required documents.", "Arrivée autonome par boîte à clés après l'envoi des documents requis.", "Llegada autónoma mediante caja de llaves tras enviar los documentos requeridos.", "Selbstständiger Check-in per Schlüsselbox nach Übermittlung der erforderlichen Dokumente."],
    ["Chiedere assistenza", "Ask for assistance", "Demander de l'aide", "Pedir ayuda", "Hilfe anfragen"],
    ["L'host rimane disponibile durante il soggiorno per informazioni, assistenza e necessità degli ospiti, senza presenza fisica continuativa.", "Your host remains available throughout the stay for information, assistance and guests' needs, without being continuously on site.", "Votre hôte reste disponible pendant le séjour pour toute information, assistance ou besoin, sans présence physique permanente.", "El anfitrión permanece disponible durante la estancia para información, ayuda y necesidades de los huéspedes, sin presencia física continua.", "Ihr Gastgeber ist während des Aufenthalts für Informationen, Hilfe und Anliegen erreichbar, ohne ständig vor Ort zu sein."],
    ["Una cucina, non un servizio di colazione.", "A kitchen, not a breakfast service.", "Une cuisine, pas un service de petit-déjeuner.", "Una cocina, no un servicio de desayuno.", "Eine Küche, kein Frühstücksservice."],
    ["L'area comune mette a disposizione degli ospiti tutto il necessario per preparare autonomamente colazione e pasti. La struttura non offre colazione servita.", "The shared area provides everything guests need to prepare their own breakfast and meals. The property does not serve breakfast.", "L'espace commun offre tout le nécessaire pour préparer soi-même petit-déjeuner et repas. La maison ne propose pas de petit-déjeuner servi.", "La zona común ofrece todo lo necesario para preparar el desayuno y las comidas. El alojamiento no sirve desayuno.", "Im Gemeinschaftsbereich finden Gäste alles, um Frühstück und Mahlzeiten selbst zuzubereiten. Ein serviertes Frühstück wird nicht angeboten."],
    ["Uno spazio condiviso, più libertà.", "A shared space, more freedom.", "Un espace partagé, plus de liberté.", "Un espacio compartido, más libertad.", "Ein gemeinsamer Raum, mehr Freiheit."],
    ["Organizza le tue giornate senza orari imposti, nel cuore del centro storico.", "Plan your days without fixed schedules, in the heart of the historic centre.", "Organisez vos journées sans horaires imposés, au cœur du centre historique.", "Organiza tus días sin horarios impuestos, en pleno casco histórico.", "Gestalten Sie Ihre Tage ohne feste Zeiten, mitten in der Altstadt."],
    ["Domande frequenti", "Frequently asked questions", "Questions fréquentes", "Preguntas frecuentes", "Häufige Fragen"],
    ["Le informazioni utili prima di arrivare.", "Useful information before you arrive.", "Les informations utiles avant votre arrivée.", "Información útil antes de llegar.", "Wissenswertes vor Ihrer Anreise."],
    ["Come funziona il check-in?", "How does check-in work?", "Comment se déroule l'arrivée ?", "¿Cómo funciona la llegada?", "Wie funktioniert der Check-in?"],
    ["L'accesso avviene in autonomia tramite key box, dopo l'invio dei documenti necessari secondo la normativa vigente. Le istruzioni vengono comunicate prima dell'arrivo.", "Access is self-service via a key box after the documents required by law have been submitted. Instructions are provided before arrival.", "L'accès est autonome via une boîte à clés, après l'envoi des documents requis par la réglementation. Les instructions sont communiquées avant l'arrivée.", "El acceso es autónomo mediante caja de llaves tras enviar los documentos exigidos por la normativa. Las instrucciones se facilitan antes de la llegada.", "Der Zugang erfolgt selbstständig per Schlüsselbox, nachdem die gesetzlich erforderlichen Dokumente übermittelt wurden. Die Anleitung erhalten Sie vor der Anreise."],
    ["Dove posso parcheggiare?", "Where can I park?", "Où puis-je me garer ?", "¿Dónde puedo aparcar?", "Wo kann ich parken?"],
    ["È disponibile un parcheggio pubblico gratuito a circa 150 metri dalla struttura.", "Free public parking is available about 150 metres from the property.", "Un parking public gratuit se trouve à environ 150 mètres de la maison.", "Hay aparcamiento público gratuito a unos 150 metros del alojamiento.", "Ein kostenloser öffentlicher Parkplatz befindet sich rund 150 Meter vom Haus entfernt."],
    ["La cucina è privata?", "Is the kitchen private?", "La cuisine est-elle privée ?", "¿La cocina es privada?", "Ist die Küche privat?"],
    ["La cucina è un'area comune condivisa tra gli ospiti delle due camere ed è completamente attrezzata.", "The fully equipped kitchen is a shared area for guests in both rooms.", "La cuisine entièrement équipée est un espace commun partagé par les occupants des deux chambres.", "La cocina totalmente equipada es una zona común compartida por los huéspedes de ambas habitaciones.", "Die voll ausgestattete Küche ist ein Gemeinschaftsbereich für die Gäste beider Zimmer."],
    ["È disponibile una culla?", "Is a cot available?", "Un lit bébé est-il disponible ?", "¿Hay cuna disponible?", "Ist ein Babybett verfügbar?"],
    ["Sì, una culla è disponibile su richiesta e previa conferma della struttura.", "Yes, a cot is available on request and subject to confirmation.", "Oui, un lit bébé est disponible sur demande et sous réserve de confirmation.", "Sí, hay cuna bajo petición y confirmación.", "Ja, ein Babybett ist auf Anfrage und nach Bestätigung verfügbar."],

    ["Contattaci", "Contact us", "Nous contacter", "Contáctanos", "Kontaktieren Sie uns"],
    ["Contatti, indirizzo e indicazioni in un solo punto.", "Contact details, address and directions in one place.", "Coordonnées, adresse et itinéraire au même endroit.", "Contacto, dirección e indicaciones en un solo lugar.", "Kontakt, Adresse und Anfahrt auf einen Blick."],
    ["Scrivi, chiama o raggiungi la struttura nel centro storico di Caprarola.", "Write, call or visit the property in Caprarola's historic centre.", "Écrivez, appelez ou rejoignez la maison dans le centre historique de Caprarola.", "Escribe, llama o visita el alojamiento en el casco histórico de Caprarola.", "Schreiben Sie uns, rufen Sie an oder besuchen Sie das Haus in Caprarolas Altstadt."],
    ["Contatti e dove siamo", "Contact and location", "Contact et adresse", "Contacto y ubicación", "Kontakt und Lage"],
    ["Scegli il canale più comodo.", "Choose the easiest way to reach us.", "Choisissez le moyen le plus pratique.", "Elige el medio más cómodo.", "Wählen Sie den bequemsten Kontaktweg."],
    ["Telefono, email, social e indirizzo sono raccolti qui per rendere più semplice ogni richiesta di disponibilità o informazione.", "Phone, email, social profiles and address are gathered here to make availability and information enquiries easy.", "Téléphone, e-mail, réseaux sociaux et adresse sont réunis ici pour simplifier toute demande de disponibilité ou d'information.", "Teléfono, email, redes sociales y dirección reunidos para facilitar cualquier consulta.", "Telefon, E-Mail, Social Media und Adresse finden Sie hier für einfache Verfügbarkeits- und Informationsanfragen."],
    ["Telefono / WhatsApp", "Phone / WhatsApp", "Téléphone / WhatsApp", "Teléfono / WhatsApp", "Telefon / WhatsApp"],
    ["Pagina ufficiale", "Official page", "Page officielle", "Página oficial", "Offizielle Seite"],
    ["Recapiti diretti", "Direct contact", "Contact direct", "Contacto directo", "Direkter Kontakt"],
    ["Informazioni essenziali.", "Essential information.", "Informations essentielles.", "Información esencial.", "Wichtige Informationen."],
    ["Indirizzo", "Address", "Adresse", "Dirección", "Adresse"],
    ["Telefono", "Phone", "Téléphone", "Teléfono", "Telefon"],
    ["Disponibilità", "Availability", "Disponibilités", "Disponibilidad", "Verfügbarkeit"],
    ["Per coppie, famiglie e piccoli gruppi, previa conferma della struttura.", "For couples, families and small groups, subject to confirmation.", "Pour couples, familles et petits groupes, sous réserve de confirmation.", "Para parejas, familias y pequeños grupos, previa confirmación.", "Für Paare, Familien und kleine Gruppen, nach Bestätigung."],
    ["Scrivi ora", "Write now", "Écrire maintenant", "Escribir ahora", "Jetzt schreiben"],
    ["Visualizza la mappa", "View map", "Afficher la carte", "Ver mapa", "Karte anzeigen"],
    ["La mappa è fornita da Google. Caricandola, il browser si collegherà ai servizi Google secondo la relativa informativa.", "The map is provided by Google. When loaded, your browser connects to Google services under Google's policy.", "La carte est fournie par Google. En la chargeant, votre navigateur se connectera aux services Google selon leur politique.", "El mapa lo proporciona Google. Al cargarlo, el navegador se conectará a los servicios de Google según su política.", "Die Karte wird von Google bereitgestellt. Beim Laden verbindet sich Ihr Browser gemäß den Google-Bestimmungen mit Google-Diensten."],
    ["Carica Google Maps", "Load Google Maps", "Charger Google Maps", "Cargar Google Maps", "Google Maps laden"],
    ["Come arrivare", "Getting here", "Comment venir", "Cómo llegar", "Anreise"],
    ["Caprarola, nel cuore della Tuscia.", "Caprarola, in the heart of Tuscia.", "Caprarola, au cœur de la Tuscia.", "Caprarola, en el corazón de la Tuscia.", "Caprarola, im Herzen der Tuscia."],
    ["La struttura si trova in Via S. Egidio 2, nel centro storico e a pochi passi da Palazzo Farnese.", "The property is at Via S. Egidio 2, in the historic centre and steps from Palazzo Farnese.", "La maison se trouve Via S. Egidio 2, dans le centre historique et à quelques pas du Palazzo Farnese.", "El alojamiento está en Via S. Egidio 2, en el casco histórico y a pocos pasos del Palazzo Farnese.", "Das Haus liegt in der Via S. Egidio 2 in der Altstadt, nur wenige Schritte vom Palazzo Farnese entfernt."],
    ["Apri mappa", "Open map", "Ouvrir la carte", "Abrir mapa", "Karte öffnen"],
    ["Recensioni", "Reviews", "Avis", "Reseñas", "Bewertungen"],
    ["Le esperienze degli ospiti, presto qui.", "Guest experiences, coming soon.", "Les expériences de nos hôtes, bientôt ici.", "Experiencias de huéspedes, próximamente.", "Gästeerfahrungen, demnächst hier."],
    ["Collegamenti in preparazione", "Links in preparation", "Liens en préparation", "Enlaces en preparación", "Links in Vorbereitung"],
    ["I profili ufficiali Google e Airbnb e le relative recensioni verranno collegati non appena saranno disponibili.", "Official Google and Airbnb profiles and their reviews will be linked as soon as they are available.", "Les profils officiels Google et Airbnb et leurs avis seront ajoutés dès qu'ils seront disponibles.", "Los perfiles oficiales de Google y Airbnb y sus reseñas se enlazarán en cuanto estén disponibles.", "Die offiziellen Google- und Airbnb-Profile samt Bewertungen werden verlinkt, sobald sie verfügbar sind."],
    ["Informazioni ufficiali", "Official information", "Informations officielles", "Información oficial", "Offizielle Angaben"],
    ["Dati identificativi della struttura.", "Property identification details.", "Données d'identification de l'établissement.", "Datos identificativos del alojamiento.", "Identifikationsdaten der Unterkunft."],
    ["I valori saranno pubblicati esclusivamente dopo la comunicazione e verifica dei dati ufficiali.", "Details will be published only after the official information has been supplied and verified.", "Les données ne seront publiées qu'après communication et vérification des informations officielles.", "Los datos se publicarán solo después de recibir y verificar la información oficial.", "Die Angaben werden erst nach Übermittlung und Prüfung der offiziellen Daten veröffentlicht."],
    ["In attesa del codice ufficiale", "Awaiting official code", "Code officiel en attente", "A la espera del código oficial", "Offizieller Code steht aus"],
    ["In attesa del codice regionale", "Awaiting regional code", "Code régional en attente", "A la espera del código regional", "Regionaler Code steht aus"],
    ["Estremi in attesa di comunicazione", "Details awaiting confirmation", "Références en attente de communication", "Datos pendientes de comunicación", "Angaben stehen noch aus"],
    ["Tipologia e classificazione", "Type and classification", "Type et classement", "Tipo y clasificación", "Art und Klassifizierung"],
    ["In attesa della denominazione ufficiale", "Awaiting official designation", "Dénomination officielle en attente", "A la espera de la denominación oficial", "Offizielle Bezeichnung steht aus"],

    ["Raccontaci il tuo soggiorno.", "Tell us about your stay.", "Parlez-nous de votre séjour.", "Cuéntanos tu estancia.", "Erzählen Sie uns von Ihrem Aufenthalt."],
    ["Compila i dettagli essenziali: prepareremo un messaggio ordinato da inviare a Il Palazzetto Farnese tramite il programma e-mail del dispositivo.", "Enter the essential details and we will prepare a clear message to send to Il Palazzetto Farnese using your device's email app.", "Renseignez les informations essentielles : nous préparerons un message clair à envoyer à Il Palazzetto Farnese depuis l'application e-mail de votre appareil.", "Completa los datos esenciales y prepararemos un mensaje claro para enviar a Il Palazzetto Farnese desde la aplicación de correo del dispositivo.", "Geben Sie die wichtigsten Details ein; wir erstellen eine übersichtliche Nachricht, die Sie über das E-Mail-Programm Ihres Geräts senden können."],
    ["Tipo di soggiorno", "Type of stay", "Type de séjour", "Tipo de estancia", "Art des Aufenthalts"],
    ["Seleziona", "Select", "Sélectionner", "Seleccionar", "Auswählen"],
    ["Coppia", "Couple", "Couple", "Pareja", "Paar"],
    ["Famiglia", "Family", "Famille", "Familia", "Familie"],
    ["Piccolo gruppo", "Small group", "Petit groupe", "Grupo pequeño", "Kleine Gruppe"],
    ["Altre informazioni", "Other information", "Autres informations", "Otra información", "Weitere Informationen"],
    ["Data o periodo preferito", "Preferred date or period", "Date ou période souhaitée", "Fecha o periodo preferido", "Bevorzugtes Datum oder Zeitraum"],
    ["Nome e cognome", "Full name", "Nom et prénom", "Nombre y apellidos", "Vor- und Nachname"],
    ["Numero di ospiti", "Number of guests", "Nombre de personnes", "Número de huéspedes", "Anzahl der Gäste"],
    ["Messaggio", "Message", "Message", "Mensaje", "Nachricht"],
    ["Ho letto l'", "I have read the ", "J'ai lu la ", "He leído la ", "Ich habe die "],
    ["informativa privacy", "privacy policy", "politique de confidentialité", "política de privacidad", "Datenschutzerklärung"],
    ["e acconsento all'uso dei dati per rispondere alla richiesta.", " and consent to the use of my data to answer this enquiry.", " et j'accepte l'utilisation de mes données pour répondre à cette demande.", " y acepto el uso de mis datos para responder a esta solicitud.", " gelesen und stimme der Nutzung meiner Daten zur Beantwortung dieser Anfrage zu."],
    ["Prepara l'e-mail", "Prepare email", "Préparer l'e-mail", "Preparar email", "E-Mail vorbereiten"],
    ["Non salviamo i dati inseriti in questo sito.", "We do not save the data entered on this site.", "Nous ne conservons pas les données saisies sur ce site.", "No guardamos los datos introducidos en este sitio.", "Wir speichern die auf dieser Website eingegebenen Daten nicht."],
    ["Es. 12–15 settembre", "E.g. 12–15 September", "Ex. 12–15 septembre", "Ej. 12–15 de septiembre", "Z. B. 12.–15. September"],
    ["Es. 2", "E.g. 2", "Ex. 2", "Ej. 2", "Z. B. 2"],
    ["Aggiungi ciò che può aiutarci a capire la richiesta.", "Add anything that may help us understand your enquiry.", "Ajoutez toute information pouvant nous aider à comprendre votre demande.", "Añade cualquier dato que nos ayude a entender la solicitud.", "Ergänzen Sie alles, was uns hilft, Ihre Anfrage zu verstehen."],
    ["Apertura del programma e-mail…", "Opening your email app…", "Ouverture de l'application e-mail…", "Abriendo la aplicación de correo…", "E-Mail-Programm wird geöffnet…"],
    ["Richiesta disponibilità - Il Palazzetto Farnese", "Availability enquiry - Il Palazzetto Farnese", "Demande de disponibilité - Il Palazzetto Farnese", "Consulta de disponibilidad - Il Palazzetto Farnese", "Verfügbarkeitsanfrage - Il Palazzetto Farnese"],
    ["Data o periodo", "Date or period", "Date ou période", "Fecha o periodo", "Datum oder Zeitraum"],

    ["Informativa", "Notice", "Informations", "Información", "Hinweise"],
    ["Aggiornata il 12 agosto 2026.", "Updated 12 August 2026.", "Mise à jour le 12 août 2026.", "Actualizada el 12 de agosto de 2026.", "Aktualisiert am 12. August 2026."],
    ["Titolare del trattamento", "Data controller", "Responsable du traitement", "Responsable del tratamiento", "Verantwortlicher"],
    ["Dati trattati e finalità", "Data processed and purposes", "Données traitées et finalités", "Datos tratados y finalidades", "Verarbeitete Daten und Zwecke"],
    ["Base giuridica", "Legal basis", "Base juridique", "Base jurídica", "Rechtsgrundlage"],
    ["Conservazione e destinatari", "Retention and recipients", "Conservation et destinataires", "Conservación y destinatarios", "Speicherung und Empfänger"],
    ["Servizi esterni", "External services", "Services externes", "Servicios externos", "Externe Dienste"],
    ["Diritti", "Your rights", "Vos droits", "Tus derechos", "Ihre Rechte"],
    ["Cookie e servizi esterni", "Cookies and external services", "Cookies et services externes", "Cookies y servicios externos", "Cookies und externe Dienste"],
    ["Tecnologie utilizzate", "Technologies used", "Technologies utilisées", "Tecnologías utilizadas", "Verwendete Technologien"],
    ["Preferenza della lingua", "Language preference", "Préférence linguistique", "Preferencia de idioma", "Spracheinstellung"],
    ["La lingua scelta viene salvata nel browser tramite memoria locale (localStorage) con la chiave “palazzetto-language”. Questa preferenza serve esclusivamente a mostrare il sito nella lingua selezionata e non viene usata per profilazione o pubblicità.", "The selected language is saved in your browser using local storage (localStorage) under the key “palazzetto-language”. This preference is used only to display the site in your chosen language and is not used for profiling or advertising.", "La langue choisie est enregistrée dans votre navigateur via le stockage local (localStorage) sous la clé « palazzetto-language ». Cette préférence sert uniquement à afficher le site dans la langue sélectionnée et n'est utilisée ni pour le profilage ni pour la publicité.", "El idioma elegido se guarda en el navegador mediante almacenamiento local (localStorage) con la clave «palazzetto-language». Esta preferencia solo sirve para mostrar el sitio en el idioma seleccionado y no se utiliza para perfiles ni publicidad.", "Die gewählte Sprache wird im Browser im lokalen Speicher (localStorage) unter dem Schlüssel „palazzetto-language“ gespeichert. Diese Einstellung dient ausschließlich zur Anzeige der Website in der gewählten Sprache und nicht zu Profiling- oder Werbezwecken."],
    ["Collegamenti esterni", "External links", "Liens externes", "Enlaces externos", "Externe Links"],
    ["Font e analytics", "Fonts and analytics", "Polices et analytics", "Fuentes y analítica", "Schriften und Analytics"],
    ["Come cambiare scelta", "How to change your choice", "Comment modifier votre choix", "Cómo cambiar tu elección", "So ändern Sie Ihre Auswahl"],
    ["Leggi l'informativa privacy", "Read the privacy policy", "Lire la politique de confidentialité", "Leer la política de privacidad", "Datenschutzerklärung lesen"],
    ["Torna al sito", "Back to the website", "Retour au site", "Volver al sitio", "Zurück zur Website"],
    ["Il Palazzetto Farnese — Guest house a Caprarola", "Il Palazzetto Farnese — Guest house in Caprarola", "Il Palazzetto Farnese — Maison d'hôtes à Caprarola", "Il Palazzetto Farnese — Casa de huéspedes en Caprarola", "Il Palazzetto Farnese — Gästehaus in Caprarola"],
    ["Il Palazzetto Farnese — Guest house nel centro storico di Caprarola", "Il Palazzetto Farnese — Guest house in Caprarola's historic centre", "Il Palazzetto Farnese — Maison d'hôtes dans le centre historique de Caprarola", "Il Palazzetto Farnese — Casa de huéspedes en el casco histórico de Caprarola", "Il Palazzetto Farnese — Gästehaus in Caprarolas Altstadt"],
    ["Informativa privacy | Il Palazzetto Farnese", "Privacy policy | Il Palazzetto Farnese", "Politique de confidentialité | Il Palazzetto Farnese", "Política de privacidad | Il Palazzetto Farnese", "Datenschutzerklärung | Il Palazzetto Farnese"],
    ["Cookie e servizi esterni | Il Palazzetto Farnese", "Cookies and external services | Il Palazzetto Farnese", "Cookies et services externes | Il Palazzetto Farnese", "Cookies y servicios externos | Il Palazzetto Farnese", "Cookies und externe Dienste | Il Palazzetto Farnese"],
    ["Il Palazzetto Farnese, Via S. Egidio 2, Caprarola (VT). Per richieste relative ai dati personali:", "Il Palazzetto Farnese, Via S. Egidio 2, Caprarola (VT). For enquiries about personal data:", "Il Palazzetto Farnese, Via S. Egidio 2, Caprarola (VT). Pour toute demande concernant les données personnelles :", "Il Palazzetto Farnese, Via S. Egidio 2, Caprarola (VT). Para consultas sobre datos personales:", "Il Palazzetto Farnese, Via S. Egidio 2, Caprarola (VT). Für Anfragen zu personenbezogenen Daten:"],
    ["Il sito tratta i dati tecnici strettamente necessari al suo funzionamento. Se scegli di contattarci, utilizziamo nome, recapiti e informazioni contenute nella richiesta esclusivamente per rispondere, organizzare una visita, fornire disponibilità o preparare un servizio richiesto.", "The site processes only the technical data strictly necessary for its operation. If you contact us, we use your name, contact details and enquiry information solely to reply, arrange a visit, provide availability or prepare a requested service.", "Le site traite uniquement les données techniques strictement nécessaires à son fonctionnement. Si vous nous contactez, nous utilisons votre nom, vos coordonnées et les informations de la demande uniquement pour répondre, organiser une visite, indiquer les disponibilités ou préparer le service demandé.", "El sitio trata únicamente los datos técnicos imprescindibles para su funcionamiento. Si nos contactas, usamos tu nombre, datos de contacto e información de la solicitud exclusivamente para responder, organizar una visita, indicar disponibilidad o preparar el servicio solicitado.", "Die Website verarbeitet nur die für ihren Betrieb unbedingt erforderlichen technischen Daten. Wenn Sie uns kontaktieren, verwenden wir Name, Kontaktdaten und Anfrageinformationen ausschließlich zur Beantwortung, Terminvereinbarung, Verfügbarkeitsauskunft oder Vorbereitung einer gewünschten Leistung."],
    ["Il modulo presente nel sito prepara un messaggio nel programma e-mail del dispositivo: i dati inseriti non vengono salvati dal sito prima dell'invio. Una volta inviata l'e-mail, il messaggio viene gestito dal tuo fornitore e-mail e dalla casella de Il Palazzetto Farnese.", "The form prepares a message in your device's email app: the site does not save the data before it is sent. Once sent, the message is handled by your email provider and the Il Palazzetto Farnese mailbox.", "Le formulaire prépare un message dans l'application e-mail de votre appareil : le site n'enregistre pas les données avant l'envoi. Une fois envoyé, le message est traité par votre fournisseur de messagerie et la boîte d'Il Palazzetto Farnese.", "El formulario prepara un mensaje en la aplicación de correo del dispositivo: el sitio no guarda los datos antes del envío. Una vez enviado, el mensaje lo gestionan tu proveedor de correo y el buzón de Il Palazzetto Farnese.", "Das Formular erstellt eine Nachricht im E-Mail-Programm Ihres Geräts; die Website speichert die Daten vor dem Versand nicht. Nach dem Versand wird die Nachricht von Ihrem E-Mail-Anbieter und dem Postfach von Il Palazzetto Farnese verarbeitet."],
    ["Il trattamento delle richieste si basa sull'esecuzione di misure precontrattuali richieste dall'interessato e, per le comunicazioni ordinarie, sul legittimo interesse a rispondere. Eventuali comunicazioni promozionali richiederanno una base giuridica separata.", "Enquiries are processed to take pre-contractual steps requested by the data subject and, for ordinary communications, under the legitimate interest in replying. Any promotional communications will require a separate legal basis.", "Le traitement des demandes repose sur l'exécution de mesures précontractuelles demandées par la personne concernée et, pour les communications ordinaires, sur l'intérêt légitime à répondre. Toute communication promotionnelle nécessitera une base juridique distincte.", "El tratamiento de las solicitudes se basa en medidas precontractuales solicitadas por el interesado y, para comunicaciones ordinarias, en el interés legítimo en responder. Las comunicaciones promocionales requerirán una base jurídica independiente.", "Die Bearbeitung von Anfragen beruht auf vorvertraglichen Maßnahmen auf Wunsch der betroffenen Person und bei gewöhnlicher Kommunikation auf dem berechtigten Interesse an einer Antwort. Werbliche Kommunikation bedarf einer gesonderten Rechtsgrundlage."],
    ["I messaggi vengono conservati per il tempo necessario a gestire la richiesta e gli eventuali rapporti successivi, salvo obblighi di legge. I dati possono essere trattati da fornitori tecnici ed e-mail nominati o utilizzati per erogare i rispettivi servizi; non vengono venduti.", "Messages are retained for as long as needed to handle the enquiry and any subsequent relationship, subject to legal obligations. Data may be processed by technical and email providers used to supply their services; it is not sold.", "Les messages sont conservés le temps nécessaire au traitement de la demande et des éventuelles relations ultérieures, sous réserve des obligations légales. Les données peuvent être traitées par les prestataires techniques et de messagerie utilisés pour leurs services ; elles ne sont pas vendues.", "Los mensajes se conservan durante el tiempo necesario para gestionar la solicitud y las posibles relaciones posteriores, salvo obligaciones legales. Los datos pueden ser tratados por proveedores técnicos y de correo utilizados para prestar sus servicios; no se venden.", "Nachrichten werden so lange aufbewahrt, wie es zur Bearbeitung der Anfrage und möglicher Folgevorgänge erforderlich ist, vorbehaltlich gesetzlicher Pflichten. Technische und E-Mail-Dienstleister können Daten zur Leistungserbringung verarbeiten; die Daten werden nicht verkauft."],
    ["Google Maps viene caricato soltanto dopo una scelta esplicita. I collegamenti a Instagram, Facebook e WhatsApp aprono servizi esterni soltanto quando vengono selezionati. Questi fornitori possono ricevere dati tecnici, incluso l'indirizzo IP, secondo le proprie informative. Per maggiori dettagli consulta la pagina", "Google Maps loads only after an explicit choice. Instagram, Facebook and WhatsApp links open external services only when selected. These providers may receive technical data, including your IP address, under their own policies. For details, see", "Google Maps n'est chargé qu'après un choix explicite. Les liens Instagram, Facebook et WhatsApp n'ouvrent les services externes que lorsqu'ils sont sélectionnés. Ces fournisseurs peuvent recevoir des données techniques, dont l'adresse IP, selon leurs propres politiques. Pour plus de détails, consultez", "Google Maps solo se carga tras una elección expresa. Los enlaces de Instagram, Facebook y WhatsApp abren servicios externos únicamente al seleccionarlos. Estos proveedores pueden recibir datos técnicos, incluida la dirección IP, según sus políticas. Para más información, consulta", "Google Maps wird erst nach ausdrücklicher Auswahl geladen. Links zu Instagram, Facebook und WhatsApp öffnen externe Dienste nur nach Anklicken. Diese Anbieter können gemäß ihren Richtlinien technische Daten einschließlich der IP-Adresse erhalten. Weitere Einzelheiten finden Sie unter"],
    ["Puoi chiedere accesso, rettifica, cancellazione, limitazione, opposizione o portabilità dei dati nei casi previsti dal GDPR, scrivendo all'indirizzo indicato sopra. Puoi inoltre presentare reclamo al Garante per la protezione dei dati personali.", "You may request access, correction, deletion, restriction, objection or data portability where provided by the GDPR by writing to the address above. You may also lodge a complaint with the Italian Data Protection Authority.", "Vous pouvez demander l'accès, la rectification, l'effacement, la limitation, l'opposition ou la portabilité dans les cas prévus par le RGPD en écrivant à l'adresse ci-dessus. Vous pouvez également déposer une réclamation auprès de l'autorité italienne de protection des données.", "Puedes solicitar acceso, rectificación, supresión, limitación, oposición o portabilidad en los casos previstos por el RGPD escribiendo a la dirección indicada. También puedes reclamar ante la autoridad italiana de protección de datos.", "Sie können in den nach DSGVO vorgesehenen Fällen Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch oder Datenübertragbarkeit verlangen, indem Sie an die oben genannte Adresse schreiben. Zudem können Sie sich bei der italienischen Datenschutzbehörde beschweren."],
    ["Il sito non utilizza cookie pubblicitari, cookie di profilazione, strumenti di analytics o tecnologie proprie di tracciamento. Per questo motivo non viene mostrato un banner di consenso preventivo.", "The site uses no advertising or profiling cookies, analytics tools or first-party tracking technologies. Therefore, no prior-consent banner is displayed.", "Le site n'utilise aucun cookie publicitaire ou de profilage, outil d'analytics ni technologie de suivi propre. Aucun bandeau de consentement préalable n'est donc affiché.", "El sitio no utiliza cookies publicitarias o de perfilado, herramientas de analítica ni tecnologías propias de seguimiento. Por ello no se muestra un banner de consentimiento previo.", "Die Website verwendet keine Werbe- oder Profiling-Cookies, Analytics-Werkzeuge oder eigene Tracking-Technologien. Daher wird kein Einwilligungsbanner angezeigt."],
    ["La mappa non viene caricata automaticamente. Dopo aver premuto “Carica Google Maps”, il browser si collega a Google e il fornitore può trattare dati tecnici e impostare tecnologie proprie secondo la sua informativa.", "The map does not load automatically. After you press “Load Google Maps”, your browser connects to Google; the provider may process technical data and set its own technologies under its policy.", "La carte ne se charge pas automatiquement. Après avoir appuyé sur « Charger Google Maps », votre navigateur se connecte à Google ; le fournisseur peut traiter des données techniques et utiliser ses propres technologies selon sa politique.", "El mapa no se carga automáticamente. Al pulsar «Cargar Google Maps», el navegador se conecta a Google; el proveedor puede tratar datos técnicos y aplicar sus propias tecnologías según su política.", "Die Karte wird nicht automatisch geladen. Nach einem Klick auf „Google Maps laden“ verbindet sich Ihr Browser mit Google; der Anbieter kann gemäß seinen Bestimmungen technische Daten verarbeiten und eigene Technologien einsetzen."],
    ["I collegamenti a Instagram, Facebook e WhatsApp non caricano contenuti di tali piattaforme all'interno del sito. Il collegamento con il relativo fornitore avviene soltanto quando scegli di aprirlo.", "Links to Instagram, Facebook and WhatsApp do not load content from those platforms within the site. A connection to the provider occurs only when you choose to open the link.", "Les liens Instagram, Facebook et WhatsApp ne chargent aucun contenu de ces plateformes dans le site. La connexion au fournisseur n'a lieu que lorsque vous choisissez d'ouvrir le lien.", "Los enlaces a Instagram, Facebook y WhatsApp no cargan contenido de esas plataformas dentro del sitio. La conexión con el proveedor solo se produce cuando decides abrir el enlace.", "Links zu Instagram, Facebook und WhatsApp laden keine Inhalte dieser Plattformen in die Website. Eine Verbindung zum Anbieter entsteht erst, wenn Sie den Link öffnen."],
    ["I caratteri tipografici sono ospitati localmente e non richiedono connessioni a Google Fonts. Questa versione del sito non include strumenti di analytics o marketing.", "Fonts are hosted locally and require no connection to Google Fonts. This version of the site includes no analytics or marketing tools.", "Les polices sont hébergées localement et ne nécessitent aucune connexion à Google Fonts. Cette version du site ne comporte aucun outil d'analytics ou de marketing.", "Las fuentes se alojan localmente y no requieren conexión con Google Fonts. Esta versión del sitio no incluye herramientas de analítica o marketing.", "Die Schriften werden lokal gehostet und erfordern keine Verbindung zu Google Fonts. Diese Version der Website enthält keine Analytics- oder Marketing-Werkzeuge."],
    ["La mappa viene caricata solo per la sessione e l'azione corrente. Ricaricando la pagina, torna allo stato non caricato. Per informazioni puoi scrivere a", "The map is loaded only for the current session and action. Reloading the page returns it to its unloaded state. For information, write to", "La carte n'est chargée que pour la session et l'action en cours. En rechargeant la page, elle revient à l'état non chargé. Pour toute information, écrivez à", "El mapa solo se carga para la sesión y acción actuales. Al recargar la página vuelve al estado no cargado. Para más información, escribe a", "Die Karte wird nur für die aktuelle Sitzung und Aktion geladen. Nach Neuladen der Seite ist sie wieder deaktiviert. Für Informationen schreiben Sie an"],
    ["Mappa de Il Palazzetto Farnese", "Map of Il Palazzetto Farnese", "Carte d'Il Palazzetto Farnese", "Mapa de Il Palazzetto Farnese", "Karte von Il Palazzetto Farnese"],
    ["Immagine precedente", "Previous image", "Image précédente", "Imagen anterior", "Vorheriges Bild"],
    ["Immagine successiva", "Next image", "Image suivante", "Imagen siguiente", "Nächstes Bild"],
    ["Seleziona immagine", "Select image", "Choisir l'image", "Seleccionar imagen", "Bild auswählen"],
    ["Vai all'immagine", "Go to image", "Aller à l'image", "Ir a la imagen", "Zum Bild"],
    ["Nome", "Name", "Nom", "Nombre", "Name"],
    ["Ingresso de Il Palazzetto Farnese", "Entrance to Il Palazzetto Farnese", "Entrée d'Il Palazzetto Farnese", "Entrada de Il Palazzetto Farnese", "Eingang von Il Palazzetto Farnese"],
    ["Video drone in preparazione", "Drone video in preparation", "Vidéo par drone en préparation", "Vídeo con dron en preparación", "Drohnenvideo in Vorbereitung"],
    ["Facciata della dimora nel borgo", "House façade in the village", "Façade de la demeure dans le village", "Fachada de la casa en el pueblo", "Hausfassade im Ort"],
    ["La dimora nel centro storico", "The house in the historic centre", "La demeure dans le centre historique", "La casa en el casco histórico", "Das Haus in der Altstadt"],
    ["Scala interna della dimora, visualizzazione elaborata dagli ambienti reali", "Internal staircase, visual developed from the real interiors", "Escalier intérieur, visuel élaboré à partir des espaces réels", "Escalera interior, imagen elaborada a partir de los espacios reales", "Innentreppe, Visualisierung auf Grundlage der realen Räume"],
    ["La scala interna della dimora", "The house's internal staircase", "L'escalier intérieur de la demeure", "La escalera interior de la casa", "Die Innentreppe des Hauses"],
    ["Area comune con cucina e salotto, visualizzazione elaborata dagli ambienti reali", "Shared kitchen and lounge, visual developed from the real interiors", "Cuisine et salon communs, visuel élaboré à partir des espaces réels", "Cocina y salón comunes, imagen elaborada a partir de los espacios reales", "Gemeinschaftsküche und Wohnbereich, Visualisierung auf Grundlage der realen Räume"],
    ["Lo spazio comune per gli ospiti", "The shared guest area", "L'espace commun des hôtes", "La zona común para huéspedes", "Der Gemeinschaftsbereich für Gäste"],
    ["Dotazioni Stanza del Mappamondo", "Map Room amenities", "Équipements de la Chambre du Mappamondo", "Servicios de la Habitación del Mappamondo", "Ausstattung des Mappamondo-Zimmers"],
    ["Galleria Stanza del Mappamondo", "Map Room gallery", "Galerie de la Chambre du Mappamondo", "Galería de la Habitación del Mappamondo", "Galerie des Mappamondo-Zimmers"],
    ["Stanza del Mappamondo, visualizzazione elaborata dagli ambienti reali", "Map Room, visual developed from the real interiors", "Chambre du Mappamondo, visuel élaboré à partir des espaces réels", "Habitación del Mappamondo, imagen elaborada a partir de los espacios reales", "Mappamondo-Zimmer, Visualisierung auf Grundlage der realen Räume"],
    ["Seconda prospettiva della Stanza del Mappamondo", "Second view of the Map Room", "Deuxième vue de la Chambre du Mappamondo", "Segunda vista de la Habitación del Mappamondo", "Zweite Ansicht des Mappamondo-Zimmers"],
    ["Bagno privato della Stanza del Mappamondo", "Map Room private bathroom", "Salle de bains privée de la Chambre du Mappamondo", "Baño privado de la Habitación del Mappamondo", "Eigenes Bad des Mappamondo-Zimmers"],
    ["Dotazioni Stanza del Belvedere Farnese", "Belvedere Farnese Room amenities", "Équipements de la Chambre du Belvedere Farnese", "Servicios de la Habitación del Belvedere Farnese", "Ausstattung des Belvedere-Farnese-Zimmers"],
    ["Galleria Stanza del Belvedere Farnese", "Belvedere Farnese Room gallery", "Galerie de la Chambre du Belvedere Farnese", "Galería de la Habitación del Belvedere Farnese", "Galerie des Belvedere-Farnese-Zimmers"],
    ["Stanza del Belvedere Farnese, visualizzazione elaborata dagli ambienti reali", "Belvedere Farnese Room, visual developed from the real interiors", "Chambre du Belvedere Farnese, visuel élaboré à partir des espaces réels", "Habitación del Belvedere Farnese, imagen elaborada a partir de los espacios reales", "Belvedere-Farnese-Zimmer, Visualisierung auf Grundlage der realen Räume"],
    ["Zona salotto della Stanza del Belvedere Farnese", "Belvedere Farnese Room lounge area", "Coin salon de la Chambre du Belvedere Farnese", "Zona de estar de la Habitación del Belvedere Farnese", "Sitzbereich des Belvedere-Farnese-Zimmers"],
    ["Bagno privato della Stanza del Belvedere Farnese", "Belvedere Farnese Room private bathroom", "Salle de bains privée de la Chambre du Belvedere Farnese", "Baño privado de la Habitación del Belvedere Farnese", "Eigenes Bad des Belvedere-Farnese-Zimmers"],
    ["Servizi della struttura", "Property amenities", "Services de l'établissement", "Servicios del alojamiento", "Ausstattung der Unterkunft"],
    ["Colazione nell'area comune attrezzata, visualizzazione elaborata dall'ambiente reale", "Breakfast in the equipped shared area, visual developed from the real interior", "Petit-déjeuner dans l'espace commun équipé, visuel élaboré à partir de l'espace réel", "Desayuno en la zona común equipada, imagen elaborada a partir del espacio real", "Frühstück im ausgestatteten Gemeinschaftsbereich, Visualisierung auf Grundlage des realen Raums"],
    ["Una camera doppia, con un posto in più su richiesta.", "A double room, with one additional place on request.", "Une chambre double, avec une place supplémentaire sur demande.", "Una habitación doble, con una plaza adicional bajo petición.", "Ein Doppelzimmer mit einem zusätzlichen Schlafplatz auf Anfrage."],
    ["La configurazione standard è doppia. Soltanto su richiesta e previa conferma è possibile aggiungere un letto singolo provvisorio, per accogliere un massimo di tre ospiti. La camera misura circa 14 m² e dispone di bagno privato.", "The standard configuration is double. A temporary single bed can be added only on request and subject to confirmation, for a maximum of three guests. The room is approximately 14 m² and has a private bathroom.", "La configuration standard est double. Un lit simple d'appoint peut être ajouté uniquement sur demande et sous réserve de confirmation, pour un maximum de trois personnes. La chambre mesure environ 14 m² et dispose d'une salle de bains privée.", "La configuración estándar es doble. Solo bajo petición y confirmación se puede añadir una cama individual provisional, para un máximo de tres huéspedes. La habitación mide unos 14 m² y tiene baño privado.", "Die Standardbelegung ist für zwei Personen. Nur auf Anfrage und nach Bestätigung kann ein provisorisches Einzelbett für maximal drei Gäste ergänzt werden. Das Zimmer ist ca. 14 m² groß und verfügt über ein eigenes Bad."],
    ["Letto singolo provvisorio disponibile esclusivamente su richiesta.", "Temporary single bed available exclusively on request.", "Lit simple d'appoint disponible exclusivement sur demande.", "Cama individual provisional disponible exclusivamente bajo petición.", "Provisorisches Einzelbett ausschließlich auf Anfrage verfügbar."],
    ["Una camera tripla, con un posto in più su richiesta.", "A triple room, with one additional place on request.", "Une chambre triple, avec une place supplémentaire sur demande.", "Una habitación triple, con una plaza adicional bajo petición.", "Ein Dreibettzimmer mit einem zusätzlichen Schlafplatz auf Anfrage."],
    ["La configurazione standard è tripla. Soltanto su richiesta e previa conferma è possibile aggiungere un letto singolo extra, portando la capienza massima a quattro ospiti. La camera misura circa 20 m² e dispone di bagno privato.", "The standard configuration is triple. An extra single bed can be added only on request and subject to confirmation, increasing maximum occupancy to four guests. The room is approximately 20 m² and has a private bathroom.", "La configuration standard est triple. Un lit simple supplémentaire peut être ajouté uniquement sur demande et sous réserve de confirmation, portant la capacité maximale à quatre personnes. La chambre mesure environ 20 m² et dispose d'une salle de bains privée.", "La configuración estándar es triple. Solo bajo petición y confirmación se puede añadir una cama individual extra, para un máximo de cuatro huéspedes. La habitación mide unos 20 m² y tiene baño privado.", "Die Standardbelegung ist für drei Personen. Nur auf Anfrage und nach Bestätigung kann ein zusätzliches Einzelbett ergänzt werden, sodass maximal vier Gäste Platz finden. Das Zimmer ist ca. 20 m² groß und verfügt über ein eigenes Bad."],
    ["Quarto letto disponibile esclusivamente su richiesta.", "Fourth bed available exclusively on request.", "Quatrième lit disponible exclusivement sur demande.", "Cuarta cama disponible exclusivamente bajo petición.", "Viertes Bett ausschließlich auf Anfrage verfügbar."],
    ["Configurazione", "Configuration", "Configuration", "Configuración", "Belegung"],
    ["Doppia", "Double", "Double", "Doble", "Doppelzimmer"],
    ["Tripla", "Triple", "Triple", "Triple", "Dreibettzimmer"],
    ["Extra su richiesta", "Extra on request", "Supplément sur demande", "Extra bajo petición", "Extra auf Anfrage"],
    ["1 letto singolo", "1 single bed", "1 lit simple", "1 cama individual", "1 Einzelbett"],
    ["Capienza massima", "Maximum occupancy", "Capacité maximale", "Capacidad máxima", "Maximale Belegung"],
    ["3 ospiti", "3 guests", "3 personnes", "3 huéspedes", "3 Gäste"],
    ["4 ospiti", "4 guests", "4 personnes", "4 huéspedes", "4 Gäste"],
    ["Cucina attrezzata e spazio relax.", "Equipped kitchen and relaxation area.", "Cuisine équipée et espace détente.", "Cocina equipada y zona de descanso.", "Ausgestattete Küche und Ruhebereich."],
    ["Uno spazio condiviso tra gli ospiti delle due camere, organizzato per cucinare, mangiare e concedersi un momento di pausa con divanetto e tavoli.", "A space shared by guests of both rooms, arranged for cooking, dining and relaxing with a sofa and tables.", "Un espace partagé par les occupants des deux chambres, aménagé pour cuisiner, prendre les repas et se détendre avec canapé et tables.", "Un espacio compartido por los huéspedes de ambas habitaciones, pensado para cocinar, comer y descansar con sofá y mesas.", "Ein gemeinsamer Bereich für die Gäste beider Zimmer, ausgestattet zum Kochen, Essen und Entspannen mit Sofa und Tischen."],
    ["Galleria dell'area comune", "Shared-area gallery", "Galerie de l'espace commun", "Galería de la zona común", "Galerie des Gemeinschaftsbereichs"],
    ["Area comune con cucina, tavoli e divanetto", "Shared area with kitchen, tables and sofa", "Espace commun avec cuisine, tables et canapé", "Zona común con cocina, mesas y sofá", "Gemeinschaftsbereich mit Küche, Tischen und Sofa"],
    ["Dettaglio dell'angolo cottura attrezzato", "Detail of the equipped kitchenette", "Détail du coin cuisine équipé", "Detalle de la cocina equipada", "Detail der ausgestatteten Küchenzeile"],
    ["Dettaglio dedicato al caffè nell'area comune", "Coffee corner detail in the shared area", "Détail du coin café dans l'espace commun", "Detalle del rincón de café en la zona común", "Detail der Kaffeeecke im Gemeinschaftsbereich"],
    ["Tutto il necessario", "Everything you need", "Tout le nécessaire", "Todo lo necesario", "Alles, was Sie brauchen"],
    ["Una piccola cucina completa, da vivere in autonomia.", "A compact, complete kitchen for an independent stay.", "Une petite cuisine complète pour un séjour en autonomie.", "Una pequeña cocina completa para una estancia independiente.", "Eine kleine, komplette Küche für einen unabhängigen Aufenthalt."],
    ["Cucinare e lavare", "Cook and wash", "Cuisiner et laver", "Cocinar y lavar", "Kochen und Spülen"],
    ["Angolo cottura, piano cottura, lavabo, pentole, padelle, scolapasta e stoviglie.", "Kitchenette, hob, sink, pots, pans, colander and cookware.", "Coin cuisine, plaque de cuisson, évier, casseroles, poêles, passoire et vaisselle.", "Cocina, placa, fregadero, ollas, sartenes, colador y utensilios.", "Küchenzeile, Kochfeld, Spüle, Töpfe, Pfannen, Sieb und Geschirr."],
    ["Conservare", "Store", "Conserver", "Conservar", "Aufbewahren"],
    ["Frigorifero e congelatore a disposizione degli ospiti.", "Fridge and freezer available to guests.", "Réfrigérateur et congélateur à la disposition des hôtes.", "Frigorífico y congelador a disposición de los huéspedes.", "Kühlschrank und Gefrierschrank stehen den Gästen zur Verfügung."],
    ["Preparare e servire", "Prepare and serve", "Préparer et servir", "Preparar y servir", "Zubereiten und servieren"],
    ["Forno elettrico, tostapane, macchina del caffè, bollitore, piatti, posate e bicchieri.", "Electric oven, toaster, coffee machine, kettle, plates, cutlery and glasses.", "Four électrique, grille-pain, machine à café, bouilloire, assiettes, couverts et verres.", "Horno eléctrico, tostadora, cafetera, hervidor, platos, cubiertos y vasos.", "Elektrobackofen, Toaster, Kaffeemaschine, Wasserkocher, Teller, Besteck und Gläser."],
    ["Rilassarsi", "Relax", "Se détendre", "Descansar", "Entspannen"],
    ["Divanetto e tavoli per colazione, pasti o un momento di pausa.", "Sofa and tables for breakfast, meals or a quiet break.", "Canapé et tables pour le petit-déjeuner, les repas ou un moment de détente.", "Sofá y mesas para desayunar, comer o disfrutar de un descanso.", "Sofa und Tische für Frühstück, Mahlzeiten oder eine ruhige Pause."],
    ["gratuito in tutta la struttura.", "free throughout the property.", "gratuit dans toute la maison.", "gratuito en todo el alojamiento.", "kostenlos im gesamten Haus."],
    ["disponibile per assistenza nei normali orari lavorativi.", "available for assistance during normal working hours.", "disponible pour vous assister pendant les horaires de travail habituels.", "disponible para asistencia durante el horario laboral habitual.", "für Hilfe während der üblichen Geschäftszeiten erreichbar."],
    ["Due parcheggi pubblici permettono di raggiungere la struttura a piedi. Apri il percorso pedonale dopo avere parcheggiato.", "Two public car parks are within walking distance of the property. Open the walking route after parking.", "Deux parkings publics permettent de rejoindre la maison à pied. Ouvrez l'itinéraire piéton après vous être garé.", "Dos aparcamientos públicos permiten llegar al alojamiento a pie. Abre la ruta peatonal después de aparcar.", "Von zwei öffentlichen Parkplätzen erreichen Sie das Haus zu Fuß. Öffnen Sie nach dem Parken die Fußwegroute."],
    ["Più vicino", "Closest", "Le plus proche", "Más cercano", "Am nächsten"],
    ["Parcheggio multipiano", "Multi-storey car park", "Parking à étages", "Aparcamiento de varias plantas", "Parkhaus"],
    ["Alternativa", "Alternative", "Alternative", "Alternativa", "Alternative"],
    ["Parcheggio Ex-Scuderie", "Ex-Scuderie car park", "Parking Ex-Scuderie", "Aparcamiento Ex-Scuderie", "Parkplatz Ex-Scuderie"],
    ["Indicazioni a piedi", "Walking directions", "Itinéraire à pied", "Indicaciones a pie", "Fußweg anzeigen"],
    ["La struttura", "The property", "La maison", "El alojamiento", "Die Unterkunft"],
    ["Via S. Egidio 2, Caprarola.", "Via S. Egidio 2, Caprarola.", "Via S. Egidio 2, Caprarola.", "Via S. Egidio 2, Caprarola.", "Via S. Egidio 2, Caprarola."],
    ["La mappa indica l'ingresso della guest house; i percorsi dai parcheggi sono disponibili nella sezione Servizi.", "The map marks the guest-house entrance; routes from the car parks are available in the Amenities section.", "La carte indique l'entrée de la maison d'hôtes ; les itinéraires depuis les parkings sont disponibles dans la section Services.", "El mapa indica la entrada de la casa; las rutas desde los aparcamientos están en la sección Servicios.", "Die Karte zeigt den Eingang des Gästehauses; die Wege von den Parkplätzen finden Sie unter Ausstattung."],
    ["Apri in Google Maps", "Open in Google Maps", "Ouvrir dans Google Maps", "Abrir en Google Maps", "In Google Maps öffnen"],
  ];

  const keys = ["en", "fr", "es", "de"];
  const dictionaries = Object.fromEntries(keys.map((lang) => [lang, {}]));
  rows.forEach((row) => keys.forEach((lang, index) => { dictionaries[lang][row[0]] = row[index + 1]; }));

  const normalize = (value) => String(value || "").replace(/\s+/g, " ").trim();
  let currentLang = localStorage.getItem("palazzetto-language") || "it";
  if (!LANGS[currentLang]) currentLang = "it";
  const textNodes = [];
  const attrs = [];
  const titleSource = document.title;
  const description = document.querySelector('meta[name="description"]');
  const descriptionSource = description?.content || "";

  function translate(source, lang = currentLang) {
    const clean = normalize(source);
    if (lang === "it" || !clean) return clean;
    const direct = dictionaries[lang]?.[clean];
    if (direct) return direct;
    const dot = clean.match(/^Vai all'immagine (\d+)$/);
    if (dot) return `${dictionaries[lang]["Vai all'immagine"]} ${dot[1]}`;
    return clean;
  }

  function collectSources() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!normalize(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    while (walker.nextNode()) textNodes.push({ node: walker.currentNode, source: walker.currentNode.nodeValue });
    document.querySelectorAll("[aria-label], img[alt], [title], [placeholder]").forEach((element) => {
      ["aria-label", "alt", "title", "placeholder"].forEach((attr) => {
        if (element.hasAttribute(attr)) attrs.push({ element, attr, source: element.getAttribute(attr) });
      });
    });
  }

  function applyLanguage(lang) {
    currentLang = LANGS[lang] ? lang : "it";
    localStorage.setItem("palazzetto-language", currentLang);
    document.documentElement.lang = LANGS[currentLang].html;
    textNodes.forEach(({ node, source }) => {
      const leading = source.match(/^\s*/)?.[0] || "";
      const trailing = source.match(/\s*$/)?.[0] || "";
      node.nodeValue = leading + translate(source) + trailing;
    });
    attrs.forEach(({ element, attr, source }) => element.setAttribute(attr, translate(source)));
    document.title = translate(titleSource);
    if (description) description.content = translate(descriptionSource);
    document.querySelectorAll("[data-current-lang-code]").forEach((el) => { el.textContent = LANGS[currentLang].code; });
    document.querySelectorAll("[data-current-lang-flag]").forEach((el) => {
      el.className = `lang-flag flag-icon ${LANGS[currentLang].flag}`;
      el.setAttribute("aria-hidden", "true");
    });
    document.querySelectorAll("[data-lang-option]").forEach((button) => {
      button.setAttribute("aria-checked", button.dataset.langOption === currentLang ? "true" : "false");
    });
    document.querySelectorAll("[data-lang-toggle]").forEach((button) => button.setAttribute("aria-label", translate("Seleziona lingua")));
    window.dispatchEvent(new CustomEvent("palazzetto:language", { detail: { lang: currentLang } }));
  }

  function closeMenus() {
    document.querySelectorAll("[data-language-switcher]").forEach((switcher) => {
      switcher.classList.remove("is-open");
      switcher.querySelector("[data-lang-toggle]")?.setAttribute("aria-expanded", "false");
    });
  }

  collectSources();
  document.querySelectorAll("[data-language-switcher]").forEach((switcher) => {
    const toggle = switcher.querySelector("[data-lang-toggle]");
    toggle?.addEventListener("click", (event) => {
      event.stopPropagation();
      const shouldOpen = !switcher.classList.contains("is-open");
      closeMenus();
      switcher.classList.toggle("is-open", shouldOpen);
      toggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    });
    switcher.querySelectorAll("[data-lang-option]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        applyLanguage(button.dataset.langOption);
        closeMenus();
      });
    });
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-language-switcher]")) closeMenus();
  });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeMenus(); });

  window.palazzettoI18n = { applyLanguage, translate: (source) => translate(source), get language() { return currentLang; } };
  applyLanguage(currentLang);
})();
