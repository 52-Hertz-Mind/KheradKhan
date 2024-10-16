import Footer from '../components/Footer.tsx';
import DashboardHeader from '../components/DashboardHeader.tsx';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <div dir="rtl" className="px-96 py-20">
        <button className="flex gap-5 items-center w-96 p-2 rounded-2xl hover:bg-gray-200  duration-300 group">
          <FontAwesomeIcon
            icon={faDownload}
            className="size-8 transition-transform duration-300 group-hover:scale-110"
          />
          <p className="group-hover:-translate-x-1 duration-150">وارد کردن</p>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
