import java.util.Scanner;

public class Exemple1
{
    public static void main( String args[] )
    {
        Scanner lectureClavier = new Scanner(System.in) ;
        int n ;
        System.out.println("entrez un entier" ) ;
        n = lectureClavier.nextInt() ;
        System.out.println(n) ;
        byte nOctet ;
        System.out.println("entrez un byte" ) ;
        nOctet = lectureClavier.nextByte() ;
        System.out.println(nOctet) ;
        System.out.println("c’est fini. Tapez <ret>" ) ;
        lectureClavier.next() ;
    }
}