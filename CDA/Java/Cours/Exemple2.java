import java.util.Scanner;

public class Exemple2
{
    final static double PI=3.1416;

    public static void main(String[] args)
    {
        double rayon;
        double perimetre;

        Scanner lectureclavier = new Scanner(System.in) ;
        System.out.println("Entrer le rayon: ");
        rayon = lectureclavier.nextDouble();
        perimetre = 2 * PI * rayon;
        System.out.print("Le périmètre vaut: ");
        System.out.println(perimetre);
        lectureclavier.next() ;
    }
}