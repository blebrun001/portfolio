const SUPPORTED_LANGUAGES = ["en", "ca", "es", "fr"];

const COMMON_TRANSLATIONS = {
  en: {
    nav: ["Photography", "DataViz", "3D", "Infographics", "Branding", "Print", "Contact"],
    skip: "Skip to content",
    navigation: "Main navigation",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    backHome: "Back to homepage",
    backTop: "Back to top",
    language: "Choose language",
    footer: "Made with love by Brice Lebrun — Tarragona, Spain — This is a personal, non-commercial portfolio website. All content is the property of Brice Lebrun. All rights reserved. No cookies are used. Information sent through the contact form is used only to reply.",
    lightbox: "Enlarged image",
    closeImage: "Close enlarged image",
    enlargeImage: "enlarge image",
  },
  ca: {
    nav: ["Fotografia", "Dades", "3D", "Infografies", "Identitat", "Impressió", "Contacte"],
    skip: "Ves al contingut",
    navigation: "Navegació principal",
    openMenu: "Obre el menú de navegació",
    closeMenu: "Tanca el menú de navegació",
    backHome: "Torna a la pàgina d’inici",
    backTop: "Torna a l’inici",
    language: "Tria l’idioma",
    footer: "Fet amb amor per Brice Lebrun — Tarragona, Espanya — Aquest és un web de portafolis personal i no comercial. Tot el contingut és propietat de Brice Lebrun. Tots els drets reservats. No s’utilitzen galetes. La informació enviada mitjançant el formulari de contacte només s’utilitza per respondre.",
    lightbox: "Imatge ampliada",
    closeImage: "Tanca la imatge ampliada",
    enlargeImage: "amplia la imatge",
  },
  es: {
    nav: ["Fotografía", "Datos", "3D", "Infografías", "Identidad", "Impresión", "Contacto"],
    skip: "Ir al contenido",
    navigation: "Navegación principal",
    openMenu: "Abrir el menú de navegación",
    closeMenu: "Cerrar el menú de navegación",
    backHome: "Volver a la página de inicio",
    backTop: "Volver al inicio",
    language: "Elegir idioma",
    footer: "Hecho con amor por Brice Lebrun — Tarragona, España — Este es un sitio web de portafolio personal y no comercial. Todo el contenido es propiedad de Brice Lebrun. Todos los derechos reservados. No se utilizan cookies. La información enviada mediante el formulario de contacto solo se utiliza para responder.",
    lightbox: "Imagen ampliada",
    closeImage: "Cerrar la imagen ampliada",
    enlargeImage: "ampliar imagen",
  },
  fr: {
    nav: ["Photographie", "Données", "3D", "Infographies", "Identité", "Impression", "Contact"],
    skip: "Aller au contenu",
    navigation: "Navigation principale",
    openMenu: "Ouvrir le menu de navigation",
    closeMenu: "Fermer le menu de navigation",
    backHome: "Retour à l’accueil",
    backTop: "Retour en haut",
    language: "Choisir la langue",
    footer: "Créé avec amour par Brice Lebrun — Tarragone, Espagne — Ce site est un portfolio personnel et non commercial. Tout son contenu est la propriété de Brice Lebrun. Tous droits réservés. Aucun cookie n’est utilisé. Les informations envoyées via le formulaire de contact servent uniquement à vous répondre.",
    lightbox: "Image agrandie",
    closeImage: "Fermer l’image agrandie",
    enlargeImage: "agrandir l’image",
  },
};

