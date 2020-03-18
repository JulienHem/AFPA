DROP DATABASE IF EXISTS Reservation;

CREATE DATABASE Reservation;

USE Reservation;

CREATE TABLE Client (
    adresse_client varchar (50) NULL,
    nom_client varchar (50) NULL,
    prenom_client varchar (50) NULL,
    num_client INT AUTO_INCREMENT NOT NULL
    ,CONSTRAINT client_PK PRIMARY KEY(num_client)
);

CREATE TABLE Reservation (
    num_chambre INT NOT NULL AUTO_INCREMENT,
    num_client INT NOT NULL,
    date_debut INT NULL,
    date_fin INT NULL,
    date_reservation INT NULL,
    montant_arrhes INT NULL,
    prix_total INT NULL
    ,CONSTRAINT Reservation_PK PRIMARY KEY(num_chambre, num_client)
);

CREATE TABLE Chambre (
    capacite_chambre INT NULL,
    degre_confort INT NULL,
    exposition INT NULL,
    type_chambre INT NULL,
    num_chambre INT NOT NULL AUTO_INCREMENT ,
    num_hotel INT NULL
    ,CONSTRAINT Chambre_PK PRIMARY KEY(num_chambre)
);

CREATE TABLE Hotel (
    capacite_hotel INT NULL,
    categorie_hotel INT NULL,
    nom_hotel varchar (50) NULL,
    adresse_hotel varchar (50) NULL,
    num_hotel INT NOT NULL AUTO_INCREMENT,
    num_station INT NULL
    ,CONSTRAINT Hotel_PK PRIMARY KEY(num_hotel)

);

CREATE TABLE Station (
    num_station INT NOT NULL AUTO_INCREMENT,
    nom_station INT NULL
    ,CONSTRAINT Station_PK PRIMARY KEY(num_station)
);