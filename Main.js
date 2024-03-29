import Inventario from "./Inventario.js";
import Articulo from "./Articulo.js";

let btnRegistrar = document.querySelector("#registrar"),
    btnConsulta = document.querySelector("#consulta"),
    btnInsertar = document.querySelector("#insertar"),
    divInventario = document.querySelector("#verInventario"),
    divConsulta = document.querySelector("#mostrarConsulta"),
    btnOrdenNormal = document.querySelector("#ordenNormal"),
    btnOrdenInverso = document.querySelector("#ordenInverso"),
    btnEliminar = document.querySelector("#eliminarCodigo");

btnRegistrar.addEventListener("click", () => {
    m.agregarArticuloNuevo();
});

btnInsertar.addEventListener("click", () => {
});

btnConsulta.addEventListener("click", () => {
    m.mostrarConsulta();
});

btnOrdenNormal.addEventListener("click",() => {
    m.mostrarInventario();
});

btnOrdenInverso.addEventListener("click",() => {
    m.mostrarInventarioInvertido();    
});

btnEliminar.addEventListener("click", () => {
   m.eliminarArticuloDeInvetario();
});

class Main {
    constructor() {
        this._inventarioTotal = new Inventario();
    }

    infoInputs() {
        let objNuevoArticulo = {
            codigo: Number (document.querySelector("#codigo").value),
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
        this.mostrarInventario();
    }

    mostrarInventario() {
        this._inventarioTotal.imprimirInventario();
        divInventario.innerHTML = this._inventarioTotal.inventarioString;
    }

    mostrarInventarioInvertido() {
        this._inventarioTotal.imprimirInventarioInvertido();
        divInventario.innerHTML = this._inventarioTotal.inventarioString;
    }

    mostrarConsulta() {
        let codigo = Number(document.querySelector("#codigoConsulta").value);
        divConsulta.innerHTML = this._inventarioTotal.busquedaConsulta(codigo);
    }

    eliminarArticuloDeInvetario() {
        let codigo = document.querySelector("#codigoEliminar").value
        this._inventarioTotal.eliminarArticulo(codigo);
        this.mostrarInventario();
    }
}

let m = new Main();