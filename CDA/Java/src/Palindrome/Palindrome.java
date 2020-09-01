package Palindrome;

import java.util.Scanner;

public class Palindrome {

    public static void toDiviseur() {

        String testedstring, reverse = "";
        Scanner clavier = new Scanner(System.in);
        int i;
        int length;

        System.out.println("Entrez un mot ou en phrase: ");
        testedstring = clavier.nextLine() ;

        //Convertir en minuscules
        testedstring = testedstring.toLowerCase();

        //Soustraire tous caractères spéciaux
        testedstring = testedstring.replaceAll("\\s", "");
        testedstring = testedstring.replaceAll("-", "");
        testedstring = testedstring.replaceAll("[.]", "");
        testedstring = testedstring.replaceAll(",", "");
        testedstring = testedstring.replaceAll(";", "");
        testedstring = testedstring.replaceAll("'", "");

        length = testedstring.length();

        for (i = length - 1 ; i >= 0 ; i--)
            reverse = reverse + testedstring.charAt(i);

        System.out.println("Valeure insérée " + testedstring);
        System.out.println("Retourné " + reverse);

        //Comparaison objet vs objet spécifié
        if (testedstring.equals(reverse))
        {
            System.out.println("Votre saisie est un palindrome");
        }
        else
        {
            System.out.println("Ceci n'est pas un palindrome");
        }
    }
}