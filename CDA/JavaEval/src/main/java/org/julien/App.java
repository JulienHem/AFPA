package org.julien;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;
import org.julien.DAO.ClientDAO;
import org.julien.gui.Client;

public class App extends Application {

    public App() {

        Client c = new Client();
        c.setCli_nom("Lebowski");
        c.setCli_prenom("Jeffrey");
        c.setCli_ville("Los Angeles");

        ClientDAO repo = new ClientDAO();


        repo.insert(c);
    }

    @Override
    public void start(Stage primaryStage) throws Exception {
        // 1
        Parent root = FXMLLoader.load(getClass().getResource("/julien/gui/Client.fxml"));

        // 2

        Scene scene = new Scene(root);

        //3

        primaryStage.setScene(scene);

        //4
        primaryStage.show();



    }


    public static void main(String[] args) {
        Application.launch(args);
    }
}

