const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); 
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());  

connectDB();

app.use('/api/kpis', require('./routes/kpiRoutes'));
app.use('/api/climate-risk', require('./routes/climateRiskRoutes'));
app.use('/api/compliance', require('./routes/complianceRoutes'));
app.use('/api/energy-usage', require('./routes/energyUsageRoutes'));
app.use('/api/alerts', require('./routes/alertRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
