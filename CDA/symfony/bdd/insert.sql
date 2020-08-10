INSERT INTO `theme` (id, theme_name)
VALUES (1, "fantastique"),
       (2, "jeux-vidéo"),
       (3, "cartoon");

INSERT INTO `format`(id, format_name)
VALUES (1, "A1"),
       (2, "A2"),
       (3, "A3"),
       (4, "A4");

INSERT INTO `material` (id, material_name)
VALUES (1, "papier"),
       (2, "bois"),
       (3, "métal"),
       (4, "verre");

INSERT INTO `adress` (id, adress_type, adress_country, adress_district, adress_postal_code, adress_city,
                      adress_num_street, adress_street, adress_complement)
VALUES (12, 2, "Angleterre", "Grand Londres", "SW1A1AA", "Londres", "1", "Constitution Hill", "Buckingham Palace"),
       (13, 2, "Angleterre", "Grand Londres", "SW1A1AA", "Londres", "1", "Constitution Hill", "Buckingham Palace"),
       (16, 2, "Belgique", "Namur", "5570", "Honnay", "12", "Rue du couvent", "Keskispasse"),
       (19, 2, "France", "Alsace", "67100", "Strasbourg", "18", "Rue de Bâle", "CEDEX 12"),
       (20, 2, "Espagne", "Madrid", "28004", "Madrid", "78", "Calle de Sagasta", "Holaquetal");

INSERT INTO `adress` (id, adress_type, adress_country, adress_district, adress_postal_code, adress_city,
                      adress_num_street, adress_street)
VALUES (1, 3, "Argentine", "Buenos Aires", "B1636FDA", "La Plata", "230", "Casilla de Correos"),
       (2, 1, "Australie", "Tasmanie", "7005", "Hobart", "104", "Todd Street"),
       (3, 3, "Italie", "Lombardie", "27049", "Stradella", "2", "Via Lanzone"),
       (4, 1, "Ukraine", "Kiev", "Kiev", "01001", "17", "Malopidvalna St"),
       (5, 2, "Australie", "Victoria", "3147", "Melbourne", "10", "Ashmore Avenue"),
       (6, 2, "Mexique", "Tabasco", "86606", "Paraiso", "168", "Calle 5 de Mayo"),
       (7, 2, "France", "Normandie", "76600", "Le Havre", "19", "Rue Alexandre"),
       (8, 2, "Inde", "Pendjab", "151001", "Bathinda", "82", "Nai Basti"),
       (9, 2, "Australie", "Victoria", "3550", "Bendigo", "242", "Barnard Street"),
       (10, 2, "Mexique", "Tabasco", "86750", "Frontera", "310", "Ignacio Allende"),
       (11, 2, "France", "Normandie", "76600", "Le Havre", "23", "Rue Ferrer"),
       (14, 2, "France", "Hauts-de-France", "80000", "Amiens", "10", "Rue des 3 Cailloux"),
       (15, 2, "Allemagne", "Saxe", "04103", "Leipzig", "11", "Nurnberger Street"),
       (17, 2, "Espagne", "Asturias", "33001", "Oviedo", "56", "Calle Avellanos"),
       (18, 2, "Allemagne", "Brandenburg", "10115", "Berlin", "7", "Stremitzer Street");

INSERT INTO `suppliers` (id, adress_id, suppli_company_name, suppli_mail, suppli_phone)
VALUES (1, 17, "WoodenPC", "WoodenPC@pasfacile.com", "09.75.63.14.78"),
       (2, 18, "LegoLegends", "LegoLegends@lol.com", "09.76.29.43.86"),
       (3, 19, "RitoPlease", "RitoPlease@vanvan.com", "09.12.63.45.56"),
       (4, 20, "AucuneIdée", "AucuneIdée@pls.com", "09.52.45.86.96");



INSERT INTO `user` (id, user_titre, user_role_id, user_last_name, user_first_name, user_phone, user_birthday,
                    user_gender)
