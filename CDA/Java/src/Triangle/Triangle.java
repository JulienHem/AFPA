package Triangle;

import java.util.Scanner;

public class Triangle {

    public static void toTriangle() {

        int x;
        int y;
        int l;
        int z;


        Scanner lectureclavier = new Scanner(System.in);
        System.out.println("Combien de lignes ?");
        l = lectureclavier.nextInt() - 1;


        for (y = 0; y <= l; y++) {

            for (z = 0; z <= l - y; z++) {
                System.out.print(" ");
            }

            for (x = 0; x <= y * 2; x++) {
                System.out.print("*");
            }
            System.out.println("");

        }

    }
}