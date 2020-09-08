package Julien;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class App extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception {
        // 1
        Parent root = FXMLLoader.load(getClass().getResource("/julien/gui/cases.fxml"));

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
