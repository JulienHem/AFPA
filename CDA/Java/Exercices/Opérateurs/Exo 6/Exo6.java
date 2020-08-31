import java.util.Scanner;


public class Exo6 {

    public static void main(String[] args) {

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