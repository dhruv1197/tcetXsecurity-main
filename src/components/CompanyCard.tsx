import React from 'react';
import { Building2, Globe, MapPin, Network } from 'lucide-react';
import type { Company } from '../types/types';

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{company.name}</h2>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-gray-600">
          <Network className="w-5 h-5 text-blue-500" />
          <span>{company.ipAddress}</span>
        </div>
        
        <div className="flex items-center gap-3 text-gray-600">
          <MapPin className="w-5 h-5 text-red-500" />
          <span>{company.address}</span>
        </div>
        
        <div className="flex items-center gap-3 text-gray-600">
          <Building2 className="w-5 h-5 text-green-500" />
          <span>{company.industry}</span>
        </div>
        
        <div className="flex items-center gap-3 text-gray-600">
          <Globe className="w-5 h-5 text-purple-500" />
          <a 
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {company.website}
          </a>
        </div>
      </div>
    </div>
  );
};