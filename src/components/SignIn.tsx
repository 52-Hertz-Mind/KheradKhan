import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const SignIn: React.FC<props> = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function signIn() {
    console.log(email, password);
    setIsOpen(false);
    navigate('/dashboard');
  }
  function closePopup() {
    setIsOpen(false);
  }
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={closePopup}
    >
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-96 h-2/3 w-1/3 bg-white rounded-2xl shadow-2xl p-20 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={signIn} className="flex flex-col gap-5" dir="rtl">
          <label htmlFor="email">ایمیل</label>
          <input
            required
            type="email"
            placeholder="ایمیل"
            className="p-2 border-2 rounded-2xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">گذرواژه</label>
          <input
            required
            type="password"
            placeholder="گذرواژه"
            className="p-2 border-2 rounded-2xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onSubmit={signIn}
            className="mt-10 bg-blue-500 rounded-2xl p-2 text-white hover:bg-blue-700 duration-150"
          >
            ثبت نام
          </button>
        </form>
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close sign-in popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
