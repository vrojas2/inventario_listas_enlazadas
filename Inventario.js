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

        if(this._inicio == null){
            this._inicio = articulo;
        } else if (this._ultimo == null){
            this._ultimo = articulo;
        } else{
            this._ultimo.siguiente = articulo;
            this._ultimo = articulo;
        }
        
    }
}