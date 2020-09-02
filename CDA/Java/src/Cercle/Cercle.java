package Cercle;


public class Cercle {

    private double rayon;
    private double PI = 3.1416;


    public double calculSurface() {

        double surface;

        surface = Math.pow(rayon, 2) * PI;
        System.out.println("La surface est de : " + surface);
        return surface;

    }

    public double calculCirconferences() {

        double circ;

        circ = 2 * PI * rayon;
        System.out.println("La circonference est de : " + circ);
        return circ;

    }

    public double getRayon() {
        return rayon;
    }

    public void setRayon(double rayon) {
        this.rayon = rayon;
    }
}

