const mongoose = require('mongoose');

const MON_URI ="mongodb://localhost:27017/form";
function database()
{
mongoose.connect(MON_URI)
.then((con)=>{console.log('The database connected in '  +con.connection.host)})
.catch(()=>{console.log("database error")})
}

module.exports = database;