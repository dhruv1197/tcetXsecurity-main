import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock database connection (placeholder for future implementation)
const dbConnection = {
  isConnected: false,
  connect: () => {
    console.log('Database connection simulated');
    dbConnection.isConnected = true;
  }
};

// Mock IP analysis database
const ipAnalysisDB = [
  {
    id: '1',
    ipAddress: '192.168.1.1',
    emailServer: 'mail.suspicious-domain.com',
    spfRecord: 'v=spf1 -all',
    dmarcPolicy: 'p=reject',
    suspiciousActivity: true,
    lastSeen: '2024-10-26',
    location: 'Thakur College of Engineering & Technology',
    isp: 'AI&ML RBL',
    riskScore: 8.5
  },
  {
    id: '2',
    ipAddress: '8.8.8.8',
    emailServer: 'gmail-smtp-in.l.google.com',
    spfRecord: 'v=spf1 include:_spf.google.com ~all',
    dmarcPolicy: 'p=quarantine',
    suspiciousActivity: false,
    lastSeen: '2024-10-27',
    location: 'Mountain View, CA',
    isp: 'Google',
    riskScore: 1.0
  }
];

// IP Analysis endpoint
app.get('/api/analyze/:ip', (req, res) => {
  const { ip } = req.params;
  const details = ipAnalysisDB.find(entry => entry.ipAddress === ip);
  
  if (details) {
    res.json({ found: true, details });
  } else {
    res.json({ found: false });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    dbConnected: dbConnection.isConnected
  });
});

// Simulate database connection on startup
dbConnection.connect();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});