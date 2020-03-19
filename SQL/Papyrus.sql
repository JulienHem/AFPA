DROP DATABASE IF EXISTS Papyrus;

CREATE DATABASE Papyrus;

USE Papyrus;

CREATE TABLE Produit (
pro_codart CHAR (4) NOT NULL,
pro_libart varchar (30) NOT NULL,
pro_stkale INT NOT NULL,
pro_stkphy INT NOT NULL,
pro_qteann INT NOT NULL,
pro_unimes char(5) NOT NULL,
PRIMARY KEY (pro_codart)
);

CREATE TABLE Fournis (
four_numfou tinyint NOT NULL,
four_nomfou varchar (25) NOT NULL,
four_ruefou varchar (50) NOT NULL,
four_posfou char (5) NULL,
four_vilfou varchar (30) NOT NULL,
four_confou varchar (15) NOT NULL,
four_satisf TINYINT NULL,
PRIMARY KEY (four_numfou)
);

CREATE TABLE Entcom (
ent_numcom INT NOT NULL AUTO_INCREMENT,
ent_obscom varchar (50) NULL ,
ent_datcom DATETIME NOT NULL,
four_numfou tinyint NULL,
PRIMARY KEY (ent_numcom),
FOREIGN KEY (four_numfou) REFERENCES Fournis (four_numfou)
);
CREATE UNIQUE INDEX Index1
ON Entcom (four_numfou);

CREATE TABLE Ligcom (
lig_numlig TINYINT AUTO_INCREMENT NOT NULL,
lig_qtecde INT NOT NULL,
lig_priuni decimal (9, 2) NOT  NULL,
lig_qteliv int NULL,
lig_derliv DATETIME NOT NULL,
ent_numcom INT NOT NULL,
pro_codart CHAR (4) NOT NULL,
CONSTRAINT Ligcom_PK PRIMARY KEY (lig_numlig),
FOREIGN KEY (ent_numcom) REFERENCES Entcom (ent_numcom),
FOREIGN KEY (pro_codart) REFERENCES Produit (pro_codart)
);

CREATE TABLE Vente (
ven_delliv SMALLINT NOT NULL,
ven_qte1 int NOT NULL,
ven_prix1 decimal (9, 2) NOT NULL,
ven_qte2 int NULL,
ven_prix2 decimal (9, 2) NULL,
ven_qte3 int NULL,
ven_prix3 decimal (9, 2) NULL,
four_numfou tinyint NOT NULL,
pro_codart CHAR (4) NOT NULL,
FOREIGN KEY (four_numfou) REFERENCES Fournis (four_numfou),
FOREIGN KEY (pro_codart) REFERENCES Produit (pro_codart)
);