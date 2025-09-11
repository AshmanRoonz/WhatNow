const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const contributionRoutes = require('./routes/contributions');
const centerRoutes = require('./routes/centers');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve frontend

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/contributions', contributionRoutes);
app.use('/api/centers', centerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
