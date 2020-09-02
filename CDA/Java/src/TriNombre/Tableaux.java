package TriNombre;

import java.util.Scanner;


public class Tableaux {

    public static void toTableaux() {
        Scanner scan = new Scanner(System.in);

        TriNombre t1 = new TriNombre();

        t1.saisie();
        t1.tri();
        t1.affiche();

    }


}
