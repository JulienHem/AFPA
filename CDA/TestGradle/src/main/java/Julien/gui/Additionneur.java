package Julien.gui;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TextArea;

public class Additionneur {
    @FXML
    private TextArea textarea1;
    @FXML
    private Button zero;
    @FXML
    private Button one;
    @FXML
    private Button two;
    @FXML
    private Button three;
    @FXML
    private Button four;
    @FXML
    private Button five;
    @FXML
    private Button six;
    @FXML
    private Button seven;
    @FXML
    private Button eight;
    @FXML
    private Button nine;
    @FXML
    private Button empty_button1;
    @FXML
    private Button calculate_button1;
    @FXML
    private int result;


    public void empty(ActionEvent actionEvent) {

        textarea1.clear();
        result = 0;

    }

    public void calculate(ActionEvent actionEvent) {

        textarea1.appendText("=" + result);

    }

    public void numzero(ActionEvent actionEvent) {

        textarea1.appendText("+" + 0);
        result += 0;

    }

    public void numone(ActionEvent actionEvent) {

        textarea1.appendText("+" + 1);
        result += 1;


    }

    public void numtwo(ActionEvent actionEvent) {

        textarea1.appendText("+" + 2);
        result += 2;


    }

    public void numthree(ActionEvent actionEvent) {

        textarea1.appendText("+" + 3);
        result += 3;

    }

    public void numfour(ActionEvent actionEvent) {

        textarea1.appendText("+" + 4);
        result += 4;


    }

    public void numfive(ActionEvent actionEvent) {

        textarea1.appendText("+" + 5);
        result += 5;

    }

    public void numsix(ActionEvent actionEvent) {

        textarea1.appendText("+" + 6);
        result +=6;


    }

    public void numseven(ActionEvent actionEvent) {

        textarea1.appendText("+" + 7 );
        result += 7;


    }

    public void numeight(ActionEvent actionEvent) {

        textarea1.appendText("+" + 8 );
        result += 8;


    }

    public void numnine(ActionEvent actionEvent) {

        textarea1.appendText("+" + 9);
        result += 9;


    }
}
