import express from "express";
import db from "./db";
import initializeDB from "./db";

const app = express();

const start = async () => {
  const controller = await initializeDB();

  app.get("/", (req, res) => {
    // const result =await controller.getcollection();
    // res.send("result");});
    res.send("Welcome!");
  });
  // }(node:11651) UnhandledPromiseRejectionWarning: TypeError: (0 , _db.default) is not a function

  app.get("/all", async (req, res) => {
    const result = await controller.getcollection();
    res.json(result);
  });
  app.get("/all/collection/:id", async (req, res) => {
    const result = await controller.getcollectionById(req.params.id);
    res.json(result);
  });
  app.get("/all/collection/name/:name", async (req, res)=> {
    const result = await controller.getcollectionByName(req.params.name);
    res.json(result);
  });

  app.get('/collection/update/:id', async (req, res) => {
    const { id } = req.params
    const { name } = req.query
    const result = await controller.updateContact(id,{name})
    res.json(result)
  })



};

app.listen(8080, () => {
  console.log("port 8080");
});
start();
