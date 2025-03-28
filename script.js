const jwt = require('jsonwebtoken'); // Import jsonwebtoken

const encrypt = (payload, secret) => {
  // Create a token with an expiration time of 1 hour
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token; // Return the generated token
};

module.exports = encrypt;
