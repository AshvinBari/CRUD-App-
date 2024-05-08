const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.listen(3000,()=> {
    console.log("server is running on port 3000")
});

app.get('/',(req,res) => {
  res.send("Hello from node API Ashvin")
})

app.get('/api/products',async(req,res)=>{
 try {
  const product=await Product.find({});
  res.status(200).json(product)

 }catch(error){
  res.status(500).json({message:error.message})
 }
})





app.post('/api/products',async(req,res)=>{
  // console.log(req.body);
  //    res.send(req.body)
  try{
 const product= await Product.create(req.body)
 res.status(500).json(product);
  }catch(error){
  res.status(500).json({message:error.message})
  }
})

// Update A Product
app.put('/api/products/:id',async(req , res)=>{
  try {const {id}=req.params;
  const product= await Product.findByIdAndUpdate(id,req.body);
  if(!product) {
    return res.status(404).json({message:"product not found"})
  }
 const updateP= await Product.findById(id)
 //res.status(200).json(product)
    
  } catch (error) {
    res.status(500).json({message:error.message});
  }
})

app.get('/api/products/:id',async (req,res)=>{
  try {
    const {id}=req.params;
    const product= await Product.findById(id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({message : error.message})
    
  }
})
// delete a product 
app.delete('/api/product/:id',async (req,res)=>{
  try {
    const {id}=req.params
   const product= await Product.findByIdAndDelete(id);
   if (!product) {
    return res.status(404).json({message:"Product not found "})
   }
   console.log(`Product ${id} has`)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
})

mongoose.connect("mongodb+srv://Ashu:Ashvin@api.h5uyhkp.mongodb.net/?retryWrites=true&w=majority&appName=API")
//mongoose.connect("mongodb+srv://Node:Ashvin@5655@backenddb.funoga3.mongodb.net/")
.then(()=>{
  console.log("connect to database!");
})
.catch(()=> 
console.log("connection failed"));  
//Ashu