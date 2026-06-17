import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, Paintbrush, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted pt-16 pb-8">
      <div className="content-max">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Paintbrush className="w-5 h-5 text-primary" />
              <span className="font-heading font-extrabold text-base text-primary">
                Ventura&apos;s Quality Painting
              </span>
            </div>
            <p className="text-mid text-sm font-body leading-relaxed mb-4">
              {t(
                "Phoenix, Arizona's trusted painting professionals. Quality you can see, service you can trust.",
                'Profesionales de pintura de confianza en Phoenix, Arizona. Calidad que puedes ver, servicio en el que puedes confiar.'
              )}
            </p>
            <a
              href="tel:4802615508"
              className="inline-flex items-center gap-2 text-primary font-heading font-bold text-lg"
            >
              <Phone className="w-5 h-5" />
              480-261-5508
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-dark mb-4">
              {t('Quick Links', 'Enlaces Rapidos')}
            </h4>
            <ul className="space-y-2">
              {[
                { path: '/', en: 'Home', es: 'Inicio' },
                { path: '/services', en: 'Services', es: 'Servicios' },
                { path: '/gallery', en: 'Gallery', es: 'Galeria' },
                { path: '/about', en: 'About Us', es: 'Sobre Nosotros' },
                { path: '/contact', en: 'Contact', es: 'Contacto' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-mid text-sm font-body hover:text-primary transition-colors"
                  >
                    {t(link.en, link.es)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-dark mb-4">
              {t('Our Services', 'Nuestros Servicios')}
            </h4>
            <ul className="space-y-2">
              {[
                { en: 'Interior Painting', es: 'Pintura Interior' },
                { en: 'Exterior Painting', es: 'Pintura Exterior' },
                { en: 'Residential Painting', es: 'Pintura Residencial' },
                { en: 'Commercial Painting', es: 'Pintura Comercial' },
                { en: 'Drywall Repair', es: 'Reparacion de Drywall' },
                { en: 'Cabinet Refinishing', es: 'Refinado de Gabinetes' },
              ].map((s, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="text-mid text-sm font-body hover:text-primary transition-colors"
                  >
                    {t(s.en, s.es)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading font-semibold text-dark mb-4">
              {t('Service Areas', 'Areas de Servicio')}
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-6">
              {['Phoenix', 'Scottsdale', 'Chandler', 'Mesa', 'Tempe', 'Glendale', 'Peoria', 'Gilbert'].map(
                (city) => (
                  <span key={city} className="flex items-center gap-1 text-mid text-sm font-body">
                    <MapPin className="w-3 h-3 text-primary" />
                    {city}
                  </span>
                )
              )}
            </div>
            <h4 className="font-heading font-semibold text-dark mb-3">
              {t('Follow Us', 'Siguenos')}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/VQpainting"
                target="_blank"
                rel="noopener noreferrer"  
                className="text-primary hover:text-primary-dark transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/vqpainting/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-lightgray pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-mid text-xs font-body">
            &copy; 2025 Ventura&apos;s Quality Painting. {t('All rights reserved.', 'Todos los derechos reservados.')}
          </p>
          <div className="flex items-center gap-4 text-xs font-body text-mid">
            <span className="hover:text-primary cursor-pointer transition-colors">
              {t('Privacy Policy', 'Politica de Privacidad')}
            </span>
            <span className="hover:text-primary cursor-pointer transition-colors">
              {t('Terms of Service', 'Terminos de Servicio')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
