mongoose= require("mongoose")
require("dotenv").config();

const connectiondatabase = mongoose.connect(process.env.mongourl)

module.exports={connectiondatabase}