DROP DATABASE IF EXISTS Reservation;

CREATE DATABASE Reservation;

USE Reservation;

CREATE TABLE Client (
    cli_num_client INT AUTO_INCREMENT NOT NULL,
    cli_adresse_client varchar (50) NULL,
    cli_nom_client varchar (50) NULL,
    cli_prenom_client varchar (50) NULL
    ,CONSTRAINT Client_PK PRIMARY KEY (cli_num_client)
);

CREATE TABLE Station (
    sta_num_station INT NOT NULL AUTO_INCREMENT,
    sta_nom_station INT NULL
    ,CONSTRAINT Station_PK PRIMARY KEY(sta_num_station)
);

CREATE TABLE Hotel (
    hot_num_hotel INT NOT NULL AUTO_INCREMENT,
    sta_num_station INT NULL,
    hot_capacite_hotel INT NULL,
    hot_categorie_hotel INT NULL,
    hot_nom_hotel varchar (50) NULL,
    hot_adresse_hotel varchar (50) NULL
    ,CONSTRAINT Hotel_PK PRIMARY KEY(hot_num_hotel)
    ,FOREIGN KEY (sta_num_station) REFERENCES Station(sta_num_station)
);


CREATE TABLE Chambre (
    cha_num_chambre INT NOT NULL AUTO_INCREMENT,
    hot_num_hotel INT NULL,
    cha_capacite_chambre INT NULL,
    cha_degre_confort INT NULL,
    cha_exposition INT NULL,
    cha_type_chambre INT NULL
    ,CONSTRAINT Chambre_PK PRIMARY KEY(cha_num_chambre)
    ,FOREIGN KEY (hot_num_hotel) REFERENCES Hotel(hot_num_hotel)
);

CREATE TABLE Reservation (
    cha_num_chambre INT NOT NULL AUTO_INCREMENT,
    cli_num_client INT NOT NULL,
    res_date_debut INT NULL,
    res_date_fin INT NULL,
    res_date_reservation INT NULL,
    res_montant_arrhes INT NULL,
    res_prix_total INT NULL,
    FOREIGN KEY (cli_num_client) REFERENCES Client(cli_num_client),
    FOREIGN KEY (cha_num_chambre) REFERENCES Chambre(cha_num_chambre)
);