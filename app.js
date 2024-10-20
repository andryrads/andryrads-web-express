const express = require('express');
const cors = require('cors');
const aboutRoutes = require('./routes/aboutRoutes');
const softskillRoutes = require('./routes/softSkillRoutes');
const hardskillRoutes = require('./routes/hardSkillRoutes');
const itskillRoutes = require('./routes/itSkillRoutes');
const certificationRoutes = require('./routes/certificationRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(cors());
app.use(express.json());

//List endpoint
app.use('/v1/about', aboutRoutes);
app.use('/v1/soft-skills', softskillRoutes);
app.use('/v1/hard-skills', hardskillRoutes);
app.use('/v1/it-skills', itskillRoutes);
app.use('/v1/certifications', certificationRoutes);
app.use('/v1/portfolio', portfolioRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
