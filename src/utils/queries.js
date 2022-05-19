export const createProductsTable = `
DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  location INTEGER DEFAULT 0,
  name VARCHAR NOT NULL,
  info VARCHAR NOT NULL,
  quantity INTEGER DEFAULT 0,
  quantity_case INTEGER DEFAULT 0
  )
  `;

export const insertProducts = `
INSERT INTO products(name, location, info, quantity, quantity_case)
VALUES ('Coke', 1, '24x12 oz can', 1, 0),
        ('Sprite', 2, '24x12 oz can', 4, 0)
`;

export const dropProductsTable = 'DROP TABLE products';
