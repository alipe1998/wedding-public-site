(() => {
  const STORAGE_KEY = 'wedding-language';
  const DEFAULT_LANGUAGE = 'en';
  const SUPPORTED_LANGUAGES = ['en', 'es'];
  const LANGUAGE_FLAGS = {
    en: '/wedding/assets/flag-us.svg',
    es: '/wedding/assets/flag-mx.svg'
  };

  const translations = {
    en: {
      common: {
        documentTitleHome: 'Victoria A. Solis & Austin H. Lipe Wedding',
        documentTitleGallery: 'Victoria & Austin Gallery',
        documentTitleLiturgy: 'Victoria & Austin Nuptial Mass Liturgy',
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
        navWeekend: 'Timeline',
        navTravel: 'Stay & Travel',
        navLiturgy: 'Liturgy',
        navRegistry: 'Registry',
        navRsvp: 'RSVP',
        navFaq: 'FAQ',
        intro: 'We’re so excited to celebrate with you. This page has the latest updates for the wedding and Aguascalientes travel details.',
        locationsHeading: 'Locations',
        locationMassLabel: 'Nuptial Mass',
        locationMassBody: 'The Nuptial Mass will be held here at 2:00pm.',
        parkingLabel: 'Parking:',
        priceLabel: 'Price:',
        viewNearbyParking: 'View nearby parking',
        locationMassParkingHtml: '<strong>Parking:</strong> This is the best parking nearby: <a class="location-link" href="https://maps.app.goo.gl/FQJDmRRY8GfZZZhb7" target="_blank" rel="noreferrer">Pension Plaza Patria Parking</a>',
        locationMassPriceHtml: '<strong>Price:</strong> Parking garage is about 20 MXN (about US$1) per hour.',
        locationReceptionLabel: 'Reception',
        locationReceptionBody: 'The reception will begin at 5:30pm.',
        locationReceptionParkingHtml: '<strong>Parking:</strong> Free on-site parking is available.',
        locationReceptionPriceHtml: '<strong>Price:</strong> Free.',
        timelineHeading: 'Wedding Day Timeline',
        timelineAriaLabel: 'Wedding day timeline',
        timelineMassTitle: 'Nuptial Mass',
        timelineMassBody: 'Wedding ceremony at the Cathedral in Aguascalientes. Please arrive 15 minutes early.',
        timelinePhotosTitle: 'Photo Session',
        timelinePhotosBody: 'Photos with family, friends, and the newlyweds.',
        timelineCocktailTitle: 'Cocktail Hour',
        timelineCocktailBody: 'Drinks, music, and time to gather before dinner.',
        timelineDinnerTitle: 'Dinner Reception',
        timelineDinnerBody: 'Dinner and celebration with our family and friends.',
        timelineFarewellTitle: 'Farewell',
        timelineFarewellBody: 'A final goodbye to close the wedding celebration.',
        timelineNote: 'Final times and addresses will be shared directly with guests.',
        attireHeading: 'Attire Guide',
        attireIntro: 'We invite our guests to wear formal attire for the wedding celebration. Bring your dancing shoes.',
        attireMenLabel: 'Men',
        attireMenBody: 'Suit or sport coat (optional), dress shirt, dress pants, dress shoes; tie optional.',
        attireWomenLabel: 'Women',
        attireWomenBody: 'Sundress, midi dress, jumpsuit, heels/sandals.',
        attireCeremonyNote: 'Religious Ceremony: Since the ceremony will take place in the church, we recommend that ladies bring a shawl, rebozo, or light garment to cover their shoulders during the ceremony.',
        transportationHeading: 'Transportation',
        transportationAirportHtml: '✈️ Airport: Aeropuerto International de Aguascalientes — <a class="location-link" href="https://maps.app.goo.gl/qabmxnW9hZhS8LKe6" target="_blank" rel="noreferrer">Carretera Panamericana Km 22, Peñuelas, 20340 Aguascalientes, Ags., Mexico</a>',
        transportationGettingAround: '🚕 Transportation: Uber/taxi available in most areas',
        transportationDistance: 'Airport distance to recommended hotels in Zona Centro — 45 min drive',
        hotelsDistance: 'Recommended hotels are about 15–20 min from the wedding venue',
        hotelsHeading: 'Hotel Accommodations',
        hotelsSubtitle: 'In Zona Centro',
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
        hotel2Breakfast: 'Breakfast available',
        hotel2Parking: 'Free self parking',
        hotel2Transport: 'Uber/taxi available nearby',
        hotel2OnSite: 'Free Wifi, restaurant, bar, air conditioning',
        hotel3Breakfast: 'Buffet breakfast for a fee (250-300 MXN)',
        hotel3Parking: 'Free self parking',
        hotel3Transport: 'Uber/taxi available nearby',
        hotel3OnSite: 'Free Wifi, restaurant, bar/lounge, pool, rooftop terrace, air conditioning',
        nearbyHeading: "What's Nearby Zona Centro",
        nearby1: 'Plaza de la Patria - 2-5 min walk',
        nearby2: 'Catedral de Aguascalientes - 3-7 min walk (Our Wedding Location 👰🤵)',
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
        registryLink: "View Victoria & Austin's Amazon Wedding Registry",
        rsvpHeading: 'RSVP',
        rsvpIntro: 'Please use your personalized RSVP link you received in your invitation from Victoria or Austin.',
        faqHeading: 'FAQ',
        faq1Question: 'Can I bring a plus one?',
        faq1Answer: 'The number of guests you are allowed to bring is specified in your RSVP invite link.',
        faq2Question: 'Can I bring children?',
        faq2Answer: 'Please check the number of guests, including children, listed on your invitation.',
        faq3Question: 'What is the dress code?',
        faq3Answer: 'Formal attire.',
        faq4Question: 'Will the Nuptial Mass be in English or Spanish?',
        faq4Answer: 'The Mass will be celebrated in English and Spanish by a bilingual priest.',
        faq5Question: 'Where do I park for the Nuptial Mass?',
        faq5AnswerHtml: '<p>This is the best parking nearby: <a class="location-link" href="https://maps.app.goo.gl/FQJDmRRY8GfZZZhb7" target="_blank" rel="noreferrer">View nearby parking</a></p><p>Parking garage is about 20 MXN (about US$1) per hour.</p>',
        faq6Question: 'Where do I park for the reception?',
        faq6AnswerHtml: '<p>Free on-site parking is available.</p>',
        faq7Question: 'When should I show up for the Nuptial Mass?',
        faq7AnswerHtml: '<p>We recommend arriving 15 minutes early for the Nuptial Mass at the cathedral.</p><p>If you are parking in the nearby garage, please also account for about a 5 minute walk to the cathedral.</p>',
        faq8Question: 'What time does the reception end?',
        faq8Answer: 'The Reception is from 5:30pm-11:30pm.'
        ,
        thanksBody: 'Thank you for joining us on this special day. We feel so loved by your presence and support, and we cannot wait to celebrate together in Aguascalientes.',
        thanksImageAlt: 'Victoria and Austin engagement portrait'
      },
      liturgy: {
        eyebrow: 'May 29, 2027 · Aguascalientes, Mexico',
        heading: 'Nuptial Mass Liturgy',
        intro: 'We look forward to praying and celebrating with you. The readings and music selections will be shared here once they are finalized.',
        orderHeading: 'Order of the Mass',
        introRitesHeading: 'Introductory Rites',
        introRitesItems: 'Entrance Procession|Greeting and Sign of the Cross|Penitential Act|Gloria|Opening Prayer',
        wordHeading: 'Liturgy of the Word',
        firstReadingLabel: 'First Reading',
        firstReadingValue: 'Reading to be announced',
        psalmLabel: 'Responsorial Psalm',
        psalmValue: 'Psalm to be announced',
        secondReadingLabel: 'Second Reading',
        secondReadingValue: 'Reading to be announced',
        gospelLabel: 'Gospel',
        gospelValue: 'Gospel to be announced',
        homilyLabel: 'Homily',
        prayerLabel: 'Universal Prayer',
        marriageHeading: 'Rite of Marriage',
        marriageItems: 'Questions Before the Consent|Exchange of Consent|Blessing and Giving of Rings|Prayer of the Faithful',
        eucharistHeading: 'Liturgy of the Eucharist',
        eucharistItems: 'Presentation of the Gifts|Eucharistic Prayer|The Lord’s Prayer|Nuptial Blessing|Sign of Peace|Holy Communion',
        concludingHeading: 'Concluding Rites',
        concludingItems: 'Final Blessing|Recessional',
        readingsNote: 'Full readings, psalm responses, and music selections will be added here soon.',
        backHome: 'Back to Wedding Home'
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
        documentTitleGallery: 'Galería de Victoria y Austin',
        documentTitleSaveTheDate: 'Reserva la fecha de Victoria y Austin',
        documentTitleLiturgy: 'Liturgia de la misa nupcial de Victoria y Austin',
        languageLabel: 'Idioma',
        languageEnglish: 'English',
        languageSpanish: 'Español'
      },
      countdown: {
        days: 'Días',
        hours: 'Horas',
        minutes: 'Minutos',
        seconds: 'Segundos',
        ariaLabel: 'Cuenta regresiva para el día de la boda'
      },
      home: {
        heroImageAlt: 'Montaje romántico de mesa para boda',
        coupleNames: 'Victoria A. Solis & Austin H. Lipe',
        heroDate: '29 de mayo de 2027 • Aguascalientes, México',
        navAriaLabel: 'Secciones de la página de la boda',
        navGallery: 'Galería',
        navSaveTheDate: 'Reserva la fecha',
        navWeekend: 'Itinerario',
        navTravel: 'Hospedaje y viaje',
        navLiturgy: 'Liturgia',
        navRegistry: 'Regalos',
        navRsvp: 'RSVP',
        navFaq: 'FAQ',
        intro: 'Nos emociona mucho celebrar con ustedes. Esta página tiene las últimas novedades de la boda y detalles de viaje para Aguascalientes.',
        locationsHeading: 'Ubicaciones',
        locationMassLabel: 'Misa nupcial',
        locationMassBody: 'La misa nupcial se llevará a cabo aquí a las 2:00 p. m.',
        parkingLabel: 'Estacionamiento:',
        priceLabel: 'Costo:',
        viewNearbyParking: 'Ver estacionamiento cercano',
        locationMassParkingHtml: '<strong>Estacionamiento:</strong> Este es el mejor estacionamiento cercano: <a class="location-link" href="https://maps.app.goo.gl/FQJDmRRY8GfZZZhb7" target="_blank" rel="noreferrer">Pension Plaza Patria Parking</a>',
        locationMassPriceHtml: '<strong>Costo:</strong> El estacionamiento cuesta aproximadamente 20 MXN (aprox. US$1) por hora.',
        locationReceptionLabel: 'Recepción',
        locationReceptionBody: 'La recepción comenzará a las 5:30 p. m.',
        locationReceptionParkingHtml: '<strong>Estacionamiento:</strong> Hay estacionamiento gratuito en el lugar.',
        locationReceptionPriceHtml: '<strong>Costo:</strong> Gratis.',
        timelineHeading: 'Itinerario del día de la boda',
        timelineAriaLabel: 'Itinerario del día de la boda',
        timelineMassTitle: 'Misa nupcial',
        timelineMassBody: 'Ceremonia de boda en la Catedral de Aguascalientes. Por favor lleguen 15 minutos antes.',
        timelinePhotosTitle: 'Sesión de fotos',
        timelinePhotosBody: 'Fotos con la familia, los amigos y los recién casados.',
        timelineCocktailTitle: 'Hora del cóctel',
        timelineCocktailBody: 'Bebidas, música y tiempo para reunirse antes de la cena.',
        timelineDinnerTitle: 'Cena de recepción',
        timelineDinnerBody: 'Cena y celebración con nuestra familia y amigos.',
        timelineFarewellTitle: 'Despedida',
        timelineFarewellBody: 'Un último adiós para cerrar la celebración de la boda.',
        timelineNote: 'Los horarios y las direcciones finales se compartirán directamente con los invitados.',
        attireHeading: 'Guía de vestimenta',
        attireIntro: 'Los invitamos a vestir con atuendo formal para la celebración de la boda. ¡Y no olviden traer muchas ganas de bailar!',
        attireMenLabel: 'Hombres',
        attireMenBody: 'Camisa de vestir, pantalón de vestir y zapatos formales. Corbata opcional.',
        attireWomenLabel: 'Mujeres',
        attireWomenBody: 'Vestido largo o midi de cóctel, conjunto formal, acompañado de zapatillas o tacones.',
        attireCeremonyNote: 'Ceremonia religiosa: Como la ceremonia se llevará a cabo en la iglesia, les recomendamos a las damas llevar un chal, rebozo o una prenda ligera para cubrir los hombros durante la ceremonia.',
        transportationHeading: 'Transporte',
        transportationAirportHtml: '✈️ Aeropuerto: Aeropuerto Internacional de Aguascalientes — <a class="location-link" href="https://maps.app.goo.gl/qabmxnW9hZhS8LKe6" target="_blank" rel="noreferrer">Carretera Panamericana Km 22, Peñuelas, 20340 Aguascalientes, Ags., México</a>',
        transportationGettingAround: '🚕 Transporte: Uber/taxi disponible en la mayoría de las zonas',
        transportationDistance: 'Distancia del aeropuerto a los hoteles recomendados en Zona Centro — 45 min en auto',
        hotelsDistance: 'Los hoteles recomendados están a unos 15–20 min del lugar de la boda',
        hotelsHeading: 'Opciones de hospedaje',
        hotelsSubtitle: 'En Zona Centro',
        hotelColHotel: 'Hotel',
        hotelColAddress: 'Dirección',
        hotelColPrice: 'Rango de precio',
        hotelColBreakfast: 'Desayuno',
        hotelColParking: 'Estacionamiento',
        hotelColTransport: 'Transporte',
        hotelColOnSite: 'En el lugar',
        hotel1Breakfast: 'Desayuno completo incluido',
        hotel1Parking: 'Estacionamiento gratis',
        hotel1Transport: 'Transporte al aeropuerto las 24 horas bajo solicitud con cargo adicional',
        hotel1OnSite: 'Wifi gratis, restaurante, bar, aire acondicionado, terraza',
        hotel2Breakfast: 'Desayuno disponible',
        hotel2Parking: 'Estacionamiento gratis',
        hotel2Transport: 'Uber/taxi disponible cerca',
        hotel2OnSite: 'Wifi gratis, restaurante, bar, aire acondicionado',
        hotel3Breakfast: 'Desayuno buffet con costo (250-300 MXN)',
        hotel3Parking: 'Estacionamiento gratis',
        hotel3Transport: 'Uber/taxi disponible cerca',
        hotel3OnSite: 'Wifi gratis, restaurante, bar/lounge, alberca, terraza en azotea, aire acondicionado',
        nearbyHeading: 'Qué hay cerca de la Zona Centro',
        nearby1: 'Plaza de la Patria - caminata de 2-5 min',
        nearby2: 'Catedral de Aguascalientes - caminata de 3-7 min (Ubicación de nuestra boda 👰🤵)',
        nearby3: 'Palacio de Gobierno de Aguascalientes - caminata de 2-3 min',
        nearby4: 'Museo Nacional de la Muerte - caminata de 4-9 min',
        nearby5: 'Feria de San Marcos - caminata de 10-14 min',
        nearby6: 'Templo de San Antonio - caminata de 10-14 min',
        restaurantsHeading: 'Restaurantes cerca de la Zona Centro',
        restaurants1: 'Café San Marcos - caminata de 8 min',
        restaurants2: 'Manrique Restaurant - caminata de 3 min',
        restaurants3: 'Crokas Crepes - caminata de 1 min',
        restaurants4: 'KFC - caminata de 1 min',
        restaurants5: 'Bx Pizza - caminata de 1 min',
        restaurants6: 'BX Burger - caminata de 1 min',
        registryHeading: 'Registro de regalos',
        registryLink: 'Ver el registro de regalos de boda de Victoria y Austin en Amazon',
        rsvpHeading: 'RSVP',
        rsvpIntro: 'Por favor, usen el enlace personalizado de RSVP que recibieron en su invitación de Victoria o Austin.',
        faqHeading: 'Preguntas frecuentes',
        faq1Question: '¿Puedo llevar acompañante?',
        faq1Answer: 'La cantidad de invitados que pueden traer está especificada en el enlace de RSVP de su invitación.',
        faq2Question: '¿Puedo llevar niños?',
        faq2Answer: 'Por favor, revisen la cantidad de invitados, incluidos los niños, que aparece en su invitación.',
        faq3Question: '¿Cuál es el código de vestimenta?',
        faq3Answer: 'Vestimenta formal.',
        faq4Question: '¿La misa nupcial será en inglés o en español?',
        faq4Answer: 'La misa se celebrará en inglés y español por un sacerdote bilingüe.',
        faq5Question: '¿Dónde puedo estacionarme para la misa nupcial?',
        faq5AnswerHtml: '<p>Este es el mejor estacionamiento cercano: <a class="location-link" href="https://maps.app.goo.gl/FQJDmRRY8GfZZZhb7" target="_blank" rel="noreferrer">Ver estacionamiento cercano</a></p><p>El estacionamiento cuesta aproximadamente 20 MXN (aprox. US$1) por hora.</p>',
        faq6Question: '¿Dónde puedo estacionarme para la recepción?',
        faq6AnswerHtml: '<p>Hay estacionamiento gratuito en el lugar.</p>',
        faq7Question: '¿A qué hora debo llegar para la misa nupcial?',
        faq7AnswerHtml: '<p>Recomendamos llegar 15 minutos antes de la misa nupcial en la catedral.</p><p>Si se estacionan en el estacionamiento cercano, por favor, consideren también unos 5 minutos a pie hasta la catedral.</p>',
        faq8Question: '¿A qué hora termina la recepción?',
        faq8Answer: 'La recepción es de 5:30 p. m. a 11:30 p. m.'
        ,
        thanksBody: 'Gracias por acompañarnos en este día tan especial. Nos sentimos muy queridos por su presencia y su apoyo, y estamos emocionados de celebrar juntos en Aguascalientes.',
        thanksImageAlt: 'Retrato de compromiso de Victoria y Austin'
      },
      liturgy: {
        eyebrow: '29 de mayo de 2027 · Aguascalientes, México',
        heading: 'Liturgia de la misa nupcial',
        intro: 'Esperamos orar y celebrar con ustedes. Las lecturas y la selección de música se compartirán aquí cuando estén confirmadas.',
        orderHeading: 'Orden de la misa',
        introRitesHeading: 'Ritos iniciales',
        introRitesItems: 'Procesión de entrada|Saludo y señal de la cruz|Acto penitencial|Gloria|Oración colecta',
        wordHeading: 'Liturgia de la palabra',
        firstReadingLabel: 'Primera lectura',
        firstReadingValue: 'Lectura por anunciarse',
        psalmLabel: 'Salmo responsorial',
        psalmValue: 'Salmo por anunciarse',
        secondReadingLabel: 'Segunda lectura',
        secondReadingValue: 'Lectura por anunciarse',
        gospelLabel: 'Evangelio',
        gospelValue: 'Evangelio por anunciarse',
        homilyLabel: 'Homilía',
        prayerLabel: 'Oración universal',
        marriageHeading: 'Rito del matrimonio',
        marriageItems: 'Preguntas antes del consentimiento|Intercambio de consentimiento|Bendición y entrega de anillos|Oración de los fieles',
        eucharistHeading: 'Liturgia de la Eucaristía',
        eucharistItems: 'Presentación de las ofrendas|Plegaria eucarística|Padre nuestro|Bendición nupcial|Rito de la paz|Sagrada comunión',
        concludingHeading: 'Ritos de conclusión',
        concludingItems: 'Bendición final|Procesión de salida',
        readingsNote: 'Las lecturas completas, las respuestas del salmo y la selección de música se agregarán aquí pronto.',
        backHome: 'Volver al inicio de la boda'
      },
      gallery: {
        topbarBack: 'Volver al inicio de la boda',
        heroImageAlt: 'Imagen de portada de la galería de Victoria y Austin',
        eyebrow: 'Galería de fotos',
        heading: 'Galería',
        intro: 'Una pequeña colección de los momentos que nos trajeron hasta aquí y de los que nunca queremos olvidar.',
        sectionHeading: 'Colección de boda',
        sectionIntro: 'Haz clic en cualquier imagen para abrirla en tamaño grande.',
        emptyStateHtml: 'Aún no hay imágenes en la galería. Agrega fotos a <code>assets/gallery/web/</code> y actualiza <code>gallery/gallery-data.js</code>.',
        openImageAria: 'Abrir {title}',
        prev: 'Anterior',
        next: 'Siguiente',
        close: 'Cerrar'
      },
      saveTheDate: {
        topbarBack: 'Volver al inicio de la boda',
        eyebrow: 'Un pequeño adelanto',
        heading: 'Victoria y Austin: Reserva la fecha',
        intro: 'Nos emociona mucho celebrar con ustedes. Disfruten este pequeño adelanto y reserven el 29 de mayo de 2027 para nuestra boda en Aguascalientes, México.',
        videoFallback: 'Su navegador no admite la reproducción de video. Intenten abrir esta página en un navegador moderno.',
        bottomBack: 'Ir a nuestro sitio web de la boda'
      },
      rsvp: {
        title: 'RSVP',
        loading: 'Cargando su invitación...',
        invalidInvite: 'Enlace de RSVP inválido o inactivo.',
        missingHousehold: 'Esta invitación no tiene un grupo asignado.',
        householdFallback: 'Su grupo',
        noGuests: 'No se encontraron invitados para esta invitación.',
        selectPending: 'Aún no decido',
        selectYes: 'Sí, asistiré 🎉',
        selectNo: 'No, no podré asistir',
        saveButton: 'Guardar RSVP',
        saveError: 'No se pudo guardar el RSVP en este momento. Vuelve a intentarlo en un momento.',
        successYesHtml: '¡Increíble! Estamos ansiosos por celebrar con ustedes. 🎉<br/>Para ver las últimas novedades de la boda y la información de viaje a Aguascalientes, visiten la página principal de la boda.<br/><a class="quick-link" href="/wedding/">Ir a la página principal de la boda →</a>',
        successNoHtml: 'Los vamos a extrañar y agradecemos que nos avisen. 💛<br/><a class="quick-link" href="/wedding/">Novedades y detalles de la boda →</a>',
        successPendingHtml: 'Guardado. Pueden actualizar su RSVP en cualquier momento desde este mismo enlace.<br/><a class="quick-link" href="/wedding/">Página principal de la boda →</a>',
        saveErrorHtml: 'No se pudo guardar el RSVP en este momento. Vuelve a intentarlo en un momento.',
        inviteSubtitle: 'Por favor, envíen una respuesta por cada persona que aparece a continuación. La página principal de la boda tiene las últimas novedades y detalles de viaje para Aguascalientes.',
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
      if (flag) flag.src = LANGUAGE_FLAGS[language] || '';
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
