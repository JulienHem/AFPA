-- Afficher la liste des hôtels avec leur station
CREATE VIEW
    v_hotel_station
AS
SELECT
    hot_nom,sta_nom
FROM
    hotel
        JOIN
    station
    ON
            station.sta_id=hotel.hot_sta_id


-- Afficher la liste des chambres et leur hôtel
CREATE VIEW
    v_chambre_hotel
AS
SELECT
    cha_numero,hot_nom
FROM
    chambre
        JOIN
    hotel
    ON
            chambre.cha_hot_id=hotel.hot_id


-- Afficher la liste des réservations avec le nom des clients
CREATE VIEW
    v_reservation_nom
AS
SELECT
    res_id,cli_nom
FROM
    reservation
        JOIN
    client
    ON
            client.cli_id=reservation.res_cli_id


-- Afficher la liste des chambres avec le nom de l’hôtel et le nom de la station
CREATE VIEW
    v_chambre_hotel_sta
AS
SELECT
    cha_numero,hot_nom,sta_nom
FROM
    chambre
        JOIN
    hotel
    ON
            chambre.cha_hot_id = hotel.hot_id
        JOIN
    station
    ON
            station.sta_id = hotel.hot_sta_id
GROUP BY
    chambre.cha_numero


-- Afficher les réservations avec le nom du client et le nom de l’hôtel
CREATE VIEW
    v_reservation_client_hotel
AS
SELECT
    client.cli_nom, reservation.res_id, hotel.hot_nom
FROM
    client
        JOIN
    reservation
    ON
            client.cli_id=reservation.res_cli_id
        JOIN
    chambre
    ON
            reservation.res_cha_id=chambre.cha_id
        JOIN
    hotel
    ON
            chambre.cha_hot_id=hotel.hot_id
GROUP BY
    reservation.res_id