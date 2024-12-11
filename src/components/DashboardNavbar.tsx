import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function DashboardNavbar() {
  const [isUserPopUpOpen, setIsUserPopUpOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  function handleUserPopup(event: React.MouseEvent) {
    event.stopPropagation();
    setIsUserPopUpOpen((prevState) => !prevState);
  }
  function handleReviewSettingClick() {
    navigate('/reviewsetting');
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsUserPopUpOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <div className="p-5 px-96 flex items-center gap-5 justify-between">
      <div className="flex items-center gap-5">
        <div>
          <button className="relative" onClick={handleUserPopup}>
            <MdOutlineAccountCircle
              size="25"
              className="text-gray-600 hover:text-gray-950 duration-150"
            />
          </button>
          {/*popup*/}
          <div
            ref={popupRef}
            className={`rounded absolute shadow flex flex-col items-center gap-5 transition-all duration-150 ease-in-out ${isUserPopUpOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'}`}
          >
            <button className="hover:bg-gray-200 size-full p-2 px-5">
              تنظیمات حساب
            </button>
            <button
              onClick={handleReviewSettingClick}
              className="hover:bg-gray-200 size-full p-2 px-5"
            >
              تنظیمات مرور
            </button>
            <button className="hover:bg-gray-200 size-full p-2 px-5">
              خروج از حساب
            </button>
          </div>
        </div>

        {/* thunder button */}
        <button
          className="w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm"
          aria-label="Lightning action"
        >
          <FontAwesomeIcon icon={faBolt} />
        </button>
      </div>

      <div className="flex items-center gap-5">
        <div className="text-gray-700 cursor-pointer hover:text-gray-950">
          منابع
        </div>
        <div className="text-gray-700 cursor-pointer hover:text-gray-950">
          مرور
        </div>
        <div className="text-gray-700 cursor-pointer hover:text-gray-950">
          اتصال و همگام سازی
        </div>
        <div className="text-2xl cursor-pointer">خردخوان</div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
