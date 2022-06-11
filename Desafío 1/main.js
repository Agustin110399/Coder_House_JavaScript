class simuladorDeCuotas {

    constructor(precioDelProducto,cantidadCuotas, interes) {

        this.precioDelProducto = precioDelProducto;
        this.cantidadCoutas = cantidadCuotas;
        this.tasaDeInteres = interes;

    }


    calcularCuotas(){

        let interes = this.tasaDeInteres * this.precioDelProducto;
        let precioTotal = interes + this.precioDelProducto;
        let pagosTotales = precioTotal/this.cantidadCoutas;
        
        if(this.interes != 0){
            console.log("Se realizar un pago de: " + precioTotal + " en " + this.cantidadCoutas + " cuotas.\nY cada mes se pagaran: " +pagosTotales);
        } else{
            console.log("Se realizar un pago de: " + this.precioDelProducto + " en " + this.cantidadCoutas + "cuotas.\nY cada mes se pagaran: " +pagosTotales);
        }      

    }

    calcularCostoTotal(){

        let interes = this.tasaDeInteres * this.precioDelProducto;
        let precioTotal = interes + this.precioDelProducto;
        if(this.interes == 0){
            console.log("El costo total del producto mas los intereses es: " + this.precioDelProducto);
        } else{
            console.log("El costo total del producto mas los intereses es: " + precioTotal);
        }        
    }

}

console.log("Bienvendio al simulador de cuotas. \nEste programa simula cuanto costaria un producto si se paga en cuotas.");
let precio, cuotas, interes, opcion;

precio = parseFloat(prompt("Ingrese el precio del producto."));
cuotas = parseInt(prompt("Ingrese la cantidad de cuotas."));
interes = parseInt(prompt("Ingrese el interes del producto. (Sin %)"));

interes = interes * 0.01;

const simulador = new simuladorDeCuotas (precio, cuotas, interes);

while (opcion != 0) {

    console.log("0: salir");
    console.log("1: Calcular costo total del producto mas las cuotas.");
    console.log("2: Mostrar cuanto tendre que pagar cada mes.");
    opcion = parseInt(prompt(""));

    switch (opcion) {
        case (0):
            console.log("Gracias por usar nuestro servicio. Que tenga un buen dia!!!");
            break;
        case (1):
            console.log(simulador.calcularCostoTotal());
            break;
        case (2):
            console.log(simulador.calcularCuotas());
            break;
        default:
            console.log("La opcion ingresada no es valida. Por favor intente otra vez.");
            break
    }


}