// Application configuration
// In production, these should come from environment variables

// Dev API host:
// - iOS Simulator: 'localhost'
// - Expo Go on physical device: your Mac's LAN IP (e.g. '192.168.1.5') — same WiFi as phone. Find with: ifconfig | grep "inet " | grep -v 127.0.0.1
import dotenv from "dotenv"
dotenv.config();

const DEV_API_HOST = process.env.DEV_API_HOST || 'localhost';

const ENV = {
  dev: {
    apiUrl: `http://${DEV_API_HOST}:5000/api/v1`,
    wsUrl: `ws://${DEV_API_HOST}:5000`,
  },
  staging: {
    apiUrl: 'https://staging-api.freshroute.com/api',
    wsUrl: 'wss://staging-api.freshroute.com',
  },
  prod: {
    apiUrl: 'https://api.freshroute.com/api',
    wsUrl: 'wss://api.freshroute.com',
  },
};

const getEnvVars = (env = 'dev') => {
  if (env === 'prod') return ENV.prod;
  if (env === 'staging') return ENV.staging;
  return ENV.dev;
};

const config = getEnvVars();

export default {
  ...config,
  apiTimeout: 30000,
  // Add other configuration here
};

