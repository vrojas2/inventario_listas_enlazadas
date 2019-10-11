import Inventario from "./Inventario.js";
import Articulo from "./Articulo.js";

let btnRegistrar = document.querySelector("#registrar"),
    btnConsulta = document.querySelector("#consulta"),
    btnInsertar = document.querySelector("#insertar"),
    divInventario = document.querySelector("#verInventario"),
    divConsulta = document.querySelector("#mostrarConsulta"),
    btnEliminar = document.querySelector("#eliminarCodigo");

btnRegistrar.addEventListener("click", () => {
    m.agregarArticuloNuevo(m.infoInputs());
    console.log(m._inventarioTotal);
    
});

btnConsulta.addEventListener("click", () => {

});

btnInsertar.addEventListener("click", () => {
  
});

btnEliminar.addEventListener("click", () => {

});

class Main {
    constructor() {
        this._inventarioTotal = new Inventario();
    }

    infoInputs() {
        let nuevoArticulo = {
            codigo: Number (document.querySelector("#codigo").value),
            nombre: document.querySelector("#nombre").value,
            precio: document.querySelector("#precio").value,
            cantidad: document.querySelector("#cantidad").value,
            descripcion: document.querySelector("#descripcion").value
        }
        let objNuevoArticulo = new Articulo(nuevoArticulo);
        return objNuevoArticulo;
    }

    agregarArticuloNuevo(objNuevoArticulo) {
        this._inventarioTotal.agregarArticulo(objNuevoArticulo);
        this.mostrarInventario();
    }

    mostrarInventario() {
        this._inventarioTotal.imprimirInventario();
        divInventario.innerHTML = this._inventarioTotal.inventarioString;
    }

    /*defaultRegister() {
        let p1 = {
            codigo: 1,
            nombre: "Paleta",
            precio: "4.00",
            cantidad: "30",
            descripcion: "Vainilla"
        }

        let p2 = {
            codigo: 2,
            nombre: "Paleta",
            precio: "4.00",
            cantidad: "30",
            descripcion: "Chocolate"
        }

        let p3 = {
            codigo: 3,
            nombre: "Paleta",
            precio: "4.00",
            cantidad: "30",
            descripcion: "Cajeta"
        }

        this.agregarArticuloNuevo(new Articulo(p1));
        this.agregarArticuloNuevo(new Articulo(p2));
        this.agregarArticuloNuevo(new Articulo(p3));
    }*/

}

let m = new Main();
//  m.defaultRegister();
