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
}

let m = new Main();