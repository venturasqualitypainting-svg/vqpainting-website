import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Phone, Paintbrush } from 'lucide-react';

const navLinks = [
  { path: '/', en: 'Home', es: 'Inicio' },
  { path: '/services', en: 'Services', es: 'Servicios' },
  { path: '/gallery', en: 'Gallery', es: 'Galeria' },
  { path: '/about', en: 'About Us', es: 'Sobre Nosotros' },
  { path: '/contact', en: 'Contact', es: 'Contacto' },
];

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-header' : 'border-b border-lightgray/50'
        }`}
      >
        <div className="content-max flex items-center justify-between h-[72px] md:h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img 
  src="/images/logo.png" 
  alt="Ventura's Quality Painting Logo" 
  className="h-8 w-auto"
/>
            <span className="font-heading font-extrabold text-lg text-primary leading-tight">
              Ventura&apos;s Quality Painting
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body font-medium text-[15px] transition-colors duration-200 pb-1 border-b-2 ${
                  location.pathname === link.path
                    ? 'text-primary border-primary'
                    : 'text-dark border-transparent hover:text-primary hover:border-primary/30'
                }`}
              >
                {t(link.en, link.es)}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-[13px] font-body font-medium"
            >
              <span className={lang === 'en' ? 'text-primary font-bold' : 'text-mid'}>EN</span>
              <span className="text-mid">|</span>
              <span className={lang === 'es' ? 'text-primary font-bold' : 'text-mid'}>ES</span>
            </button>

            {/* Phone CTA */}
            <a
              href="tel:4802615508"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-body font-semibold rounded-full px-5 py-2.5 transition-all duration-300 hover:bg-primary-dark hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4" />
              480-261-5508
            </a>
          </div>

          {/* Mobile: hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-dark" />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[300] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-white shadow-xl p-6 flex flex-col">
            <button
              className="self-end p-2 mb-4"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-dark" />
            </button>

            <nav className="flex flex-col gap-4 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-heading font-bold text-xl ${
                    location.pathname === link.path ? 'text-primary' : 'text-dark'
                  }`}
                >
                  {t(link.en, link.es)}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 text-sm font-body font-medium mb-4"
              >
                <span className={lang === 'en' ? 'text-primary font-bold' : 'text-mid'}>EN</span>
                <span className="text-mid">|</span>
                <span className={lang === 'es' ? 'text-primary font-bold' : 'text-mid'}>ES</span>
              </button>

              <a
                href="tel:4802615508"
                className="flex items-center justify-center gap-2 bg-primary text-white text-base font-body font-semibold rounded-lg px-5 py-3.5"
              >
                <Phone className="w-5 h-5" />
                480-261-5508
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