const PAGE_TRANSLATIONS = {
  index: {
    en: {
      title: "Graphic design for Science",
      heading: "Hi! I am Brice Lebrun",
      copy: "I help researchers in archaeology to visualize, illustrate and communicate about their work. I have a strong background in Archaeology, with a PhD in Physics applied to Archaeology, and an even stronger interest in graphic design. I am currently seeking entry-level opportunities in graphic design. If you have any question or want to see more of my work, don't hesitate to <a href=\"contact.html\">contact me</a>.",
    },
    ca: {
      title: "Disseny gràfic per a la ciència",
      heading: "Hola! Soc Brice Lebrun",
      copy: "Ajudo investigadors en arqueologia a visualitzar, il·lustrar i comunicar la seva feina. Tinc una sòlida formació en arqueologia, amb un doctorat en física aplicada a l’arqueologia, i un interès encara més gran pel disseny gràfic. Actualment busco oportunitats inicials en l’àmbit del disseny gràfic. Si tens cap pregunta o vols veure més treballs meus, no dubtis a <a href=\"contact.html\">contactar-me</a>.",
    },
    es: {
      title: "Diseño gráfico para la ciencia",
      heading: "¡Hola! Soy Brice Lebrun",
      copy: "Ayudo a investigadores en arqueología a visualizar, ilustrar y comunicar su trabajo. Cuento con una sólida formación en arqueología, con un doctorado en Física aplicada a la Arqueología, y un interés aún mayor por el diseño gráfico. Actualmente busco oportunidades iniciales en el ámbito del diseño gráfico. Si tienes alguna pregunta o quieres ver más trabajos míos, no dudes en <a href=\"contact.html\">contactarme</a>.",
    },
    fr: {
      title: "Design graphique pour la science",
      heading: "Bonjour ! Je suis Brice Lebrun",
      copy: "J’aide les chercheurs en archéologie à visualiser, illustrer et communiquer leurs travaux. J’ai une solide formation en archéologie, avec un doctorat en physique appliquée à l’archéologie, et un intérêt encore plus marqué pour le design graphique. Je recherche actuellement une première opportunité dans ce domaine. Pour toute question ou pour découvrir davantage mon travail, n’hésitez pas à <a href=\"contact.html\">me contacter</a>.",
    },
  },
  contact: {
    en: { title: "Contact — Brice Lebrun", description: "Contact Brice Lebrun about scientific graphic design, data visualization, 3D and illustration projects.", heading: "Tell me about your project.", intro: "Need help turning scientific ideas or data into clear, engaging visuals? Send me a few details and I’ll get back to you by email.", labels: ["Name", "Email", "Subject <span>(optional)</span>", "Message", "Leave this field empty"], privacy: "Your details are sent securely through Formspree and used only to reply to your message. They are not used for marketing.", send: "Send message", sending: "Sending…", success: "Thank you — your message has been sent.", error: "Your message could not be sent. Please try again in a moment." },
    ca: { title: "Contacte — Brice Lebrun", description: "Contacta amb Brice Lebrun per a projectes de disseny gràfic científic, visualització de dades, 3D i il·lustració.", heading: "Parla’m del teu projecte.", intro: "Necessites ajuda per convertir idees o dades científiques en visuals clars i atractius? Envia’m alguns detalls i et respondré per correu electrònic.", labels: ["Nom", "Correu electrònic", "Assumpte <span>(opcional)</span>", "Missatge", "Deixa aquest camp buit"], privacy: "Les teves dades s’envien de manera segura mitjançant Formspree i només s’utilitzen per respondre al missatge. No s’utilitzen amb finalitats comercials.", send: "Envia el missatge", sending: "Enviant…", success: "Gràcies — el teu missatge s’ha enviat.", error: "No s’ha pogut enviar el missatge. Torna-ho a provar d’aquí a un moment." },
    es: { title: "Contacto — Brice Lebrun", description: "Contacta con Brice Lebrun para proyectos de diseño gráfico científico, visualización de datos, 3D e ilustración.", heading: "Háblame de tu proyecto.", intro: "¿Necesitas ayuda para convertir ideas o datos científicos en imágenes claras y atractivas? Envíame algunos detalles y te responderé por correo electrónico.", labels: ["Nombre", "Correo electrónico", "Asunto <span>(opcional)</span>", "Mensaje", "Deja este campo vacío"], privacy: "Tus datos se envían de forma segura mediante Formspree y solo se utilizan para responder a tu mensaje. No se utilizan con fines comerciales.", send: "Enviar mensaje", sending: "Enviando…", success: "Gracias — tu mensaje ha sido enviado.", error: "No se ha podido enviar el mensaje. Inténtalo de nuevo en unos instantes." },
    fr: { title: "Contact — Brice Lebrun", description: "Contactez Brice Lebrun pour vos projets de design graphique scientifique, visualisation de données, 3D et illustration.", heading: "Parlez-moi de votre projet.", intro: "Besoin d’aide pour transformer des idées ou des données scientifiques en images claires et attrayantes ? Envoyez-moi quelques informations et je vous répondrai par e-mail.", labels: ["Nom", "E-mail", "Objet <span>(facultatif)</span>", "Message", "Laissez ce champ vide"], privacy: "Vos coordonnées sont envoyées de manière sécurisée via Formspree et servent uniquement à répondre à votre message. Elles ne sont pas utilisées à des fins commerciales.", send: "Envoyer le message", sending: "Envoi…", success: "Merci — votre message a bien été envoyé.", error: "Votre message n’a pas pu être envoyé. Veuillez réessayer dans un instant." },
  },
  photography: {
    en: { title: "Photography", heading: "Photographic Documentation", paragraphs: ["Photography is a fundamental tool in archaeological fieldwork and research communication. It captures the nuances of excavation processes, field environments, and human interactions that define scientific missions. Beyond documentation, photographs also serve as powerful visual records that support site interpretation, enhance reporting, and engage broader audiences.", "These photographs aim to document excavation contexts, fieldwork practices, and human interactions in situ. Beyond their documentary value, they seek to convey the atmosphere of the field and highlight the scientific and human dimensions of archaeological research."], captions: ["Cosmogenic nuclide sampling for active tectonic study in Kirghiztan.", "Excavation in the south of France at Les Auzières site.", "Drone acquisition in Krighiztan with the help of local kids.", "Studio portrait for the Universitat Rovira i Virgili photo contest, skull of hippopotamus.", "Studio portrait for the Universitat Rovira i Virgili photo contest, skull of hippopotamus.", "Studio portrait for the Universitat Rovira i Virgili photo contest, skull of Pan troglodytes.", "Archaeological excavation campaign in Senegal, collecting a sample for geomorphological analysis."] },
    ca: { title: "Fotografia", heading: "Documentació fotogràfica", paragraphs: ["La fotografia és una eina fonamental en el treball de camp arqueològic i en la comunicació de la recerca. Capta els matisos dels processos d’excavació, els entorns de camp i les interaccions humanes que defineixen les missions científiques. Més enllà de la documentació, les fotografies són registres visuals potents que faciliten la interpretació dels jaciments, milloren els informes i apropen la recerca a públics més amplis.", "Aquestes fotografies documenten contextos d’excavació, pràctiques de camp i interaccions humanes in situ. Més enllà del seu valor documental, transmeten l’atmosfera del treball de camp i destaquen les dimensions científica i humana de la recerca arqueològica."], captions: ["Mostreig de núclids cosmogènics per a un estudi de tectònica activa al Kirguizistan.", "Excavació al jaciment de Les Auzières, al sud de França.", "Adquisició amb dron al Kirguizistan amb l’ajuda d’infants locals.", "Retrat d’estudi per al concurs fotogràfic de la Universitat Rovira i Virgili, crani d’hipopòtam.", "Retrat d’estudi per al concurs fotogràfic de la Universitat Rovira i Virgili, crani d’hipopòtam.", "Retrat d’estudi per al concurs fotogràfic de la Universitat Rovira i Virgili, crani de Pan troglodytes.", "Campanya d’excavació arqueològica al Senegal, presa d’una mostra per a l’anàlisi geomorfològica."] },
    es: { title: "Fotografía", heading: "Documentación fotográfica", paragraphs: ["La fotografía es una herramienta fundamental en el trabajo de campo arqueológico y en la comunicación de la investigación. Capta los matices de los procesos de excavación, los entornos de campo y las interacciones humanas que definen las misiones científicas. Más allá de la documentación, las fotografías son potentes registros visuales que facilitan la interpretación de los yacimientos, mejoran los informes y acercan la investigación a públicos más amplios.", "Estas fotografías documentan contextos de excavación, prácticas de campo e interacciones humanas in situ. Más allá de su valor documental, buscan transmitir la atmósfera del trabajo de campo y destacar las dimensiones científica y humana de la investigación arqueológica."], captions: ["Muestreo de núclidos cosmogénicos para un estudio de tectónica activa en Kirguistán.", "Excavación en el yacimiento de Les Auzières, en el sur de Francia.", "Adquisición con dron en Kirguistán con la ayuda de niños locales.", "Retrato de estudio para el concurso fotográfico de la Universitat Rovira i Virgili, cráneo de hipopótamo.", "Retrato de estudio para el concurso fotográfico de la Universitat Rovira i Virgili, cráneo de hipopótamo.", "Retrato de estudio para el concurso fotográfico de la Universitat Rovira i Virgili, cráneo de Pan troglodytes.", "Campaña de excavación arqueológica en Senegal, toma de una muestra para el análisis geomorfológico."] },
    fr: { title: "Photographie", heading: "Documentation photographique", paragraphs: ["La photographie est un outil fondamental pour le travail de terrain en archéologie et la communication scientifique. Elle saisit les nuances des processus de fouille, des environnements de terrain et des interactions humaines qui caractérisent les missions scientifiques. Au-delà de la documentation, les photographies constituent de puissantes archives visuelles qui facilitent l’interprétation des sites, enrichissent les rapports et intéressent un public plus large.", "Ces photographies documentent les contextes de fouille, les pratiques de terrain et les interactions humaines in situ. Au-delà de leur valeur documentaire, elles cherchent à restituer l’atmosphère du terrain et à mettre en lumière les dimensions scientifique et humaine de la recherche archéologique."], captions: ["Échantillonnage de nucléides cosmogéniques pour une étude de tectonique active au Kirghizistan.", "Fouille sur le site des Auzières, dans le sud de la France.", "Acquisition par drone au Kirghizistan avec l’aide d’enfants du village.", "Portrait en studio pour le concours photographique de l’Universitat Rovira i Virgili, crâne d’hippopotame.", "Portrait en studio pour le concours photographique de l’Universitat Rovira i Virgili, crâne d’hippopotame.", "Portrait en studio pour le concours photographique de l’Universitat Rovira i Virgili, crâne de Pan troglodytes.", "Campagne de fouille archéologique au Sénégal, prélèvement d'échantillon pour la géomorphologie."] },
  },
  "data-visualization": {
    en: { title: "Data Visualization", heading: "Data Visualization", paragraphs: ["Data visualizations play a key role in archaeological research by transforming complex datasets into accessible and engaging narratives. They help reveal patterns, highlight temporal or spatial dynamics, and support the interpretation of large volumes of information. By combining scientific rigour with clear visual structure, infographics allow researchers to communicate their findings more effectively, not only within the academic community, but also to broader audiences.", "This infographic was designed to visually synthesise and make more accessible the dataset presented in Díaz-Rodríguez et al., 2023.", "The aim was to translate complex chronological data into a clear, engaging visual narrative that highlights temporal patterns and demographic dynamics during this major prehistoric transition. To do so, I combined classic data visualization tools and advanced vector drawing techniques."], captions: ["This infographic illustrates the demographic trend during the Middle to Upper Paleolithic transition, from Díaz-Rodríguez et al., 2023.", "This infographic illustrates the demographic trend during the Middle to Upper Paleolithic transition, from Díaz-Rodríguez et al., 2023."] },
    ca: { title: "Visualització de dades", heading: "Visualització de dades", paragraphs: ["Les visualitzacions de dades tenen un paper clau en la recerca arqueològica, ja que transformen conjunts de dades complexos en narracions accessibles i atractives. Permeten revelar patrons, destacar dinàmiques temporals o espacials i interpretar grans volums d’informació. En combinar el rigor científic amb una estructura visual clara, les infografies ajuden els investigadors a comunicar els resultats amb més eficàcia, tant dins la comunitat acadèmica com entre públics més amplis.", "Aquesta infografia es va dissenyar per sintetitzar visualment i fer més accessible el conjunt de dades presentat a Díaz-Rodríguez et al., 2023.", "L’objectiu era traduir dades cronològiques complexes en una narració visual clara i atractiva que destaqués els patrons temporals i les dinàmiques demogràfiques d’aquesta gran transició prehistòrica. Per fer-ho, vaig combinar eines clàssiques de visualització de dades amb tècniques avançades de dibuix vectorial."], captions: ["Aquesta infografia il·lustra la tendència demogràfica durant la transició del paleolític mitjà al superior, a partir de Díaz-Rodríguez et al., 2023.", "Aquesta infografia il·lustra la tendència demogràfica durant la transició del paleolític mitjà al superior, a partir de Díaz-Rodríguez et al., 2023."] },
    es: { title: "Visualización de datos", heading: "Visualización de datos", paragraphs: ["Las visualizaciones de datos desempeñan un papel clave en la investigación arqueológica al transformar conjuntos de datos complejos en narraciones accesibles y atractivas. Permiten revelar patrones, destacar dinámicas temporales o espaciales e interpretar grandes volúmenes de información. Al combinar el rigor científico con una estructura visual clara, las infografías ayudan a comunicar los resultados con mayor eficacia, tanto dentro de la comunidad académica como a públicos más amplios.", "Esta infografía se diseñó para sintetizar visualmente y hacer más accesible el conjunto de datos presentado en Díaz-Rodríguez et al., 2023.", "El objetivo era traducir datos cronológicos complejos en una narración visual clara y atractiva que destacara los patrones temporales y las dinámicas demográficas de esta gran transición prehistórica. Para ello, combiné herramientas clásicas de visualización de datos con técnicas avanzadas de dibujo vectorial."], captions: ["Esta infografía ilustra la tendencia demográfica durante la transición del Paleolítico medio al superior, a partir de Díaz-Rodríguez et al., 2023.", "Esta infografía ilustra la tendencia demográfica durante la transición del Paleolítico medio al superior, a partir de Díaz-Rodríguez et al., 2023."] },
    fr: { title: "Visualisation de données", heading: "Visualisation de données", paragraphs: ["Les visualisations de données jouent un rôle essentiel dans la recherche archéologique en transformant des ensembles de données complexes en récits accessibles et attrayants. Elles révèlent des tendances, mettent en évidence des dynamiques temporelles ou spatiales et facilitent l’interprétation de grands volumes d’informations. En associant rigueur scientifique et structure visuelle claire, les infographies permettent aux chercheurs de communiquer leurs résultats plus efficacement, au sein de la communauté académique comme auprès d’un public plus large.", "Cette infographie a été conçue pour synthétiser visuellement et rendre plus accessible le jeu de données présenté dans Díaz-Rodríguez et al., 2023.", "L’objectif était de traduire des données chronologiques complexes en un récit visuel clair et attrayant, faisant ressortir les tendances temporelles et les dynamiques démographiques de cette transition préhistorique majeure. J’ai pour cela associé des outils classiques de visualisation de données à des techniques avancées de dessin vectoriel."], captions: ["Cette infographie illustre l’évolution démographique au cours de la transition du Paléolithique moyen au Paléolithique supérieur, d’après Díaz-Rodríguez et al., 2023.", "Cette infographie illustre l’évolution démographique au cours de la transition du Paléolithique moyen au Paléolithique supérieur, d’après Díaz-Rodríguez et al., 2023."] },
  },
  infographics: {
    en: { title: "Infographics", heading: "Infographic as Visual Synthesis", paragraphs: ["Infographics play a key role in archaeological research and communication. They condense complex datasets, spatial information, and chronological sequences into a single coherent visual, making patterns and relationships immediately apparent. By bridging scientific precision with visual clarity, infographics support data analysis, enhance interpretative work, and foster public engagement with archaeological knowledge.", "For this overview of the Atapuerca Archaeological Complex, I aimed to transform complex archaeological datasets into a clear, accessible visual format. By combining spatial, temporal, and contextual information in a single visual synthesis, it enables the viewer to grasp patterns and relationships at a glance. By doing so, I was able to convey dense data with clarity, facilitating both expert analysis and public understanding."], captions: ["Infographic of the Atapuerca excavation area.", "Infographic of the Atapuerca excavation area (detail).", "Infographic of Tarragona quarries and Roman archaeological sites.", "Infographic of Tarragona quarries and Roman archaeological sites (detail).", "Infographic of selected prehistoric sites of Catalonia.", "Infographic of selected prehistoric sites of Catalonia (detail).", "Infographic project presenting the Tarragona petrochemical complex (Catalonia, Spain).", "3D infographic explaining the geomorphology of a valley in Greece.", "3D infographic explaining the geomorphology of a valley in Greece (detail).", "Map of the Protected Designations of Origin (DOP) for wines in Catalonia."] },
    ca: { title: "Infografies", heading: "La infografia com a síntesi visual", paragraphs: ["Les infografies tenen un paper clau en la recerca i la comunicació arqueològiques. Condensen conjunts de dades complexos, informació espacial i seqüències cronològiques en una única imatge coherent, fent visibles immediatament els patrons i les relacions. En unir precisió científica i claredat visual, faciliten l’anàlisi de dades, enriqueixen la interpretació i acosten el coneixement arqueològic al públic.", "En aquesta visió general del Complex Arqueològic d’Atapuerca, vaig voler transformar dades arqueològiques complexes en un format visual clar i accessible. La combinació d’informació espacial, temporal i contextual en una sola síntesi permet entendre els patrons i les relacions d’un cop d’ull. Així vaig poder comunicar dades denses amb claredat, tant per a l’anàlisi especialitzada com per a la comprensió del públic."], captions: ["Infografia de la zona d’excavació d’Atapuerca.", "Infografia de la zona d’excavació d’Atapuerca (detall).", "Infografia de les pedreres de Tarragona i els jaciments arqueològics romans.", "Infografia de les pedreres de Tarragona i els jaciments arqueològics romans (detall).", "Infografia d’una selecció de jaciments prehistòrics de Catalunya.", "Infografia d’una selecció de jaciments prehistòrics de Catalunya (detall).", "Projecte d’infografia que presenta el complex petroquímic de Tarragona (Catalunya, Espanya).", "Infografia 3D que explica la geomorfologia d’una vall de Grècia.", "Infografia 3D que explica la geomorfologia d’una vall de Grècia (detall).", "Mapa de les denominacions d’origen protegides (DOP) dels vins de Catalunya."] },
    es: { title: "Infografías", heading: "La infografía como síntesis visual", paragraphs: ["Las infografías desempeñan un papel clave en la investigación y la comunicación arqueológicas. Condensan conjuntos de datos complejos, información espacial y secuencias cronológicas en una única imagen coherente, haciendo visibles de inmediato los patrones y las relaciones. Al unir precisión científica y claridad visual, facilitan el análisis de datos, enriquecen la interpretación y acercan el conocimiento arqueológico al público.", "En esta visión general del Complejo Arqueológico de Atapuerca, quise transformar datos arqueológicos complejos en un formato visual claro y accesible. La combinación de información espacial, temporal y contextual en una sola síntesis permite comprender patrones y relaciones de un vistazo. Así pude comunicar datos densos con claridad, tanto para el análisis experto como para la comprensión del público."], captions: ["Infografía de la zona de excavación de Atapuerca.", "Infografía de la zona de excavación de Atapuerca (detalle).", "Infografía de las canteras de Tarragona y los yacimientos arqueológicos romanos.", "Infografía de las canteras de Tarragona y los yacimientos arqueológicos romanos (detalle).", "Infografía de una selección de yacimientos prehistóricos de Cataluña.", "Infografía de una selección de yacimientos prehistóricos de Cataluña (detalle).", "Proyecto de infografía que presenta el complejo petroquímico de Tarragona (Cataluña, España).", "Infografía 3D que explica la geomorfología de un valle de Grecia.", "Infografía 3D que explica la geomorfología de un valle de Grecia (detalle).", "Mapa de las denominaciones de origen protegidas (DOP) de los vinos de Cataluña."] },
    fr: { title: "Infographies", heading: "L’infographie comme synthèse visuelle", paragraphs: ["Les infographies jouent un rôle essentiel dans la recherche et la communication archéologiques. Elles condensent des jeux de données complexes, des informations spatiales et des séquences chronologiques en une seule image cohérente, rendant immédiatement visibles les tendances et les relations. En associant précision scientifique et clarté visuelle, elles facilitent l’analyse, enrichissent l’interprétation et favorisent l’accès du public aux connaissances archéologiques.", "Pour cette vue d’ensemble du complexe archéologique d’Atapuerca, j’ai souhaité transformer des données archéologiques complexes en un format visuel clair et accessible. La réunion d’informations spatiales, temporelles et contextuelles au sein d’une même synthèse permet de saisir les tendances et les relations d’un coup d’œil. J’ai ainsi pu communiquer des données denses avec clarté, pour l’analyse experte comme pour la compréhension du public."], captions: ["Infographie de la zone de fouille d’Atapuerca.", "Infographie de la zone de fouille d’Atapuerca (détail).", "Infographie des carrières de Tarragone et des sites archéologiques romains.", "Infographie des carrières de Tarragone et des sites archéologiques romains (détail).", "Infographie d’une sélection de sites préhistoriques de Catalogne.", "Infographie d’une sélection de sites préhistoriques de Catalogne (détail).", "Projet d'infographie présentant le complexe pétrochimique de Tarragone (Catalogne, Espagne).", "Infographie 3D expliquant la géomorphologie d’une vallée de Grèce.", "Infographie 3D expliquant la géomorphologie d’une vallée de Grèce (détail).", "Carte des dénominations d’origine protégées (DOP) des vins de Catalogne."] },
  },
  "photorealistic-3d-rendering": {
    en: { title: "Photorealistic 3D Rendering", heading: "Photorealistic 3D Rendering", paragraphs: ["Photographing archaeological objects such as bones can be challenging due to their fragility and the handling constraints this implies. These limitations often hinder the production of high-quality, detailed images necessary for scientific documentation and communication.", "To overcome this, I create high-resolution 3D models using photogrammetry. These digital twins can be manipulated freely without physical risk. By enabling researchers to visualize, manipulate, and compare virtual reconstructions, it becomes easier to test hypotheses, illustrate restoration proposals, and communicate interpretations.", "By simulating realistic lighting and camera setups, I create photorealistic renders that combine scientific accuracy with visual impact. This approach opens up new possibilities for scene composition and presentation, producing images suitable for high-end publications, exhibition catalogues, and educational materials."], captions: ["Illustrative 3D render of a Bison bonasus vertebra from the IPHES-CERCA collections.", "Orthographic 3D render of a Bison bonasus vertebra from the IPHES-CERCA collections.", "Illustration showing the hypothetical position of a Homo antecessor skull fragment from IPHES-CERCA within the skull.", "Lithic material (courtesy of Dr. Javier Sánchez Martínez) displayed in a photorealistic scene. The 3D model was generated through photogrammetric processing.", "Detail of lithic material (courtesy of Dr. Javier Sánchez Martínez) displayed in a photorealistic scene. The 3D model was generated through photogrammetric processing."] },
    ca: { title: "Renderització 3D fotorealista", heading: "Renderització 3D fotorealista", paragraphs: ["Fotografiar objectes arqueològics com els ossos pot ser difícil per la seva fragilitat i les restriccions de manipulació que comporta. Aquestes limitacions sovint dificulten la producció d’imatges detallades i d’alta qualitat necessàries per a la documentació i la comunicació científiques.", "Per superar-ho, creo models 3D d’alta resolució mitjançant fotogrametria. Aquests bessons digitals es poden manipular lliurement sense cap risc físic. En permetre als investigadors visualitzar, manipular i comparar reconstruccions virtuals, resulta més fàcil posar a prova hipòtesis, il·lustrar propostes de restauració i comunicar interpretacions.", "Simulant una il·luminació i unes càmeres realistes, creo renderitzacions fotorealistes que combinen precisió científica i impacte visual. Aquest enfocament obre noves possibilitats de composició i presentació, i produeix imatges adequades per a publicacions d’alta qualitat, catàlegs d’exposició i materials educatius."], captions: ["Renderització 3D il·lustrativa d’una vèrtebra de Bison bonasus de les col·leccions de l’IPHES-CERCA.", "Vista ortogràfica 3D d’una vèrtebra de Bison bonasus de les col·leccions de l’IPHES-CERCA.", "Il·lustració de la posició hipotètica dins del crani d’un fragment cranial d’Homo antecessor procedent de l’IPHES-CERCA.", "Material lític (cortesia del Dr. Javier Sánchez Martínez) presentat en una escena fotorealista. El model 3D s’ha generat mitjançant processament fotogramètric.", "Detall de material lític (cortesia del Dr. Javier Sánchez Martínez) presentat en una escena fotorealista. El model 3D s’ha generat mitjançant processament fotogramètric."] },
    es: { title: "Renderizado 3D fotorrealista", heading: "Renderizado 3D fotorrealista", paragraphs: ["Fotografiar objetos arqueológicos como los huesos puede ser difícil debido a su fragilidad y a las restricciones de manipulación que implica. Estas limitaciones suelen dificultar la producción de imágenes detalladas y de alta calidad necesarias para la documentación y la comunicación científicas.", "Para superarlo, creo modelos 3D de alta resolución mediante fotogrametría. Estos gemelos digitales pueden manipularse libremente sin ningún riesgo físico. Al permitir que los investigadores visualicen, manipulen y comparen reconstrucciones virtuales, resulta más fácil poner a prueba hipótesis, ilustrar propuestas de restauración y comunicar interpretaciones.", "Simulando una iluminación y unas cámaras realistas, creo renderizados fotorrealistas que combinan precisión científica e impacto visual. Este enfoque abre nuevas posibilidades de composición y presentación, y produce imágenes aptas para publicaciones de alta calidad, catálogos de exposiciones y materiales educativos."], captions: ["Renderizado 3D ilustrativo de una vértebra de Bison bonasus de las colecciones del IPHES-CERCA.", "Vista ortográfica 3D de una vértebra de Bison bonasus de las colecciones del IPHES-CERCA.", "Ilustración de la posición hipotética dentro del cráneo de un fragmento craneal de Homo antecessor procedente del IPHES-CERCA.", "Material lítico (cortesía del Dr. Javier Sánchez Martínez) presentado en una escena fotorrealista. El modelo 3D se generó mediante procesamiento fotogramétrico.", "Detalle de material lítico (cortesía del Dr. Javier Sánchez Martínez) presentado en una escena fotorrealista. El modelo 3D se generó mediante procesamiento fotogramétrico."] },
    fr: { title: "Rendu 3D photoréaliste", heading: "Rendu 3D photoréaliste", paragraphs: ["Photographier des objets archéologiques tels que des os peut s’avérer délicat en raison de leur fragilité et des contraintes de manipulation qui en découlent. Ces limites compliquent souvent la production d’images détaillées et de haute qualité, nécessaires à la documentation et à la communication scientifiques.", "Pour y remédier, je crée des modèles 3D en haute résolution par photogrammétrie. Ces jumeaux numériques peuvent être manipulés librement, sans aucun risque physique. En permettant aux chercheurs de visualiser, manipuler et comparer des reconstitutions virtuelles, il devient plus facile de tester des hypothèses, d’illustrer des propositions de restauration et de communiquer des interprétations.", "En simulant des éclairages et des prises de vue réalistes, je crée des rendus photoréalistes qui allient précision scientifique et impact visuel. Cette approche ouvre de nouvelles possibilités de composition et de présentation, avec des images adaptées aux publications haut de gamme, aux catalogues d’exposition et aux supports pédagogiques."], captions: ["Rendu 3D illustratif d’une vertèbre de Bison bonasus issue des collections de l’IPHES-CERCA.", "Vue orthographique 3D d’une vertèbre de Bison bonasus issue des collections de l’IPHES-CERCA.", "Illustration de la position hypothétique, au sein du crâne, d’un fragment crânien d’Homo antecessor provenant de l’IPHES-CERCA.", "Matériel lithique (avec l’aimable autorisation du Dr Javier Sánchez Martínez) présenté dans une scène photoréaliste. Le modèle 3D a été généré par traitement photogrammétrique.", "Détail du matériel lithique (avec l’aimable autorisation du Dr Javier Sánchez Martínez) présenté dans une scène photoréaliste. Le modèle 3D a été généré par traitement photogrammétrique."] },
  },
  "print-illustration": {
    en: { title: "Print Illustration", heading: "Print Illustration", paragraphs: ["Print illustrations are essential for communicating archaeological research beyond the digital sphere. In this example of a thesis book cover that I designed, my goal was to combine scientific accuracy with artistic sensitivity. Drawing inspiration from the themes of each research project, I sought to create visuals that resonate with both scholarly audiences and the broader public, while preserving clarity and conceptual depth."], captions: ["Book cover design for a doctoral thesis on Roman marble mosaics, created for a researcher at ICAC-CERCA (Institut Català d’Arqueologia Clàssica).", "Book cover design for a doctoral thesis on Visigothic architecture, created for a researcher at ICAC-CERCA (Institut Català d’Arqueologia Clàssica).", "Book cover design for a doctoral thesis on Visigothic architecture, created for a researcher at ICAC-CERCA (Institut Català d’Arqueologia Clàssica), detail.", "Cover of an ICAC-CERCA doctoral thesis about dolia and storage systems in the northeast of Hispania Citerior."] },
    ca: { title: "Il·lustració impresa", heading: "Il·lustració impresa", paragraphs: ["Les il·lustracions impreses són essencials per comunicar la recerca arqueològica més enllà de l’àmbit digital. En aquest exemple de coberta de tesi, el meu objectiu era combinar precisió científica i sensibilitat artística. Inspirant-me en els temes de cada projecte de recerca, vaig crear imatges capaces de connectar tant amb el públic acadèmic com amb el públic general, preservant alhora la claredat i la profunditat conceptual."], captions: ["Disseny de coberta per a una tesi doctoral sobre mosaics romans de marbre, creat per a una investigadora de l’ICAC-CERCA (Institut Català d’Arqueologia Clàssica).", "Disseny de coberta per a una tesi doctoral sobre arquitectura visigòtica, creat per a una investigadora de l’ICAC-CERCA (Institut Català d’Arqueologia Clàssica).", "Disseny de coberta per a una tesi doctoral sobre arquitectura visigòtica, creat per a una investigadora de l’ICAC-CERCA (Institut Català d’Arqueologia Clàssica), detall.", "Coberta d’una tesi doctoral de l’ICAC-CERCA sobre els dolia i els sistemes d’emmagatzematge al nord-est de la Hispània Citerior."] },
    es: { title: "Ilustración impresa", heading: "Ilustración impresa", paragraphs: ["Las ilustraciones impresas son esenciales para comunicar la investigación arqueológica más allá del ámbito digital. En este ejemplo de cubierta de tesis, mi objetivo era combinar precisión científica y sensibilidad artística. Inspirándome en los temas de cada proyecto de investigación, creé imágenes capaces de conectar tanto con el público académico como con el público general, preservando a la vez la claridad y la profundidad conceptual."], captions: ["Diseño de cubierta para una tesis doctoral sobre mosaicos romanos de mármol, creado para una investigadora del ICAC-CERCA (Institut Català d’Arqueologia Clàssica).", "Diseño de cubierta para una tesis doctoral sobre arquitectura visigoda, creado para una investigadora del ICAC-CERCA (Institut Català d’Arqueologia Clàssica).", "Diseño de cubierta para una tesis doctoral sobre arquitectura visigoda, creado para una investigadora del ICAC-CERCA (Institut Català d’Arqueologia Clàssica), detalle.", "Cubierta de una tesis doctoral del ICAC-CERCA sobre los dolia y los sistemas de almacenamiento en el nordeste de la Hispania Citerior."] },
    fr: { title: "Illustration imprimée", heading: "Illustration imprimée", paragraphs: ["Les illustrations imprimées sont essentielles pour communiquer la recherche archéologique au-delà du numérique. Dans cet exemple de couverture de thèse, mon objectif était d’associer précision scientifique et sensibilité artistique. En m’inspirant des thèmes de chaque projet de recherche, j’ai cherché à créer des visuels qui parlent aussi bien au public universitaire qu’au grand public, tout en préservant clarté et profondeur conceptuelle."], captions: ["Conception de couverture pour une thèse de doctorat sur les mosaïques romaines en marbre, réalisée pour une chercheuse de l’ICAC-CERCA (Institut Català d’Arqueologia Clàssica).", "Conception de couverture pour une thèse de doctorat sur l’architecture wisigothique, réalisée pour une chercheuse de l’ICAC-CERCA (Institut Català d’Arqueologia Clàssica).", "Conception de couverture pour une thèse de doctorat sur l’architecture wisigothique, réalisée pour une chercheuse de l’ICAC-CERCA (Institut Català d’Arqueologia Clàssica), détail.", "Couverture de Thèse Doctorale de l'ICAC-CERCA a propos des dolia et systèmes de stockages dans le nord est de l' Hispania Citerior."] },
  },
  "visual-identity": {
    en: { title: "Visual Identity", heading: "Logo and Visual Identity", paragraphs: ["Having a visual identity for a research project strengthens its visibility, coherence, and impact, both among institutional partners and the general public. It helps ensure consistent recognition across various contexts (publications, presentations, social media, exhibitions) and contributes to the project's long-term visibility and credibility.", "These visual identities were created for research projects in archaeology and prehistory.", "My process involves capturing the core themes and values of each project and translating them into coherent, versatile logos. The aim is to ensure strong visual consistency across publications, outreach materials, and institutional communication."], captions: ["Logo for the HomiNesque research project.", "Logo for the Aquitaine Research Group on Protohistoric Archaeology.", "Event poster mockup for the Aquitaine Research Group on Protohistoric Archaeology.", "Visual identity of Tessel, a collection of R packages for research and teaching in archaeology.", "Merchandise for Tesselle, a collection of R packages for archaeology.", "Sticker mockup for the HomiNesque research project.", "Patches for the prehistoric excavation campaign at Les Auzières in southern France.", "Active tectonics software logo.", "Active tectonics software logo mockup."] },
    ca: { title: "Identitat visual", heading: "Logotip i identitat visual", paragraphs: ["Disposar d’una identitat visual reforça la visibilitat, la coherència i l’impacte d’un projecte de recerca, tant entre els socis institucionals com entre el públic general. Garanteix un reconeixement coherent en publicacions, presentacions, xarxes socials i exposicions, i contribueix a la visibilitat i la credibilitat del projecte a llarg termini.", "Aquestes identitats visuals es van crear per a projectes de recerca en arqueologia i prehistòria.", "El meu procés consisteix a captar els temes i valors essencials de cada projecte i traduir-los en logotips coherents i versàtils. L’objectiu és assegurar una gran consistència visual en publicacions, materials de divulgació i comunicació institucional."], captions: ["Logotip del projecte de recerca HomiNesque.", "Logotip del Grup de Recerca d’Aquitània sobre Arqueologia Protohistòrica.", "Simulació d’un cartell d’esdeveniment del Grup de Recerca d’Aquitània sobre Arqueologia Protohistòrica.", "Identitat visual de Tessel, una col·lecció de paquets R per a la recerca i la docència en arqueologia.", "Productes derivats per a Tesselle, una col·lecció de paquets R per a l’arqueologia.", "Simulació d’un adhesiu del projecte de recerca HomiNesque.", "Pegats per a la campanya d’excavació prehistòrica del jaciment de Les Auzières, al sud de França.", "Logotip d’un programari de tectònica activa.", "Simulació del logotip d’un programari de tectònica activa."] },
    es: { title: "Identidad visual", heading: "Logotipo e identidad visual", paragraphs: ["Contar con una identidad visual refuerza la visibilidad, la coherencia y el impacto de un proyecto de investigación, tanto entre los socios institucionales como entre el público general. Garantiza un reconocimiento coherente en publicaciones, presentaciones, redes sociales y exposiciones, y contribuye a la visibilidad y credibilidad del proyecto a largo plazo.", "Estas identidades visuales se crearon para proyectos de investigación en arqueología y prehistoria.", "Mi proceso consiste en captar los temas y valores esenciales de cada proyecto y traducirlos en logotipos coherentes y versátiles. El objetivo es asegurar una gran consistencia visual en publicaciones, materiales de divulgación y comunicación institucional."], captions: ["Logotipo del proyecto de investigación HomiNesque.", "Logotipo del Grupo de Investigación de Aquitania sobre Arqueología Protohistórica.", "Simulación de un cartel de evento del Grupo de Investigación de Aquitania sobre Arqueología Protohistórica.", "Identidad visual de Tessel, una colección de paquetes R para la investigación y la docencia en arqueología.", "Productos derivados para Tesselle, una colección de paquetes R para la arqueología.", "Simulación de un adhesivo del proyecto de investigación HomiNesque.", "Parches para la campaña de excavación prehistórica del yacimiento de Les Auzières, en el sur de Francia.", "Logotipo de un programa de tectónica activa.", "Simulación del logotipo de un programa de tectónica activa."] },
    fr: { title: "Identité visuelle", heading: "Logo et identité visuelle", paragraphs: ["Une identité visuelle renforce la visibilité, la cohérence et l’impact d’un projet de recherche, tant auprès des partenaires institutionnels que du grand public. Elle garantit une reconnaissance constante dans les publications, présentations, réseaux sociaux et expositions, et contribue à la visibilité et à la crédibilité du projet sur le long terme.", "Ces identités visuelles ont été créées pour des projets de recherche en archéologie et en préhistoire.", "Mon processus consiste à saisir les thèmes et les valeurs essentiels de chaque projet, puis à les traduire en logos cohérents et polyvalents. L’objectif est d’assurer une forte cohérence visuelle dans les publications, les supports de médiation et la communication institutionnelle."], captions: ["Logo du projet de recherche HomiNesque.", "Logo du Groupe de recherche aquitain en archéologie protohistorique.", "Maquette d’affiche événementielle pour le Groupe de recherche aquitain en archéologie protohistorique.", "Identité visuelle de Tessel, une collection de packages R pour la recherche et l’enseignement en archéologie.", "Produits dérivés pour Tesselle, une collection de packages R pour l'archéologie.", "Maquette d’autocollant pour le projet de recherche HomiNesque.", "Écussons pour la campagne de fouille préhistorique du site des Auzières dans le sud de la France.", "Logo d’un logiciel de tectonique active.", "Maquette du logo d’un logiciel de tectonique active."] },
  },
};

