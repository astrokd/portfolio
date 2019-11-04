'use strict';
const express = require('express');
const app = express();
app.use( express.static('./starter-code') );
app.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port 3000!')
});
