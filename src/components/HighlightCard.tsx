import { FaRegEdit, FaRegHeart, FaRegQuestionCircle } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';
import { useState } from 'react';

interface HighlightCardData {
  id: string;
  highlight: string;
}

function HighlightCard({ id, highlight }: HighlightCardData) {
  const [isInEditedMode, setIsInEditedMode] = useState(false);

  function handleFavorite() {}
  function handleFrequency() {}
  function handleHighlightEdit() {
    setIsInEditedMode(true);
  }
  function handleHighlightShare() {}

  return (
    <>
      {isInEditedMode && (
        <div
          className="flex flex-col justify-between size-1/3 h-96 m-auto mt-10 mb-10 text-gray-800 rounded-2xl p-10 bg-white"
          key={id}
        >
          <textarea
            className="w-96 h-96"
            value={highlight}
            onChange={handleHighlightEdit}
          />
          <div className="flex gap-10">
            <button onClick={() => setIsInEditedMode(false)}>لغو</button>
            <button>ذخیره</button>
          </div>
        </div>
      )}
      {!isInEditedMode && (
        <div
          className="flex flex-col justify-between size-1/3 h-96 m-auto mt-10 mb-10 text-gray-800 rounded-2xl p-10 bg-white"
          key={id}
        >
          <p>{highlight}</p>

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
                onClick={handleFrequency}
                className="text-red-600 font-bold shadow p-2 w-20 hover:shadow-lg duration-150 rounded"
              >
                نشان نده
              </button>
              <button
                onClick={handleFrequency}
                className="shadow p-2 w-20 hover:shadow-lg duration-150 rounded"
              >
                کم تر
              </button>
              <button
                onClick={handleFrequency}
                className="shadow p-2 w-20 hover:shadow-lg duration-150 rounded"
              >
                بیشتر
              </button>
              <button
                onClick={handleFrequency}
                className="shadow p-2 w-20 hover:shadow-lg duration-150 rounded"
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
              <FaRegHeart />
              <p className="text-sm">مورد علاقه</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HighlightCard;