function getPageKey() {
  const file = window.location.pathname.split("/").pop() || "index.html";
  return file.replace(/\.html$/, "");
}

function getInitialLanguage() {
  const saved = localStorage.getItem("portfolio-language");
  if (SUPPORTED_LANGUAGES.includes(saved)) return saved;

  const browserLanguage = navigator.language.toLowerCase();
  const baseLanguage = browserLanguage.split("-")[0];
  return SUPPORTED_LANGUAGES.includes(baseLanguage) ? baseLanguage : "en";
}

let currentLanguage = getInitialLanguage();

function translatePage(language) {
  const common = COMMON_TRANSLATIONS[language];
  const page = PAGE_TRANSLATIONS[getPageKey()]?.[language];
  document.documentElement.lang = language;

  const skipLink = document.querySelector(".skip-link");
  if (skipLink) skipLink.textContent = common.skip;

  const nav = document.querySelector(".site-header nav");
  nav?.setAttribute("aria-label", common.navigation);
  document.querySelectorAll(".nav-list a").forEach((link, index) => {
    if (common.nav[index]) link.textContent = common.nav[index];
  });

  const brand = document.querySelector(".brand");
  if (brand) brand.setAttribute("aria-label", getPageKey() === "index" ? common.backTop : common.backHome);

  const toggle = document.querySelector(".menu-toggle");
  if (toggle) {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-label", isOpen ? common.closeMenu : common.openMenu);
  }

  const picker = document.querySelector(".language-picker");
  picker?.querySelector(".language-picker-toggle")?.setAttribute("aria-label", common.language);
  picker?.querySelector(".language-picker-options")?.setAttribute("aria-label", common.language);

  const footer = document.querySelector(".site-footer p");
  if (footer) footer.textContent = common.footer;

  const lightbox = document.querySelector(".image-lightbox");
  lightbox?.setAttribute("aria-label", common.lightbox);
  lightbox?.querySelector(".image-lightbox-close")?.setAttribute("aria-label", common.closeImage);
  document.querySelectorAll("main figure img.lightbox-trigger").forEach((image) => {
    image.setAttribute("aria-label", `${image.alt || "Image"} — ${common.enlargeImage}`);
  });

  if (!page) return;
  document.title = page.title;

  const heading = document.querySelector("h1");
  if (heading && page.heading) heading.textContent = page.heading;

  if (getPageKey() === "index") {
    const copy = document.querySelector(".hero-copy p");
    if (copy) copy.innerHTML = page.copy;
  } else if (getPageKey() === "contact") {
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = page.description;
    const intro = document.querySelector(".contact-intro p");
    if (intro) intro.textContent = page.intro;
    document.querySelectorAll(".contact-form label").forEach((label, index) => {
      if (page.labels[index]) label.innerHTML = page.labels[index];
    });
    const privacy = document.querySelector(".form-privacy");
    if (privacy) privacy.textContent = page.privacy;
    const submit = document.querySelector(".form-submit");
    if (submit && !submit.disabled) submit.textContent = page.send;
  } else {
    document.querySelectorAll(".category-work-content p").forEach((paragraph, index) => {
      if (page.paragraphs?.[index]) paragraph.textContent = page.paragraphs[index];
    });
    document.querySelectorAll(".image-caption").forEach((caption, index) => {
      if (page.captions?.[index]) caption.textContent = page.captions[index];
    });
  }
}

