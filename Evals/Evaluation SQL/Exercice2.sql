-- 1 -Liste des contacts français:

SELECT CompanyName AS Société, ContactName AS Contact, ContactTitle AS Fonction, Phone AS "Numéro de téléphone"
FROM Customers
WHERE Country = "France";

-- 2 -Produits vendus par le fournisseur «Exotic Liquids»:

SELECT ProductName AS Produit, UnitPrice AS Prix
FROM Products
JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID
WHERE CompanyName = "Exotic Liquids";

-- 3 -Nombre de produits vendus par les fournisseurs Français dans l’ordre décroissant

SELECT CompanyName AS Fournisseur, COUNT(ProductID) AS NbreProduits
FROM Suppliers
JOIN Products 
ON Products.SupplierID = Suppliers.SupplierID
WHERE Country = "France"
GROUP BY CompanyName
ORDER BY CompanyName ASC, COUNT(ProductID) DESC;

-- 4 -Liste des clients Français ayant plus de 10 commandes:

SELECT CompanyName AS "Client", COUNT(OrderID) AS "Nbre Commandes"
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
WHERE Country = "France"
GROUP BY CompanyName
HAVING `Nbre Commandes` > 10;

-- 5 -Liste des clients ayant un chiffre d’affaires > 30.000:

SELECT DISTINCT CompanyName AS "Client", SUM(UnitPrice*Quantity) AS CA, Country as Pays
FROM Orders
JOIN `Order Details` ON `Order Details`.OrderID = Orders.OrderID
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
GROUP BY Customers.CustomerID
HAVING CA > 30000
ORDER BY CA DESC;

-- 6 –Liste des pays dont les clients ont passé commande de produits fournis par «Exotic Liquids»:

SELECT DISTINCT Orders.ShipCountry AS Country
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
JOIN `Order Details` ON Orders.OrderID = `Order Details`.OrderID
JOIN Products ON `Order Details`.ProductID = Products.ProductID
JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID
WHERE Suppliers.SupplierID = 1
ORDER BY COUNTRY ASC;

-- 7 –Montant des ventes de 1997:

SELECT SUM(UnitPrice*Quantity)
FROM Orders
JOIN `Order Details` ON Orders.OrderID = `Order Details`.OrderID
WHERE YEAR(OrderDate) = "1997";

-- 8 –Montant des ventes de 1997 mois par mois:

SELECT MONTH(OrderDate) AS "Mois 97", SUM(UnitPrice*Quantity) AS "Montant Ventes 97"
FROM Orders
JOIN `Order Details` ON Orders.OrderID = `Order Details`.OrderID
WHERE YEAR(OrderDate) = "1997"
GROUP BY MONTH(OrderDate);

-- 9 –Depuis quelle date le client «Du monde entier» n’a plus commandé?

SELECT MAX(OrderDate) AS "Date de dernière commande"
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
WHERE CompanyName = "Du monde entier";

-- 10 –Quel est le délai moyen de livraison en jours?

SELECT ROUND(AVG(DATEDIFF(ShippedDate, OrderDate))) AS "Délai moyen de livraison en jours"
FROM Orders;



