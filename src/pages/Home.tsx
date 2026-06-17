import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceCard from '@/components/ServiceCard';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import ContactCTASection from '@/components/ContactCTASection';
import {
  Phone, ArrowRight, CheckCircle2, Star, Play,
  Building2, Calendar, ThumbsUp, MapPin, Clock, Shield,
} from 'lucide-react';
import gsap from 'gsap';

const services = [
  {
    image: '/images/service-interior.jpg',
    titleEn: 'Interior Painting',
    titleEs: 'Pintura Interior',
    descEn: 'Transform your indoor spaces with flawless wall, ceiling, and trim painting.',
    descEs: 'Transforma tus espacios interiores con pintura impecable de paredes, techos y molduras.',
  },
  {
    image: '/images/service-exterior.jpg',
    titleEn: 'Exterior Painting',
    titleEs: 'Pintura Exterior',
    descEn: "Boost curb appeal and protect your home from Arizona's sun with durable exterior painting.",
    descEs: 'Mejora el atractivo exterior y protege tu hogar del sol de Arizona con pintura duradera.',
  },
  {
    image: '/images/service-residential.jpg',
    titleEn: 'Residential Painting',
    titleEs: 'Pintura Residencial',
    descEn: 'Full-home painting services for houses, condos, and townhomes throughout the valley.',
    descEs: 'Servicios de pintura completa para casas, condominios y townhomes en todo el valle.',
  },
  {
    image: '/images/service-commercial.jpg',
    titleEn: 'Commercial Painting',
    titleEs: 'Pintura Comercial',
    descEn: 'Professional painting for offices, retail spaces, and commercial properties with minimal disruption.',
    descEs: 'Pintura profesional para oficinas, tiendas y propiedades comerciales con minima interrupcion.',
  },
  {
    image: '/images/service-drywall.jpg',
    titleEn: 'Drywall Repair',
    titleEs: 'Reparacion de Drywall',
    descEn: 'Expert drywall repair and texturing to create the perfect canvas for beautiful paint.',
    descEs: 'Reparacion y texturizado experto de drywall para crear el lienzo perfecto.',
  },
  {
    image: '/images/service-cabinets.jpg',
    titleEn: 'Cabinet Refinishing',
    titleEs: 'Refinado de Gabinetes',
    descEn: 'Give your kitchen or bathroom a stunning makeover with professional cabinet painting.',
    descEs: 'Dale a tu cocina o bano un cambio impresionante con pintura profesional de gabinetes.',
  },
];

const testimonials = [
  {
    name: 'Maria G.',
    location: 'Phoenix',
    textEn: "Ventura's team transformed our home! The attention to detail was incredible. Our walls look flawless. Highly recommend!",
    textEs: 'El equipo de Ventura transformo nuestro hogar! La atencion al detalle fue increible. Nuestras paredes se ven impecables. Muy recomendados!',
  },
  {
    name: 'James T.',
    location: 'Scottsdale',
    textEn: "Professional from start to finish. The estimate was fair, the crew showed up on time, and the cleanup was spotless. Our exterior paint still looks brand new after two Arizona summers.",
    textEs: 'Profesional de principio a fin. El estimado fue justo, el equipo llego a tiempo y la limpieza fue impecable.',
  },
  {
    name: 'Elena R.',
    location: 'Mesa',
    textEn: "We needed our kitchen cabinets refinished and Ventura's exceeded our expectations. The white cabinets look like they came straight from a showroom. Beautiful work!",
    textEs: 'Necesitabamos refinar los gabinetes de nuestra cocina y Ventura\'s supero nuestras expectativas. Trabajo hermoso!',
  },
  {
    name: 'David K.',
    location: 'Chandler',
    textEn: "Best painting company in the valley. They helped us choose the perfect colors and the result is stunning. Our neighbors keep asking who painted our house!",
    textEs: 'La mejor compania de pintura en el valle. Nos ayudaron a elegir los colores perfectos y el resultado es impresionante.',
  },
  {
    name: 'Lisa M.',
    location: 'Glendale',
    textEn: "As a business owner, I appreciated their flexibility. They worked around our schedule and the office looks fantastic. Will definitely use them again.",
    textEs: 'Como duena de negocio, aprecie su flexibilidad. Trabajaron con nuestro horario y la oficina se ve fantastica.',
  },
  {
    name: 'Carlos V.',
    location: 'Tempe',
    textEn: 'Hablan espanol y eso hizo toda la diferencia. Explicaron todo claramente y el trabajo quedo perfecto. Gracias Ventura\'s!',
    textEs: 'Hablamos espanol y eso hizo toda la diferencia. Explicaron todo claramente y el trabajo quedo perfecto. Gracias Ventura\'s!',
  },
];

