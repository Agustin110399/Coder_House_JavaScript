console.log("Bienvendio a pedidos ya");
console.log("Que es lo que desea?");
let opcion, bandera;


while (opcion != 0) {

    console.log("0: salir");
    console.log("1: Hamburges doble con bacon y papas fritas");
    console.log("2: Lomito completo con papas fritas");
    console.log("3: Sandwich primavera");
    opcion = parseInt(prompt(""));

    switch (opcion) {
        case (0):
            console.log("Gracias por usar nuestro servicio. Que tenga un buen dia!!!");
            break;
        case (1):
            console.log("El pedido cuesta 450$.");
                bandera = String(prompt("Desea continuar? S/N"));
                if(bandera=="s" || bandera =="S"){
                    console.log("Gracias por usar nuestro servicio. El pedido se proceso correctamente y llegara dentro de poco. Que tenga un buen dia!!!");
                }
                if(bandera=="n" || bandera =="N"){
                    console.log("Pedido rechazado.");
                    console.log("Lo invitamos a revizar las demas opciones en caso de querer algo diferente. De no ser asi seleccione 0 para cerrar la aplicacion.");                     
                }
            break;
        case (2):
            console.log("El pedido cuesta 700$.");
                bandera = String(prompt("Desea continuar? S/N"));
                if(bandera=="s" || bandera =="S"){
                    console.log("Gracias por usar nuestro servicio. El pedido se proceso correctamente y llegara dentro de poco. Que tenga un buen dia!!!");
                }
                if(bandera=="n" || bandera =="N"){
                    console.log("Pedido rechazado.");
                    console.log("Lo invitamos a revizar las demas opciones en caso de querer algo diferente. De no ser asi seleccione 0 para cerrar la aplicacion.");
                }
            break;
        case (3):
            console.log("El pedido cuesta 400$.");
                bandera = String(prompt("Desea continuar? S/N"));
                if(bandera=="s" || bandera =="S"){
                    console.log("Gracias por usar nuestro servicio. El pedido se proceso correctamente y llegara dentro de poco. Que tenga un buen dia!!!");
                }
                if(bandera=="n" || bandera =="N"){
                    console.log("Pedido rechazado.");
                    console.log("Lo invitamos a revizar las demas opciones en caso de querer algo diferente. De no ser asi seleccione 0 para cerrar la aplicacion.");
                }
            break;
        default:
            console.log("La opcion ingresada no es valida. Por favor intente otra vez.");
            break
    }


}