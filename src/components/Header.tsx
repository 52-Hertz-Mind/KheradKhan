import SignIn from './SignIn.tsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [t, i18n] = useTranslation();
  return (
    <>
      <div className="p-5 px-96 flex items-center justify-between">
        <div className="text-2xl">{t('name')}</div>
        <button
          className="px-6 py-2 bg-white text-black border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          ثبت نام
        </button>
      </div>
      <SignIn isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
