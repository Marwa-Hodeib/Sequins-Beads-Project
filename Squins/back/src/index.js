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

  app.get("/collection", async (req, res,next) => {
    const {orderBy}=req.query;
    try{
    const result = await controller.getcollection(orderBy);
    res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.get("/collection/id/:id", async (req, res,next) => {
    try{
    const result = await controller.getcollectionById(req.params.id);
    res.json({sucess:true,result});
    }catch(err){
      next(err);
    }
    
  });
  app.get("/collection/name/:name", async (req, res,next)=> {
    try{
    const result = await controller.getcollectionByName(req.params.name);
    res.json(result);
    }catch(err){
      next(err);
    }
  });

  //////////////////Delete


app.get("/collection/delete/id/:ID",async(req,res,next)=>{
  try{
  const result = await
  controller.deleteCollectionByID(req.params.ID);
  res.json(result);
  }catch(err){
    next(err);
  }
})
  
app.get("/collection/delete/name/:name", async (req,res,next)=> {
  try{
  const result = await
  controller.deleteCollectionByName (req.params.name);
  res.json(result);
  }catch(err){
    next(err);
  }
})


////////Create

app.get("/collection/create/",async (req,res,next)=>{
  try{
  const result = await 
  controller.createCollection(req.query);
  res.json(result);
  }catch(err){
    next(err);
  }
});

///////////update

app.get("/collection/update/:ID",async (req,res,next)=>{
  try{
  const result = await 
  controller.updateCollection(req.params.ID,req.query);
  res.json(result);
  }catch(err){
    next(err);
  }
});


  ///////////**********Admin Table*************///////////

  ///////////create

  app.get("/admin/create/", async (req, res,next) => {
    try{
    const result = await controller.createAdmin(req.query);
    res.json(result);
    }catch(err){
      next(err);
    }
  });


  ////////////read

  app.get("/admin", async (req, res,next) => {
    const {orderBy}=req.query;
    try{
    const result = await controller.getAdmin(orderBy);
    res.json(result);
    }catch(err){
      next(err);
    }
  });

  app.get("/admin/id/:ID", async (req, res,next) => {
    try{
    const result = await controller.getAdminId(req.params.ID);
    res.json(result);
    }catch(err){
      next(err);
    }
  });

  app.get("/admin/name/:NAME", async (req, res,next) => {
    try{
    const result = await controller.getAdminName(req.params.NAME);
    res.json(result);
    }catch(err){
      next(err);
    }
  });

  ////////////update

  app.get("/admin/update/:ID", async (req, res,next) => {
    try{
    const result = await controller.updateAdmin(req.params.ID,req.query);
    res.json(result);
    }catch(err){
      next(err);
    }
  });


  ///////////delete
  app.get("/admin/delete/id/:ID", async (req, res,next) => {
    try{
    const result = await controller.deleteAdminId(req.params.ID);
    res.json(result);
    }catch(err){
      next(err);
    }
  });
  app.get("/admin/delete/name/:NAME", async (req, res,next) => {
    try{
    const result = await controller.deleteAdminName(req.params.NAME);
    res.json(result);
    }catch(err){
      next(err);
    }
  });


  ///////////**********Order Table*************///////////

   ////////////Create

   app.get("/order/create/",async(req,res,next)=>{
     try{
    const result=await controller.createOrder(req.query);
    res.json(result);
     }catch(err){
       next(err);
     }
  });


  ///////////////read


  app.get("/order", async (req, res,next) => {
    let {orderBy}=req.query;
    try{
      const result = await controller.getOrder(orderBy);
      res.json(result);
  }catch(err){
    next(err);
  }
   
  });


  app.get("/order/id/:ID", async (req, res,next) => {
    try{
    const result = await controller.getOrderId(req.params.ID);
    res.json(result);
    }catch(err){
      next(err);
    }
  });

  app.get("/order/name/:NAME", async (req, res,next) => {
    try{
    const result = await controller.getOrderClientName(req.params.NAME);
    res.json(result);
    }catch(err){
      next(err);
    }
  });

  app.get("/order/product/:ID", async (req, res,next) => {
    try{
    const result = await controller.getOrderProductId(req.params.ID);
    res.json(result);
    }catch(err){
      next(err);
    }
  });

  app.get("/order/date/:DATE", async (req, res,next) => {
    try{
    const result = await controller.getOrderDate(req.params.DATE);
    res.json(result);
    }catch(err){
      next(err);
    }
  });

  app.get("/order/area/:AREA", async (req, res,next) => {
    try{
    const result = await controller.getOrderArea(req.params.AREA);
    res.json(result);
    }catch(err){
      next(err);
    }
  });

    //////////Update

    app.get("/order/update/:ID",async(req,res,next)=>{
      try{
      const result=await controller.updateOrder(req.params.ID,req.query);
      res.json(result);
      }catch(err){
        next(err);
      }
    });

  /////////Delete

  app.get("/order/delete/id/:ID",async(req,res,next)=>{
    try{
    const result=await controller.deleteOrderId(req.params.ID);
    res.json(result);
    }catch(err){
      next(err);
    }
  });

  app.get("/order/delete/client/:NAME",async(req,res,next)=>{
    try{
      const result=await controller.deleteOrderClientName(req.params.NAME);
    res.json(result);
    }catch(err){
      next(err);
    }
  });

   ///////////**********Category Table**********//////////////

  //////////////Read

  app.get("/category", async (req, res,next) => {
    const {orderBy}=req.query;
    try{
    const result = await controller.getcategory(orderBy);
    res.json({ success: true, result });
    } catch (err) {
      next(err);
    }
  });
  app.get("/category/id/:id", async (req, res,next) => {
    try{
    const result = await controller.getcategoryById(req.params.id);
    res.json({sucess:true,result});
    }catch(err){
      next(err);
    }
    
  });
  app.get("/category/name/:name", async (req, res,next)=> {
    try{
    const result = await controller.getcategoryByName(req.params.name);
    res.json(result);
    }catch(err){
      next(err);
    }
  });

  //////////////////Delete


app.get("/category/delete/id/:ID",async(req,res,next)=>{
  try{
  const result = await
  controller.deleteCategoryByID(req.params.ID);
  res.json(result);
  }catch(err){
    next(err);
  }
})
  
app.get("/category/delete/name/:name", async (req,res,next)=> {
  try{
  const result = await
  controller.deleteCategoryByName (req.params.name);
  res.json(result);
  }catch(err){
    next(err);
  }
})


////////Create

app.get("/category/create/",async (req,res,next)=>{
  try{
  const result = await 
  controller.createCategory(req.query);
  res.json(result);
  }catch(err){
    next(err);
  }
});

///////////update

app.get("/category/update/:ID",async (req,res,next)=>{
  try{
  const result = await 
  controller.updateCategory(req.params.ID,req.query);
  res.json(result);
  }catch(err){
    next(err);
  }
});


};

app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: err });
});


app.listen(8080, () => {
  console.log("port 8080");
});
start();
