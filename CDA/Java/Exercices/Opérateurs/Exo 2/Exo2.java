import java.util.Scanner;

public class Exo2 {

    public static void main(String[] array) {

        double num1 ;
        double num2 ;
        double result;


        Scanner lectureclavier = new Scanner(System.in) ;
        System.out.println(" Num 1 = ");
        num1 = lectureclavier.nextInt();
        System.out.println("Num 2 = ");
        num2 = lectureclavier.nextInt();
        result = num1 / num2;
        System.out.println(result);
        lectureclavier.next() ;



    }

}