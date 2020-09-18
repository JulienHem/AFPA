package com.jeremy.GUI;

import javafx.event.ActionEvent;
import javafx.scene.control.CheckBox;
import javafx.scene.control.Label;
import javafx.scene.control.RadioButton;
import javafx.scene.control.TextField;

public class CheckboxController {
    public TextField textField;
    public RadioButton red1;
    public RadioButton green;
    public RadioButton blue;
    public RadioButton red2;
    public RadioButton white;
    public RadioButton black;
    public RadioButton minus;
    public RadioButton maxi;
    public Label response;
    public String temp;

    public void changeText(ActionEvent actionEvent) {
        RadioButton rbtn = (RadioButton) actionEvent.getSource();
        if(rbtn == red2) {
            this.temp += "-fx-text-fill: red;";
            this.response.setStyle(this.temp);
        } else if(rbtn == white) {
            this.temp += "-fx-text-fill: white;";
            this.response.setStyle(this.temp);
        } else if(rbtn == black) {
            this.temp += "-fx-text-fill: black;";
            this.response.setStyle(this.temp);
        } else {
            this.response.setStyle(null);
        }
    }

    public void changeBack(ActionEvent actionEvent) {
        RadioButton rbtn = (RadioButton) actionEvent.getSource();
        if(rbtn == red1) {
            this.temp += "-fx-background-color: red;";
            response.setStyle(this.temp);
        } else if(rbtn == green) {
            this.temp += "-fx-background-color: green;";
            response.setStyle(this.temp);
        } else if(rbtn == blue) {
            this.temp += "-fx-background-color: blue;";
            response.setStyle(this.temp);
        } else {
            response.setStyle(null);
        }
    }
}
