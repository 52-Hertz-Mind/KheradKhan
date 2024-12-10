import { FaRegEdit, FaRegHeart } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';

interface HighlightCardData {
  id: string;
  highlight: string;
}

function HighlightCard({ id, highlight }: HighlightCardData) {
  function handleFavorite() {}

  return (
    <div
      className="flex flex-col justify-between size-1/3 h-96 m-auto mt-10 mb-10 text-gray-800 rounded-2xl p-10 bg-white"
      key={id}
    >
      <p>{highlight}</p>
      <div className="flex gap-10">
        <div
          onClick={handleFavorite}
          className="cursor-pointer flex flex-col gap-2 justify-center items-center hover:text-gray-500 duration-150"
        >
          <IoShareOutline />
          <p className="text-sm">اشتراک گذاری</p>
        </div>
        <div
          onClick={handleFavorite}
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
  );
}

export default HighlightCard;
