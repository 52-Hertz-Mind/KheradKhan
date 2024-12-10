import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function HowItWorks() {
  //region hooks
  const [captions, setCaptions] = useState<HowItWorksCaptionsModel>();
  const [t, i18n] = useTranslation();
  i18n;
  useEffect(() => {
    setCaption();
  }, []);
  //end region

  //region functions
  function setCaption() {
    const howItWorksCaption = t('howItWorks', {
      returnObjects: true,
    }) as HowItWorksCaptionsModel;
    setCaptions(howItWorksCaption);
  }
  //end region

  //region template
  if (!captions) return;
  return (
    <div className="flex flex-col gap-8 mt-20 items-end p-40">
      <div>
        <p className="text-5xl font-bold">{captions.title}</p>
      </div>
      <div className="flex gap-5 w-full">
        {/*1*/}
        <div className="flex flex-col gap-5 items-end w-1/3">
          <div className="flex gap-2 items-center justify-end border-b-2 border-b-black p-2 w-full">
            <p className="text-2xl">{captions.rememberTitle}</p>
            <img src="/remember.png" className="size-20" alt="import image" />
          </div>
          <p className="" dir="rtl">
            {captions.rememberCaption}
          </p>
        </div>
        {/*2*/}
        <div className="flex flex-col gap-5 items-end w-1/3">
          <div className="flex gap-2 items-center justify-end border-b-2 border-b-black p-2 w-full">
            <p className="text-2xl">{captions.reviewTitle}</p>
            <img src="/review.png" className="size-20" alt="import image" />
          </div>
          <p className="" dir="rtl">
            {captions.reviewCaption}
          </p>
        </div>
        {/*3*/}
        <div className="flex flex-col gap-5 items-end w-1/3">
          <div className="flex gap-2 items-center justify-end border-b-2 border-b-black p-2 w-full">
            <p className="text-2xl">{captions.importTitle}</p>
            <img src="/import.png" className="size-20" alt="import image" />
          </div>
          <p className="" dir="rtl">
            {captions.importCaption}
          </p>
        </div>
      </div>
    </div>
  );
  //end region
}

export default HowItWorks;
interface HowItWorksCaptionsModel {
  title: string;
  importTitle: string;
  importCaption: string;
  reviewTitle: string;
  reviewCaption: string;
  rememberTitle: string;
  rememberCaption: string;
}
