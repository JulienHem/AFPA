package SecEnHeures;

import java.util.Scanner;

public class SecEnHeures {

    public static void toSecEnHeures() {

        int hour;
        int min;
        int sec;

        Scanner lectureclavier = new Scanner(System.in);
        System.out.println("Nombre de secondes en heure");
        sec = lectureclavier.nextInt();
        hour = (sec / 3600);
        min = (sec / 60) - (hour * 60);
        sec = sec  - (hour*3600) - (min*60);
        System.out.println(hour + ":" + min + ":" + sec);
        lectureclavier.next();

    }

}