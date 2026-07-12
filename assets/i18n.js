(() => {
  const STORAGE_KEY = 'wedding-language';
  const DEFAULT_LANGUAGE = 'en';
  const SUPPORTED_LANGUAGES = ['en', 'es'];
  const LANGUAGE_FLAGS = {
    en: '🇺🇸',
    es: '🇲🇽'
  };

  const translations = {
    en: {
      common: {
        documentTitleHome: 'Victoria A. Solis & Austin H. Lipe Wedding',
        documentTitleGallery: 'Victoria & Austin Gallery',
        languageLabel: 'Language',
        languageEnglish: 'English',
        languageSpanish: 'Español'
      },
      countdown: {
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds',
        ariaLabel: 'Countdown to wedding day'
      },
      home: {
        heroImageAlt: 'Romantic wedding table setting',
        coupleNames: 'Victoria A. Solis & Austin H. Lipe',
        heroDate: 'May 29, 2027 • Aguascalientes, Mexico',
        navAriaLabel: 'Wedding page sections',
        navGallery: 'Gallery',
        navSaveTheDate: 'Save the Date',
        navWeekend: 'Weekend',
        navTravel: 'Travel',
        navRegistry: 'Registry',
        navRsvp: 'RSVP',
        intro: 'We’re so excited to celebrate with you. This page has the latest updates for the wedding and Aguascalientes travel details.',
        locationsHeading: 'Locations',
        locationMassLabel: 'Nuptial Mass',
        locationMassBody: 'The Nuptial Mass will be held here at 2:00pm.',
        parkingLabel: 'Parking:',
        priceLabel: 'Price:',
        viewNearbyParking: 'View nearby parking',
        locationMassParkingHtml: '<strong>Parking:</strong> This is the best parking nearby: <a class="location-link" href="https://maps.app.goo.gl/FQJDmRRY8GfZZZhb7" target="_blank" rel="noreferrer">View nearby parking</a>',
        locationMassPriceHtml: '<strong>Price:</strong> Parking garage is about 20 pesos per hour.',
        locationReceptionLabel: 'Reception',
        locationReceptionBody: 'Cocktail hour, dinner reception, cake cutting, and the send off will take place here.',
        locationReceptionParkingHtml: '<strong>Parking:</strong> On-site parking is available.',
        locationReceptionPriceHtml: '<strong>Price:</strong> Parking price is still being confirmed.',
        timelineHeading: 'Wedding Day Timeline',
        timelineAriaLabel: 'Wedding day timeline',
        timelineMassTitle: 'Nuptial Mass',
        timelineMassBody: 'Wedding ceremony at the Cathedral in Aguascalientes.',
        timelinePhotosTitle: 'Photo Session',
        timelinePhotosBody: 'Photos with family, wedding party, and the newlyweds.',
        timelineCocktailTitle: 'Cocktail Hour',
        timelineCocktailBody: 'Drinks, music, and time to gather before dinner.',
        timelineDinnerTitle: 'Dinner Reception',
        timelineDinnerBody: 'Dinner and celebration with our family and friends.',
        timelineFarewellTitle: 'Farewell',
        timelineFarewellBody: 'A final goodbye to close the wedding celebration.',
        timelineNote: 'Final times and addresses will be shared directly with guests.',
        attireHeading: 'Attire Guide',
        attireIntro: 'We invite our guests to wear semi-formal attire for the wedding celebration.',
        attireMenLabel: 'Men',
        attireMenBody: 'Suit or sport coat (optional), dress shirt, dress pants, dress shoes',
        attireWomenLabel: 'Women',
        attireWomenBody: 'Sundress, midi dress, jumpsuit, heels/sandals.',
        transportationHeading: 'Transportation',
        transportationAirport: 'Airport: Aguascalientes Aguascalientes Mexico airport',
        transportationGettingAround: 'Transportation: Uber/taxi available in most areas',
        transportationDistance: 'Airport distance to hotels: Aguascalientes, Aguascalientes (AGU-Licenciado Jesus Teran Peredo Intl.) - 45 min drive',
        hotelsHeading: 'Hotel Accommodations',
        hotelCaption: 'For your convenience rooms have been blocked in the following hotel with special wedding rates',
        hotelColHotel: 'Hotel',
        hotelColAddress: 'Address',
        hotelColPrice: 'Price Range',
        hotelColBreakfast: 'Breakfast',
        hotelColParking: 'Parking',
        hotelColTransport: 'Transportation',
        hotelColOnSite: 'On Site',
        hotel1Breakfast: 'Full breakfast included',
        hotel1Parking: 'Free self parking',
        hotel1Transport: '24-hour airport shuttle on request for a surcharge',
        hotel1OnSite: 'Free Wifi, restaurant, bar, air conditioning, terrace',
        hotel2Breakfast: 'Not listed',
        hotel2Parking: 'Free self parking',
        hotel2Transport: 'Uber/taxi available nearby',
        hotel2OnSite: 'Free Wifi, restaurant, bar, air conditioning',
        hotel3Breakfast: 'Buffet breakfast for a fee (250-300 MXN)',
        hotel3Parking: 'Free self parking',
        hotel3Transport: 'Uber/taxi available nearby',
        hotel3OnSite: 'Free Wifi, restaurant, bar/lounge, pool, rooftop terrace, air conditioning',
        nearbyHeading: "What's Nearby Zona Centro",
        nearby1: 'Plaza de la Patria - 2-5 min walk',
        nearby2: 'Catedral Basilica de Nuestra Senora de la Asuncion - 3-7 min walk',
        nearby3: 'Aguascalientes Government Palace - 2-3 min walk',
        nearby4: 'National Museum of Death - 4-9 min walk',
        nearby5: 'San Marcos Fair - 10-14 min walk',
        nearby6: 'San Antonio Temple - 10-14 min walk',
        restaurantsHeading: 'Restaurants Close By Zona Centro',
        restaurants1: 'Cafe San Marcos - 8 min walk',
        restaurants2: 'Manrique Restaurant - 3 min walk',
        restaurants3: 'Crokas Crepes - 1 min walk',
        restaurants4: 'KFC - 1 min walk',
        restaurants5: 'Bx Pizza - 1 min walk',
        restaurants6: 'BX Burger - 1 min walk',
        registryHeading: 'Registry',
        registryIntro: "Your presence is the greatest gift, but if you'd like to bless us with something, you can use our Amazon registry:",
        registryLink: "View Victoria & Austin's Amazon Wedding Registry",
        rsvpHeading: 'RSVP',
        rsvpIntro: 'Please use your personalized RSVP link you received in your invitation from Victoria or Austin.',
        rsvpNote: 'Due to venue limitations, we are only able to host the guests listed on your invitation.',
        faqHeading: 'FAQ',
        faq1Question: 'Can I bring a plus one?',
        faq1Answer: 'The number of guests you are allowed to bring is specified in your RSVP invite link.',
        faq2Question: 'Can I bring children?',
        faq2Answer: 'Due to venue limitations, we are only able to host the guests listed on your invitation.',
        faq3Question: 'What is the dress code?',
        faq3Answer: 'Semi-formal attire.',
        faq4Question: 'Will the Nuptial Mass be in English or Spanish?',
        faq4Answer: 'It will be a combination of both, and the priest is bilingual.',
        faq5Question: 'Where do I park for the Nuptial Mass?',
        faq5AnswerHtml: '<p>This is the best parking nearby: <a class="location-link" href="https://maps.app.goo.gl/FQJDmRRY8GfZZZhb7" target="_blank" rel="noreferrer">View nearby parking</a></p><p>Parking garage is about 20 pesos per hour.</p>',
        faq6Question: 'Where do I park for the reception?',
        faq6AnswerHtml: '<p>On-site parking is available.</p><p>Parking price is still being confirmed.</p>',
        faq7Question: 'When should I show up for the Nuptial Mass?',
        faq7AnswerHtml: '<p>We recommend arriving 15 minutes early for the Nuptial Mass at the cathedral.</p><p>If you are parking in the nearby garage, please also account for about a 5 minute walk to the cathedral.</p>',
        faq8Question: 'What time does the reception end?',
        faq8Answer: 'The Reception is from 5:30pm-11:30pm.'
        ,
        thanksBody: 'Thank you for joining us on this special day. We feel so loved by your presence and support, and we cannot wait to celebrate together in Aguascalientes.',
        thanksImageAlt: 'Victoria and Austin engagement portrait'
      },
      gallery: {
        topbarBack: 'Back To Wedding Home',
        heroImageAlt: 'Victoria and Austin gallery cover image',
        eyebrow: 'Photo Gallery',
        heading: 'Gallery',
        intro: 'A little collection of the moments that brought us here, and the ones we never want to forget.',
        sectionHeading: 'Wedding Collection',
        sectionIntro: 'Click any image to open the larger view.',
        emptyStateHtml: 'No gallery images yet. Add photos to <code>assets/gallery/web/</code> and update <code>gallery/gallery-data.js</code>.',
        openImageAria: 'Open {title}',
        prev: 'Prev',
        next: 'Next',
        close: 'Close'
      },
      saveTheDate: {
        topbarBack: 'Back To Wedding Home',
        heading: 'Victoria & Austin Save the Date',
        intro: 'We cannot wait to celebrate with you. Enjoy this little preview, and keep May 29, 2027 reserved for our wedding in Aguascalientes, Mexico.',
        videoFallback: 'Your browser does not support video playback. Please try opening this page in a modern browser.',
        bottomBack: 'Go to Our Wedding Website'
      },
      rsvp: {
        title: 'RSVP',
        loading: 'Loading your invite...',
        invalidInvite: 'Invalid or inactive RSVP link.',
        missingHousehold: 'This invite is missing a household assignment.',
        householdFallback: 'Your Household',
        noGuests: 'No guests found for this invite.',
        selectPending: 'Still deciding',
        selectYes: 'Yes, attending 🎉',
        selectNo: "No, can't attend",
        saveButton: 'Save RSVP',
        saveError: 'Could not save RSVP right now. Please try again in a moment.',
        successYesHtml: 'Amazing — we can’t wait to celebrate with you! 🎉<br/>For the latest wedding updates and Aguascalientes travel info, use the Wedding Home Page.<br/><a class="quick-link" href="/wedding/">Go to the Wedding Home Page →</a>',
        successNoHtml: 'We’ll miss you and appreciate you letting us know 💛<br/><a class="quick-link" href="/wedding/">Wedding updates and details →</a>',
        successPendingHtml: 'Saved! You can update your RSVP anytime from this same link.<br/><a class="quick-link" href="/wedding/">Wedding home page →</a>',
        saveErrorHtml: 'Could not save RSVP right now. Please try again in a moment.',
        inviteSubtitle: 'Please submit one response per person listed below. The Wedding Home Page has the latest updates on the wedding and Aguascalientes travel details.',
        loadError: 'Could not load RSVP.',
        titleWithHousehold: 'RSVP • {householdName}'
      }
    },
    es: {
      common: {
        documentTitleHome: 'Boda de Victoria A. Solis & Austin H. Lipe',
        documentTitleGallery: 'Galeria de Victoria y Austin',
        documentTitleSaveTheDate: 'Reserva la fecha de Victoria y Austin',
        languageLabel: 'Idioma',
        languageEnglish: 'English',
        languageSpanish: 'Español'
      },
      countdown: {
        days: 'Dias',
        hours: 'Horas',
        minutes: 'Minutos',
        seconds: 'Segundos',
        ariaLabel: 'Cuenta regresiva para el dia de la boda'
      },
      home: {
        heroImageAlt: 'Montaje romantico de mesa para boda',
        coupleNames: 'Victoria A. Solis & Austin H. Lipe',
        heroDate: '29 de MAYO de 2027 • Aguascalientes, Mexico',
        navAriaLabel: 'Secciones de la pagina de la boda',
        navGallery: 'Galeria',
        navSaveTheDate: 'Reserva la fecha',
        navWeekend: 'Fin de semana',
        navTravel: 'Viaje',
        navRegistry: 'Regalos',
        navRsvp: 'RSVP',
        intro: 'Nos emociona mucho celebrar con ustedes. Esta pagina tiene las ultimas novedades de la boda y detalles de viaje para Aguascalientes.',
        locationsHeading: 'Ubicaciones',
        locationMassLabel: 'Misa nupcial',
        locationMassBody: 'La misa nupcial se llevara a cabo aqui a las 2:00pm.',
        parkingLabel: 'Estacionamiento:',
        priceLabel: 'Costo:',
        viewNearbyParking: 'Ver estacionamiento cercano',
        locationMassParkingHtml: '<strong>Estacionamiento:</strong> Este es el mejor estacionamiento cercano: <a class="location-link" href="https://maps.app.goo.gl/FQJDmRRY8GfZZZhb7" target="_blank" rel="noreferrer">Ver estacionamiento cercano</a>',
        locationMassPriceHtml: '<strong>Costo:</strong> El estacionamiento cuesta aproximadamente 20 pesos por hora.',
        locationReceptionLabel: 'Recepcion',
        locationReceptionBody: 'Aqui se llevaran a cabo el coctel, la cena, el corte del pastel y la despedida.',
        locationReceptionParkingHtml: '<strong>Estacionamiento:</strong> Hay estacionamiento en el lugar.',
        locationReceptionPriceHtml: '<strong>Costo:</strong> El precio del estacionamiento aun esta por confirmarse.',
        timelineHeading: 'Itinerario del dia de la boda',
        timelineAriaLabel: 'Itinerario del dia de la boda',
        timelineMassTitle: 'Misa nupcial',
        timelineMassBody: 'Ceremonia de boda en la Catedral de Aguascalientes.',
        timelinePhotosTitle: 'Sesion de fotos',
        timelinePhotosBody: 'Fotos con la familia, la corte nupcial y los recien casados.',
        timelineCocktailTitle: 'Hora del coctel',
        timelineCocktailBody: 'Bebidas, musica y tiempo para reunirse antes de la cena.',
        timelineDinnerTitle: 'Cena de recepcion',
        timelineDinnerBody: 'Cena y celebracion con nuestra familia y amigos.',
        timelineFarewellTitle: 'Despedida',
        timelineFarewellBody: 'Un ultimo adios para cerrar la celebracion de la boda.',
        timelineNote: 'Los horarios y direcciones finales se compartiran directamente con los invitados.',
        attireHeading: 'Guia de vestimenta',
        attireIntro: 'Invitamos a nuestros invitados a usar vestimenta semi formal para la celebracion de la boda.',
        attireMenLabel: 'Hombres',
        attireMenBody: 'Traje o saco sport (opcional), camisa de vestir, pantalon de vestir y zapatos de vestir',
        attireWomenLabel: 'Mujeres',
        attireWomenBody: 'Vestido fresco, vestido midi, jumpsuit o tacones/sandalias.',
        transportationHeading: 'Transporte',
        transportationAirport: 'Aeropuerto: Aeropuerto de Aguascalientes, Mexico',
        transportationGettingAround: 'Transporte: Uber/taxi disponible en la mayoria de las zonas',
        transportationDistance: 'Distancia del aeropuerto a los hoteles: Aguascalientes, Aguascalientes (AGU-Licenciado Jesus Teran Peredo Intl.) - 45 min en auto',
        hotelsHeading: 'Hospedaje en hoteles',
        hotelCaption: 'Para su comodidad se apartaron habitaciones en el siguiente hotel con tarifas especiales para la boda',
        hotelColHotel: 'Hotel',
        hotelColAddress: 'Direccion',
        hotelColPrice: 'Rango de precio',
        hotelColBreakfast: 'Desayuno',
        hotelColParking: 'Estacionamiento',
        hotelColTransport: 'Transporte',
        hotelColOnSite: 'En el lugar',
        hotel1Breakfast: 'Desayuno completo incluido',
        hotel1Parking: 'Estacionamiento gratis',
        hotel1Transport: 'Transporte al aeropuerto las 24 horas bajo solicitud con cargo adicional',
        hotel1OnSite: 'Wifi gratis, restaurante, bar, aire acondicionado, terraza',
        hotel2Breakfast: 'No aparece listado',
        hotel2Parking: 'Estacionamiento gratis',
        hotel2Transport: 'Uber/taxi disponible cerca',
        hotel2OnSite: 'Wifi gratis, restaurante, bar, aire acondicionado',
        hotel3Breakfast: 'Desayuno buffet con costo (250-300 MXN)',
        hotel3Parking: 'Estacionamiento gratis',
        hotel3Transport: 'Uber/taxi disponible cerca',
        hotel3OnSite: 'Wifi gratis, restaurante, bar/lounge, alberca, terraza en azotea, aire acondicionado',
        nearbyHeading: 'Que hay cerca en Zona Centro',
        nearby1: 'Plaza de la Patria - caminata de 2-5 min',
        nearby2: 'Catedral Basilica de Nuestra Senora de la Asuncion - caminata de 3-7 min',
        nearby3: 'Palacio de Gobierno de Aguascalientes - caminata de 2-3 min',
        nearby4: 'Museo Nacional de la Muerte - caminata de 4-9 min',
        nearby5: 'Feria de San Marcos - caminata de 10-14 min',
        nearby6: 'Templo de San Antonio - caminata de 10-14 min',
        restaurantsHeading: 'Restaurantes cerca en Zona Centro',
        restaurants1: 'Cafe San Marcos - caminata de 8 min',
        restaurants2: 'Manrique Restaurant - caminata de 3 min',
        restaurants3: 'Crokas Crepes - caminata de 1 min',
        restaurants4: 'KFC - caminata de 1 min',
        restaurants5: 'Bx Pizza - caminata de 1 min',
        restaurants6: 'BX Burger - caminata de 1 min',
        registryHeading: 'Mesa de regalos',
        registryIntro: 'Su presencia es el mejor regalo, pero si desean bendecirnos con algo, pueden usar nuestra mesa de regalos de Amazon:',
        registryLink: 'Ver la mesa de regalos de boda de Victoria y Austin en Amazon',
        rsvpHeading: 'RSVP',
        rsvpIntro: 'Por favor usen el enlace personalizado de RSVP que recibieron en su invitacion de Victoria o Austin.',
        rsvpNote: 'Debido a limitaciones del lugar, solo podemos recibir a los invitados que aparecen en su invitacion.',
        faqHeading: 'Preguntas frecuentes',
        faq1Question: 'Puedo llevar acompanante?',
        faq1Answer: 'La cantidad de invitados que pueden traer esta especificada en el enlace de RSVP de su invitacion.',
        faq2Question: 'Puedo llevar ninos?',
        faq2Answer: 'Debido a limitaciones del lugar, solo podemos recibir a los invitados que aparecen en su invitacion.',
        faq3Question: 'Cual es el codigo de vestimenta?',
        faq3Answer: 'Vestimenta semi formal.',
        faq4Question: 'La misa nupcial sera en ingles o en espanol?',
        faq4Answer: 'Sera una combinacion de ambos idiomas y el sacerdote es bilingue.',
        faq5Question: 'Donde me estaciono para la misa nupcial?',
        faq5AnswerHtml: '<p>Este es el mejor estacionamiento cercano: <a class="location-link" href="https://maps.app.goo.gl/FQJDmRRY8GfZZZhb7" target="_blank" rel="noreferrer">Ver estacionamiento cercano</a></p><p>El estacionamiento cuesta aproximadamente 20 pesos por hora.</p>',
        faq6Question: 'Donde me estaciono para la recepcion?',
        faq6AnswerHtml: '<p>Hay estacionamiento en el lugar.</p><p>El precio del estacionamiento aun esta por confirmarse.</p>',
        faq7Question: 'A que hora debo llegar para la misa nupcial?',
        faq7AnswerHtml: '<p>Recomendamos llegar 15 minutos antes de la misa nupcial en la catedral.</p><p>Si se estacionan en el estacionamiento cercano, por favor consideren tambien unos 5 minutos caminando hasta la catedral.</p>',
        faq8Question: 'A que hora termina la recepcion?',
        faq8Answer: 'La recepcion es de 5:30pm a 11:30pm.'
        ,
        thanksBody: 'Gracias por acompannarnos en este dia tan especial. Nos sentimos muy queridos por su presencia y su apoyo, y estamos emocionados de celebrar juntos en Aguascalientes.',
        thanksImageAlt: 'Retrato de compromiso de Victoria y Austin'
      },
      gallery: {
        topbarBack: 'Volver al inicio de la boda',
        heroImageAlt: 'Imagen de portada de la galeria de Victoria y Austin',
        eyebrow: 'Galeria de fotos',
        heading: 'Galeria',
        intro: 'Una pequena coleccion de los momentos que nos trajeron hasta aqui y de los que nunca queremos olvidar.',
        sectionHeading: 'Coleccion de boda',
        sectionIntro: 'Haz clic en cualquier imagen para abrirla en tamano grande.',
        emptyStateHtml: 'Aun no hay imagenes en la galeria. Agrega fotos a <code>assets/gallery/web/</code> y actualiza <code>gallery/gallery-data.js</code>.',
        openImageAria: 'Abrir {title}',
        prev: 'Anterior',
        next: 'Siguiente',
        close: 'Cerrar'
      },
      saveTheDate: {
        topbarBack: 'Volver al inicio de la boda',
        eyebrow: 'Un pequeno adelanto',
        heading: 'Victoria y Austin: Reserva la fecha',
        intro: 'Nos emociona mucho celebrar con ustedes. Disfruten este pequeno adelanto y aparten el 29 de mayo de 2027 para nuestra boda en Aguascalientes, Mexico.',
        videoFallback: 'Su navegador no admite la reproduccion de video. Intenten abrir esta pagina en un navegador moderno.',
        bottomBack: 'Ir a nuestro sitio web de la boda'
      },
      rsvp: {
        title: 'RSVP',
        loading: 'Cargando su invitacion...',
        invalidInvite: 'Enlace de RSVP invalido o inactivo.',
        missingHousehold: 'Esta invitacion no tiene un hogar asignado.',
        householdFallback: 'Su grupo',
        noGuests: 'No se encontraron invitados para esta invitacion.',
        selectPending: 'Aun decidiendo',
        selectYes: 'Si, asistire 🎉',
        selectNo: 'No, no podre asistir',
        saveButton: 'Guardar RSVP',
        saveError: 'No se pudo guardar el RSVP en este momento. Intentalo de nuevo en un momento.',
        successYesHtml: 'Increible: no vemos la hora de celebrar con ustedes. 🎉<br/>Para ver las ultimas novedades de la boda y la informacion de viaje a Aguascalientes, usa la pagina principal de la boda.<br/><a class="quick-link" href="/wedding/">Ir a la pagina principal de la boda →</a>',
        successNoHtml: 'Los vamos a extranar y agradecemos que nos avisen. 💛<br/><a class="quick-link" href="/wedding/">Novedades y detalles de la boda →</a>',
        successPendingHtml: 'Guardado. Pueden actualizar su RSVP en cualquier momento desde este mismo enlace.<br/><a class="quick-link" href="/wedding/">Pagina principal de la boda →</a>',
        saveErrorHtml: 'No se pudo guardar el RSVP en este momento. Intentalo de nuevo en un momento.',
        inviteSubtitle: 'Por favor envia una respuesta por cada persona listada abajo. La pagina principal de la boda tiene las ultimas novedades y detalles de viaje para Aguascalientes.',
        loadError: 'No se pudo cargar el RSVP.',
        titleWithHousehold: 'RSVP • {householdName}'
      }
    }
  };

  function getBrowserLanguage() {
    const browserLanguage = (navigator.language || '').toLowerCase();
    return browserLanguage.startsWith('es') ? 'es' : DEFAULT_LANGUAGE;
  }

  function getSavedLanguage() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function normalizeLanguage(language) {
    return SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
  }

  function getLanguage() {
    return normalizeLanguage(getSavedLanguage() || getBrowserLanguage());
  }

  function setLanguage(language) {
    const normalized = normalizeLanguage(language);
    try {
      window.localStorage.setItem(STORAGE_KEY, normalized);
    } catch (error) {
      // Ignore storage failures and keep updating the live page.
    }
    applyPageTranslations(normalized);
    window.dispatchEvent(new CustomEvent('wedding-languagechange', { detail: { language: normalized } }));
  }

  function resolveValue(language, key) {
    const segments = key.split('.');
    let value = translations[language];
    for (const segment of segments) {
      value = value?.[segment];
    }
    if (value == null && language !== DEFAULT_LANGUAGE) {
      return resolveValue(DEFAULT_LANGUAGE, key);
    }
    return value;
  }

  function formatValue(value, params = {}) {
    if (typeof value !== 'string') return value;
    return value.replace(/\{(\w+)\}/g, (_, token) => params[token] ?? '');
  }

  function translate(key, params = {}, language = getLanguage()) {
    const value = resolveValue(language, key);
    return formatValue(value, params);
  }

  function applyTextTranslations(language) {
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const key = node.getAttribute('data-i18n');
      const value = resolveValue(language, key);
      if (typeof value === 'string') node.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach((node) => {
      const key = node.getAttribute('data-i18n-html');
      const value = resolveValue(language, key);
      if (typeof value === 'string') node.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-attrs]').forEach((node) => {
      const entries = node.getAttribute('data-i18n-attrs').split(',');
      entries.forEach((entry) => {
        const [attribute, key] = entry.split(':').map((item) => item.trim());
        const value = resolveValue(language, key);
        if (attribute && typeof value === 'string') node.setAttribute(attribute, value);
      });
    });
  }

  function syncLanguageControls(language) {
    document.querySelectorAll('[data-language-toggle]').forEach((toggle) => {
      toggle.querySelectorAll('[data-lang]').forEach((button) => {
        const isActive = button.getAttribute('data-lang') === language;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });

      const flag = toggle.querySelector('[data-language-flag]');
      if (flag) flag.textContent = LANGUAGE_FLAGS[language] || '';
    });
  }

  function applyPageTranslations(language) {
    document.documentElement.lang = language;
    applyTextTranslations(language);
    syncLanguageControls(language);

    const pageTitleKey = document.body.getAttribute('data-title-key');
    if (pageTitleKey) {
      const title = resolveValue(language, pageTitleKey);
      if (typeof title === 'string') document.title = title;
    }
  }

  function initializeLanguageToggle() {
    document.querySelectorAll('[data-language-toggle]').forEach((toggle) => {
      toggle.querySelectorAll('[data-lang]').forEach((button) => {
        button.addEventListener('click', () => setLanguage(button.getAttribute('data-lang')));
      });
    });
  }

  window.WEDDING_I18N = {
    translations,
    getLanguage,
    setLanguage,
    t: translate,
    applyPageTranslations
  };

  document.addEventListener('DOMContentLoaded', () => {
    initializeLanguageToggle();
    applyPageTranslations(getLanguage());
  });
})();
