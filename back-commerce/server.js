import express from 'express'
import cors from 'cors';

const app = express();
const port = 3000;

const users = [
    {
        "id": 1,
        "name": "Alicia Johnson",
        "email": "alice.johnson@example.com"
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "email": "bob.smith@example.com"
    },
    {
        "id": 3,
        "name": "Charlie Lee",
        "email": "charlie.lee@example.com"
    },
]

const products = [
    {
        "id": 201,
        "name": "Orange Juice",
        "price": 3.50
    },
    {
        "id": 202,
        "name": "Apple Juice",
        "price": 3.20
    },
    {
        "id": 203,
        "name": "Pineapple Juice",
        "price": 4.00
    }
]

const posts = [
    {
        "id": 1,
        "title": "Welcome to Fresh Juice Store",
        "content": "Discover the healthiest and tastiest natural juices made fresh every day."
    },
    {
        "id": 2,
        "title": "New Tropical Flavors Available!",
        "content": "Try our new mango and pineapple blends, perfect for summer vibes."
    },
    {
        "id": 3,
        "title": "Buy 2 Mango Juices, Get 1 Free!",
        "content": "Don't miss our special offer, available this week only."
    } 
]


// Middleware
app.use(cors()); // permet connexió entre React i Express


// Rutes
app.get('/users', async (req,res)=> {
  console.log("users endpoint /GET received 😀")
  try{
    res.status(200);
    res.json (users)
  } catch (error){
    console.log("Error in users endpoint: ", error)
    res.status(500).json({error: "internal error from server"})
  }
})

app.get('/products', async (req,res)=> {
    console.log("products endpoint /GET received 👍🏻")
    try{
      res.status(200);
      res.json (products)
    } catch (error){
      console.log("Error in products endpoint: ", error)
      res.status(500).json({error: "internal error from server"})
    }
  })

  app.get('/posts', async (req,res)=> {
    console.log("posts endpoint /GET received 📌")
    try{
      res.status(200);
      res.json (posts)
    } catch (error){
      console.log("Error in posts endpoint: ", error)
      res.status(500).json({error: "internal error from server"})
    }
  })


// Iniciar servidor
app.listen(port, ()=> {
    console.log(`Server listening at http://localhost:${port}`)
})