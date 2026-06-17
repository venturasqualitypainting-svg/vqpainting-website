import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';
import ContactCTASection from '@/components/ContactCTASection';
import {
  Star, MessageCircle, Heart, MapPin,
  TrendingUp, Smile, ArrowRight, MapPinIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Star,
    titleEn: 'Quality Craftsmanship',
    titleEs: 'Artesania de Calidad',
    descEn: "We never cut corners. Every surface is properly prepped, every edge is carefully cut, and every finish is inspected.",
    descEs: 'Nunca cortamos esquinas. Cada superficie se prepara adecuadamente.',
  },
  {
    icon: MessageCircle,
    titleEn: 'Honest Communication',
    titleEs: 'Comunicacion Honesta',
    descEn: "From the initial estimate to the final walkthrough, we keep you informed every step of the way.",
    descEs: 'Desde el estimado inicial hasta la inspeccion final, te mantenemos informado.',
  },
  {
    icon: Heart,
    titleEn: 'Respect for Your Home',
    titleEs: 'Respeto por Tu Hogar',
    descEn: "We treat your property with the same care we'd give our own.",
    descEs: 'Tratamos tu propiedad con el mismo cuidado que dariamos a la nuestra.',
  },
  {
    icon: MapPin,
    titleEn: 'Community Roots',
    titleEs: 'Raices Comunitarias',
    descEn: "We're your neighbors. As a Phoenix-based, family-owned business, we're invested in making our community more beautiful.",
    descEs: 'Somos tus vecinos. Estamos comprometidos con hacer nuestra comunidad mas hermosa.',
  },
  {
    icon: TrendingUp,
    titleEn: 'Continuous Improvement',
    titleEs: 'Mejora Continua',
    descEn: "We stay current with the latest painting techniques, products, and color trends.",
    descEs: 'Nos mantenemos actualizados con las ultimas tecnicas y tendencias.',
  },
  {
    icon: Smile,
    titleEn: 'Customer Satisfaction',
    titleEs: 'Satisfaccion del Cliente',
    descEn: "Your happiness is our success. We don't consider a job done until you're completely satisfied.",
    descEs: 'Tu felicidad es nuestro exito. No consideramos un trabajo terminado hasta que estes satisfecho.',
  },
];

