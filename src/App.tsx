import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { IPDetailsCard } from './components/IPDetailsCard';
import { ResultMessage } from './components/ResultMessage';
import { ipDatabase } from './data/mockData';
import type { LookupResult } from './types/types';

function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [lookupResult, setLookupResult] = useState<LookupResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate network delay
    setTimeout(() => {
      try {
        const details = ipDatabase.find(ip => ip.ipAddress === ipAddress);
        setLookupResult({
          found: !!details,
          details: details
        });
      } catch (err) {
        setError('Failed to analyze IP address. Please try again.');
        setLookupResult(null);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    /* Backend connection code (commented for now)
    try {
      const response = await axios.get(`http://localhost:3000/api/analyze/${ipAddress}`);
      setLookupResult(response.data);
    } catch (err) {
      setError('Failed to analyze IP address. Please try again.');
      setLookupResult(null);
    } finally {
      setIsLoading(false);
    }
    */
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Email Spoofing & IP Trace
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Analyze IP addresses for potential email spoofing and suspicious activity
        </p>
        
        <SearchBar 
          ipAddress={ipAddress}
          setIpAddress={setIpAddress}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {lookupResult && !error && (
          <div className="mt-6 space-y-6">
            <ResultMessage found={lookupResult.found} />
            
            {lookupResult.details && (
              <IPDetailsCard details={lookupResult.details} />
            )}
          </div>
        )}

        <div className="mt-6 text-sm text-gray-600">
          <p className="font-medium mb-2">Sample IP Addresses to try:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-500">
            <li>192.168.1.1 (Suspicious Server)</li>
            <li>8.8.8.8 (Legitimate Server)</li>
            <li>10.0.0.1 (Known Phishing Attempt)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;