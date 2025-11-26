import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="h-screen w-full bg-zinc-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-pretendard mb-10">HELLO!</h1>
      <p className="text-xl text-gray-400">이메일: contact@portfolio.com</p>
      <Link to="/" className="mt-10 text-xl border-b border-white pb-1 hover:text-yellow-400 transition-colors">
        Back to Home
      </Link>
    </div>
  );
};

export default Contact;

