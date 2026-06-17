import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ContactCTASectionProps {
  headlineEn: string;
  headlineEs: string;
  subEn: string;
  subEs: string;
  trustEn?: string;
  trustEs?: string;
}

export default function ContactCTASection({
  headlineEn,
  headlineEs,
  subEn,
  subEs,
  trustEn = 'Free estimates \u2022 Licensed \u0026 Insured \u2022 Satisfaction Guaranteed',
  trustEs = 'Estimados gratis \u2022 Licenciado y Asegurado \u2022 Satisfaccion Garantizada',
}: ContactCTASectionProps) {
  const { t } = useLanguage();

  return (
    <section className="bg-primary py-16 md:py-20 lg:py-24">
      <div className="content-max max-w-[800px] text-center">
        <ScrollReveal>
          <h2 className="font-heading font-extrabold text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
            {t(headlineEn, headlineEs)}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-body text-white/90 text-base md:text-lg mt-4 max-w-[600px] mx-auto">
            {t(subEn, subEs)}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-muted hover:text-primary-dark">
              {t('Get a Free Estimate', 'Obten una Cotizacion Gratis')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:4802615508" className="btn-green">
              <Phone className="w-4 h-4" />
              {t('Call: 480-261-5508', 'Llama: 480-261-5508')}
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="font-body text-white/70 text-sm mt-6">
            {t(trustEn, trustEs)}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
