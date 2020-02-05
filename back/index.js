const express = require('express');
const app = express();
const cors = require('cors');
const { port, host, allowedOrigin } = require('./config/index');
const authApi = require('./routes/auth');

app.use(express.json());
app.use(cors({
    origin: allowedOrigin
}));

authApi(app);

app.listen(port, host, () => {
    console.log(`The server is running on http://localhost:${port}`);
});