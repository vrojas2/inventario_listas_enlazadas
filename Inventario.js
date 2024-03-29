let     divEliminar = document.querySelector("#noEliminado");

export default class Inventario {
    constructor() {
        this._inicio = null;
        this._ultimo = null;
        this._inventarioString = "";
    }

    get inventarioString() {
        return this._inventarioString;
    }

    agregarArticulo(articulo) {
        console.log(articulo);
        if (this.comprobarArticuloRegistrado(articulo.codigo, this._inicio) == -1) {
            if (this._inicio === null) {
                this._inicio = articulo;
            } else if (this._ultimo === null) {
                this._inicio.siguiente = articulo;
                this._ultimo = articulo;
            } else {
                this._ultimo.siguiente = articulo;
                this._ultimo = articulo;
            }
        }
    }

    imprimirInventario() {
        this._inventarioString = "";
        this.obtenerInventarioString(this._inicio);
    }

    obtenerInventarioString(inicio) {
        if (inicio != null) {
            this._inventarioString += inicio.toString() + "<br>";
            if (inicio.siguiente != null) {
                this.obtenerInventarioString(inicio.siguiente);
            }
        }
    }

    imprimirInventarioInvertido() {
        this._inventarioString = "";
        this.obtenerInventarioInvertidoString(this._inicio);
    }

    obtenerInventarioInvertidoString(inicio) {
        if (inicio != null) {
            if (inicio.siguiente != null) {
                this.obtenerInventarioInvertidoString(inicio.siguiente);
            }
            this._inventarioString += inicio.toString() + "<br>";
        }
    }

    comprobarArticuloRegistrado(codigo, inicio) {
        while (inicio != null) {
            if (inicio.codigo == codigo) {
                return inicio;
            }
            inicio = inicio.siguiente;
        }
        return -1;
    }

    busquedaConsulta(codigo) {
        let articulo = this.comprobarArticuloRegistrado(codigo, this._inicio);
        if (articulo == -1) {
            return "No se encontro";
        } else {
            return articulo.toString();
        }
    }

    eliminarArticulo(codigo) {
        if (this._inicio.codigo == codigo) {
            this._inicio = this._inicio.siguiente;
        } else {
            while (this._inicio.siguiente != null) {
                if (this._inicio.siguiente.codigo == codigo) {
                    return this._inicio;
                }
                this._inicio = this._inicio.siguiente;
            }
            let articulo = -1;
            if (articulo == -1) {
                divEliminar.innerHTML = "Codigo no encontrado";
            } else {
                if(articulo.siguiente.codigo == this._ultimo.codigo) {
                    this._ultimo = articulo;
                }
                articulo.siguiente = articulo.siguiente.siguiente;
            }
        }
    }
}