package Cercle;

import java.util.Scanner;

public class DesCercles {


    public static void toRayon() {

        Scanner scan = new Scanner(System.in);
        Cercle c1 = new Cercle();

        System.out.println("Entrer le rayon");
        c1.setRayon(scan.nextDouble());
        c1.calculSurface();
        c1.calculCirconferences();
    }


}
