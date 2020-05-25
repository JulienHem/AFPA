CREATE USER 'user1'@'%' IDENTIFIED BY 'kekos';
CREATE USER 'user2'@'%' IDENTIFIED BY 'kekis';
CREATE USER 'user3'@'%' IDENTIFIED BY 'allo';

GRANT ALL PRIVILEGES ON papyrus.* TO "user1"@"%" IDENTIFIED BY "kekos";
GRANT SELECT ON Papyrus.* TO "user2"@"%" IDENTIFIED BY "kekis";
GRANT SELECT ON Papyrus.Fournis TO "user3"@"%" IDENTIFIED BY "allo";
