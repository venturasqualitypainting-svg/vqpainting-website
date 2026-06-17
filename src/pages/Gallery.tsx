import { useState, useCallback, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryItems = [
  { src: '/images/gallery-ext-1.jpg', category: 'Exterior', ratio: '16:9' },
  { src: '/images/gallery-int-1.jpg', category: 'Interior', ratio: '4:3' },
  { src: '/images/gallery-cab-1.jpg', category: 'Cabinets', ratio: '3:4' },
  { src: '/images/gallery-int-2.jpg', category: 'Interior', ratio: '4:3' },
  { src: '/images/gallery-ext-2.jpg', category: 'Exterior', ratio: '16:9' },
  { src: '/images/gallery-cab-2.jpg', category: 'Cabinets', ratio: '1:1' },
  { src: '/images/gallery-int-3.jpg', category: 'Interior', ratio: '4:3' },
  { src: '/images/gallery-ext-3.jpg', category: 'Exterior', ratio: '3:4' },
  { src: '/images/gallery-int-4.jpg', category: 'Interior', ratio: '16:9' },
  { src: '/images/gallery-ext-4.jpg', category: 'Exterior', ratio: '4:3' },
  { src: '/images/gallery-int-5.jpg', category: 'Interior', ratio: '1:1' },
  { src: '/images/service-residential.jpg', category: 'Exterior', ratio: '4:3' },
];

const filters = [
  { key: 'All', en: 'All', es: 'Todos' },
  { key: 'Interior', en: 'Interior', es: 'Interior' },
  { key: 'Exterior', en: 'Exterior', es: 'Exterior' },
  { key: 'Cabinets', en: 'Cabinets', es: 'Gabinetes' },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % filtered.length);
  }, [filtered.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[250px] max-h-[380px] h-[35vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <img
          src="/images/gallery-int-1.jpg"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="content-max relative z-10 pt-20 text-center">
          <ScrollReveal>
            <span className="text-primary text-xs font-body font-medium uppercase tracking-[0.1em]">
              {t('Our Portfolio', 'Nuestro Portafolio')}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <h1 className="font-heading font-extrabold text-white text-3xl md:text-4xl">
              {t('See the Quality for Yourself', 'Mira la Calidad por Ti Mismo')}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-body text-white/90 mt-3 max-w-[560px] mx-auto">
              {t('Browse our collection of residential and commercial painting projects.', 'Explora nuestra coleccion de proyectos de pintura residencial y comercial.')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white pt-8 pb-4">
        <div className="content-max">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all ${
                  activeFilter === f.key
                    ? 'bg-primary text-white'
                    : 'border border-lightgray text-mid hover:border-primary hover:text-primary'
                }`}
              >
                {t(f.en, f.es)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white section-padding pt-6">
        <div className="content-max">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <ScrollReveal key={`${activeFilter}-${i}`} delay={(i % 3) * 0.06}>
                <div
                  className="relative rounded-lg overflow-hidden group cursor-pointer break-inside-avoid"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={item.src}
                    alt={`${item.category} painting project`}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{
                      aspectRatio: item.ratio === '16:9' ? '16/9' : item.ratio === '4:3' ? '4/3' : item.ratio === '3:4' ? '3/4' : '1/1',
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="text-center text-white">
                      <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                      <span className="font-body font-semibold text-sm">{t('View', 'Ver')}</span>
                    </div>
                  </div>
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-body font-medium px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery CTA */}
      <section className="bg-muted py-14">
        <div className="content-max max-w-[600px] text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-dark text-2xl md:text-3xl">
              {t('Ready to See Your Home Transformed?', 'Listo para Ver Tu Hogar Transformado?')}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-body text-mid mt-3">
              {t('Every project in our gallery started with a free estimate. Yours can too.', 'Cada proyecto en nuestra galeria comenzo con un estimado gratis. El tuyo tambien puede.')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link to="/contact" className="btn-primary mt-6 inline-flex">
              {t('Get Your Free Estimate', 'Obten Tu Estimado Gratis')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[400] bg-black/92 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 z-10"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div
            className="max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex]?.src}
              alt="Gallery"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <p className="text-white/70 text-sm font-body text-center mt-3">
              {lightboxIndex + 1} {t('of', 'de')} {filtered.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
