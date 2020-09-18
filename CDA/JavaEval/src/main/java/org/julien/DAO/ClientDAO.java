package org.julien.DAO;

import org.julien.gui.Client;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ClientDAO {

    public ClientDAO() {
    }


    public void insert(Client cli) {
        // méthode d'insertion
        try {
            String url = "jdbc:mysql://localhost:3309/hotel?serverTimezone=UTC";
            Connection con = DriverManager.getConnection(url, "root", "");

            PreparedStatement stm = con.prepareStatement("INSERT INTO client (cli_nom, cli_prenom, cli_ville) VALUES (?, ?, ?)");

            stm.setString(1, cli.getCli_nom());
            stm.setString(2, cli.getCli_prenom());
            stm.setString(3, cli.getCli_ville());

            stm.execute();

            stm.close();
            con.close();
            System.out.println("l'insertion s’est bien effectuée");

        } catch (Exception e) {
            System.out.println("Erreur lors de l’insertion 'client'");
            System.out.println(e.getMessage());
        }
    }


    public void update(Client cli) {
        // méthode d'édition
        try {
            String url = "jdbc:mysql://localhost:3309/hotel?serverTimezone=UTC";
            Connection con = DriverManager.getConnection(url, "root", "");

            PreparedStatement stm = con.prepareStatement("UPDATE client SET cli_nom = ?, cli_prenom = ?, cli_ville = ? WHERE cli_id=?");

            stm.setString(1, cli.getCli_nom());
            stm.setString(2, cli.getCli_prenom());
            stm.setString(3, cli.getCli_ville());
            stm.setInt(3, cli.getCli_id());


            stm.execute();

            stm.close();
            con.close();
            System.out.println("L'update s’est bien effectuée");

        } catch (Exception e) {
            System.out.println("Erreur lors de l’insertion 'client'");
            System.out.println(e.getMessage());
        }
    }

    public void delete(Client cli) {
        // méthode de suppression
        try {
            String url = "jdbc:mysql://localhost:3309/hotel?serverTimezone=UTC";
            Connection con = DriverManager.getConnection(url, "root", "");

            PreparedStatement stm = con.prepareStatement("DELETE client WHERE cli_id=?");

            stm.setInt(3, cli.getCli_id());

            stm.execute();

            stm.close();
            con.close();
            System.out.println("La suppression s’est bien effectuée");

        } catch (Exception e) {
            System.out.println("Erreur lors de l’insertion 'client'");
            System.out.println(e.getMessage());
        }
    }

    public void find(int id) {
        // méthode de recherche


    }

    public List<Client> list()     {
        // méthode de création de liste
        List<Client> resultat = new ArrayList<Client>();

        try {

            String url = "jdbc:mysql://localhost:3309/hotel?serverTimezone=UTC";
            Connection con = DriverManager.getConnection(url, "root", "");

            Statement stm = con.createStatement();

            ResultSet result = stm.executeQuery("SELECT * FROM client");

            while (result.next()) {
                Client c = new Client();
                c.setId(result.getInt("cli_id"));
                c.setCli_nom(result.getString("cli_nom"));
                c.setCli_prenom(result.getString("cli_prenom"));
                resultat.add(c);
            }

            stm.close();
            result.close();
            con.close();
        } catch (Exception e) {
            System.out.println("Erreur de lecture 'client'");
            System.out.println(e.getMessage());
        }

        return resultat;

    }

}