const aboutStats = [
  { number: '15+', labelEn: 'Years in Business', labelEs: 'Anos en el Negocio' },
  { number: '500+', labelEn: 'Projects Completed', labelEs: 'Proyectos Completados' },
  { number: '6', labelEn: 'Cities Served', labelEs: 'Ciudades Atendidas' },
  { number: '100%', labelEn: 'Satisfaction Rate', labelEs: 'Tasa de Satisfaccion' },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[300px] max-h-[400px] h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <img
          src="/images/about-hero-bg.jpg"
          alt="About Ventura's Quality Painting"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="content-max relative z-10 pt-20 text-center">
          <ScrollReveal>
            <span className="text-primary text-xs font-body font-medium uppercase tracking-[0.1em]">
              {t('About Us', 'Sobre Nosotros')}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-heading font-extrabold text-white text-3xl md:text-4xl lg:text-5xl max-w-[700px] mx-auto mt-2">
              {t('A Family Business Built on Quality & Trust', 'Un Negocio Familiar Construido en Calidad y Confianza')}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-body text-white/90 mt-3 max-w-[560px] mx-auto">
              {t("For over 15 years, we've been transforming homes and businesses across the Phoenix valley.", 'Por mas de 15 anos, hemos transformado hogares y negocios en todo el valle de Phoenix.')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white section-padding">
        <div className="content-max">
          <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-xl overflow-hidden shadow-lg">
                  
                <img
                  src="/images/about-story.png"
                  alt="Our story"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl mb-4">
                  {t('Our Story', 'Nuestra Historia')}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="font-body text-mid leading-relaxed mb-4">
                  {t(
                    "Ventura's Quality Painting was founded with a simple mission: to deliver exceptional painting services with honesty, integrity, and craftsmanship that exceeds expectations.",
                    'Ventura\'s Quality Painting fue fundado con una mision simple: ofrecer servicios de pintura excepcionales con honestidad, integridad y artesania que supera las expectativas.'
                  )}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="font-body text-mid leading-relaxed mb-4">
                  {t(
                    "We believe that painting is more than just applying color to walls — it's about transforming spaces, protecting investments, and helping families love where they live.",
                    'Creemos que la pintura es mas que aplicar color a las paredes — se trata de transformar espacios y proteger inversiones.'
                  )}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 mb-4">
                  <p className="font-body font-medium text-primary">
                    {t(
                      "As a Hispanic-owned business, we take special pride in serving Phoenix's diverse community. Hablamos espanol — because great communication is the foundation of great results.",
                      'Como negocio de propiedad hispana, nos enorgullece servir a la diversa comunidad de Phoenix. Hablamos espanol.'
                    )}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted section-padding">
        <div className="content-max max-w-[1000px]">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl">
                {t('What We Stand For', 'En Que Creemos')}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-body text-mid mt-3">
                {t('These principles guide every project we take on.', 'Estos principios guian cada proyecto que emprendemos.')}
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-4">
                  <v.icon className="w-10 h-10 text-primary shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-dark text-base mb-1">
                      {t(v.titleEn, v.titleEs)}
                    </h4>
                    <p className="font-body text-mid text-sm leading-relaxed">
                      {t(v.descEn, v.descEs)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="bg-white py-14">
        <div className="content-max max-w-[900px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {aboutStats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-heading font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl">
                    {stat.number}
                  </div>
                  <div className="font-body text-mid text-sm mt-1">
                    {t(stat.labelEn, stat.labelEs)}
                  </div>
                </div>
                {i < aboutStats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-lightgray" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-muted section-padding">
        <div className="content-max">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl mb-4">
                  {t('Proudly Serving the Phoenix Valley', 'Sirviendo Orgullosamente al Valle de Phoenix')}
                </h2>
                <p className="font-body text-mid leading-relaxed mb-6">
                  {t(
                    "From central Phoenix to the surrounding communities, we bring professional painting services to homeowners and businesses throughout the valley.",
                    'Desde el centro de Phoenix hasta las comunidades circundantes, ofrecemos servicios profesionales de pintura.'
                  )}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {['Phoenix', 'Scottsdale', 'Chandler', 'Mesa', 'Tempe', 'Glendale', 'Peoria', 'Gilbert'].map(
                    (city) => (
                      <span key={city} className="flex items-center gap-1.5 font-body text-dark text-sm">
                        <MapPinIcon className="w-4 h-4 text-primary shrink-0" />
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
              <div className="rounded-xl overflow-hidden h-[300px] md:h-[380px] bg-lightgray">
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

      {/* Team */}
      <section className="bg-white section-padding">
  <div className="content-max max-w-[900px] text-center">

```
<img
  src="/images/logo.png"
  alt="Ventura's Quality Painting"
  className="w-40 md:w-56 mx-auto mb-8"
/>

<h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl mb-4">
  {t('Why Choose Ventura’s Quality Painting?', '¿Por Qué Elegir Ventura’s Quality Painting?')}
</h2>

<p className="font-body text-mid max-w-[700px] mx-auto mb-8">
  {t(
    'We deliver professional painting services with quality craftsmanship, honest communication, and attention to 
detail on every project.',
    'Ofrecemos servicios profesionales de pintura con acabados de calidad, comunicación honesta y atención al 
detalle en cada proyecto.'
  )}
</p>

<Link to="/contact" className="btn-primary inline-flex">
  {t('Get a Free Estimate', 'Obtén un Estimado Gratis')}
  <ArrowRight className="w-4 h-4 ml-2" />
</Link>
```

  </div>
</section>


      {/* CTA */}
      <ContactCTASection
        headlineEn="Let's Bring Your Vision to Life"
        headlineEs="Hagamos Realidad Tu Vision"
        subEn="Every great paint job starts with a conversation. We'd love to hear about your project."
        subEs="Cada gran trabajo de pintura comienza con una conversacion. Nos encantaria saber sobre tu proyecto."
      />
    </div>
  );
}
