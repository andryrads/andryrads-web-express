const express = require('express');
const cors = require('cors');
const certificationRoutes = require('./routes/certificationRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(cors());
app.use(express.json());

//List endpoint
app.use('/v1/certifications', certificationRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
