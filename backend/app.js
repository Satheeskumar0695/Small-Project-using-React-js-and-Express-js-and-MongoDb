const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const env = dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });
const PORT = process.env.PORT || 3500;
const database = require('./model/database');
database();

const API_LINK = 'http://localhost:3000';
const coreOptions = {
  origin: (origin, callback) => {
    if (API_LINK.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  successStatus: 200, 
};

app.use(cors(coreOptions));
app.use(express.json());

const register = require('./routes/register');
app.use('/api', register);
const login = require('./routes/register');
app.use('/api',login);

const editUser = require('./routes/User');
app.use('/api',editUser);


app.listen(PORT,()=>{
      console.log(`The Port Running on ${PORT} in ${process.env.NODE_URI}`);
});
