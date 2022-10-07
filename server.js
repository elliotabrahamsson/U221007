const express = require('express');
const fs = require('fs')

const server = express();
server.use(express.static("public"));

server.listen(8080);