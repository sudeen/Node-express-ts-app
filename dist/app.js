"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const statusContoller = require("./controllers/status");
const app = express();
app.set("port", process.env.PORT || 3000);
app.get('/', statusContoller.hi);
app.post('/awesome', statusContoller.awesome);
exports.default = app;
//# sourceMappingURL=app.js.map