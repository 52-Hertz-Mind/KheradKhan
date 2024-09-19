import { useTranslation } from 'react-i18next';
function Footer() {
  const [t, i18n] = useTranslation();

  return (
    <footer className="px-40 py-20 bg-gray-950 flex flex-col gap-10 font-MyFont">
      <div className="text-white flex flex-col gap-5" dir="rtl">
        <p className="text-3xl">{t('name')}</p>
        <p>
          {' '}
          ما به هزاران خواننده کمک می کنیم تا از نکات برجسته دیجیتال خود بیشترین
          استفاده را ببرند.
        </p>
      </div>
      <div className="text-white flex gap-5" dir="rtl">
        <button className="hover:text-gray-300">درباره ما</button>
        <button className="hover:text-gray-300">تماس با ما</button>
        <button className="hover:text-gray-300">داشبورد</button>
        <button className="hover:text-gray-300">قیمت ها</button>
      </div>
    </footer>
  );
}
export default Footer;
