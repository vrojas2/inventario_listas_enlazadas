export default class Articulo {
    constructor(articulo) {
        this._codigo = articulo.codigo;
        this._nombre = articulo.nombre;
        this._precio = articulo.precio;
        this._cantidad = articulo.cantidad;
        this._descripcion = articulo.descripcion;
        this._siguiente = null;
    }

    get codigo() {
        return this._codigo;
    }

    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(nuevoPrecio) {
        this._precio = nuevoPrecio;
    }

    get cantidad() {
        return this._cantidad;
    }

    set cantidad(nuevoCantidad) {
        this._cantidad = nuevoCantidad;
    }
    
    get descripcion() {
        return this._descripcion;
    }

    set descripcion(nuevoDescripcion) {
        this._descripcion = nuevoDescripcion;
    }

    get siguiente() {
        return this._siguiente;
    }

    set siguiente(nuevoSiguiente) {
        this._siguiente = nuevoSiguiente;
    }

    toString(){        
        return "Codigo del articulo: "+ this._codigo +" Nombre del articulo: "+ this._nombre +" Prescio del articulo: "+
        this._precio +" Cantidad de articulos: "+ this._cantidad +" Descripción de articulos: "+this._descripcion;
    }
}