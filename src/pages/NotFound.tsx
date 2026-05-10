import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center bg-white border border-slate-200 rounded-3xl p-10 shadow-sm">
        <p className="text-sm font-semibold text-blue-600 mb-3">404</p>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Page not found</h1>
        <p className="text-slate-500 mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Button onClick={() => navigate('/')} className="rounded-xl px-6">
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
