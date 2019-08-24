const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const path = require('path');
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// routes
//app.use('/api/v1.0/notes', require('./routes/notes'));
//app.use('/api/v1.0/users', require('./routes/users'));
app.use('/api/v1.0/laboratorio', require('./routes/laboratories'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));;

var port = 7000;
app.listen(port, () => {
  console.log("server running in " + port);
});

/*para ejecutar=npm run dev*/

module.exports = app;
