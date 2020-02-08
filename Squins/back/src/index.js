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
  });

  ///////////**********Admin Table*************///////////

  ///////////create

  app.get("/admin/create/", async (req, res) => {
    const result = await controller.createAdmin(req.query);
    res.json(result);
  });


  ////////////read

  app.get("/admin", async (req, res) => {
    const result = await controller.getAdmin();
    res.json(result);
  });

  app.get("/admin/id/:ID", async (req, res) => {
    const result = await controller.getAdminId(req.params.ID);
    res.json(result);
  });

  app.get("/admin/name/:NAME", async (req, res) => {
    const result = await controller.getAdminName(req.params.NAME);
    res.json(result);
  });

  ////////////update

  app.get("/admin/update/:ID", async (req, res) => {
    const result = await controller.updateAdmin(req.params.ID,req.query);
    res.json(result);
  });


  ///////////delete
  app.get("/admin/delete/id/:ID", async (req, res) => {
    const result = await controller.deleteAdminId(req.params.ID);
    res.json(result);
  });
  app.get("/admin/delete/name/:NAME", async (req, res) => {
    const result = await controller.deleteAdminName(req.params.NAME);
    res.json(result);
  });

};

app.listen(8080, () => {
  console.log("port 8080");
});
start();
