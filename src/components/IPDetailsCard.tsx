import React from 'react';
import { Shield, Mail, Globe, AlertTriangle, Activity, MapPin, Server, Calendar } from 'lucide-react';
import type { IPDetails } from '../types/types';

interface IPDetailsCardProps {
  details: IPDetails;
}

export const IPDetailsCard: React.FC<IPDetailsCardProps> = ({ details }) => {
  const getRiskColor = (score: number) => {
    if (score <= 3) return 'text-green-500';
    if (score <= 7) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">IP Analysis Results</h2>
        <div className={`flex items-center gap-2 ${getRiskColor(details.riskScore)}`}>
          <Shield className="w-6 h-6" />
          <span className="font-bold">Risk Score: {details.riskScore}/10</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem
            icon={<Server className="w-5 h-5 text-blue-500" />}
            label="IP Address"
            value={details.ipAddress}
          />
          <InfoItem
            icon={<Mail className="w-5 h-5 text-purple-500" />}
            label="Email Server"
            value={details.emailServer}
          />
          <InfoItem
            icon={<Globe className="w-5 h-5 text-green-500" />}
            label="SPF Record"
            value={details.spfRecord}
          />
          <InfoItem
            icon={<Shield className="w-5 h-5 text-indigo-500" />}
            label="DMARC Policy"
            value={details.dmarcPolicy}
          />
        </div>

        {details.suspiciousActivity && (
          <div className="mt-4 p-4 bg-red-100 rounded-lg flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <span className="text-red-700 font-medium">
              Suspicious activity detected! This IP has been flagged for potential email spoofing attempts.
            </span>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem
            icon={<MapPin className="w-5 h-5 text-red-500" />}
            label="Location"
            value={details.location}
          />
          <InfoItem
            icon={<Activity className="w-5 h-5 text-orange-500" />}
            label="ISP"
            value={details.isp}
          />
          <InfoItem
            icon={<Calendar className="w-5 h-5 text-teal-500" />}
            label="Last Seen"
            value={details.lastSeen}
          />
        </div>
      </div>
    </div>
  );
};

const InfoItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
    {icon}
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      <p className="font-medium text-gray-900">{value}</p>
    </div>
  </div>
);