function setupLanguageSelector() {
  const header = document.querySelector(".site-header .nav-wrap");
  const toggle = header?.querySelector(".menu-toggle");
  if (!header || !toggle) return;

  const picker = document.createElement("div");
  picker.className = "language-picker";
  picker.innerHTML = `
    <button class="language-picker-toggle" type="button" aria-expanded="false" aria-haspopup="menu" aria-controls="language-options">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21M12 3C9.5 5.5 8.2 8.5 8.2 12S9.5 18.5 12 21"></path>
      </svg>
    </button>
    <div class="language-picker-options" id="language-options" role="menu" hidden>
      <button type="button" role="menuitemradio" data-language="en">EN</button>
      <button type="button" role="menuitemradio" data-language="ca">CA</button>
      <button type="button" role="menuitemradio" data-language="es">ES</button>
      <button type="button" role="menuitemradio" data-language="fr">FR</button>
    </div>
  `;
  header.insertBefore(picker, toggle);

  const pickerToggle = picker.querySelector(".language-picker-toggle");
  const options = picker.querySelector(".language-picker-options");
  const languageButtons = Array.from(options.querySelectorAll("[data-language]"));

  const syncSelectedLanguage = () => {
    languageButtons.forEach((button) => {
      button.setAttribute("aria-checked", String(button.dataset.language === currentLanguage));
    });
  };

  const setPickerOpen = (open) => {
    pickerToggle.setAttribute("aria-expanded", String(open));
    options.hidden = !open;
    if (open) {
      options.querySelector(`[data-language="${currentLanguage}"]`)?.focus();
    }
  };

  pickerToggle.addEventListener("click", () => {
    setPickerOpen(pickerToggle.getAttribute("aria-expanded") !== "true");
  });

  syncSelectedLanguage();
  options.addEventListener("click", (event) => {
    const languageButton = event.target.closest("[data-language]");
    if (!languageButton) return;

    currentLanguage = languageButton.dataset.language;
    localStorage.setItem("portfolio-language", currentLanguage);
    syncSelectedLanguage();
    translatePage(currentLanguage);
    setPickerOpen(false);
    pickerToggle.focus();
  });

  document.addEventListener("click", (event) => {
    if (!picker.contains(event.target)) setPickerOpen(false);
  });

  picker.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setPickerOpen(false);
      pickerToggle.focus();
    }
  });

  translatePage(currentLanguage);
}

