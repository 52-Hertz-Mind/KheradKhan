function DashboardHeader() {
  return (
    <div className="p-5 px-96 flex items-center gap-5 justify-end">
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
  );
}

export default DashboardHeader;
