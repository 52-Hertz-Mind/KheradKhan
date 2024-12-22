import Footer from '../components/Footer.tsx';
import DashboardNavbar from '../components/DashboardNavbar.tsx';
import {
  faBook,
  faDownload,
  faFileExport,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ImportScreen from '../components/ImportScreen.tsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdFavorite, MdOutlinePreview } from 'react-icons/md';

function Dashboard() {
  const [isImportScreenOpen, setIsImportScreenOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <DashboardNavbar />
      <div dir="rtl" className="flex justify-center h-screen px-96 py-20">
        <div className="flex flex-col gap-5 items-center border p-12 w-1/2">
          <button
            onClick={() => setIsImportScreenOpen(!isImportScreenOpen)}
            className="flex gap-5 items-center w-96 p-2 rounded-2xl hover:bg-gray-200  duration-300 group"
          >
            <FontAwesomeIcon
              icon={faDownload}
              className="size-8 transition-transform duration-300 group-hover:scale-110"
            />
            <p className="group-hover:-translate-x-1 duration-150">وارد کردن</p>
          </button>
          <button className="flex gap-5 items-center w-96 p-2 rounded-2xl hover:bg-gray-200  duration-300 group">
            <FontAwesomeIcon
              icon={faFileExport}
              className="size-8 transition-transform duration-300 group-hover:scale-110"
            />

            <p className="group-hover:-translate-x-1 duration-150">خارج کردن</p>
          </button>
          <button
            className="flex gap-5 items-center w-96 p-2 rounded-2xl hover:bg-gray-200  duration-300 group"
            onClick={() => navigate('/books')}
          >
            <FontAwesomeIcon
              icon={faBook}
              className="size-8 transition-transform duration-300 group-hover:scale-110"
            />
            <p className="group-hover:-translate-x-1 duration-150">کتاب ها</p>
          </button>
          <button
            className="flex gap-5 items-center w-96 p-2 rounded-2xl hover:bg-gray-200  duration-300 group"
            onClick={() => navigate('/favorites')}
          >
            <MdFavorite className="size-8 transition-transform duration-300 group-hover:scale-110" />
            <p className="group-hover:-translate-x-1 duration-150">
              مورد علاقه ها
            </p>
          </button>
          <button
            className="flex gap-5 items-center w-96 p-2 rounded-2xl hover:bg-gray-200  duration-300 group"
            onClick={() => navigate('/review')}
          >
            <MdOutlinePreview className="size-8 transition-transform duration-300 group-hover:scale-110" />
            <p className="group-hover:-translate-x-1 duration-150">
              مرور هایلایت
            </p>
          </button>
        </div>
      </div>
      <ImportScreen
        isOpen={isImportScreenOpen}
        setIsOpen={setIsImportScreenOpen}
      />
      <Footer />
    </div>
  );
}

export default Dashboard;
