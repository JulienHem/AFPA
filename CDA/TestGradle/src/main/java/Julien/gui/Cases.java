package Julien.gui;

import javafx.event.ActionEvent;
import javafx.scene.control.*;

public class Cases {
    public TextField textarea;
    public CheckBox background_color;
    public CheckBox text_color;
    public CheckBox casse1;
    public RadioButton red_background;
    public RadioButton green_background;
    public RadioButton blue_background;
    public RadioButton red_text;
    public RadioButton white_text;
    public RadioButton black_text;
    public RadioButton minu;
    public RadioButton maju;
    public Label label;
    public TitledPane choice_box;

    public void activate_background(ActionEvent actionEvent) {

    }

    public void activate_textcolor(ActionEvent actionEvent) {
    }

    public void activate_casse(ActionEvent actionEvent) {
    }

    public void put_red_bg(ActionEvent actionEvent) {
        if(green_background.isSelected() || blue_background.isSelected()){
            red_background.setSelected(false);
        }

            label.setStyle("-fx-background-color: red;");


    }

    public void put_green_bg(ActionEvent actionEvent) {
        if(red_background.isSelected() || blue_background.isSelected()){
            green_background.setSelected(false);
        }
        label.setStyle("-fx-background-color: green;");

    }

    public void put_blue_bg(ActionEvent actionEvent) {
        if(green_background.isSelected() || red_background.isSelected()){
            blue_background.setSelected(false);
        }
        label.setStyle("-fx-background-color: blue;");

    }

    public void put_red_text(ActionEvent actionEvent) {
        label.setStyle("-fx-text-fill: red;");


    }

    public void put_white_text(ActionEvent actionEvent) {
        label.setStyle("-fx-text-fill: white;");

    }

    public void put_black_text(ActionEvent actionEvent) {
        label.setStyle("-fx-text-fill: black;");

    }

    public void lowercase(ActionEvent actionEvent) {
    }

    public void uppercase(ActionEvent actionEvent) {
    }

    public void filled(ActionEvent actionEvent) {

        label.setText(textarea.getText());

    }
}
