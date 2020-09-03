package Forme;

public abstract class Forme {

    public float Aire() {

        return 0;

    }

    public class Carre extends Forme {

        private float cote;

        public Carre(float c) {

            cote = c;

        }

        public float Aire() {

            return (float) Math.pow(cote, 2);

        }

    }

    public class Cercle extends Forme {

        private float rayon;

        public Cercle(float r) {

            rayon = r;

        }

        public float Aire() {

            return (float) (Math.PI * Math.pow(rayon, 2));
        }

    }

    public class Triangle extends Forme {

        private float base;
        private float hauteur;

        public Triangle(float b, float h) {

            base = b;
            hauteur = h;

        }

        public float Aire() {

            return (base * hauteur) / 2;
        }
    }


}
