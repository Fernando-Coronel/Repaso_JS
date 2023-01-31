class Producto{
    static contadorProductos = 0;
    
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio
    }

    toString(){
        return `ID Producto: ${this._idProducto}, Nombre: ${this._nombre}, Precio:$${this._precio} `;
    }
}


class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if( this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto; otro metodo para agregar productos.
        }else{
           console.log("No se pueden agregar más productos");
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for( let producto of this._productos){
            totalVenta += producto.precio//totalVenta = totalVenta + producto.precio
        }

        return totalVenta;
    }
    
    mostrarOrden(){
        let productosOrden = "";
        
        for( let producto of this._productos){
            productosOrden += "\n" + producto.toString() + " ";
        }
        
        console.log(`Orden: ${this._idOrden}, Total:$${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

//Prueba de la clase Producto
let producto1 = new Producto("Pantalon", 300);
console.log(producto1.toString());

let producto2 = new Producto("Camisa", 250);
console.log(producto2.toString());

let producto3 = new Producto("Cinturón", 150);
console.log(producto3.toString());

let producto4 = new Producto("Zapatos", 700);
console.log(producto4.toString());

let producto5 = new Producto("Cartera", 350);
console.log(producto5.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden(); 

let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();

let orden3 = new Orden();
orden3.agregarProducto(producto1);
orden3.agregarProducto(producto2);
orden3.agregarProducto(producto3);
orden3.agregarProducto(producto4);
orden3.agregarProducto(producto5);
orden3.agregarProducto(producto1);//Aqui se muestra la condicion de MAX_PRODUCTOS que ya no se pueden agregar más productos.
orden3.mostrarOrden();




































