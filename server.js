const express = require('express');

const app = express();

const PORT_APP = process.env.PORT || 8080

app.use('/', express.static('./dist'));
app.listen(PORT_APP, () => {
	console.log(`server listening in ${PORT_APP}`)
})