const stats = [
  { icon: Building2, number: '500+', labelEn: 'Homes Painted', labelEs: 'Hogares Pintados' },
  { icon: Calendar, number: '15+', labelEn: 'Years of Experience', labelEs: 'Anos de Experiencia' },
  { icon: ThumbsUp, number: '100%', labelEn: 'Satisfaction Rate', labelEs: 'Tasa de Satisfaccion' },
  { icon: MapPin, number: '6', labelEn: 'Cities Served', labelEs: 'Ciudades Atendidas' },
  { icon: Clock, number: '24/7', labelEn: 'Customer Support', labelEs: 'Atencion al Cliente' },
];

function TestimonialSlider() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t2 = testimonials[current];

  return (
    <div
      className="max-w-[700px] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[200px]">
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-card border-l-4 border-primary-light transition-opacity duration-400">
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          <p className="font-heading font-semibold text-dark text-base md:text-lg italic leading-relaxed mb-4">
            &ldquo;{t(t2.textEn, t2.textEs)}&rdquo;
          </p>
          <p className="font-body font-medium text-primary text-sm">
            {t2.name} <span className="text-mid font-normal">— {t2.location}</span>
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-lightgray flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all"
          aria-label="Previous"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? 'bg-primary' : 'bg-lightgray'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-lightgray flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all"
          aria-label="Next"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (heroImgRef.current) {
      gsap.to(heroImgRef.current, {
        scale: 1.05,
        duration: 20,
        ease: 'none',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[600px] max-h-[900px] h-[85vh] flex items-center justify-center overflow-hidden">
        <img
          ref={heroImgRef}
          src="/images/hero-background.jpg"
          alt="Freshly painted home in Phoenix"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/15" />

        <div className="relative z-10 content-max text-center pt-20">
          <ScrollReveal>
            <span className="inline-block bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 text-white text-xs font-body font-medium tracking-wide mb-4">
              {t('Licensed, Bonded & Insured', 'Licenciado, Asegurado y Garantizado')}
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-4 drop-shadow-lg">
              {t('Transform Your Space', 'Transforma Tu Espacio')}
              <br />
              {t('with Expert Painting', 'con Pintura Profesional')}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="font-body text-white/90 text-base md:text-lg max-w-[640px] mx-auto mb-8">
              {t(
                "Ventura's Quality Painting delivers flawless interior and exterior painting for homes and businesses throughout Phoenix, Arizona.",
                "Ventura's Quality Painting ofrece pintura interior y exterior impecable para hogares y negocios en todo Phoenix, Arizona."
              )}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                {t('Get a Free Estimate', 'Obten una Cotizacion Gratis')}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:4802615508" className="btn-green text-base px-8 py-4">
                <Phone className="w-5 h-5" />
                {t('Call Now: 480-261-5508', 'Llama Ahora: 480-261-5508')}
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Trust Bar */}
        <ScrollReveal delay={0.9} className="absolute bottom-0 left-0 right-0 z-10">
          <div className="bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.06)] py-4 md:py-5">
            <div className="content-max">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { en: 'Free Estimates', es: 'Estimados Gratis' },
                  { en: '15+ Years Experience', es: '15+ Anos de Experiencia' },
                  { en: '5-Star Rated', es: 'Calificacion 5 Estrellas' },
                  { en: 'Phoenix Area', es: 'Area de Phoenix' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                    <span className="font-body font-medium text-dark text-sm">{t(item.en, item.es)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Trusted By Section */}
      <section className="bg-muted py-10 md:py-12">
        <div className="content-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Star, textEn: '5.0 Rating on Google', textEs: '5.0 en Google', stars: true },
              { icon: Shield, textEn: 'Licensed, Bonded & Insured', textEs: 'Licenciado, Asegurado y Garantizado', stars: false },
              { icon: Calendar, textEn: '15+ Years Experience', textEs: '15+ Anos de Experiencia', stars: false },
              { icon: ThumbsUp, textEn: '100% Satisfaction Guaranteed', textEs: '100% de Satisfaccion Garantizada', stars: false },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="text-center">
                <item.icon className="w-7 h-7 text-primary mx-auto mb-2" />
                <p className="font-heading font-bold text-dark text-sm md:text-base">{t(item.textEn, item.textEs)}</p>
                {item.stars && (
                  <div className="flex justify-center gap-0.5 mt-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white section-padding">
        <div className="content-max">
          <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/sala.png"
                  alt="Ventura's Quality Painting owner"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <span className="inline-block bg-primary-light text-primary text-xs font-body font-medium rounded-full px-3 py-1 mb-4">
                  {t('Family-Owned & Operated', 'Negocio Familiar')}
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl mb-4">
                  {t('Your Home Deserves the Best', 'Tu Hogar Merece lo Mejor')}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="font-body text-mid leading-relaxed mb-4">
                  {t(
                    "For over 15 years, Ventura's Quality Painting has been transforming homes and businesses across the Phoenix valley. We're not just painters — we're craftsmen who take pride in every brushstroke. Our family-owned business treats your home like it's our own.",
                    'Por mas de 15 anos, Ventura\'s Quality Painting ha transformado hogares y negocios en todo el valle de Phoenix. No somos solo pintores — somos artesanos que nos enorgullecemos de cada pincelada.'
                  )}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p className="font-body font-medium text-primary mb-6">
                  {t(
                    "We proudly serve the Hispanic community — we speak Spanish.",
                    'Servimos a la comunidad hispana — hablamos espanol.'
                  )}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <ul className="space-y-2.5 mb-6">
                  {[
                    { en: 'Premium-quality paints and materials', es: 'Pinturas y materiales de primera calidad' },
                    { en: 'Detailed prep work for lasting results', es: 'Preparacion detallada para resultados duraderos' },
                    { en: 'Clean, respectful crews', es: 'Equipos limpios y respetuosos' },
                    { en: 'On-time, on-budget completion', es: 'Completamos a tiempo y dentro del presupuesto' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="font-body text-dark text-sm">{t(item.en, item.es)}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <Link to="/about" className="btn-secondary">
                  {t('Learn More About Us', 'Conoce Mas Sobre Nosotros')}
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-muted section-padding">
        <div className="content-max">
          <div className="text-center mb-10">
            <ScrollReveal>
              <span className="text-primary text-xs font-body font-medium uppercase tracking-[0.1em]">
                {t('What We Do', 'Lo Que Hacemos')}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl mt-2">
                {t('Professional Painting Services', 'Servicios Profesionales de Pintura')}
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <ServiceCard {...s} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-8">
            <Link to="/services" className="btn-primary">
              {t('View All Services', 'Ver Todos los Servicios')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="bg-white section-padding">
        <div className="content-max">
          <div className="text-center mb-10">
            <ScrollReveal>
              <span className="text-primary text-xs font-body font-medium uppercase tracking-[0.1em]">
                {t('Our Work', 'Nuestro Trabajo')}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl mt-2">
                {t('See the Transformation', 'Mira la Transformacion')}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-mid mt-3 max-w-[600px] mx-auto">
                {t(
                  'Drag the slider to see the dramatic difference professional painting makes.',
                  'Arrastra el control deslizante para ver la diferencia dramatica que hace la pintura profesional.'
                )}
              </p>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal>
              <BeforeAfterSlider
                beforeImage="/images/beforeafter-exterior-before.jpg"
                afterImage="/images/beforeafter-exterior-after.jpg"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <BeforeAfterSlider
                beforeImage="/images/beforeafter-interior-before.jpg"
                afterImage="/images/beforeafter-interior-after.jpg"
                labelBeforeEn="Before - Interior"
                labelBeforeEs="Antes - Interior"
                labelAfterEn="After - Interior"
                labelAfterEs="Despues - Interior"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <BeforeAfterSlider
                beforeImage="/images/beforeafter-cabinets-before.jpg"
                afterImage="/images/beforeafter-cabinets-after.jpg"
                labelBeforeEn="Before - Cabinets"
                labelBeforeEs="Antes - Gabinetes"
                labelAfterEn="After - Cabinets"
                labelAfterEs="Despues - Gabinetes"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal className="text-center mt-8">
            <Link to="/gallery" className="btn-secondary">
              {t('View Full Gallery', 'Ver Galeria Completa')}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-muted section-padding">
        <div className="content-max max-w-[900px]">
          <div className="text-center mb-8">
            <ScrollReveal>
              <span className="text-primary text-xs font-body font-medium uppercase tracking-[0.1em]">
                {t('Watch Us in Action', 'Miranos en Accion')}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl mt-2">
                {t("The Ventura's Quality Painting Difference", "La Diferencia de Ventura's Quality Painting")}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <img
                src="/images/video-thumbnail.jpg"
                alt="Painting team at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/90 rounded-full flex items-center justify-center animate-pulse-play group-hover:scale-110 group-hover:bg-primary transition-all">
                  <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-white ml-1" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-mid text-sm text-center mt-4">
              {t(
                'See how our expert team delivers flawless results on every project.',
                'Mira como nuestro equipo experto ofrece resultados impecables en cada proyecto.'
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary section-padding">
        <div className="content-max">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-white text-2xl md:text-3xl lg:text-4xl text-center mb-12">
              {t('Numbers That Speak for Themselves', 'Numeros Que Hablan por Si Mismos')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 text-center">
                  <stat.icon className="w-10 h-10 text-white mx-auto mb-3" />
                  <div className="font-heading font-extrabold text-white text-2xl md:text-3xl lg:text-4xl">
                    {stat.number}
                  </div>
                  <div className="font-body text-white/80 text-xs md:text-sm mt-1">
                    {t(stat.labelEn, stat.labelEs)}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white section-padding">
        <div className="content-max max-w-[1000px]">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl text-center mb-10">
              {t('What Our Customers Say', 'Lo Que Dicen Nuestros Clientes')}
            </h2>
          </ScrollReveal>
          <TestimonialSlider />
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-muted section-padding">
        <div className="content-max">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl mb-4">
                  {t('Serving the Greater Phoenix Area', 'Sirviendo el Area de Phoenix')}
                </h2>
                <p className="font-body text-mid leading-relaxed mb-6">
                  {t(
                    "From Scottsdale to Mesa, Chandler to Glendale — we're your local painting experts. We understand Arizona's climate and know which paints and techniques stand up to the desert sun.",
                    'Desde Scottsdale hasta Mesa, Chandler hasta Glendale — somos tus expertos locales en pintura. Entendemos el clima de Arizona.'
                  )}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {['Phoenix', 'Scottsdale', 'Chandler', 'Mesa', 'Tempe', 'Glendale', 'Peoria', 'Gilbert'].map(
                    (city) => (
                      <span key={city} className="flex items-center gap-1.5 font-body text-dark text-sm">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        {city}
                      </span>
                    )
                  )}
                </div>
                <span className="inline-block bg-primary-light text-primary text-xs font-body font-medium rounded-full px-3 py-1">
                  {t('Local & Family-Owned', 'Local y de Propiedad Familiar')}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-xl overflow-hidden h-[350px] md:h-[400px] bg-lightgray">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425345.01364944996!2d-112.557 atoms!3d33.60567109999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1ae5!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.2)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Service Area Map"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTASection
        headlineEn="Ready to Transform Your Space?"
        headlineEs="Listo para Transformar Tu Espacio?"
        subEn="Get your free, no-obligation estimate today. We're ready to bring your vision to life."
        subEs="Obten tu estimado gratis sin compromiso hoy. Estamos listos para hacer realidad tu vision."
      />
    </div>
  );
}
