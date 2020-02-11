import express from "express";
import db from "./db";
import initializeDB from "./db";

const app = express();

const start = async () => {
  const controller = await initializeDB();

  app.get("/", (req, res) => {
    res.send("Welcome!");
  });


  ///////////**********Collection Table**********//////////////

  //////////////Read

  app.get("/collection", async (req, res) => {
    const result = await controller.getcollection();
    res.json(result);
  });
  app.get("/collection/ID/:id", async (req, res) => {
    const result = await controller.getcollectionById(req.params.id);
    res.json(result);
  });
  app.get("/collection/name/:name", async (req, res)=> {
    const result = await controller.getcollectionByName(req.params.name);
    res.json(result);
  });

  //////////////////Delete


app.get("/collection/delete/id/:ID",async(req,res)=>{
  const result = await
  controller.deleteCollectionByID(req.params.ID);
  res.json(result);
})
  
app.get("/collection/delete/name/:name", async (req,res)=> {
  const result = await
  controller.deleteCollectionByName (req.params.name);
  res.json(result);
})


////////Create

app.get("/collection/create/",async (req,res)=>{
  const result = await 
  controller.createCollectionByID(req.query);
  res.json(result);
});

///////////update

app.get("/collection/update/:ID",async (req,res)=>{
  const result = await 
  controller.updateCollection(req.params.ID,req.query);
  res.json(result);
});




};

app.listen(8080, () => {
  console.log("port 8080");
});
start();
