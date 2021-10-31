const express = require("express");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5001;

// middleware
app.use(cors());
app.use(express.json());
// Userid: mydb1
// Password: fW78FxOWGyDsdxtA

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6ybdl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
/* client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Hitting the database");
  //console.log(err);
  const user = {
    name: "Mamun shek",
    email: "mamun@gmail.com",
    phone: "715037465",
  };
  collection.insertOne(user).then(() => {
    console.log("insert is successful");
  });
  //  client.close();
});
 */
async function run() {
  try {
    await client.connect();
    console.log("connected to the database");
    const database = client.db("carMachanic");
    const servicesCollection = database.collection("services");

    //Get api show all data
    app.get("/services", async (req, res) => {
      const cursor = servicesCollection.find({});
      const services = await cursor.toArray();
      res.send(services);
    });

    // Get single service
    app.get("/services/:id", async (req, res) => {
      console.log("hits single record");
      const id = req.params.id;
      console.log(id);
      const query = { _id: ObjectId(id) };

      const service = await servicesCollection.findOne(query);
      res.send(service);
    });

    //post Api
    app.post("/services", async (req, res) => {
      const service = req.body;
      console.log("Hit the post api", service);
      const result = await servicesCollection.insertOne(service);
      console.log(result);
      res.json(result);
      /*  const service = {
        name: "Blood bank",
        phone: "+00880194001245",
        img: "https://image.freepik.com/free-vector/red-donor-day-concept-background_1017-19050.jpg",
        Price: "4000 Taka",
      };
      const result = await servicesCollection.insertOne(service);
      console.log(result); */
      /* console.log("hitting the service"); 
      res.send("Hits the service");*/
    });
  } finally {
    /*  await client.close(); */
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Running my crud server");
});

app.listen(port, () => {
  console.log("Running server on port", port);
});
