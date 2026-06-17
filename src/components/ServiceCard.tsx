import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

interface ServiceCardProps {
  image: string;
  titleEn: string;
  titleEs: string;
  descEn: string;
  descEs: string;
  link?: string;
}

export default function ServiceCard({ image, titleEn, titleEs, descEn, descEs, link = '/services' }: ServiceCardProps) {
  const { t } = useLanguage();

  return (
    <Link
      to={link}
      className="group block bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border-b-[3px] border-transparent hover:border-primary"
    >
      <div className="overflow-hidden aspect-[16/10]">
        <img
          src={image}
          alt={t(titleEn, titleEs)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h4 className="font-heading font-bold text-dark text-lg mb-2">
          {t(titleEn, titleEs)}
        </h4>
        <p className="font-body text-mid text-sm leading-relaxed line-clamp-2">
          {t(descEn, descEs)}
        </p>
      </div>
    </Link>
  );
}
