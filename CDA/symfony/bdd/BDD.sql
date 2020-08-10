CREATE DATABASE `fil rouge`;
USE `fil rouge`;

CREATE TABLE `theme` (
theme_id INT(11) NOT NULL AUTO_INCREMENT,
theme_name VARCHAR(50) NOT NULL,
PRIMARY KEY(theme_id)
);


CREATE TABLE `format` (
format_id INT(11) NOT NULL AUTO_INCREMENT,
format_name VARCHAR(50) NOT NULL,
PRIMARY KEY(format_id)
);


CREATE TABLE `material` (
material_id INT(11) NOT NULL AUTO_INCREMENT,
material_name VARCHAR(50) NOT NULL,
PRIMARY KEY(material_id)
);


CREATE TABLE `product` (
pro_id INT(11) NOT NULL AUTO_INCREMENT,
material_id INT(11) NOT NULL,
format_id INT(11) NOT NULL,
theme_id INT(11) NOT NULL,
pro_name VARCHAR(50) NOT NULL,
pro_stockale INT(10) NOT NULL,
pro_unit_price INT(10) NOT NULL,
pro_unit_stockphy INT(10) NOT NULL,
pro_unit_on_order INT(10) NOT NULL,
pro_discontinued INT(10) NOT NULL,
pro_note INT(10) NULL,
pro_lib VARCHAR(25) NOT NULL,
pro_description VARCHAR(255) NOT NULL,
PRIMARY KEY(pro_id),
FOREIGN KEY (material_id) REFERENCES `material`(material_id),
FOREIGN KEY (format_id) REFERENCES `format`(format_id),
FOREIGN KEY (theme_id) REFERENCES `theme`(theme_id)
);






CREATE TABLE `adress`(
adress_id INT(15) NOT NULL AUTO_INCREMENT,
adress_type INT(5) NOT NULL,
adress_country VARCHAR(25) NOT NULL,
adress_district VARCHAR(50) NOT NULL,
adress_postal_code  VARCHAR(25) NOT NULL,
adress_city VARCHAR(25) NOT NULL,
adress_num_street VARCHAR (5) NOT NULL,
adress_street  VARCHAR(25) NOT NULL,
adress_complement VARCHAR(50) NULL,
PRIMARY KEY(adress_id)
);

CREATE TABLE `user` (
user_id INT(11) NOT NULL AUTO_INCREMENT,
adress_id INT(11) NOT NULL,
user_titre VARCHAR(50) NOT NULL,
user_role_id INT(15) NULL,
user_lastName VARCHAR (50) NULL,
user_firstName VARCHAR(50) NULL,
user_phone VARCHAR (25) NOT NULL,
user_birthday DATE NULL,
user_gender VARCHAR (15) NULL,
PRIMARY KEY(user_id),
FOREIGN KEY(adress_id) references `adress`(adress_id)
);


CREATE TABLE `suppliers` (
suppli_id INT(11) NOT NULL AUTO_INCREMENT,
adress_id INT(15) NOT NULL,
suppli_companyName VARCHAR(50) NOT NULL,
suppli_mail VARCHAR (255) NOT NULL,
suppli_phone VARCHAR (50)  NOT NULL,
PRIMARY KEY(suppli_id),
FOREIGN KEY(adress_id) references `adress`(adress_id)
);

CREATE TABLE `order`(
order_id INT(11) NOT NULL AUTO_INCREMENT,
suppli_id INT(11) NOT NULL,
user_id INT(11) NOT NULL,
adressid_billing INT(15) NOT NULL,
adressid_shipping INT(15) NOT NULL,
order_date DATE NOT NULL,
order_date_shipping DATE NULL,
order_type INT(5) NOT NULL,
order_shipping_cost INT(10) NOT NULL,
PRIMARY KEY(order_id),
FOREIGN KEY (suppli_id) REFERENCES `suppliers`(suppli_id),
FOREIGN KEY(user_id) REFERENCES `user`(user_id),
FOREIGN KEY(adressid_billing) REFERENCES `adress`(adress_id),
FOREIGN KEY(adressid_shipping) REFERENCES `adress`(adress_id)
);





CREATE TABLE `order details` (
order_id  INT(11) NOT NULL AUTO_INCREMENT,
pro_id INT(11) NOT NULL,
orderdetails_unitprice INT(25) NOT NULL,
orderdetails_quantity INT(25) NOT NULL,
orderdetails_discount INT(25) NULL,
orderdetails_tva INT(5) NULL,
FOREIGN KEY (order_id) REFERENCES `order`(order_id),
FOREIGN KEY (pro_id) REFERENCES `product`(pro_id)
);




ALTER TABLE `order details` ENGINE=InnoDB;
ALTER TABLE `order` ENGINE=InnoDB;
ALTER TABLE `suppliers` ENGINE=InnoDB;
ALTER TABLE `user` ENGINE=InnoDB;
ALTER TABLE `product` ENGINE=InnoDB;
ALTER TABLE `adress` ENGINE=InnoDB;
ALTER TABLE `material` ENGINE=InnoDB;
ALTER TABLE `format` ENGINE=InnoDB;
ALTER TABLE `theme` ENGINE=InnoDB;







