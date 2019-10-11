/* class Persona{
    constructor(nombre){
      this._nombre = nombre;
      this._padre = null;
    }
  
    get nombre(){
      return this._nombre;
    }
    set nombre(valor){
      this._nombre = valor;
    }
  
    get padre(){
      return this._padre;
    }
    set padre(valor){
      this._padre = valor;
    }
  }
  let gente1= new Persona("juanito");
  let gente2= new Persona("pepito");
  
  gente1.padre = gente2;
  gente2.padre = new Persona("Artunito");
  gente1.padre.padre.padre = new Persona("arte");
  
  let bisabuelo = gente1.padre.padre.padre;
  bisabuelo.padre = new Persona("Panfilo");
  
  gente1.padre = gente1.padre.padre;
  console.log(gente1);
  
  let temp=gente1;
  while(temp = null){
    console.log(temp.nombre);
    temp = temp.padre;
}*/