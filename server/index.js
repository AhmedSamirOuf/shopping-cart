const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const connectionString = "mongodb+srv://admin:admin@cluster0.wbg6b.mongodb.net/admin?retryWrites=true&w=majority\n";
const cors = require('cors');

app.use(bodyParser());
app.use(cors());
MongoClient.connect(connectionString)
  .then(client => {
    const db = client.db('gebhaly');
    const orderCollection = db.collection('orders');
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}/api`);
    });
    console.log('Connected to Database');
    app.post('/api/place-order', (request, response) => {
      const order = request.body;
      orderCollection.insertOne(order)
        .then(result => {
          response.status(201).json(result);
        }).catch(error=>{
        response.status(400).json({message:"something went wrong, please try again "});
      })
        .catch(error => console.error(error))
    });
    app.get('/api/orders', async (request, response) => {
      orderCollection.find().toArray((error, result) => {
        if (error) throw error;
        response.json(result);
      });
    });
  })
  .catch(error => console.error(error));

module.exports = app;
