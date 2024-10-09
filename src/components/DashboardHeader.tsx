function DashboardHeader() {
  return (
    <div className="p-5 px-96 flex items-center gap-5 justify-end">
      <button
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 border-2`}
        aria-label="Account"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
        >
          <circle color="currentColor" cx="12" cy="7" r="4" />
          <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
        </svg>
      </button>
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
