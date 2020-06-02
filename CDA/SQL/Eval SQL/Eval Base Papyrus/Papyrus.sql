<<<<<<< HEAD:CDA/SQL/Eval SQL/Eval Base Papyrus/Papyrus.sql
=======
<<<<<<< HEAD
>>>>>>> ded62aaa6216918da4010a9094daf470780de1ef:CDA/SQL/Eval SQL/Papyrus.sql
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
four_numfou varchar(25) NOT NULL,
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
ent_obscom varchar (50) NULL,
ent_datcom DATETIME (6) NOT NULL,
four_numfou varchar(25) NOT NULL,
PRIMARY KEY (ent_numcom),
FOREIGN KEY (four_numfou) REFERENCES Fournis (four_numfou)
);

CREATE INDEX Index1
ON Entcom (four_numfou);

CREATE TABLE Ligcom (
<<<<<<< HEAD:CDA/SQL/Eval SQL/Eval Base Papyrus/Papyrus.sql
ent_numcom INT NOT NULL AUTO_INCREMENT,
=======
ent_numcom INT NOT NULL,
pro_codart CHAR (4) NOT NULL,
lig_numlig TINYINT NOT NULL,
lig_qtecde INT NOT NULL,
lig_priuni DECIMAL (9, 2) NOT NULL,
lig_qteliv int NULL,
lig_derliv DATETIME NOT NULL,
PRIMARY KEY (ent_numcom, lig_numlig),
FOREIGN KEY (ent_numcom) REFERENCES Entcom (ent_numcom),
FOREIGN KEY (pro_codart) REFERENCES Produit (pro_codart)
);


CREATE TABLE Vente (
pro_codart CHAR (4) NOT NULL,
four_numfou varchar(25) NOT NULL,
ven_delliv SMALLINT NOT NULL,
ven_qte1 int NOT NULL,
ven_prix1 decimal (9, 2) NOT NULL,
ven_qte2 int NULL,
ven_prix2 decimal (9, 2) NULL,
ven_qte3 int NULL,
ven_prix3 decimal (9, 2) NULL,


FOREIGN KEY (four_numfou) REFERENCES Fournis (four_numfou),
FOREIGN KEY (pro_codart) REFERENCES Produit (pro_codart)
=======
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
four_numfou varchar(25) NOT NULL,
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
ent_obscom varchar (50) NULL,
ent_datcom DATETIME (6) NOT NULL,
four_numfou varchar(25) NOT NULL,
PRIMARY KEY (ent_numcom),
FOREIGN KEY (four_numfou) REFERENCES Fournis (four_numfou)
);

CREATE INDEX Index1
ON Entcom (four_numfou);

CREATE TABLE Ligcom (
ent_numcom INT NOT NULL,
>>>>>>> ded62aaa6216918da4010a9094daf470780de1ef:CDA/SQL/Eval SQL/Papyrus.sql
pro_codart CHAR (4) NOT NULL,
lig_numlig TINYINT NOT NULL,
lig_qtecde INT NOT NULL,
lig_priuni DECIMAL (9, 2) NOT NULL,
lig_qteliv int NULL,
lig_derliv DATETIME NOT NULL,
PRIMARY KEY (ent_numcom, lig_numlig),
FOREIGN KEY (ent_numcom) REFERENCES Entcom (ent_numcom),
FOREIGN KEY (pro_codart) REFERENCES Produit (pro_codart)
);


CREATE TABLE Vente (
pro_codart CHAR (4) NOT NULL,
four_numfou varchar(25) NOT NULL,
ven_delliv SMALLINT NOT NULL,
ven_qte1 int NOT NULL,
ven_prix1 decimal (9, 2) NOT NULL,
ven_qte2 int NULL,
ven_prix2 decimal (9, 2) NULL,
ven_qte3 int NULL,
ven_prix3 decimal (9, 2) NULL,


FOREIGN KEY (four_numfou) REFERENCES Fournis (four_numfou),
FOREIGN KEY (pro_codart) REFERENCES Produit (pro_codart)
<<<<<<< HEAD:CDA/SQL/Eval SQL/Eval Base Papyrus/Papyrus.sql
=======
>>>>>>> 8de4bf3af4abf5035fa88a58f5e6a28bb90b1647
>>>>>>> ded62aaa6216918da4010a9094daf470780de1ef:CDA/SQL/Eval SQL/Papyrus.sql
);