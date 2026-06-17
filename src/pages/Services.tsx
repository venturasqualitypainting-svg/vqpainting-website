import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';
import ContactCTASection from '@/components/ContactCTASection';
import {
  ArrowRight, CheckCircle2, Paintbrush,
  Home, Building2, Lamp, DoorOpen,
  Droplets, DollarSign, Clock, Shield, Award, Hammer
} from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceDetails = [
  {
    icon: Paintbrush,
    image: '/images/service-interior.jpg',
    titleEn: 'Interior Painting',
    titleEs: 'Pintura Interior',
    descEn: 'Breathe new life into your living spaces with our premium interior painting services. We handle everything from meticulous surface preparation to the final brushstroke.',
    descEs: 'Dale nueva vida a tus espacios con nuestros servicios premium de pintura interior. Nos encargamos de todo.',
    features: [
      { en: 'Walls, ceilings, and trim', es: 'Paredes, techos y molduras' },
      { en: 'Color consultation included', es: 'Consulta de color incluida' },
      { en: 'Low-VOC, eco-friendly paints', es: 'Pinturas ecologicas de bajo VOC' },
      { en: 'Furniture protection and cleanup', es: 'Proteccion de muebles y limpieza' },
    ],
  },
  {
    icon: Home,
    image: '/images/service-exterior.jpg',
    titleEn: 'Exterior Painting',
    titleEs: 'Pintura Exterior',
    descEn: "Protect and beautify your home's exterior with our durable, weather-resistant painting solutions designed to withstand Arizona's intense sun.",
    descEs: 'Protege y embellece el exterior de tu hogar con nuestras soluciones de pintura duraderas.',
    features: [
      { en: 'Stucco, wood, and siding', es: 'Estuco, madera y revestimiento' },
      { en: 'Pressure washing prep', es: 'Preparacion con lavado a presion' },
      { en: 'UV-resistant coatings', es: 'Recubrimientos resistentes a UV' },
      { en: '5+ year warranty', es: 'Garantia de 5+ anos' },
    ],
  },
  {
    icon: Building2,
    image: '/images/service-residential.jpg',
    titleEn: 'Residential Painting',
    titleEs: 'Pintura Residencial',
    descEn: 'Whether it is a single room or your entire home, our residential painting services deliver consistent, high-quality results.',
    descEs: 'Ya sea una sola habitacion o toda tu casa, nuestros servicios residenciales ofrecen resultados consistentes.',
    features: [
      { en: 'Full-home or single-room', es: 'Casa completa o habitacion individual' },
      { en: 'Flexible scheduling', es: 'Horarios flexibles' },
      { en: 'Move-in/move-out painting', es: 'Pintura para mudanzas' },
      { en: 'HOA color compliance', es: 'Cumplimiento de colores de HOA' },
    ],
  },
  {
    icon: DoorOpen,
    image: '/images/service-commercial.jpg',
    titleEn: 'Commercial Painting',
    titleEs: 'Pintura Comercial',
    descEn: 'Minimize disruption to your business with our efficient commercial painting services. We work evenings and weekends.',
    descEs: 'Minimiza las interrupciones a tu negocio con nuestros servicios eficientes de pintura comercial.',
    features: [
      { en: 'Offices and retail spaces', es: 'Oficinas y espacios comerciales' },
      { en: 'After-hours scheduling', es: 'Horarios despues de horario laboral' },
      { en: 'Durable commercial-grade paints', es: 'Pinturas comerciales duraderas' },
      { en: 'Large-scale project management', es: 'Gestion de proyectos a gran escala' },
    ],
  },
  {
    icon: Hammer,
    image: '/images/service-drywall.jpg',
    titleEn: 'Drywall Repair & Texturing',
    titleEs: 'Reparacion de Drywall y Texturizado',
    descEn: 'Perfect walls start with perfect drywall. Our expert team repairs holes, cracks, water damage, and uneven textures.',
    descEs: 'Paredes perfectas comienzan con drywall perfecto. Nuestro equipo experto repara agujeros y grietas.',
    features: [
      { en: 'Hole and crack repair', es: 'Reparacion de agujeros y grietas' },
      { en: 'Water damage restoration', es: 'Restauracion de danos por agua' },
      { en: 'Popcorn ceiling removal', es: 'Eliminacion de techos de textura popcorn' },
      { en: 'Custom texture matching', es: 'Emparejamiento de textura personalizada' },
    ],
  },
  {
    icon: Lamp,
    image: '/images/service-cabinets.jpg',
    titleEn: 'Cabinet Refinishing',
    titleEs: 'Refinado de Gabinetes',
    descEn: 'Transform your kitchen or bathroom without the cost of a full remodel. Our cabinet refinishing delivers a factory-fresh finish.',
    descEs: 'Transforma tu cocina o bano sin el costo de una remodelacion completa.',
    features: [
      { en: 'Kitchen and bathroom cabinets', es: 'Gabinetes de cocina y bano' },
      { en: 'Spray finish for smooth results', es: 'Acabado con pistola para resultados suaves' },
      { en: 'Hardware installation', es: 'Instalacion de herrajes' },
      { en: 'Multiple color options', es: 'Multiples opciones de color' },
    ],
  },
];

