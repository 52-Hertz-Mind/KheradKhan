import SignIn from './SignIn.tsx';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [captions, setCaptions] = useState<HeaderCaptionsModel>();
  const [t, i18n] = useTranslation();
  function setCaption() {
    const headerCaption = t('header', {
      returnObjects: true,
    }) as HeaderCaptionsModel;
    setCaptions(headerCaption);
  }
  useEffect(() => {
    setCaption();
  }, []);

  if (!captions) return;
  return (
    <>
      <div className="p-5 px-96 flex items-center justify-between">
        <div className="text-2xl">{captions.name}</div>
        <button
          className="px-6 py-2 bg-white text-black border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {captions.signIn}
        </button>
      </div>
      <SignIn isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;

interface HeaderCaptionsModel {
  name: string;
  signIn: string;
}
