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

  const controller = {
    getcollection,
    getcollectionById,
    getcollectionByName,
    updateContact

  };
  return controller;
};
export default initializeDB ;
