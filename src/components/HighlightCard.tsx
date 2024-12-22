import { FaRegEdit, FaRegHeart, FaRegQuestionCircle } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';
import { useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import { MdFavorite } from 'react-icons/md';

interface HighlightCardData {
  id: string;
  highlight: string;
}

function HighlightCard({ id, highlight }: HighlightCardData) {
  const [isInEditedMode, setIsInEditedMode] = useState(false);
  const [cardHighlight, setCardHighlight] = useState(highlight);
  const [editedHighlight, setEditedHighlight] = useState(highlight);
  const [isFavorite, setIsFavorite] = useState(false);

  const [isNeverFeedbackSet, setIsNeverFeedbackSet] = useState(false);
  const [isLessFeedbackSet, setIsLessFeedbackSet] = useState(false);
  const [isMoreFeedbackSet, setIsMoreFeedbackSet] = useState(false);
  const [isALotFeedbackSet, setIsALotFeedbackSet] = useState(false);
  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }
  function handleFrequency(feedbackType: string) {
    switch (feedbackType) {
      case 'never':
        setIsNeverFeedbackSet((prevState) => !prevState);
        setIsLessFeedbackSet(false);
        setIsMoreFeedbackSet(false);
        setIsALotFeedbackSet(false);
        break;
      case 'less':
        setIsLessFeedbackSet((prevState) => !prevState);
        setIsNeverFeedbackSet(false);
        setIsMoreFeedbackSet(false);
        setIsALotFeedbackSet(false);
        break;
      case 'more':
        setIsMoreFeedbackSet((prevState) => !prevState);
        setIsNeverFeedbackSet(false);
        setIsLessFeedbackSet(false);
        setIsALotFeedbackSet(false);
        break;
      case 'alot':
        setIsALotFeedbackSet((prevState) => !prevState);
        setIsNeverFeedbackSet(false);
        setIsLessFeedbackSet(false);
        setIsMoreFeedbackSet(false);
        break;
    }
  }
  function handleHighlightEdit() {
    setIsInEditedMode(true);
  }
  function handleHighlightEditSave() {
    setCardHighlight(editedHighlight);
    setIsInEditedMode(false);
  }
  function handleEditCancel() {
    setEditedHighlight(cardHighlight);
    setIsInEditedMode(false);
  }
  function handleHighlightShare() {}

  return (
    <>
      {isInEditedMode && (
        <div
          className="flex flex-col justify-between size-1/3 h-96 m-auto mt-10 mb-10 text-gray-800 rounded-2xl p-10 bg-white"
          key={id}
        >
          <TextareaAutosize
            className="'w-80 text-sm font-sans font-normal leading-5 px-3 py-2 rounded-lg shadow-md shadow-slate-100 dark:shadow-slate-900 focus:shadow-outline-purple dark:focus:shadow-outline-purple focus:shadow-lg border border-solid border-slate-300 hover:border-purple-500 dark:hover:border-purple-500 focus:border-purple-500 dark:focus:border-purple-500 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 focus-visible:outline-0 box-border"
            aria-label="highlight"
            placeholder={'هایلایت خود را وارد کنید'}
            value={editedHighlight}
            onChange={(e) => setEditedHighlight(e.target.value)}
          />
          <div className="flex gap-10">
            <button onClick={handleEditCancel}>لغو</button>
            <button onClick={handleHighlightEditSave}>ذخیره</button>
          </div>
        </div>
      )}
      {!isInEditedMode && (
        <div
          className="flex flex-col justify-between size-1/3 h-96 m-auto mt-10 mb-10 text-gray-800 rounded-2xl p-10 bg-white"
          key={id}
        >
          <p>{editedHighlight}</p>

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-5">
              <p>این هایلایت را ........... به من نشان بده</p>
              <div className="relative group">
                <FaRegQuestionCircle className="cursor-pointer" />
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-max p-2 text-sm text-white bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                  ما بر اساس انتخاب‌های شما هایلایت‌ها را کمتر یا بیشتر نشان
                  می‌دهیم
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              <button
                onClick={() => handleFrequency('never')}
                className={`${isNeverFeedbackSet && 'border-2 border-blue-400'} text-red-600 font-bold shadow p-2 w-20 hover:shadow-lg duration-150 rounded`}
              >
                نشان نده
              </button>
              <button
                onClick={() => handleFrequency('less')}
                className={`${isLessFeedbackSet && 'border-2 border-blue-400'} shadow p-2 w-20 hover:shadow-lg duration-150 rounded`}
              >
                کم تر
              </button>
              <button
                onClick={() => handleFrequency('more')}
                className={`${isMoreFeedbackSet && 'border-2 border-blue-400'} shadow p-2 w-20 hover:shadow-lg duration-150 rounded`}
              >
                بیشتر
              </button>
              <button
                onClick={() => handleFrequency('alot')}
                className={`${isALotFeedbackSet && 'border-2 border-blue-400'} shadow p-2 w-20 hover:shadow-lg duration-150 rounded`}
              >
                زیاد
              </button>
            </div>
          </div>
          <div className="flex gap-10">
            <div
              onClick={handleHighlightShare}
              className="cursor-pointer flex flex-col gap-2 justify-center items-center hover:text-gray-500 duration-150"
            >
              <IoShareOutline />
              <p className="text-sm">اشتراک گذاری</p>
            </div>
            <div
              onClick={handleHighlightEdit}
              className="cursor-pointer flex flex-col gap-2 justify-center items-center hover:text-gray-500 duration-150"
            >
              <FaRegEdit />
              <p className="text-sm">اصلاح</p>
            </div>
            <div
              onClick={handleFavorite}
              className="cursor-pointer flex flex-col gap-2 justify-center items-center hover:text-gray-500 duration-150"
            >
              {!isFavorite && <FaRegHeart />}
              {isFavorite && <MdFavorite />}
              <p className="text-sm">مورد علاقه</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HighlightCard;
