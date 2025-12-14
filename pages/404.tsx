import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center p-8">
        <h1 className="text-9xl font-bold text-gold mb-4 font-heading">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">Page Not Found</h2>
        <p className="text-gray-500 mb-8">The luxury experience you are looking for does not exist here.</p>
        <Link 
          to="/" 
          className="inline-block bg-gold text-black px-8 py-3 font-semibold hover:bg-white transition-colors uppercase tracking-widest"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not Found | Fit&Fine</title>;