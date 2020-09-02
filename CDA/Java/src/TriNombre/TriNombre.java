package TriNombre;

import java.util.Arrays;
import java.util.Scanner;


public class TriNombre {


    private static final int[] numArray = new int[5];
    private static final int i = numArray.length;

    public static void saisie() {

        int x;
        Scanner scan = new Scanner(System.in);

        for (x = 0; x < i; x++) {
            System.out.println("Remplissez le tableau");
            numArray[x] = scan.nextInt();
        }
    }

    public static void tri() {
        Arrays.sort(numArray);
    }

    public static void affiche() {

        System.out.println(Arrays.toString(numArray));

    }


}
