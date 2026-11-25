/**
 * Contenido editorial de las secciones de confianza, proceso y preguntas frecuentes.
 * Textos orientativos: revisar con el cliente antes de publicar.
 */
export const ZONAS = [
  {
    id: "caba",
    name: "CABA",
    description: "Atención en todas las comunas de la Ciudad.",
    localidades: ["Comunas 1 a 15"],
  },
  {
    id: "norte",
    name: "Zona Norte",
    description: "Localidades del primer cordón norte del GBA.",
    localidades: [
      "Vicente López",
      "San Isidro",
      "San Fernando",
      "Tigre",
      "General San Martín",
    ],
  },
  {
    id: "oeste",
    name: "Zona Oeste",
    description: "Localidades del primer cordón oeste del GBA.",
    localidades: [
      "Caseros",
      "Palomar",
      "Hurlingham",
      "Ituzaingó",
      "Morón",
      "Tres de Febrero",
    ],
  },
  {
    id: "sur",
    name: "Zona Sur",
    description: "Localidades del primer cordón sur del GBA.",
    localidades: [
      "Avellaneda",
      "Lanús",
      "Lomas de Zamora",
      "Almirante Brown",
      "Quilmes",
      "Berazategui",
    ],
  },
] as const;

export const BENEFICIOS = [
  {
    title: "Atención 24/7",
    description: "Guardia permanente, incluidos fines de semana y feriados.",
  },
  {
    title: "Trabajo sin daños",
    description:
      "Técnicas no destructivas para preservar puertas y cerraduras.",
  },
  {
    title: "Presupuesto previo",
    description: "Te informamos el costo antes de empezar, sin sorpresas.",
  },
  {
    title: "Garantía de trabajo",
    description: "Respaldamos cada intervención con garantía.",
  },
] as const;

export const PASOS = [
  {
    title: "Llamás o escribís",
    description: "Contanos qué pasó y desde dónde. Atendemos al momento.",
  },
  {
    title: "Llegamos a tu ubicación",
    description: "Un profesional se dirige al lugar con el equipo necesario.",
  },
  {
    title: "Resolvemos y verificamos",
    description:
      "Abrimos, reparamos o cambiamos la cerradura y comprobamos que todo funcione.",
  },
] as const;

export const FAQS = [
  {
    question: "¿Atienden de noche o los feriados?",
    answer: "Sí. La guardia está activa las 24 horas, los 7 días de la semana.",
  },
  {
    question: "¿Van a romper la puerta?",
    answer:
      "No. Priorizamos métodos no destructivos para preservar la puerta y la cerradura.",
  },
  {
    question: "¿Cuánto tarda en llegar un profesional?",
    answer:
      "En cuanto recibimos tu llamado, un profesional ya se encuentra listo para salir a ayudarte. El tiempo de espera depende de la zona, pero va a ser informado en el momento.",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer: "Efectivo, Transferencia, Tarjeta a través de MercadoPago.",
  },
  {
    question: "¿Trabajan con vehículos?",
    answer: "Sí. Realizamos apertura de autos y reprogramación de llaves.",
  },
] as const;
