import { useTranslations } from "next-intl";

interface ContactProps {
    className?: string;
}

const ContactForm = (props: ContactProps) => {
  const t = useTranslations('contact');

  return (
    <div className={`flex flex-col ${props.className}`}>
      <h2 className="text-xl md:text-2xl font-extrabold">{t('form.title')}</h2>
      <p className="text-gray-500 text-sm md:text-lg font-semibold leading-5">{t('form.description')}</p>
      <form className="flex flex-col space-y-1 text-sm md:text-md md:space-y-4 mt-5">
        <input type="text" placeholder={t('form.name')} className="p-2 border border-gray-300 rounded" />
        <input type="email" placeholder={t('form.email')} className="p-2 border border-gray-300 rounded" />
        <textarea placeholder={t('form.message')} className="p-2 border border-gray-300 rounded" rows={4} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded font-bold shadow-blue-500 shadow-md/30">{t('form.submit')} </button>
      </form>
    </div>
  )
};

export default ContactForm;
