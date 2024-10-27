import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface ResultMessageProps {
  found: boolean;
}

export const ResultMessage: React.FC<ResultMessageProps> = ({ found }) => {
  return (
    <div className={`p-4 rounded-lg flex items-center gap-3 ${
      found 
        ? 'bg-green-100 text-green-700' 
        : 'bg-red-100 text-red-700'
    }`}>
      {found ? (
        <CheckCircle2 className="w-6 h-6 text-green-500" />
      ) : (
        <AlertCircle className="w-6 h-6 text-red-500" />
      )}
      <p className="font-medium">
        {found 
          ? 'Company found! See details below.' 
          : 'No company found with this IP address in our database.'}
      </p>
    </div>
  );
};