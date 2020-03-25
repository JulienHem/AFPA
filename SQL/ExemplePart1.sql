-- Rechercher le numéro du département, le nom du département, le nom des employés classés par numéro de département (renommer les tables utilisées). 
SELECT employe.nom, dept.nom FROM employe JOIN dept ON employe.nodep = dept.nodept;

-- Rechercher le nom des employés du département Distribution
SELECT employe.nom, dept.nom FROM employe JOIN dept ON employe.nodep = dept.nodept WHERE dept.nom = "Distribution"

                -- AUTO-JOINTURES

-- Rechercher le nom et le salaire des employés qui gagnent plus que leur patron, et le nom et le salaire de leur patron. 

SELECT u1.noemp, u1.nom, u1.salaire, u2.noemp, u2.nom, u2.salaire FROM employe AS u1 LEFT OUTER JOIN employe AS u2 ON u2.nosup = u1.noemp WHERE u2.salaire > u1.salaire
                
                -- SOUS-REQUETES
                
-- Rechercher le nom et le titre des employés du service 31qui ont un titre que l'on trouve dans le département 32.

SELECT nom, titre, nodep FROM employe WHERE nodep = 31 AND titre IN (SELECT titre FROM employe WHERE nodep=32) 

-- Rechercher le nom, le titre et le salaire des employés qui ont le même titre et le même salaire que Fairant.

SELECT nom, titre, salaire FROM employe WHERE salaire = 13000 AND titre IN (SELECT titre FROM employe WHERE nom = "fairent")

                -- REQUETES EXTERNES 

-- Rechercher le numéro de département, le nom du département, le nom des employés, en affichant aussi les départements dans lesquels il n'y a personne, classés par numéro de département.

SELECT employe.nom, dept.nom, employe.nodep FROM dept LEFT JOIN employe ON dept.nodept = employe.nodep

                -- Chercher le MAX/MIN/AVG

SELECT nom, salaire FROM employe WHERE salaire = (SELECT MAX(salaire) FROM employe)

-- 1.Calculer le nombre d'employés de chaque titre.

SELECT titre, COUNT(noemp) FROM employe GROUP BY titre

-- 2.Calculer la moyenne des salaireset leur somme, par région.

SELECT AVG(salaire) AS moyenne, SUM(salaire) AS somme, dept.noregion FROM employe JOIN dept GROUP BY dept.noregion

                --  CLAUSE HAVING

SELECT nodep, COUNT(*) FROM employe GROUP BY nodep HAVING COUNT(*) > 3

-- 4.Afficher les lettres qui sont l'initialed'au moins trois employés.

SELECT SUBSTR(nom,1,1) AS Initial1, SUBSTR(prenom,1,1) AS Initial2 FROM employe GROUP BY Initial1, Initial2 HAVING (COUNT(Initial1) >= 3 AND COUNT(Initial2) >= 3)
