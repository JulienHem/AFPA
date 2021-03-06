import ASCII.ASCII;
import Cercle.DesCercles;
import Client.Client;
import Diviseur.Diviseur;
import ObjCercles.Cercles;
import Palindrome.Palindrome;
import SecEnHeures.SecEnHeures;
import Température.Température;
import TriNombre.TriNombre;
import Triangle.Triangle;
import Valeurs.Valeurs;

import java.util.Scanner;


public class index {


    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        String menu;
        boolean toggle = true;
        text();


        while (toggle) {
            System.out.println("0 - Pour quitter le programme. ");
            System.out.println("1 - Pour relancer le menu. ");

            menu = scan.nextLine();

            switch (menu) {
                case "0" -> toggle = false;
                case "2" -> ASCII.toASCII();
                case "3" -> Cercles.toCercles();
                case "4" -> Diviseur.toDiviseur();
                case "5" -> Palindrome.toDiviseur();
                case "6" -> SecEnHeures.toSecEnHeures();
                case "7" -> Température.toTemperature();
                case "8" -> Triangle.toTriangle();
                case "9" -> Valeurs.toValeurs();
                case "10" -> DesCercles.toRayon();
                case "11" -> {
                    new TriNombre(5);
                    new TriNombre();
                }
                case "12" -> {
                    Client[] client = new Client[4];
                    Client[] client2 = new Client[3];
                    Client[] client3 = new Client[3];
                    Client[] client4 = new Client[3];
                    client[0] = new Client("Paul", "Weller", "Baker Street", "Londre");
                    client2[0] = new Client("White", "Jack", "", "Detroit");
                    client3[0] = new Client("Claypool", "Les", "", "San Fransisco");
                    client4[0] = new Client("Thunders", "Johnny", "", "New York");
                    System.out.println(client[0].toString());
                    System.out.println(client2[0].toString());
                    System.out.println(client3[0].toString());
                    System.out.println(client4[0].toString());


                }
                default -> System.out.println("Cet exercice n'existe pas");

            }
        }
    }

    public static void text() {

        System.out.println("Veuillez saisir l'exercice souhaité, 0 pour quitter");
        System.out.println("0 - Pour quitter le programme. ");
        System.out.println("1 - Pour relancer le menu. ");
        System.out.println("2 - Écrire un programme qui saisit un code Unicode en décimal et affiche le caractère correspondant. ");
        System.out.println("3 - Modifiez le programme précédent pour calculer (et afficher) la surface du cercle");
        System.out.println("4 - Modifier le programme précédent pour effectuer une division. ");
        System.out.println("5 - Ecriez un programme pour reconnaître un palindrome");
        System.out.println("6 - II s'agit pour un nombre de secondes entré au clavier d'en déduire, son expression en nombre d'heures de minutes et de secondes.");
        System.out.println("7 - En utilisant la formule C = (5/9)(F-32) écrire un programme qui lit une température exprimée en degrés Fahrenheit et affiche sa valeur en degrés Celsius.");
        System.out.println("8 - Écrire un programme qui affiche un triangle isocèle formé d'étoiles.");
        System.out.println("9 - Écrire un programme qui échange les valeurs de nX et nY.");
        System.out.println("10 - Premier exercice des objets sur les cercles. ");
        System.out.println("11 - Tri d'un tableau contenant des nombres ");
        System.out.println("12 - Implémenter une classe client, possédant : Nom, Prenom, Adresse, Ville ");


    }
}
