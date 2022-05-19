import { pool } from './pool';

class Model {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
  }

  async select(columns, locations) {
    let whereCond = ` WHERE location IN (0`;
    const locationsArray = locations.split(",");
    let query = `SELECT ${columns} FROM ${this.table}`;
    for (let index = 0; index < locationsArray.length; index++) {
      whereCond += `,${locationsArray[index]}`;
    }
    query = query + whereCond + `)
    ORDER BY id ASC`
    return this.pool.query(query);
  }

  async insertWithReturn(columns, values) {
    const query = `
          INSERT INTO ${this.table}(${columns})
          VALUES (${values})
          RETURNING id, ${columns}
      `;
    return this.pool.query(query);
  }

  async updateQuantityWithId(ids, quantities, quantities_case) {
    let query = `
    UPDATE ${this.table}
    SET quantity = CASE id 
    `;
    let whereCond = `END
    WHERE id IN (0`;
    const idArray = ids.split(",");
    const quantityArray = quantities.split(",");
    const quantity_caseArray = quantities_case.split(",");
    for (let index = 0; index < idArray.length; index++) {
      query+=`WHEN ${idArray[index]} THEN ${quantityArray[index]}
      `;
      whereCond += `,${idArray[index]}`;
    }
    query+=`END,
    quantity_case = CASE id
    `
    for (let index = 0; index < idArray.length; index++) {
      query+=`WHEN ${idArray[index]} THEN ${quantity_caseArray[index]}
      `;
    }
    query = query + whereCond + `)
    RETURNING id;`
    return this.pool.query(query);
    
  }
}

export default Model;