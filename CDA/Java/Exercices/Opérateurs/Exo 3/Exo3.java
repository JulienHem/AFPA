
import java.util.Scanner;

public class Exo3 {

    public static void main(String[] array) {

        double F;
        double C;

        Scanner lectureclavier = new Scanner(System.in) ;
        System.out.println("Entrez une température Fahrenheit");
        F = lectureclavier.nextDouble();
        C = ((float) 5/9)*(F-32);
        System.out.println("La température en Celsius est de : " + C);
        lectureclavier.next() ;

    }

}