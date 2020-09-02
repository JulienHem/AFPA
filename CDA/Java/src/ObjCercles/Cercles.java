package ObjCercles;

import java.util.Scanner;

public class Cercles {

    final static double PI = 3.1416;

    public static void toCercles() {
        double rayon;
        double surface;

        Scanner lectureclavier = new Scanner(System.in);
        System.out.println("Entrer la surface: ");
        rayon = lectureclavier.nextDouble();
        surface = Math.pow(rayon, 2) * PI;
        System.out.print("Le surface du cercle est de : ");
        System.out.println(surface);
        lectureclavier.next();
    }
}