const processSteps = [
  {
    num: '1',
    titleEn: 'Free Estimate',
    titleEs: 'Estimado Gratis',
    descEn: 'Call or fill out our form for a free, no-obligation estimate. We\'ll assess your project and provide a detailed quote.',
    descEs: 'Llama o completa nuestro formulario para un estimado gratis sin compromiso.',
  },
  {
    num: '2',
    titleEn: 'Schedule & Prep',
    titleEs: 'Agenda y Preparacion',
    descEn: 'Choose a date that works for you. Our team handles all prep work — protecting your floors, furniture, and landscaping.',
    descEs: 'Elige una fecha que te funcione. Nuestro equipo se encarga de toda la preparacion.',
  },
  {
    num: '3',
    titleEn: 'Paint & Perfect',
    titleEs: 'Pinta y Perfecciona',
    descEn: 'Sit back and relax while our expert painters deliver flawless results. We clean up thoroughly and do a final walkthrough.',
    descEs: 'Relajate mientras nuestros pintores expertos ofrecen resultados impecables.',
  },
];

const benefits = [
  { icon: Clock, titleEn: '15+ Years Experience', titleEs: '15+ Anos de Experiencia', descEn: 'Over 15 years of painting expertise in the Phoenix market.', descEs: 'Mas de 15 anos de experiencia en pintura en el mercado de Phoenix.' },
  { icon: Paintbrush, titleEn: 'Premium Materials', titleEs: 'Materiales Premium', descEn: 'We use only premium paints from Sherwin-Williams and Benjamin Moore.', descEs: 'Usamos solo pinturas premium de Sherwin-Williams y Benjamin Moore.' },
  { icon: Shield, titleEn: 'Clean & Respectful', titleEs: 'Limpios y Respetuosos', descEn: 'Our crews treat your home like their own.', descEs: 'Nuestros equipos tratan tu hogar como propio.' },
  { icon: Droplets, titleEn: 'On-Time Guarantee', titleEs: 'Garantia de Puntualidad', descEn: 'We show up when we say we will and complete projects on schedule.', descEs: 'Llegamos a la hora prometida y completamos los proyectos a tiempo.' },
  { icon: DollarSign, titleEn: 'Transparent Pricing', titleEs: 'Precios Transparentes', descEn: 'No hidden fees, no surprises. Your detailed estimate includes everything.', descEs: 'Sin cargos ocultos, sin sorpresas. Tu estimado detallado incluye todo.' },
  { icon: Award, titleEn: 'Satisfaction Guaranteed', titleEs: 'Satisfaccion Garantizada', descEn: 'Not happy with something? We\'ll make it right.', descEs: 'No estas satisfecho? Lo corregiremos.' },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[300px] max-h-[450px] h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        <img
          src="/images/service-residential.jpg"
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="content-max relative z-10 pt-20">
          <ScrollReveal>
            <span className="text-white/80 text-xs font-body font-medium uppercase tracking-[0.1em]">
              {t('Our Services', 'Nuestros Servicios')}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-heading font-extrabold text-white text-3xl md:text-4xl lg:text-5xl max-w-[600px] mt-2">
              {t('Comprehensive Painting Solutions for Every Surface', 'Soluciones de Pintura Integrales para Cada Superficie')}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-body text-white/90 mt-3 max-w-[500px]">
              {t('From residential homes to commercial properties, interiors to exteriors.', 'Desde hogares residenciales hasta propiedades comerciales.')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.45}>
            <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-muted mt-6 inline-flex">
              {t('Get Your Free Estimate', 'Obten Tu Estimado Gratis')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-white section-padding">
        <div className="content-max">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl text-center mb-12">
              {t('Expert Painting Services Tailored to Your Needs', 'Servicios de Pintura Expertos Adaptados a Tus Necesidades')}
            </h2>
          </ScrollReveal>

          <div className="space-y-16">
            {serviceDetails.map((service, i) => (
              <ScrollReveal key={i}>
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={t(service.titleEn, service.titleEs)}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <service.icon className="w-10 h-10 text-primary mb-3" />
                    <h3 className="font-heading font-bold text-dark text-xl md:text-2xl mb-3">
                      {t(service.titleEn, service.titleEs)}
                    </h3>
                    <p className="font-body text-mid leading-relaxed mb-4">
                      {t(service.descEn, service.descEs)}
                    </p>
                    <ul className="space-y-2 mb-5">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span className="font-body text-dark text-sm">{t(f.en, f.es)}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="text-primary font-body font-medium text-sm hover:underline inline-flex items-center gap-1">
                      {t('Learn More', 'Mas Informacion')}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-muted section-padding">
        <div className="content-max max-w-[1000px]">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl">
                {t('How It Works', 'Como Funciona')}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-body text-mid mt-3">
                {t('Getting started is easy. Three simple steps to your beautifully painted space.', 'Empezar es facil. Tres simples pasos hacia tu espacio bellamente pintado.')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-[2px] bg-primary-light" />

            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.2} className="text-center relative">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-heading font-bold text-xl mx-auto mb-4 relative z-10">
                  {step.num}
                </div>
                <h4 className="font-heading font-bold text-dark text-lg mb-2">
                  {t(step.titleEn, step.titleEs)}
                </h4>
                <p className="font-body text-mid text-sm leading-relaxed">
                  {t(step.descEn, step.descEs)}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white section-padding">
        <div className="content-max">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl text-center mb-10">
              {t("Why Homeowners Trust Ventura's", 'Por Que los Propietarios Confian en Ventura\'s')}
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-muted rounded-xl p-6 hover:bg-primary-light/30 transition-colors">
                  <b.icon className="w-9 h-9 text-primary mb-3" />
                  <h4 className="font-heading font-semibold text-dark text-base mb-2">
                    {t(b.titleEn, b.titleEs)}
                  </h4>
                  <p className="font-body text-mid text-sm leading-relaxed">
                    {t(b.descEn, b.descEs)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTASection
        headlineEn="No Matter the Project, We've Got You Covered"
        headlineEs="No Importa el Proyecto, Te Tenemos Cubierto"
        subEn="From a single room to an entire office building — every project gets our full attention."
        subEs="Desde una sola habitacion hasta un edificio de oficinas completo — cada proyecto recibe toda nuestra atencion."
        trustEn="Free estimates • All services available • Phoenix metro area"
        trustEs="Estimados gratis • Todos los servicios disponibles • Area metropolitana de Phoenix"
      />
    </div>
  );
}
