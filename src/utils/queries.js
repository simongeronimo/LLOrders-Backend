export const createProductsTable = `
DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  location INTEGER DEFAULT 0,
  name VARCHAR NOT NULL,
  info VARCHAR NOT NULL,
  quantity INTEGER DEFAULT 0
  )
  `;

export const insertProducts = `
INSERT INTO products(name, info, quantity)
VALUES ('Coke', '24x12 oz can', 1),
        ('Sprite', '24x12 oz can', 4)
`;

export const dropProductsTable = 'DROP TABLE products';
