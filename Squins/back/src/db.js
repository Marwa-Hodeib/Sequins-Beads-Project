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

  //await db.run(`insert into collection (collection_name) values ('zeinab');`)
  // await db.run(`insert into collection (collection_name) values ('zeinab');`)
  //await db.run(`insert into admin (admin_user,admin_pass) values ('admin','admin');`)
  //await db.run(`insert INTO category (category_name) VALUES('summer')`)
  /*   await db.run(`INSERT into product (product_date,product_description,product_name,product_price,product_quantity,category_category_id,collection_collection_id)
  values("2-2-2020","DDddddddddddds","name",20000,5,1,2)`) */

  /* await db.run(`INSERT INTO 'order'
  ("order_date", "order_quantity", "order_amount", "product_product_id", "client_name", "area")
  VALUES ('2-2-2020', 2, 20000, 1, 'joe', 'jnjjknn'); `) */


  //////////********* Collection **********//////////
  const getcollection = async () => {
    const rows = await db.all("select * from collection");
    return rows;
  };
  const getcollectionById = async (id) => {
    const rows = await db.all(`select * from collection where collection_id =${id} `);
    return rows;
  };
  const getcollectionByName = async (name) => {
    const rows = await db.all(`select * from collection where collection_name = '${name}'`);
    return rows;
  }

  const deleteCollectionByID = async (id) => {
    try {
      const rows = await db.run(`delete from collection where collection_id=${id}`);
      if (rows.stmt.changes > 0) {
        return true;
      } else
        return false;
    } catch (err) {
      throw new Error("not found" + err)
    }
  }
  //////////********* Category **********//////////
  const getCategory = async () => {
    const rows = await db.all("select * from category");
    return rows;
  };
  const getCategoryById = async (id) => {
    const rows = await db.all(`select * from category where category_id =${id} `);
    return rows;
  };
  const getCategoryByName = async (name) => {
    const rows = await db.all(`select * from category where category_name = '${name}'`);
    return rows;
  }

  const deleteCategoryByID = async (id) => {
    try {
      const rows = await db.run(`delete from category where category_id=${id}`);
      if (rows.stmt.changes > 0) {
        return true;
      } else
        return false;
    } catch (err) {
      throw new Error("not found" + err)
    }
  }
  const deleteCategoryByName = async (name) => {
    try {
      const rows = await db.run(`delete from category where category_name='${name}'`);
      if (rows.stmt.changes > 0) {
        return true;
      } else
        return false;
    } catch {
      throw new Error("not found");
    }
  }


  const createCategoryByID = async (props) => {
    const {
      name
    } = props;
    try {
      const rows = await db.run(`insert into category (category_name) values ('${name}')`);
      return rows.stmt.lastID;
    } catch (err) {
      throw new Error("no connection to database");
    }
  }


  const updateCategory = async (id, props) => {
    const {
      name
    } = props;
    if (name) {
      try {
        const rows = await db.run(`update category set category_name='${name}' where category_id=${id}`);
        if (rows.changes > 0) {
          return "done"
        } else {
          return "wrong id";
        }
      } catch (err) {
        throw new Error("no connection to database");
      }
    }
  }
  //////////********* Admin **********//////////

  const getAdmin = async (req) => {
    const query = " ";
    if (req == 'name' || req == "NAME" || req == "Name") {
      query = `select * from admin order by admin_user `
    }
    try {
      const rows = await db.all(`select * from admin`);
      return rows
    } catch (err) {
      throw new Error("Error connection with database")
    }
  }

  const getAdminId = async (id) => {
    try {
      const rows = await db.all(`select * from admin where admin_id=${id}`);
      if (rows.length > 0)
        return rows;
      else
        return false;
    } catch (err) {
      throw new Error("Error conection with database")
    }
  }

  const getAdminName = async (name) => {
    try {
      const rows = await db.all(`select * from admin where admin_user='${name}'`);
      if (rows.length > 0)
        return rows;
      else
        return false;
    } catch (err) {
      throw new Error("Error conection with database")
    }
  }
  const deleteAdminId = async (id) => {
    try {
      const rows = await db.run(`delete from admin where admin_id=${id}`);
      console.log(rows);
      if (rows.stmt.changes > 0)
        return true;
      else
        return false;
    } catch (err) {
      throw new Error("Error conection with database")
    }
  }
  const deleteAdminName = async (name) => {
    try {
      const rows = await db.run(`delete from admin where admin_user='${name}'`);
      if (rows.stmt.changes > 0)
        return true;
      else
        return false;
    } catch (err) {
      throw new Error("Error conection with database")
    }
  }
  const createAdmin = async (props) => {
    const {
      user,
      pass
    } = props;
    if (user && pass) {
      try {
        const rows = await db.run(`insert into admin (admin_user,admin_pass) values ('${user}','${pass}')`);
        if (rows.stmt.changes > 0)
          return rows.stmt.lastID;
        else
          return false;
      } catch (err) {
        throw new Error("Error conection with database")
      }
    }
    return "Enter user and pass";
  }
  const updateAdmin = async (id, props) => {
    const {
      user,
      pass
    } = props;
    let query = " ";
    if (user && pass) {
      query = `update admin set admin_user='${user}', admin_pass='${pass}' where admin_id=${id}`;
    } else if (user && !pass)
      query = `update admin set admin_user='${user}' where admin_id=${id}`;
    else
      query = `update admin set admin_pass='${pass}' where admin_id=${id}`;
    try {
      const rows = await db.run(query);
      if (rows.stmt.changes > 0)
        return true;
      else
        return false;
    } catch (err) {
      throw new Error("Error conection with database")
    }
  }

  //////////********* Order **********//////////

  const deleteCollectionByName = async (name) => {
    try {
      const rows = await db.run(`delete from collection where collection_name='${name}'`);
      if (rows.stmt.changes > 0) {
        return true;
      } else
        return false;
    } catch {
      throw new Error("not found");
    }
  }


  const createCollectionByID = async (props) => {
    const {
      name
    } = props;
    try {
      const rows = await db.run(`insert into collection (collection_name) values ('${name}')`);
      return rows.stmt.lastID;
    } catch (err) {
      throw new Error("no connection to database");
    }
  }


  const updateCollection = async (id, props) => {
    const {
      name
    } = props;
    if (name) {
      try {
        const rows = await db.run(`update collection set collection_name='${name}' where collection_id=${id}`);
        return rows.stmt.lastID;

      } catch (err) {
        throw new Error("no connection to database");
      }
    }
  }

  const updateOrder = async (id, props) => {
    const {
      quantity,
      productID,
      clientName,
      area
    } = props;
    let query = " ";
    if (quantity && productID && clientName && area) {
      const result = await db.all(`select product_price from product where product_id=${productID}`);
      const amount = result[0].product_price * quantity;
      query = `update 'order' set order_quantity=${quantity} , product_product_id=${productID} , client_name='${clientName}' ,order_amount=${amount} , area='${area}' where order_id=${id}`;
    } else if (quantity && productID && clientName && !area) {
      const result = await db.all(`select product_price from product where product_id=${productID}`);
      const amount = result[0].product_price * quantity;
      query = `update 'order' set order_quantity=${quantity} , product_product_id=${productID} , client_name='${clientName}' ,order_amount=${amount} where order_id=${id}`;
    } else if (quantity && productID && !clientName && !area) {
      const result = await db.all(`select product_price from product where product_id=${productID}`);
      const amount = result[0].product_price * quantity;
      query = `update 'order' set order_quantity=${quantity} , product_product_id=${productID} ,order_amount=${amount}`;
    } else {
      const result = await db.all(`select product_price from product where product_id=${id}`);
      const amount = result[0].product_price * quantity;
      query = `update 'order' set order_quantity=${quantity} ,order_amount=${amount} where order_id=${id}`;
    }
    try {
      const rows = await db.run(query);
      if (rows.stmt.changes > 0)
        return true;
      else
        return false;
    } catch (err) {
      throw new Error("Error conection with database")
    }
  }

  const controller = {
    getcollection,
    getcollectionById,
    getcollectionByName,
    deleteCollectionByID,
    deleteCollectionByName,
    createCollectionByID,
    updateCollection,
    getCategory,
    getCategoryById,
    getCategoryByName,
    deleteCategoryByID,
    deleteCategoryByName,
    createCategoryByID,
    updateCategory,
    //updateContact,
    getAdmin,
    getAdminId,
    getAdminName,
    deleteAdminId,
    deleteAdminName,
    createAdmin,
    updateAdmin,
    updateAdmin,

    /*  getOrder,
     getOrderId,
     getOrderClientName,
     getOrderProductId,
     getOrderDate,
     deleteOrderId,
     deleteOrderClientName,
     createOrder,
     updateOrder */
  }
  return controller;
};
export default initializeDB;