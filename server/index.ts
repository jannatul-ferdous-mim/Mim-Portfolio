const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(compression());

// Serve the production build. Contact is handled inside MimOS (Formspree),
// so there are no API routes here.
app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
