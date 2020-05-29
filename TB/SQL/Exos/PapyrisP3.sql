-- 1 - Quelles sont les commandes du fournisseur 09120

SELECT numfou, numcom 
FROM entcom 
WHERE numfou = 9120

-- 2.Afficher le code des fournisseurs pour lesquels des commandes ont été passées

SELECT codart, numfou 
FROM vente

-- 3.Afficher le nombre de commandes fournisseurs passées, et le nombre de fournisseur concernés.

SELECT COUNT(distinct numfou) AS fournisseur, COUNT(numcom) AS "Quantité par fournisseur"
FROM entcom
GROUP BY numfou

-- 4.Editer les produits ayant un stock inférieur ou égal au stock d'alerte et dont la quantité annuelle est inférieur est inférieure à1000(informations à fournir : n° produit, libelléproduit, stock, stockactuel d'alerte, quantitéannuelle)

SELECT produit.codart, libart, stkphy, stkale, qteann
FROM vente
INNER JOIN produit ON vente.codart = produit.codart
INNER JOIN fournis ON vente.numfou = fournis.numfou 
WHERE produit.codart <= stkale AND qteann < 1000

-- 5.Quels sont les fournisseurs situés dans les départements  75 78 92 77 ?L’affichage (département, nom fournisseur) sera effectué par département décroissant, puis par ordre alphabétique

SELECT posfou, nomfou
FROM fournis
ORDER BY nomfou ASC, posfou DESC

-- 6.Quelles sont les commandes passées au mois de mars et avril?

SELECT ligcom.numcom, derliv
FROM entcom
JOIN ligcom 
WHERE MONTH(derliv)=3 AND 4

-- 7.Quelles sont les commandes du jourqui ont des observations particulières ?(Affichage numéro de commande, date de commande)

SELECT obscom, numcom, NOW() AS date
FROM entcom
WHERE obscom <> ""

-- 8.Lister le total de chaque commande par total décroissant (Affichage numéro de commande et total)

SELECT numcom, (qteliv*priuni) as prixtotal
from ligcom
order BY  prixtotal DESC

-- 9.Lister les commandesdont le total est supérieur à 10000€; on exclura dans le calcul du total les articles commandés en quantité supérieure ou égale à 1000.(Affichage numéro de commande et total)

SELECT numcom, (qteliv*priuni) as prixtotal
from ligcom
WHERE qteliv < 1000
order BY  prixtotal DESC

-- 10.Lister les commandes par nom fournisseur (Afficher le nom du fournisseur, le numéro de commande et la date)

SELECT numcom, datcom, nomfou
FROM entcom
JOIN fournis 

-- 11.Sortir les produits des commandes ayant le mot "urgent' en observation?(Afficher le numéro de commande, le nom du fournisseur, le libellé du produit et le sous total= quantité commandée * Prix unitaire)

SELECT obscom, entcom.numcom, produit.libart, (qteliv*priuni)
FROM entcom
INNER JOIN fournis ON entcom.numfou = fournis.numfou
INNER JOIN ligcom ON ligcom.numcom = entcom.numcom
INNER JOIN produit ON ligcom.codart = produit.codart
HAVING entcom.obscom = "Commande urgente"

-- 12.Coder de 2manières différentes la requête suivante:Lister lenom desfournisseurs susceptibles de livrer au moins un article

-- Première méthode
SELECT fournis.nomfou, SUM(ligcom.qteliv)
FROM ligcom 
JOIN entcom ON ligcom.numcom = entcom.numcom 
JOIN fournis ON entcom.numfou = fournis.numfou
WHERE ligcom.qteliv < ligcom.qtecde
GROUP BY fournis.nomfou, ligcom.qteliv


-- Deuxième méthode

SELECT nomfou FROM fournis WHERE numfou 
	IN 
		(SELECT entcom.numfou FROM entcom WHERE entcom.numcom 
	IN 
		(SELECT ligcom.numcom FROM ligcom WHERE qteliv < qtecde)
		)
    
-- 13.Coder de 2 manières différentes la requête suivante : Lister les commandes (Numéro et date) dont le fournisseur est celui de la commande 70210

-- Première méthode

SELECT DISTINCT datcom, numcom
FROM entcom
WHERE numcom = 70210 

-- Deuxième méthode

SELECT distinct numcom, datcom 
FROM entcom 
where entcom.numcom 
	IN 
		(SELECT ligcom.numcom FROM ligcom where ligcom.numcom = 70210)

-- 14.Dans les articles susceptibles d’être vendus, lister les articles moins chers (basés sur Prix1) que le moins cher des rubans (article dont le premier caractère commence par R). On affichera le libellé de l’article et prix1

SELECT DISTINCT prix1, libart
FROM vente, produit
WHERE libart 
LIKE "r%"
AND prix1 < 120 

-- 15.Editer la liste des fournisseurs susceptibles de livrer les produits dont le stock est inférieur ou égal à 150 % du stock d'alerte. La liste est triée par produit puis fournisseur

-- 19 
SELECT fournis.numfou AS `Fournisseur` , SUM(ligcom.priuni*ligcom.qtecde)*1.2 AS `Chiffre d'affaire`
FROM ligcom
JOIN entcom ON entcom.numcom = ligcom.numcom
JOIN fournis ON entcom.numfou = fournis.numfou
JOIN vente ON vente.numfou = fournis.numfou 
WHERE YEAR(ligcom.derliv) = 2007
GROUP BY `Fournisseur`