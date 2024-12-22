import { Link } from 'react-router-dom';
function NotFoundPage() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-5 p-20"
      dir="rtl"
    >
      <p className="text-3xl">۴۰۴ صفحه یافت نشد</p>
      <Link className="bg-blue-700 text-white p-3 rounded-2xl" to="/">
        برگشت به صفحه اصلی
      </Link>
    </div>
  );
}

export default NotFoundPage;
