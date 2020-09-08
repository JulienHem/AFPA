package Client;

public class Client {

    private String nom;
    private String prenom;
    private String ville;
    private String adresse;


    public Client(String nom, String prenom, String adresse, String ville) {
        this.nom = nom;
        this.prenom = prenom;
        this.ville = ville;
        this.adresse = adresse;

    }


    public Client(String nom, String prenom, String ville) {
        this.nom = nom;
        this.prenom = prenom;
        this.ville = ville;
    }


    @Override
    public String toString() {
        return "Client{" +
                "nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", ville='" + ville + '\'' +
                ", adresse='" + adresse + '\'' +
                '}';
    }
}


