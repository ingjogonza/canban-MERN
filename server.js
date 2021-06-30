const express = require('express');
const app = express();
require('./server/config/mongoose.config');
const route = require ('./server/routes/canban.route');
const cors = require('cors');
//const cookieParser = require('cookie-parser');
app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));


route(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
});