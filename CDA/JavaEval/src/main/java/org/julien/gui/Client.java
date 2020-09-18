package org.julien.gui;


public class Client {

    private int cli_id;
    private String cli_nom, cli_prenom, cli_ville;

public Client(){
}

public Client(int cli_id, String cli_nom, String cli_prenom, String cli_ville) {

    this.cli_id = cli_id;
    this.cli_nom = cli_nom;
    this.cli_prenom = cli_prenom;
    this.cli_ville = cli_ville;
}

    public int getCli_id() {
        return cli_id;
    }

    public String getCli_nom() {
        return cli_nom;
    }

    public String getCli_prenom() {
        return cli_prenom;
    }

    public String getCli_ville() {
        return cli_ville;
    }

    public void setCli_id(int cli_id) {
        this.cli_id = cli_id;
    }

    public void setCli_nom(String cli_nom) {
        this.cli_nom = cli_nom;
    }

    public void setCli_prenom(String cli_prenom) {
        this.cli_prenom = cli_prenom;
    }

    public void setCli_ville(String cli_ville) {
        this.cli_ville = cli_ville;
    }

    public void setId(int cli_id) {
    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + cli_id +
                ", nom='" + cli_nom + '\'' +
                ", prenom='" + cli_prenom + '\'' +
                ", ville='" + cli_ville + '\'' +
                '}';
    }

}

