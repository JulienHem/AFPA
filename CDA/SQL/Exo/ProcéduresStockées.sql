<<<<<<< HEAD
DELIMITER |
CREATE PROCEDURE Lst_Fournis()
BEGIN
SELECT fournis.four_numfou, entcom.ent_numcom 
FROM entcom 
JOIN fournis ON fournis.four_numfou = entcom.four_numfou;
END |

DELIMITER ;

// Afficher la procédure 

CALL Lst_Fournis;

-- 2 ème procédure

DELIMITER |
    CREATE PROCEDURE lst_commandes(In observation Varchar(50))
    BEGIN
        SELECT entcom.numcom, fournis.nomfou, produit.libart, ligcom.qtecde*priuni
        FROM entcom
        JOIN fournis
        ON entcom.numfou = fournis.numfou
        JOIN ligcom
        ON ligcom.numcom = entcom.numcom
        JOIN produit
        ON produit.codart = ligcom.codart
        WHERE entcom.obscom LIKE CONCAT('%',observation,'%');
    END |
DELIMITER ;



-- Trigger

CREATE TRIGGER modif_reservation AFTER INSERT ON reservation
    FOR EACH ROW
    BEGIN
        DECLARE resa INT;
        SET resa = NEW.res_id;
        IF UPDATE ON resa THEN
            SIGNAL SQLSTATE '40000' SET MESSAGE_TEXT = 'Un problème est survenu. Règle de gestion altitude !';
        END IF;
END;




-- 3ème Trigger

DELIMITER |
CREATE TRIGGER insert_reservation2 BEFORE INSERT ON reservation
    FOR EACH ROW
    BEGIN
        DECLARE limite DOUBLE;
                
            SELECT COUNT(res_id) INTO limite FROM reservation where res_cli_id = NEW.res_cli_id;
            IF 3 >= limite
             THEN
            SIGNAL SQLSTATE '40000' SET MESSAGE_TEXT = 'Vous ne pouvez pas effectuer plus de 3 réservations!';
            END IF;
   END;

-- 4ème Trigger

DELIMITER |
CREATE TRIGGER insert_chambre BEFORE INSERT ON chambre
    FOR EACH ROW
    BEGIN
    DECLARE tot DOUBLE;
        SELECT DISTINCT cha_hot_id, SUM(cha_capacite) INTO tot
        FROM chambre;
        IF tot > 50
        THEN 
         SIGNAL SQLSTATE '40000' SET MESSAGE_TEXT = 'Capacité trop grande !';
            END IF;
   END;


INSERT INTO chambre 
(cha_hot_id, cha_capacite)
VALUES
(7, 10);

-- Cas pratique 

INSERT INTO commande
(id, id_client, date_commande, remise)
VALUES
(1, 2, 2018-09-01 00:00:00, 10)

DELIMITER |
CREATE TRIGGER stock_alerte AFTER UPDATE ON produit
    FOR EACH ROW

    BEGIN
        DECLARE pro_c CHAR(4);
        DECLARE alert INT;
        DECLARE codint INT;

            SET pro_c = NEW.codart;
            SET alert = (SELECT (stkale-stkphy) FROM produit WHERE codart = pro_c);
            SET codint = (SELECT SUM(artacom_qte) FROM articles_a_commander WHERE codart = pro_c);
        	    IF codint >= 0
				    THEN
        		    SET alert = alert - codint;
		  		    END IF;
                    INSERT INTO articles_a_commander (codart, artacom_date, artacom_qte) VALUES (pro_c, NOW(), alert);
        

                
END|

DELIMITER ;

UPDATE produit
SET stkphy = 
WHERE codart = "B001"
=======
<<<<<<< HEAD
DELIMITER |
CREATE PROCEDURE Lst_Fournis()
BEGIN
SELECT fournis.four_numfou, entcom.ent_numcom 
FROM entcom 
JOIN fournis ON fournis.four_numfou = entcom.four_numfou;
END |

DELIMITER ;

// Afficher la procédure 

CALL Lst_Fournis;

CREATE TRIGGER modif_reservation AFTER INSERT ON reservation
    FOR EACH ROW
    BEGIN
        DECLARE resa INT;
        SET resa = NEW.res_id;
        IF UPDATE ON resa THEN
            SIGNAL SQLSTATE '40000' SET MESSAGE_TEXT = 'Un problème est survenu. Règle de gestion altitude !';
        END IF;
END;


-- 3ème Trigger

