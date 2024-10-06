import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SignIn from './SignIn.tsx';
function Hero() {
  //region hooks
  const [isOpen, setIsOpen] = useState(false);
  const [captions, setCaptions] = useState<HeaderCaptionsModel>();
  const [t, i18n] = useTranslation();
  i18n;
  useEffect(() => {
    setCaption();
  }, []);
  //endregion

  //region functions
  function setCaption() {
    const headerCaption = t('hero', {
      returnObjects: true,
    }) as HeaderCaptionsModel;
    setCaptions(headerCaption);
  }
  //endregion
  //region template
  if (!captions) return;
  return (
    <div className="flex flex-col gap-5 items-center justify-center ">
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="text-3xl font-bold">{captions.title}</p>
        <p>{captions.subtitle}</p>
      </div>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 rounded-2xl text-white p-2 w-40 hover:bg-blue-700 duration-150"
        >
          {captions.startButton}
        </button>
      </div>
      <div>
        <img src="/src/assets/hero.png" className="h-[600px] w-[1000px]" />
      </div>
      <SignIn isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
  //end region
}
export default Hero;

interface HeaderCaptionsModel {
  title: string;
  subtitle: string;
  startButton: string;
}
