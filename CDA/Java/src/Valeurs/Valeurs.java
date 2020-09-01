package Valeurs;

import java.util.Scanner;

public class Valeurs {

    public static void toValeurs() {

        int nX ;
        int nY ;
        int nS ;


        Scanner lectureclavier = new Scanner(System.in) ;
        System.out.println("nX est égal à ");
        nX = lectureclavier.nextInt();
        System.out.println("nY est égal à ");
        nY = lectureclavier.nextInt();
        nS = nX;
        nX = nY;
        nY = nS;
        System.out.println("nX = " + nX + "" + "nY = " + nY);

        lectureclavier.next() ;



    }

}