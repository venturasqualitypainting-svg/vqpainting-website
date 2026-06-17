import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, CheckCircle2, ChevronDown } from 'lucide-react';

const faqItems = [
  {
    qEn: 'How much does it cost to paint a house in Phoenix?',
    qEs: 'Cuanto cuesta pintar una casa en Phoenix?',
    aEn: "Costs vary based on the size of your home, the condition of surfaces, and the type of paint used. Interior painting typically ranges from $2-4 per square foot, while exterior painting ranges from $1.50-3.50 per square foot. We provide free, detailed estimates with no obligation.",
    aEs: 'Los costos varian segun el tamano de tu hogar y el estado de las superficies. Proporcionamos estimados gratis y detallados sin compromiso.',
  },
  {
    qEn: 'How long will my painting project take?',
    qEs: 'Cuanto tiempo tomara mi proyecto de pintura?',
    aEn: "Most interior room painting projects take 1-2 days. A full home interior typically takes 3-5 days. Exterior projects depend on the size of the home but generally take 3-7 days. We'll give you a clear timeline in your estimate.",
    aEs: 'La mayoria de los proyectos interiores toman 1-2 dias. Un proyecto exterior generalmente toma 3-7 dias.',
  },
  {
    qEn: 'What type of paint do you use?',
    qEs: 'Que tipo de pintura usan?',
    aEn: "We primarily use premium paints from Sherwin-Williams and Benjamin Moore. For Arizona's climate, we recommend elastomeric and high-quality acrylic paints that resist UV damage.",
    aEs: 'Usamos principalmente pinturas premium de Sherwin-Williams y Benjamin Moore.',
  },
  {
    qEn: 'Do I need to move my furniture?',
    qEs: 'Necesito mover mis muebles?',
    aEn: "We'll move and cover large furniture items as part of our service. We ask that you remove small items, wall decorations, and anything fragile before we arrive.",
    aEs: 'Movemos y cubrimos los muebles grandes como parte de nuestro servicio.',
  },
  {
    qEn: 'Do you offer a warranty?',
    qEs: 'Ofrecen garantia?',
    aEn: "Yes! We stand behind our work with a satisfaction guarantee. Exterior painting projects include a 5-year warranty against peeling, blistering, and cracking. Interior projects include a 2-year warranty.",
    aEs: 'Si! Respaldamos nuestro trabajo con garantia de satisfaccion.',
  },
  {
    qEn: 'Can you help me choose colors?',
    qEs: 'Me pueden ayudar a elegir colores?',
    aEn: "Absolutely! Color consultation is included with every project. We can provide recommendations based on your style, lighting, and the latest trends.",
    aEs: 'Por supuesto! La consulta de color esta incluida con cada proyecto.',
  },
  {
    qEn: 'Are you licensed and insured?',
    qEs: 'Estan licenciados y asegurados?',
    aEn: "Yes, Ventura's Quality Painting is fully licensed, bonded, and insured for your protection.",
    aEs: 'Si, Ventura\'s Quality Painting esta completamente licenciado, asegurado y garantizado.',
  },
  {
    qEn: 'Do you speak Spanish?',
    qEs: 'Hablan espanol?',
    aEn: "Si! Hablamos espanol. We're proud to serve Phoenix's Hispanic community.",
    aEs: 'Si! Hablamos espanol. Estamos orgullosos de servir a la comunidad hispana de Phoenix.',
  },
];

