import sqlite from "sqlite";

const initializeDB = async () => {
  const db = await sqlite.open("./database.sqlite");
  /*    await db.run(`CREATE TABLE admin (
        admin_id integer NOT NULL CONSTRAINT admin_pk PRIMARY KEY,
        admin_user text NOT NULL UNIQUE,
        admin_pass text NOT NULL
      );`)  */

  /*    await db.run(`CREATE TABLE category (
        category_id integer NOT NULL CONSTRAINT category_pk PRIMARY KEY,
        category_name text NOT NULL UNIQUE
      );`)  */

  /*    await db.run(`CREATE TABLE collection (
        collection_id integer NOT NULL CONSTRAINT collection_pk PRIMARY KEY,
        collection_name text NOT NULL UNIQUE,
        collection_flag integer NOT NULL
      );`)  */

  /*    await db.run(`CREATE TABLE product (
        product_id integer NOT NULL CONSTRAINT product_pk PRIMARY KEY,
        product_name text NOT NULL UNIQUE,
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
      );`)    */
  /*    await db.run(`CREATE TABLE image (
        image_id integer NOT NULL CONSTRAINT image_pk PRIMARY KEY,
        product_product_id integer NOT NULL,
        image_name text NOT NULL,
        CONSTRAINT image_product FOREIGN KEY (product_product_id)
        REFERENCES product (product_id)
      );`)  */

  /*    await db.run(`CREATE TABLE orders (
        orders_id integer NOT NULL CONSTRAINT order_pk PRIMARY KEY,
        orders_date text NOT NULL,
        orders_quantity integer NOT NULL,
        orders_amount integer NOT NULL,
        product_product_id integer NOT NULL,
        client_name text NOT NULL UNIQUE,
        area text NOT NULL,
        CONSTRAINT order_product FOREIGN KEY (product_product_id)
        REFERENCES product (product_id)
      );`) */

  //  await db.run(`insert into collection (collection_name,collection_flag) values ('summer',1);`)
  //  await db.run(`insert into collection (collection_name,collection_flag) values ('winter',0);`)
  //  await db.run(`insert into collection (collection_name,collection_flag) values ('autumn',0);`)
  //  await db.run(`insert into collection (collection_name,collection_flag) values ('spring',0);`)

  //  await db.run(`insert into admin (admin_user,admin_pass) values ('admin','admin');`)

  //  await db.run(`insert into category (category_name) VALUES('bracelet')`)
  //  await db.run(`insert into category (category_name) VALUES('ring')`)

  /*  await db.run(`INSERT into product (product_date,product_description,product_name,product_price,product_quantity,category_category_id,collection_collection_id)
      values("2-2-2020","description of the item","name",20000,5,1,2)`) */

  /*  await db.run(`INSERT into product (product_date,product_description,product_name,product_price,product_quantity,category_category_id,collection_collection_id)
      values("2-2-2020","description of the item","name1",20000,5,2,1)`)   */
  /*  await db.run(`INSERT into product (product_date,product_description,product_name,product_price,product_quantity,category_category_id,collection_collection_id)
      values("2-2-2020","description of the item","name2",20000,5,1,1)`)  */
  /*  await db.run(`INSERT into product (product_date,product_description,product_name,product_price,product_quantity,category_category_id,collection_collection_id)
      values("2-2-2020","description of the item","name3",20000,5,1,2)`)  */
  /*  await db.run(`INSERT into product (product_date,product_description,product_name,product_price,product_quantity,category_category_id,collection_collection_id)
      values("2-2-2020","description of the item","name4",20000,5,2,1)`)   */
  /* await db.run(`INSERT into product (product_date,product_description,product_name,product_price,product_quantity,category_category_id,collection_collection_id)
      values("2-2-2020","description of the item","name5",20000,5,1,2)`) */

  /*  await db.run(`INSERT INTO orders
      ("orders_date", "orders_quantity", "orders_amount", "product_product_id", "client_name", "area")
       VALUES ('2-2-2020', 2, 20000, 1, 'joe', 'beirut'); `)  */
  /*  await db.run(`INSERT INTO orders
       ("orders_date", "orders_quantity", "orders_amount", "product_product_id", "client_name", "area")
      VALUES ('2-1-2020', 2, 20000, 2, 'najwa', 'zahle'); `)   */

  //   await db.run(`insert into image ("product_product_id" ,"image_name") values (1,'1.png')`)
  //   await db.run(`insert into image ("product_product_id" ,"image_name") values (2,'2.png')`)
  //   await db.run(`insert into image ("product_product_id" ,"image_name") values (1,'3.png')`)
  //   await db.run(`insert into image ("product_product_id" ,"image_name") values (3,'4.png')`)
  //   await db.run(`insert into image ("product_product_id" ,"image_name") values (4,'5.png')`)
  //   await db.run(`insert into image ("product_product_id" ,"image_name") values (5,'6.png')`)
  //   await db.run(`insert into image ("product_product_id" ,"image_name") values (6,'7.png')`)

  ////////////*********Collection*************////////////
  const getcollection = async orderby => {
    let query = "select * from collection";
    switch (orderby) {
      case "name":
        query += " order by collection_name";
        break;
      default:
        break;
    }
    try {
      const rows = await db.all(query);
      if (rows.length == 0) {
        throw new Error("Collection is empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve list of collection");
    }
  };
  const getcollectionById = async id => {
    id = parseInt(id);
    if (!isNaN(id)) {
      try {
        const rows = await db.all(
          `select * from collection where collection_id =${id} `
        );
        if (rows.length > 0) {
          return rows;
        } else {
          throw new Error(`Collection with id=${id} is not found`);
        }
      } catch (err) {
        throw new Error(`Can't retreive data`);
      }
    } else {
      throw new Error(`Enter id as a number`);
    }
  };
  const getcollectionByName = async name => {
    try {
      const rows = await db.all(
        `select * from collection where collection_name = '${name}'`
      );
      if (rows.length > 0) {
        return rows;
      } else {
        throw new Error(`Collection with name=${name} is not found`);
      }
    } catch (err) {
      throw new Error(`Can't retrieve data`);
    }
  };

  const deleteCollectionByID = async id => {
    id = parseInt(id);
    if (!isNaN(id)) {
      try {
        const rows = await db.run(
          `delete from collection where collection_id=${id}`
        );
        if (rows.stmt.changes > 0) {
          return true;
        } else return false;
      } catch (err) {
        throw new Error("not found" + err);
      }
    } else {
      throw new Error("Enter id as a number");
    }
  };

  const deleteCollectionByName = async name => {
    try {
      const rows = await db.run(
        `delete from collection where collection_name='${name}'`
      );
      if (rows.stmt.changes > 0) {
        return true;
      } else return false;
    } catch {
      throw new Error("not found");
    }
  };

  const createCollection = async props => {
    const { name, flag } = props;
    if (name && flag) {
      if (flag == 1 || flag == 0) {
        try {
          const rows = await db.run(
            `insert into collection (collection_name,collection_flag) values ('${name}',${flag})`
          );
          return rows.stmt.lastID;
        } catch (err) {
          throw new Error("no connection to database");
        }
      } else throw new Error("enter flag 0 or 1"); //flag==1 || flag==0
    } else throw new Error("enter flag and name");
  };

  const updateCollection = async (id, props) => {
    const { name, flag } = props;
    let query = "";
    if (name && !flag) {
      query = `update collection set collection_name='${name}' where collection_id=${id}`;
    } else if (!name && flag && (flag == 1 || flag == 0)) {
      query = `update collection set collection_flag=${flag} where collection_id=${id}`;
    } else if (name && flag && (flag == 1 || flag == 0)) {
      query = `update collection set collection_flag=${flag}, collection_name='${name}' where collection_id=${id}`;
    }
    try {
      const rows = await db.run(query);
      if (rows.stmt.changes > 0) return true;
      else return false;
    } catch (err) {
      throw new Error("no connection to database");
    }
  };

  //////////********* Admin **********//////////

  const getAdmin = async req => {
    let query = "select * from admin ";
    if (req == "name" || req == "NAME" || req == "Name") {
      query += "order by admin_user";
    }
    try {
      const rows = await db.all(query);
      return rows;
    } catch (err) {
      throw new Error("Error connection with database");
    }
  };

  const getAdminId = async id => {
    id = parseInt(id);
    if (!isNaN(id)) {
      try {
        const rows = await db.all(`select * from admin where admin_id=${id}`);
        if (rows.length > 0) return rows;
        else return false;
      } catch (err) {
        throw new Error("Error conection with database");
      }
    } else {
      throw new Error("Enter id as a number");
    }
  };

  const getAdminName = async name => {
    try {
      const rows = await db.all(
        `select * from admin where admin_user='${name}'`
      );
      if (rows.length > 0) return rows;
      else return false;
    } catch (err) {
      throw new Error("Error conection with database");
    }
  };
  const deleteAdminId = async id => {
    id = parseInt(id);
    if (!isNaN(id)) {
      try {
        const rows = await db.run(`delete from admin where admin_id=${id}`);
        if (rows.stmt.changes > 0) return true;
        else return false;
      } catch (err) {
        throw new Error("Error conection with database");
      }
    } else {
      throw new Error("Enter id that is number");
    }
  };
  const deleteAdminName = async name => {
    try {
      const rows = await db.run(`delete from admin where admin_user='${name}'`);
      if (rows.stmt.changes > 0) return true;
      else return false;
    } catch (err) {
      throw new Error("Error conection with database");
    }
  };
  const createAdmin = async props => {
    const { user, pass } = props;
    if (user && pass) {
      try {
        const rows = await db.run(
          `insert into admin (admin_user,admin_pass) values ('${user}','${pass}')`
        );
        if (rows.stmt.changes > 0) return rows.stmt.lastID;
        else return false;
      } catch (err) {
        throw new Error("Error conection with database");
      }
    }
    return "Enter user and pass";
  };
  const updateAdmin = async (id, props) => {
    const { user, pass } = props;
    let query = " ";
    if (user && pass) {
      query = `update admin set admin_user='${user}', admin_pass='${pass}' where admin_id=${id}`;
    } else if (user && !pass)
      query = `update admin set admin_user='${user}' where admin_id=${id}`;
    else query = `update admin set admin_pass='${pass}' where admin_id=${id}`;
    try {
      const rows = await db.run(query);
      if (rows.stmt.changes > 0) return true;
      else return false;
    } catch (err) {
      throw new Error("Error conection with database");
    }
  };
  //////////********* Order **********//////////

  const getOrder = async order => {
    let query = "select * from orders ";
    switch (order) {
      case "area":
        query += "order by area";
        break;
      case "client":
        query += "order by client_name";
        break;
      case "product":
        query += "order by product_product_id";
        break;
      default:
        break;
    }
    try {
      const rows = await db.all(query);
      return rows;
    } catch (err) {
      throw new Error("Error connection with database");
    }
  };

  const createOrder = async props => {
    const { date, quantity, amount, productID, clientName, area } = props;
    quantity = parseInt(quantity);
    amount = parseInt(amount);
    productID = parseInt(productID);
    if (date && quantity && amount && productID && clientName && area) {
      if (!isNaN(amount) && !isNaN(quantity) && !isNaN(productID)) {
        try {
          const rows = await db.run(`INSERT INTO 'order'
          ("order_date", "order_quantity", "order_amount", "product_product_id", "client_name", "area")
          VALUES ('${date}',${quantity}, ${amount}, ${productID}, '${clientName}', '${area}')`);
          if (rows.stmt.changes > 0) return rows.stmt.lastID;
          else return false;
        } catch (err) {
          throw new Error("Error conection with database");
        }
      } else throw new Error("quantity, amount and product_Id must be number");
    }
    return "Enter all necessary data!!";
  };

  const updateOrder = async (id, props) => {
    const { quantity, productID, clientName, area } = props;
    let query = " ";
    quantity = parseInt(quantity);
    productID = parseInt(productID);
    id = parseInt(id);
    if (!isNaN(id)) {
      if (productID && quantity && !isNaN(productID) && !isNaN(quantity)) {
        if (quantity && productID && clientName && area) {
          const result = await db.all(
            `select product_price from product where product_id=${productID}`
          );
          const amount = result[0].product_price * quantity;
          query = `update orders set orders_quantity=${quantity} , product_product_id=${productID} , client_name='${clientName}' ,orders_amount=${amount} , area='${area}' where orders_id=${id}`;
        } else if (quantity && productID && clientName && !area) {
          const result = await db.all(
            `select product_price from product where product_id=${productID}`
          );
          const amount = result[0].product_price * quantity;
          query = `update orders set orders_quantity=${quantity} ,product_product_id=${productID} ,client_name='${clientName}' ,orders_amount=${amount} where orders_id=${id}`;
        } else if (quantity && productID && !clientName && !area) {
          const result = await db.all(
            `select product_price from product where product_id=${productID}`
          );
          const amount = result[0].product_price * quantity;
          query = `update orders set orders_quantity=${quantity} , product_product_id=${productID} ,orders_amount=${amount}`;
        }
      } else if (productID && isNaN(productID)) {
        const result = await db.all(
          `select product_price from product where product_id=${productID}`
        );
        const amount = result[0].product_price * quantity;
        query = `update orders set orders_amount=${amount} where orders_id=${id}`;
      } else if (quantity && isNaN(quantity)) {
        const result = await db.all(
          `select product_price from product where product_id=${productID}`
        );
        const amount = result[0].product_price * quantity;
        query = `update orders set orders_amount=${amount}, orders_quantity=${quantity} where orders_id=${id}`;
      } else throw new Error("quantity and product_id both must be number");
      try {
        const rows = await db.run(query);
        if (rows.stmt.changes > 0) return true;
        else return false;
      } catch (err) {
        throw new Error("Error conection with database");
      }
    } else throw new Error("enter id as number");
  };

  ////////////*********Category*************////////////
  const getcategory = async orderby => {
    let query = "select * from category";
    switch (orderby) {
      case "name":
        query += " order by category_name";
        break;
      default:
        break;
    }
    try {
      const rows = await db.all(query);
      if (rows.length == 0) {
        throw new Error("Category is empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve list of category");
    }
  };

  const getcategoryById = async id => {
    id = parseInt(id);
    if (!isNaN(id)) {
      try {
        const rows = await db.all(
          `select * from category where category_id =${id} `
        );
        if (rows.length > 0) {
          return rows;
        } else {
          throw new Error(`Category with id=${id} is not found`);
        }
      } catch (err) {
        throw new Error(`Can't retreive data`);
      }
    } else {
      throw new Error(`Enter id as a number`);
    }
  };

  const getcategoryByName = async name => {
    try {
      const rows = await db.all(
        `select * from category where category_name = '${name}'`
      );
      if (rows.length > 0) {
        return rows;
      } else {
        throw new Error(`Category with name=${name} is not found`);
      }
    } catch (err) {
      throw new Error(`Can't retrieve data`);
    }
  };

  const deleteCategoryByID = async id => {
    id = parseInt(id);
    if (!isNaN(id)) {
      try {
        const rows = await db.run(
          `delete from category where category_id=${id}`
        );
        if (rows.stmt.changes > 0) {
          return true;
        } else return false;
      } catch (err) {
        throw new Error("not found");
      }
    } else {
      throw new Error("Enter id as a number");
    }
  };

  const deleteCategoryByName = async name => {
    try {
      const rows = await db.run(
        `delete from category where category_name='${name}'`
      );
      if (rows.stmt.changes > 0) {
        return true;
      } else return false;
    } catch {
      throw new Error("not found");
    }
  };

  const createCategory = async props => {
    const { name } = props;
    if (name) {
      try {
        const rows = await db.run(
          `insert into category (category_name) values ('${name}')`
        );
        return rows.stmt.lastID;
      } catch (err) {
        throw new Error("no connection to database");
      }
    } else throw new Error("enter name");
  };

  const updateCategory = async (id, props) => {
    const { name } = props;
    let query = "";
    if (name) {
      query = `update category set category_name='${name}' where category_id=${id}`;
    } else throw new Error("enter name in order to update");
    try {
      const rows = await db.run(query);
      if (rows.stmt.changes > 0) return true;
      else return false;
    } catch (err) {
      throw new Error("no connection to database");
    }
  };
  const controller = {
    getcollection,
    getcollectionById,
    getcollectionByName,
    deleteCollectionByID,
    deleteCollectionByName,
    createCollection,
    updateCollection,
    getAdmin,
    getAdminId,
    getAdminName,
    deleteAdminId,
    deleteAdminName,
    createAdmin,
    updateAdmin,
    updateAdmin,
    getOrder,
    getOrderId,
    getOrderClientName,
    getOrderProductId,
    getOrderDate,
    deleteOrderId,
    deleteOrderClientName,
    createOrder,
    updateOrder,
    getcategory,
    getcategoryById,
    getcategoryByName,
    deleteCategoryByID,
    deleteCategoryByName,
    createCategory,
    updateCategory
  };
  return controller;
};

export default initializeDB;
