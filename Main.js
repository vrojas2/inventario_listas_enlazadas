import Inventario from "./Inventario.js";
import Articulo from "./Articulo.js";

let btnRegistar = document.querySelector("#registrar"),
    btnConsulta = document.querySelector("#consulta"),
    btnInsertar = document.querySelector("#insertar"),
    divInventario = document.querySelector("#verInventario"),
    divConsulta = document.querySelector("#mostrarConsulta"),
    btnEliminar = document.querySelector("#eliminarCodigo");

btnRegistar.addEventListener("click", () => {
    m.agregarArticuloNuevo();
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
        let objNuevoArticulo = {
            codigo: document.querySelector("#codigo").value,
            nombre: document.querySelector("#nombre").value,
            precio: document.querySelector("#precio").value,
            cantidad: document.querySelector("#cantidad").value,
            descripcion: document.querySelector("#descripcion").value
        }
        return objNuevoArticulo;
    }

    agregarArticuloNuevo() {
        let articulo = new Articulo(this.infoInputs());
        this._inventarioTotal.agregarArticulo(articulo);
    }

}

let m = new Main();
