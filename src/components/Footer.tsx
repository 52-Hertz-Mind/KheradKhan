import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
function Footer() {
  //region hooks
  const [captions, setCaptions] = useState<HeaderCaptionsModel>();
  const [t, i18n] = useTranslation();
  useEffect(() => {
    setCaption();
  }, []);
  //endregion

  //region functions
  function setCaption() {
    const headerCaption = t('footer', {
      returnObjects: true,
    }) as HeaderCaptionsModel;
    setCaptions(headerCaption);
  }
  //endregion

  //region template
  if (!captions) return;
  return (
    <footer className="px-40 py-20 bg-gray-950 flex flex-col gap-10 font-MyFont">
      <div className="text-white flex flex-col gap-5" dir="rtl">
        <p className="text-3xl">{captions.name}</p>
        <p>{captions.caption}</p>
      </div>
      <div className="text-white flex gap-5" dir="rtl">
        <button className="hover:text-gray-300">{captions.aboutUs}</button>
        <button className="hover:text-gray-300">{captions.contactUs}</button>
        <button className="hover:text-gray-300">{captions.dashboard}</button>
        <button className="hover:text-gray-300">{captions.pricing}</button>
      </div>
    </footer>
  );
}
export default Footer;
interface HeaderCaptionsModel {
  name: string;
  caption: string;
  aboutUs: string;
  contactUs: string;
  dashboard: string;
  pricing: string;
}
