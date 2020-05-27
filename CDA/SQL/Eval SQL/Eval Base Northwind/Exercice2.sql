-- 1ere procédure
DELIMITER |
CREATE PROCEDURE procedure1(IN client varchar(5))

BEGIN 
    SELECT MAX(OrderDate) AS "Date de dernière commande"
    FROM Orders
    JOIN Customers ON Orders.CustomerID = Customers.CustomerID
    WHERE Customers.CustomerID = client;
END ;

-- 2ème procédure

DELIMITER |
CREATE PROCEDURE procedure2(IN client varchar(5))

BEGIN   
    SELECT ROUND(AVG(DATEDIFF(ShippedDate, OrderDate))) AS "Délai moyen de livraison en jours"
    FROM Orders
    WHERE CustomerID = client;
END ;