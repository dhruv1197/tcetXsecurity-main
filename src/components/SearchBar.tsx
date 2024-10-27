import React from 'react';
import { Search, Loader2 } from 'lucide-react';

interface SearchBarProps {
  ipAddress: string;
  setIpAddress: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  ipAddress, 
  setIpAddress, 
  onSubmit,
  isLoading 
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          placeholder="Enter company IP address (e.g., 8.8.8.8)"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          disabled={isLoading}
        />
      </div>
      
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <Search size={20} />
        )}
        {isLoading ? 'Looking up...' : 'Lookup Company'}
      </button>
    </form>
  );
};