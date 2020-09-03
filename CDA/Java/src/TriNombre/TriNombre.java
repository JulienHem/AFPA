package TriNombre;

import java.util.Arrays;
import java.util.Scanner;


public class TriNombre {

    //    Longueur du tableau déjà défini
    public TriNombre(int length) {

        int[] intArray = new int[length];
        saisie(intArray);

    }

//    On définit la longueur du tableau

    public TriNombre() {

        Scanner scan = new Scanner(System.in);
        System.out.println("Veuillez saisir une longueur");
        int[] intArray = new int[scan.nextInt()];
        saisie(intArray);


    }

    public void saisie(int[] intArray) {
        int x;
        Scanner scan = new Scanner(System.in);

        for (x = 0; x < intArray.length; x++) {
            System.out.println("Remplissez le tableau");
            intArray[x] = scan.nextInt();
        }

        tri(intArray);
        affiche(intArray);

    }

    public void tri(int[] intArray) {
        Arrays.sort(intArray);

    }

    public void affiche(int[] intArray) {

        System.out.println(Arrays.toString(intArray));

    }

}
