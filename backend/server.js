const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for all origins (dev-friendly)
app.use(cors());

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
