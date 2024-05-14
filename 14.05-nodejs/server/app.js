const bodyParser = require("body-parser");
// const uuid = require("uuid");
const { v4: uuidv4 } = require('uuid');
const cors = require("cors");

const express = require("express");
let products = require("./db.js");
const app = express();
const port = 3333;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// console.log(products);

app.get("/", (req, res) => {
  res.send("<h2>Salam qaqa</h2>");
});

app.get("/message", (req, res) => {
  res.json({ message: " Hello Coder!" });
});

// get all products
app.get("/products", (req, res) => {
  if (products.length > 0) {
    res.status(200).send({
      data: products,
      error: null,
      message: "success",
    });
  } else {
    console.log("test");
    res.send({ message: "data is empty!", data: null }).status(204);
  }
});

// get product by id

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  console.log(req.params);
  const product = products.find((item) => item.id == id);

  if (product) {
    res.status(200).send({
      data: product,
      message: "success",
    });
  } else {
    res.send({ message: "not found!" }).status(404);
  }
});

// delete by id

app.delete("/products/:id", (req, res) => {
  const{id} = req.params
  const idx = products.findIndex((x) => x.id == id)
  const deleted = products.find((x) => x.id == id);
  if(deleted) {
    products.splice(idx, 1)
    res.json({
      message: "deleted",
      statusCode: 200
    })
  } else {
    res.json({
      message:"not deleted",
      statusCode: 404
    })
  }
})

//post 

app.post("/products", (req, res) => {
  const { title, price, description, category, image } = req.body;
  console.log(req.body);
  const newProduct = {
    id: uuidv4(),
    title: title,
    price: price,
    description: description,
    category: category,
    image: image,
  };
  products.push(newProduct);
  res.send({
    data: newProduct,
    message: "succes",
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
