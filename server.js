const express = require('express');

const app = express();

const PORT_APP = process.env.PORT || 5000

app.use('/', express.static('dist'));
app.listen(3000, `server listening in ${PORT_APP} `)