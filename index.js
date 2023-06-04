const express = require("express")
const cors = require("cors")
const { connectiondatabase } = require("./config/db")
const { router } = require("./Routes/UserRoute")


const app = express()
app.use(express.json())

app.use(cors({
    origin:"*"
  }))
  
app.use(router)

  
  app.get("/" , (req,res) => {
      res.send("welcome home")
  })

  

app.listen(8000, async (req,res) =>{
    try{
      await connectiondatabase;
      console.log("connected to database")
    }
    catch(err){
      console.log("something went wrong in connected")
      console.log(err)
    }

  console.log("listening on port 8000")
})

  