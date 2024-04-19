// Define the default host and port
const DEFAULT_HOST = 'a10-backend.vercel.app';
const DEFAULT_PORT = 443;

// Get the host and port from environment variables, if available
const HOST = process.env.HOST || DEFAULT_HOST;
const PORT = process.env.PORT || DEFAULT_PORT;

module.exports = {
  HOST,
  PORT
};
