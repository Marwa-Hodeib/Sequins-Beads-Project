import sqlite from "sqlite";

const initializeDB = async () => {
  const db = await sqlite.open("./db.sqlite");
  /*   await db.run(`CREATE TABLE admin (
        admin_id integer NOT NULL CONSTRAINT admin_pk PRIMARY KEY,
        admin_user text NOT NULL,
        admin_pass text NOT NULL
    );`)
    await db.run(`CREATE TABLE category (
        category_id integer NOT NULL CONSTRAINT category_pk PRIMARY KEY,
        category_name text NOT NULL
    );`)
      await db.run(`CREATE TABLE collection (
        collection_id integer NOT NULL CONSTRAINT collection_pk PRIMARY KEY,
        collection_name text NOT NULL
    );`)
         await db.run(`CREATE TABLE image (
            image_id integer NOT NULL CONSTRAINT image_pk PRIMARY KEY,
            product_product_id integer NOT NULL,
            image_name text NOT NULL,
            CONSTRAINT image_product FOREIGN KEY (product_product_id)
            REFERENCES product (product_id)
        );`) */
  /*                 await db.run(`CREATE TABLE "order" (
                    order_id integer NOT NULL CONSTRAINT order_pk PRIMARY KEY,
                    order_date text NOT NULL,
                    order_quantity integer NOT NULL,
                    order_amount integer NOT NULL,
                    product_product_id integer NOT NULL,
                    client_name text NOT NULL,
                    area text NOT NULL,
                    CONSTRAINT order_product FOREIGN KEY (product_product_id)
                    REFERENCES product (product_id)
                );`)
} */
  /*                 await db.run(`CREATE TABLE product (
                    product_id integer NOT NULL CONSTRAINT product_pk PRIMARY KEY,
                    product_name text NOT NULL,
                    product_description text NOT NULL,
                    product_price integer NOT NULL,
                    product_quantity integer NOT NULL,
                    product_date text NOT NULL,
                    category_category_id integer NOT NULL,
                    collection_collection_id integer NOT NULL,
                    CONSTRAINT product_category FOREIGN KEY (category_category_id)
                    REFERENCES category (category_id),
                    CONSTRAINT product_collection FOREIGN KEY (collection_collection_id)
                    REFERENCES collection (collection_id)
                );`) */

  // await db.run(`insert into collection (collection_name) values ('zeinab');`)
  //await db.run(`insert into admin (admin_user,admin_pass) values ('admin','admin');`)

  const getcollection = async () => {
    const rows = await db.all("select * from collection");
    return rows;
  };
  const getcollectionById = async (id) => {
    const rows = await db.all(`select * from collection where collection_id =${id} `);
    return rows;
  };
  const getcollectionByName = async(name) =>{
    const rows =  await db.all(`select * from collection where collection_name = '${name}'`);
    return rows;
  }
  const updateContact = async (id, props) => {
    const { name} = props;
    const result = await db.run(`UPDATE collection SET collectin_name=’${name}’ WHERE collection_id = ${id}`);
  }
  //////////********* Admin **********//////////

  const getAdmin = async () => {
    try{
    const rows = await db.all(`select * from admin`);
    return rows
    }catch(err){
      throw new Error("Error connection with database")
    }
  }

  const getAdminId = async (id) => {
    try{
    const rows = await db.all(`select * from admin where admin_id=${id}`);
    if(rows.length>0)
      return rows;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

  const getAdminName= async (name) => {
    try{
    const rows = await db.all(`select * from admin where admin_user='${name}'`);
    if(rows.length>0)
      return rows;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }
  const deleteAdminId= async (id) => {
    try{
    const rows = await db.run(`delete from admin where admin_id=${id}`);console.log(rows);
    if(rows.stmt.changes>0)
      return true;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }
  const deleteAdminName= async (name) => {
    try{
    const rows = await db.run(`delete from admin where admin_user='${name}'`);
    if(rows.stmt.changes>0)
      return true;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }
  const createAdmin= async (props) => {
    const {user,pass}=props;
    if(user && pass){
       try{
        const rows = await db.run(`insert into admin (admin_user,admin_pass) values ('${user}','${pass}')`);
        if(rows.stmt.changes>0)
          return rows.stmt.lastID;
        else
          return false;
      }catch(err){
        throw new Error("Error conection with database")
      } 
    }
    return "Enter user and pass";
  }

  const updateAdmin= async (id,props) => {
    const {user,pass}=props;
    let query=" ";
    if(user && pass){
      query=`update admin set admin_user='${user}', admin_pass='${pass}' where admin_id=${id}`;
    }
    else if(user && !pass)
      query=`update admin set admin_user='${user}' where admin_id=${id}`;
    else
      query=`update admin set admin_pass='${pass}' where admin_id=${id}`;
    try{
    const rows = await db.run(query);
    if(rows.stmt.changes>0)
      return true;
    else
      return false;
    }catch(err){
      throw new Error("Error conection with database")
    }
  }

  const controller = {
    getcollection,
    getcollectionById,
    getcollectionByName,
    updateContact,
    getAdmin,
    getAdminId,
    getAdminName,
    deleteAdminId,
    deleteAdminName,
    createAdmin,
    updateAdmin

  };
  return controller;
};
export default initializeDB ;
