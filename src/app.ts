import express = require("express");

import * as statusContoller from './controllers/status';

const app = express();
app.set("port", process.env.PORT || 3000);

app.get('/', statusContoller.hi);

app.post('/awesome', statusContoller.awesome);

export default app;