function setupMobileNavigation() {
  const header = document.querySelector(".site-header");
  const nav = header?.querySelector("nav");
  const toggle = header?.querySelector(".menu-toggle");

  if (!header || !nav || !toggle) return;

  const mobileQuery = window.matchMedia("(max-width: 1100px)");
  document.documentElement.classList.add("nav-enhanced");

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    const common = COMMON_TRANSLATIONS[currentLanguage];
    toggle.setAttribute("aria-label", open ? common.closeMenu : common.openMenu);
    nav.hidden = mobileQuery.matches && !open;
  };

  const syncNavigation = () => setOpen(false);

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a") && mobileQuery.matches) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  mobileQuery.addEventListener("change", syncNavigation);
  syncNavigation();
}

function observeReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal:not(.is-visible)").forEach((node) => observer.observe(node));
}

function setupContactForm() {
  const form = document.querySelector("[data-contact-form]");
  const status = form?.querySelector("[data-form-status]");
  const submit = form?.querySelector("button[type='submit']");

  if (!form || !status || !submit) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    submit.disabled = true;
    const page = PAGE_TRANSLATIONS.contact[currentLanguage];
    submit.textContent = page.sending;
    status.removeAttribute("data-state");
    status.textContent = "";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      status.dataset.state = "success";
      status.textContent = page.success;
    } catch {
      status.dataset.state = "error";
      status.textContent = page.error;
    } finally {
      submit.disabled = false;
      submit.textContent = page.send;
    }
  });
}

