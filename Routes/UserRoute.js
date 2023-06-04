const express = require("express");
const { usermodel } = require("../models/User.modal");
const router =  express.Router();


  router.get("/",(req,res) =>{
      res.send("hello")
  })

  router.get("/todo", async (req,res) => {
    try{
      const  productData = await usermodel.find()
         res.send(productData)
    }
    catch(err){
      console.log(err)
      res.send("wrong")
    }
   })

    // ------------------------- Post ------------------------- //

    router.post("/todo/create", async (req,res) => {
           const payload= req.body
            try{
              const product = await usermodel.create(payload)
                 await product.save()
               res.send({"msg" :"Post sucessfully"})
            }catch(err){
                console.log(err)
                res.send({"msg" :"Something went wrongs"})
            }
    })


    router.patch("/todo/edit/:prodId" , async (req,res) =>{
              const prodId = req.params.prodId
              const payload=req.body
              try{
                  const updatedproduct = await usermodel.findByIdAndUpdate({_id:prodId},payload)
                  res.send({"msg" :"data updated sucessfully" })
              }catch(err){
                console.log(err)
                res.send({"msg" :"Something went wrongs"})
              }
    })

    router.get("/todo/:prodId" , async (req,res) =>{
      const prodId = req.params.prodId
      
      try{
          const updatedproduct = await usermodel.findById({_id:prodId})
          res.send(updatedproduct)
      }catch(err){
        console.log(err)
        res.send({"msg" :"Something went wrongs"})
      }
})


// ------------- Delete req ------------ //


router.delete("/todo/delete/:prodId" , async (req,res) =>{
        const prodId = req.params.prodId
        try{
                 await usermodel.findOneAndDelete({_id:prodId})
                 res.send({"msg" :"post Deleted sucessfully" })
             
        }catch(err){
          console.log(err)
          res.send({"msg" :"Something went wrongs"})
        }

})



module.exports={router}