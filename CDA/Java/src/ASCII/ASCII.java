package ASCII;

import java.util.Scanner;


public class ASCII {

    public static void toASCII() {

        int ch;
        char ascii;

        Scanner lectureclavier = new Scanner(System.in) ;
        System.out.println("Entrez le code Unicode: ");
        ch = lectureclavier.nextInt();
        ascii = (char)ch;
        System.out.println("La valeur ASCII de " + ch + " est: " + ascii);
        lectureclavier.next() ;
    }

}