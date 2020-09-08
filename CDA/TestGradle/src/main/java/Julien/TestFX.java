package Julien;

import javafx.application.Application;
import javafx.stage.Stage;

public class TestFX extends Application {

    public TestFX() {
        System.out.println("constructeur ...");
    }

    @Override
    public void start(Stage primaryStage) throws Exception {

    }

    public static void main(String[] args) {
        System.out.println("main ...");
        Application.launch(args);
    }

    @Override
    public void init() throws Exception {
        System.out.println("init ...");
    }


}
