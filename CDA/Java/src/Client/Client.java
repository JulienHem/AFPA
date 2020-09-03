package Client;

import java.util.Scanner;

public abstract class Client {

    public String details() {

        return toString();

    }

    public Client() {
        Scanner scan = new Scanner(System.in);
        System.out.println("Veuillez saisir une longueur");
        String[] clientArray = new String[scan.nextInt()];

    }

    public void details(String[] clientArray) {

        int x;
        Scanner scan = new Scanner(System.in);

        for (x = 0; x < clientArray.length; x++) {
            System.out.println("Insérer les informations clients");
            clientArray[x] = scan.nextLine();

        }


    }

}