VALUES (1, "client", 1, "Jean", "Bon", "06.15.62.75.95", "1999-08-04", "Homme"),
       (2, "client", 1, "Jason", "Tatame", "06.78.65.14.23", "1997-12-07", "Homme"),
       (3, "client", 1, "Clara", "Gartax", "06.98.45.85.96", "1967-04-11", "Femme"),
       (4, "client", 1, "Alain", "Deloin", "06.78.25.36.14", "1998-07-05", "Homme"),
       (5, "employé", 2, "Florent", "Panini", "06.65.45.86.96", "1987-09-04", "Homme"),
       (6, "employé", 2, "Eve", "Tartampion", "06.15.83.27.64", "1975-06-26", "Femme"),
       (7, "employé", 2, "Brian", "Kitchen", "06.68.21.12.33", "1982-10-29", "Homme"),
       (8, "employé", 2, "Sarah", "Conor", "06.11.12.54.86", "1996-11-12", "Femme"),
       (9, "commercial", 3, "Lucas", "Niche", "06.89.45.63.12", "1985-09-07", "Homme"),
       (10, "commercial", 3, "Enzo", "Batelli", "06.78.65.23.23", "1987-07-26", "Homme"),
       (11, "commercial", 3, "Jean-Michel", "Apeuprès", "06.45.80.69.32", "1999-09-06", "Homme"),
       (12, "commercial", 3, "Giselle", "Lelustre", "06.00.23.58.58", "1981-12-04", "Femme"),
       (13, "logisticien", 5, "Julien", "Emerite", "06.78.56.12.96", "1986-03-11", "Homme"),
       (14, "logisticien", 5, "Marjorie", "Brie", "06.55.66.78.25", "1985-12-10", "Femme"),
       (15, "logisticien", 5, "Audrey", "Carto", "06.56.21.40.80", "1972-02-02", "Femme"),
       (16, "logisticien", 5, "Yohann", "Grif", "06.12.07.93.20", "1974-07-06", "Homme");



INSERT INTO `user_adress` (user_id, adress_id)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4),
       (5, 5),
       (6, 6),
       (7, 7),
       (8, 8),
       (9, 9),
       (10, 10),
       (11, 11),
       (12, 12),
       (13, 13),
       (14, 14),
       (15, 15),
       (16, 16)



INSERT INTO `products` (id, pro_name, pro_stock_ale, pro_unit_price, pro_unit_stock_phy, pro_unit_on_order,
                        pro_discontinued, pro_note, pro_lib, pro_description)
    VALUE (1, "poster Marvel", 25, 20, 50, 10, 2, 9, "posMar", "poster film Marvel A3"),
    (2, "poster Valorant", 20, 30, 75, 20, 2, 8, "posVal", "poster jeu Valorant A3"),
    (3, "poster Looney Tunes", 10, 15, 50, 5, 2, 6, "posLT", "poster cartoon Looney Tunes A4"),
    (4, "poster Marvel", 15, 40, 20, 10, 2, 9, "posMar", "poster film Marvel A2"),
    (7, "poster Valorant", 20, 25, 75, 25, 2, 8, "posVal", "poster jeu Valorant A3"),
    (5, "poster Marvel", 10, 20, 50, 0, 2, 7, "posMar", "poster film Marvel A2"),
    (6, "poster Marvel", 25, 20, 50, 30, 2, 8, "posMar", "poster film Marvel A3");



INSERT INTO `products_material` (products_id, material_id)
    VALUE (1, 2),
    (2, 3),
    (3, 2),
    (4, 1),
    (2, 4),
    (5, 3),
    (6, 3),
    (7, 2);

INSERT INTO `products_format` (products_id, format_id)
    VALUE (1, 2),
    (2, 3),
    (3, 3),
    (4, 4),
    (2, 2),
    (5, 1),
    (6, 1),
    (7, 3);

INSERT INTO `products_theme` (products_id, theme_id)
    VALUE
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 1),
    (5, 3),
    (6, 1),
    (7, 2);


INSERT INTO `order` (id,order_date, order_date_shipping, order_type, order_shipping_cost)
VALUES (1, "2020-02-15", "2020-02-27", 1, 20),
       (2, "2020-03-27", "2020-04-5", 2, 5),
       (3, "2020-01-01", "2020-01-12", 2, 7),
       (4, "2020-06-07", "2020-06-18", 2, 5),
       (5, "2020-03-10", "2020-03-14", 2, 3);


INSERT INTO `order_adress` (order_id, adress_id)
VALUES (1, 1),
       (1, 2),
       (2, 3),
       (3, 4),
       (4, 4),
       (5, 1);


INSERT INTO `orders_details` (id,  orderdetails_unit_price, orderdetails_quantity, ordersdetails_discount,ordersdetails_tva,orders_id)
    VALUE   (1,  30, 10, 5,20,1),
    (4,  30, 2, 20,20,1);

INSERT INTO `orders_details` (id,  orderdetails_unit_price, orderdetails_quantity,ordersdetails_tva)
    VALUE   (6 ,20, 1,20),
    (2, 40, 2,20),
    (3,  20, 15,20),
    (5,  15, 1,20);

INSERT INTO `products_orders_details` (orders_details_id, products_id)
    VALUE   (1, 6),
    (1, 4),
    (1, 1),
    (1, 2),
    (2, 5),
    (2, 2),
    (2, 1),
    (3, 1),
    (3, 2),
    (3, 6),
    (5, 3);

