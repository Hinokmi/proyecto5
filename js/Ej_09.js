class Lol {
    constructor(partida, personaje, linea, rol) {
        this.partida = partida;
        this.personaje = personaje;
        this.linea = linea;
        this.rol = rol;



    }


    iniciarPartida() {
        console.log("La partida esta iniciada..");
    }

    escogerPersonaje() {
        console.log("Escogiste a: ");
    }

    lineaDejuego() {
        console.log("Vas: ");
    }

    tuRol() {
        console.log("Vas de: ");
    }

}

per = Lol;
let ju1 = new Lol("Clasificatoria","Darius","Bot","OffTank")
ju1.iniciarPartida;