function setupImageLightbox() {
  const images = Array.from(document.querySelectorAll("main figure img"));

  if (!images.length) return;

  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", COMMON_TRANSLATIONS[currentLanguage].lightbox);
  lightbox.hidden = true;
  lightbox.innerHTML = `
    <button class="image-lightbox-close" type="button" aria-label="${COMMON_TRANSLATIONS[currentLanguage].closeImage}">
      <span aria-hidden="true">&times;</span>
    </button>
    <button class="image-lightbox-arrow image-lightbox-previous" type="button" aria-label="Previous image">
      <span aria-hidden="true">&#8249;</span>
    </button>
    <figure class="image-lightbox-content">
      <img alt="" />
      <figcaption></figcaption>
    </figure>
    <button class="image-lightbox-arrow image-lightbox-next" type="button" aria-label="Next image">
      <span aria-hidden="true">&#8250;</span>
    </button>
  `;
  document.body.append(lightbox);

  const enlargedImage = lightbox.querySelector("img");
  const caption = lightbox.querySelector("figcaption");
  const closeButton = lightbox.querySelector(".image-lightbox-close");
  const previousButton = lightbox.querySelector(".image-lightbox-previous");
  const nextButton = lightbox.querySelector(".image-lightbox-next");
  let trigger = null;
  let currentIndex = 0;

  const showImage = (index) => {
    currentIndex = (index + images.length) % images.length;
    const image = images[currentIndex];
    const figureCaption = image.closest("figure")?.querySelector(".image-caption");
    const captionText = figureCaption?.textContent.trim() || image.alt;

    trigger = image;
    enlargedImage.src = image.currentSrc || image.src;
    enlargedImage.alt = image.alt;
    caption.textContent = captionText;
    caption.hidden = !captionText;
  };

  const closeLightbox = () => {
    if (lightbox.hidden) return;

    lightbox.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
    lightbox.hidden = true;
    enlargedImage.removeAttribute("src");
    trigger?.focus();
    trigger = null;
  };

  const openLightbox = (image) => {
    showImage(images.indexOf(image));
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    requestAnimationFrame(() => lightbox.classList.add("is-open"));
    closeButton.focus();
  };

  images.forEach((image) => {
    image.classList.add("lightbox-trigger");
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", `${image.alt || "Image"} — ${COMMON_TRANSLATIONS[currentLanguage].enlargeImage}`);

    image.addEventListener("click", () => openLightbox(image));
    image.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(image);
      }
    });
  });

  closeButton.addEventListener("click", closeLightbox);
  previousButton.addEventListener("click", () => showImage(currentIndex - 1));
  nextButton.addEventListener("click", () => showImage(currentIndex + 1));
  previousButton.hidden = images.length < 2;
  nextButton.hidden = images.length < 2;
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
    if (event.key === "ArrowLeft" && !lightbox.hidden) showImage(currentIndex - 1);
    if (event.key === "ArrowRight" && !lightbox.hidden) showImage(currentIndex + 1);
  });
}

setupLanguageSelector();
setupMobileNavigation();
observeReveal();
setupContactForm();
setupImageLightbox();
