function DashboardHeader() {
  return (
    <div className="p-5 px-96 flex items-center gap-5 justify-between">
      <button
        className="border-gray-400 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 border-2"
        aria-label="Account"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <circle color="currentColor" cx="12" cy="7" r="4" />
          <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
        </svg>
      </button>
      {/* thunder button */}
      <button
        className="w-8 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm"
        aria-label="Lightning action"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 80"
          fill="currentColor"
          className="w-10 h-10 text-gray-400 hover:text-black transition-colors duration-200"
        >
          <path d="M13 1L0 40h11l-3 39L24 40H13l3-39z" />
        </svg>
      </button>
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

export default DashboardHeader;