function FAQAccordion() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqItems.map((item, i) => (
        <div key={i} className="bg-muted rounded-lg overflow-hidden">
          <button
            className="w-full flex items-center justify-between p-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-heading font-semibold text-dark text-sm md:text-base pr-4">
              {t(item.qEn, item.qEs)}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className="grid transition-[grid-template-rows] duration-300 ease-out"
            style={{ gridTemplateRows: openIndex === i ? '1fr' : '0fr' }}
          >
            <div className="overflow-hidden">
              <p className="font-body text-mid text-sm leading-relaxed px-5 pb-5">
                {t(item.aEn, item.aEs)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', location: '', message: '', source: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary min-h-[220px] max-h-[320px] h-[30vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        </div>
        <div className="content-max relative z-10 pt-20 text-center">
          <ScrollReveal>
            <span className="text-white/80 text-xs font-body font-medium uppercase tracking-[0.1em]">
              {t('Contact Us', 'Contactanos')}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-heading font-extrabold text-white text-3xl md:text-4xl lg:text-5xl mt-2">
              {t("Let's Start Your Project", 'Empecemos Tu Proyecto')}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-body text-white/90 mt-3 max-w-[560px] mx-auto">
              {t('Get your free estimate today. Call us or fill out the form.', 'Obtén tu estimado gratis hoy. Llamanos o completa el formulario.')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.45}>
            <a href="tel:4802615508" className="inline-flex items-center gap-2 text-white font-body font-semibold text-lg mt-3 hover:underline">
              <Phone className="w-5 h-5" />
              {t('Prefer to call? 480-261-5508', 'Prefieres llamar? 480-261-5508')}
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white section-padding">
        <div className="content-max">
          <div className="grid lg:grid-cols-[60%_40%] gap-8 lg:gap-12">
            {/* Form */}
            <ScrollReveal direction="left">
              <div className="bg-white border border-lightgray rounded-xl p-6 md:p-8 shadow-card">
                {formState === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-4" />
                    <h3 className="font-heading font-bold text-dark text-xl md:text-2xl mb-2">
                      {t("Thank you! We'll contact you within 24 hours.", 'Gracias! Te contactaremos en 24 horas.')}
                    </h3>
                    <p className="font-body text-mid">
                      {t('We appreciate your interest in our services.', 'Apreciamos tu interes en nuestros servicios.')}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-heading font-bold text-dark text-xl mb-2">
                      {t('Request Free Estimate', 'Solicitar Estimado Gratis')}
                    </h3>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-sm text-dark mb-1">
                          {t('Name', 'Nombre')} <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder={t('Your full name', 'Tu nombre completo')}
                          className="w-full border border-lightgray rounded-lg px-4 py-3 font-body text-sm text-dark placeholder:text-mid/60 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-sm text-dark mb-1">
                          {t('Phone', 'Telefono')} <span className="text-primary">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(480) 555-0123"
                          className="w-full border border-lightgray rounded-lg px-4 py-3 font-body text-sm text-dark placeholder:text-mid/60 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-sm text-dark mb-1">
                        {t('Email', 'Correo Electronico')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                       placeholder="venturasqualitypainting@gmail.com"
                        className="w-full border border-lightgray rounded-lg px-4 py-3 font-body text-sm text-dark placeholder:text-mid/60 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-body text-sm text-dark mb-1">
                          {t('Service Type', 'Tipo de Servicio')}
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full border border-lightgray rounded-lg px-4 py-3 font-body text-sm text-dark bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                        >
                          <option value="">{t('Select a service', 'Selecciona un servicio')}</option>
                          <option value="interior">{t('Interior Painting', 'Pintura Interior')}</option>
                          <option value="exterior">{t('Exterior Painting', 'Pintura Exterior')}</option>
                          <option value="residential">{t('Residential Painting', 'Pintura Residencial')}</option>
                          <option value="commercial">{t('Commercial Painting', 'Pintura Comercial')}</option>
                          <option value="drywall">{t('Drywall Repair', 'Reparacion de Drywall')}</option>
                          <option value="cabinets">{t('Cabinet Refinishing', 'Refinado de Gabinetes')}</option>
                          <option value="other">{t('Other / Not Sure', 'Otro / No Estoy Seguro')}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-body text-sm text-dark mb-1">
                          {t('Project Location', 'Ubicacion del Proyecto')}
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder={t('City or ZIP code', 'Ciudad o codigo postal')}
                          className="w-full border border-lightgray rounded-lg px-4 py-3 font-body text-sm text-dark placeholder:text-mid/60 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-sm text-dark mb-1">
                        {t('Message', 'Mensaje')}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('Tell us about your project...', 'Cuentanos sobre tu proyecto...')}
                        rows={4}
                        className="w-full border border-lightgray rounded-lg px-4 py-3 font-body text-sm text-dark placeholder:text-mid/60 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-y min-h-[100px]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full btn-primary disabled:opacity-60"
                    >
                      {formState === 'submitting'
                        ? t('Sending...', 'Enviando...')
                        : t('Request Free Estimate', 'Solicitar Estimado Gratis')}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-mid text-xs uppercase tracking-wide">{t('Call Us', 'Llamanos')}</p>
                    <a href="tel:4802615508" className="font-heading font-bold text-primary text-xl md:text-2xl hover:underline">
                      480-261-5508
                    </a>
                    <p className="font-body text-mid text-xs mt-1">
                      {t('Mon - Sat, 7am - 6pm', 'Lun - Sab, 7am - 6pm')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-mid text-xs uppercase tracking-wide">{t('Email Us', 'Escribenos')}</p>
                    <a href="mailto:venturasqualitypainting@gmail.com" className="font-heading font-semibold 
text-primary text-base hover:underline">
                      venturasqualitypainting@gmail.com
                    </a>
                    <p className="font-body text-mid text-xs mt-1">
                      {t('We reply within 24 hours', 'Respondemos en 24 horas')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-mid text-xs uppercase tracking-wide">{t('Business Hours', 'Horario de Atencion')}</p>
                    <p className="font-body text-dark text-sm font-medium">
                      {t('Mon - Sat: 7:00 AM - 6:00 PM', 'Lun - Sab: 7:00 AM - 6:00 PM')}
                    </p>
                    <p className="font-body text-mid text-xs">
                      {t('Sunday: By appointment', 'Domingo: Con cita')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-mid text-xs uppercase tracking-wide">{t('We Serve', 'Atendemos')}</p>
                    <p className="font-body text-dark text-sm">
                      Phoenix, Scottsdale, Chandler, Mesa, Tempe, Glendale, Peoria, Gilbert
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-body text-mid text-xs uppercase tracking-wide mb-2">{t('Follow Us', 'Siguenos')}</p>
                  <div className="flex gap-3">
                    <a
  href="https://www.facebook.com/VQpainting"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
>
  <Facebook className="w-5 h-5" />
</a>

<a
  href="https://www.instagram.com/vqpainting/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
>
  <Instagram className="w-5 h-5" />
</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-muted pb-16 md:pb-20">
        <div className="h-[280px] md:h-[400px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425345.01364944996!2d-112.557 atoms!3d33.60567109999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1ae5!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.2)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Phoenix Service Area Map"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-padding">
        <div className="content-max max-w-[800px]">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl lg:text-4xl text-center mb-10">
              {t('Frequently Asked Questions', 'Preguntas Frecuentes')}
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <FAQAccordion />
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-12 md:py-16">
        <div className="content-max max-w-[700px] text-center">
          <ScrollReveal>
            <h2 className="font-heading font-extrabold text-white text-2xl md:text-3xl">
              {t('Still Have Questions? Call Us!', 'Aun Tienes Preguntas? Llamanos!')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a href="tel:4802615508" className="inline-flex items-center gap-3 text-white font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mt-3 hover:underline">
              <Phone className="w-8 h-8" />
              480-261-5508
            </a>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-white/80 text-sm mt-3">
              {t('Free estimates • No obligation • Friendly service', 'Estimados gratis • Sin compromiso • Servicio amigable')}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
