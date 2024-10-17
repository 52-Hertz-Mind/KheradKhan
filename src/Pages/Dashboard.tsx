import Footer from '../components/Footer.tsx';
import DashboardHeader from '../components/DashboardHeader.tsx';
import {
  faBook,
  faDownload,
  faFileExport,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <div dir="rtl" className="flex justify-center h-screen px-96 py-20">
        <div className="flex flex-col gap-5 items-center border p-12 w-1/2">
          <button className="flex gap-5 items-center w-96 p-2 rounded-2xl hover:bg-gray-200  duration-300 group">
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
          <button className="flex gap-5 items-center w-96 p-2 rounded-2xl hover:bg-gray-200  duration-300 group">
            <FontAwesomeIcon
              icon={faBook}
              className="size-8 transition-transform duration-300 group-hover:scale-110"
            />
            <p className="group-hover:-translate-x-1 duration-150">کتاب ها</p>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
