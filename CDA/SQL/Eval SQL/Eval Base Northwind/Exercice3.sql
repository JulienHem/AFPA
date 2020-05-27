DELIMITER |
CREATE TRIGGER verif_pays BEFORE INSERT ON `Order Details`
    FOR EACH ROW 
    BEGIN 

    DECLARE PaysFourni VARCHAR(15);
    DECLARE PaysClient VARCHAR(15);

        SET PaysFourni = (SELECT Country FROM Suppliers 
                            JOIN Products ON Products.SupplierID = Suppliers.SupplierID 
                            WHERE ProductID = NEW.ProductID);
        SET PaysClient = (SELECT ShipCountry FROM Orders WHERE OrderID = NEW.OrderID);

        IF PaysFourni != PaysClient

        THEN

        SIGNAL SQLSTATE '40000' SET MESSAGE_TEXT = 'Recalcul des frais de port';
    END IF;
END|