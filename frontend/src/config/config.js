// Define the default host and port
const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 4000;

// Get the host and port from environment variables, if available
const HOST = process.env.HOST || DEFAULT_HOST;
const PORT = process.env.PORT || DEFAULT_PORT;

module.exports = {
  HOST,
  PORT
};
