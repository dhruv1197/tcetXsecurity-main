export interface IPDetails {
    id: string;
    ipAddress: string;
    emailServer: string;
    spfRecord: string;
    dmarcPolicy: string;
    suspiciousActivity: boolean;
    lastSeen: string;
    location: string;
    isp: string;
    riskScore: number;
  }
  
  export interface LookupResult {
    found: boolean;
    details?: IPDetails;
  }