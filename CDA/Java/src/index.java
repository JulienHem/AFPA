import ASCII.ASCII;
import Cercle.Cercle;
import Diviseur.Diviseur;
import Palindrome.Palindrome;
import SecEnHeures.SecEnHeures;
import Température.Température;
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
                case "3" -> Cercle.toCercle();
                case "4" -> Diviseur.toDiviseur();
                case "5" -> Palindrome.toDiviseur();
                case "6" -> SecEnHeures.toSecEnHeures();
                case "7" -> Température.toTemperature();
                case "8" -> Triangle.toTriangle();
                case "9" -> Valeurs.toValeurs();
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

    }
}
