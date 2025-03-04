import { Link } from 'react-router-dom';
function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-20">
      <p className="text-3xl">404 not found</p>
      <Link className="bg-blue-700 text-white p-3 rounded-2xl" to="/">
        Go to homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;
