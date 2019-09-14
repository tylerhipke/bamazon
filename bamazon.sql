DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(40) NOT NULL,
department_name VARCHAR(40) NOT NULL,
price FLOAT(10) NOT NULL,
stock_quantity INT(10) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES 
('iPhone XR', 'phone', 599, 33),
('iPhone 11', 'phone', 699, 24),
('iPhone 11 Pro', 'phone', 999, 38),
('iPhone 11 Pro Max', 'phone', 1099, 29),
('Galaxy Note 10', 'phone', 949.99, 28),
('Galaxy Note 10+', 'phone', 1099.99, 400),
('LG OLED C965', 'television', 2499.99, 6),
('LG OLED E965', 'television', 3299.99, 3),
('PlayStation 4 Slim 1TB', 'game console', 299.99, 23),
('PlayStation 4 Pro 1TB', 'game console', 399.99, 19),
('Xbox One X 1TB','game console',375.78, 17);

SELECT * FROM products;