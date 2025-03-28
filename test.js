const encrypt = require('./script'); // Import the encrypt function

const payload = { userId: 123 }; // Sample payload
const secret = 'mySecretKey'; // Sample secret

const token = encrypt(payload, secret); // Generate the token
console.log('Generated JWT:', token); // Log the generated token
