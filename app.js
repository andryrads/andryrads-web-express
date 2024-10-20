const express = require('express');
const certificationRoutes = require('./routes/certificationRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

//Middleware body parsing
app.use(express.json());

//List endpoint
app.use('/v1/certifications', certificationRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
