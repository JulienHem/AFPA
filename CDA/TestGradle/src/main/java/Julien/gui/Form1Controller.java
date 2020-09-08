package Julien.gui;

import javafx.fxml.FXML;
import javafx.event.ActionEvent;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;


public class Form1Controller {

    @FXML
    private TextField textfield1;
    @FXML
    private Button bouton1;
    @FXML
    private Label label1;


    public void button_click1(ActionEvent actionEvent) {


        label1.setText("Bonjour " + textfield1.getCharacters());

    }
}
