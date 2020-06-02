DROP DATABASE IF EXISTS Evaluation;

CREATE DATABASE Evaluation;

USE Evaluation;

CREATE TABLE Client(
cli_num INT AUTO_INCREMENT NOT NULL,
cli_nom varchar(50) NOT NULL,
cli_adresse varchar(50) NOT NULL,
cli_tel varchar(30) NOT NULL,

PRIMARY KEY (cli_num)
);

CREATE INDEX Index1
ON Client (cli_nom);


CREATE TABLE Produit(
pro_num INT AUTO_INCREMENT NOT NULL,
pro_libelle varchar(50) NOT NULL,
pro_description varchar(50) NOT NULL,

PRIMARY KEY (pro_num)
);

CREATE TABLE Commande (
com_num INT AUTO_INCREMENT NOT NULL,
cli_num INT NOT NULL,
com_date datetime(6) NOT NULL,
com_obs varchar(50) NOT NULL,

PRIMARY KEY (com_num),
FOREIGN KEY (cli_num) REFERENCES Client (cli_num)
);

CREATE TABLE est_compose (
com_num INT NOT NULL,
pro_num INT NOT NULL,
est_qte INT NOT NULL,

PRIMARY KEY (com_num, pro_num),
FOREIGN KEY (com_num) REFERENCES Commande (com_num),
FOREIGN KEY (pro_num) REFERENCES Produit (pro_num)
);