DELIMITER |
CREATE TRIGGER insert_reservation2 BEFORE INSERT ON reservation
    FOR EACH ROW
    BEGIN
        DECLARE limite DOUBLE;
                
            SELECT COUNT(res_id) INTO limite FROM reservation where res_cli_id = NEW.res_cli_id;
            IF 3 >= limite
             THEN
            SIGNAL SQLSTATE '40000' SET MESSAGE_TEXT = 'Vous ne pouvez pas effectuer plus de 3 réservations!';
            END IF;
   END;

-- 4ème Trigger

DELIMITER |
CREATE TRIGGER insert_chambre BEFORE INSERT ON chambre
    FOR EACH ROW
    BEGIN
    DECLARE tot DOUBLE;
        SELECT DISTINCT cha_hot_id, SUM(cha_capacite) INTO tot
        FROM chambre;
        IF tot > 50
        THEN 
         SIGNAL SQLSTATE '40000' SET MESSAGE_TEXT = 'Capacité trop grande !';
            END IF;
   END;


INSERT INTO chambre 
(cha_hot_id, cha_capacite)
VALUES
(7, 10);

-- Cas pratique 

INSERT INTO commande
(id, id_client, date_commande, remise)
VALUES
(1, 2, 2018-09-01 00:00:00, 10)

DELIMITER |
CREATE TRIGGER stock_alerte AFTER UPDATE ON produit
    FOR EACH ROW
    BEGIN
        DECLARE pro_c INT;
        DECLARE ale DOUBLE;
        SET pro_c = NEW.pro_codart;
        SET ale = (SELECT pro_stkale-pro_stkphy FROM produit WHERE pro_codart = pro_c);
        	IF ale > 0 
				THEN
        		INSERT articles_a_commander SET art_qte=ale WHERE pro_codart=pro_c;
		  	END IF;
=======
DELIMITER |
CREATE PROCEDURE Lst_Fournis()
BEGIN
SELECT fournis.four_numfou, entcom.ent_numcom 
FROM entcom 
JOIN fournis ON fournis.four_numfou = entcom.four_numfou;
END |

DELIMITER ;

// Afficher la procédure 

CALL Lst_Fournis;

CREATE TRIGGER modif_reservation AFTER INSERT ON reservation
    FOR EACH ROW
    BEGIN
        DECLARE resa INT;
        SET resa = NEW.res_id;
        IF UPDATE ON resa THEN
            SIGNAL SQLSTATE '40000' SET MESSAGE_TEXT = 'Un problème est survenu. Règle de gestion altitude !';
        END IF;
END;


-- 3ème Trigger

DELIMITER |
CREATE TRIGGER insert_reservation2 BEFORE INSERT ON reservation
    FOR EACH ROW
    BEGIN
        DECLARE limite DOUBLE;
                
            SELECT COUNT(res_id) INTO limite FROM reservation where res_cli_id = NEW.res_cli_id;
            IF 3 >= limite
             THEN
            SIGNAL SQLSTATE '40000' SET MESSAGE_TEXT = 'Vous ne pouvez pas effectuer plus de 3 réservations!';
            END IF;
   END;

-- 4ème Trigger

DELIMITER |
CREATE TRIGGER insert_chambre BEFORE INSERT ON chambre
    FOR EACH ROW
    BEGIN
    DECLARE tot DOUBLE;
        SELECT DISTINCT cha_hot_id, SUM(cha_capacite) INTO tot
        FROM chambre;
        IF tot > 50
        THEN 
         SIGNAL SQLSTATE '40000' SET MESSAGE_TEXT = 'Capacité trop grande !';
            END IF;
   END;


INSERT INTO chambre 
(cha_hot_id, cha_capacite)
VALUES
(7, 10);

-- Cas pratique 

INSERT INTO commande
(id, id_client, date_commande, remise)
VALUES
(1, 2, 2018-09-01 00:00:00, 10)

DELIMITER |
CREATE TRIGGER stock_alerte AFTER UPDATE ON produit
    FOR EACH ROW
    BEGIN
        DECLARE pro_c INT;
        DECLARE ale DOUBLE;
        SET pro_c = NEW.pro_codart;
        SET ale = (SELECT pro_stkale-pro_stkphy FROM produit WHERE pro_codart = pro_c);
        	IF ale > 0 
				THEN
        		INSERT articles_a_commander SET art_qte=ale WHERE pro_codart=pro_c;
		  	END IF;
>>>>>>> 8de4bf3af4abf5035fa88a58f5e6a28bb90b1647
END;
>>>>>>> ded62aaa6216918da4010a9094daf470780de1ef
