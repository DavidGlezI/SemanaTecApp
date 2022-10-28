import Cliente from "./Cliente";
import PedidoListo from "./PedidoListo";
import Vendedor from "./Vendedor";



let path = {
    "/":first,
    "/Cliente":Cliente,
    "/Vendedor":Vendedor,
    "/PedidoListo":PedidoListo,
}

function redirect(){

}

function first(){
    return (
        <div>
            <div className="container">
                <div className='header'>
                    NOMBRE
                </div>
                <div className='buttonClient'>
                    <button onClick={"location.href='/'"}>Cliente</button>
                </div>
                <div className='buttonVendor'>
                    <button>Vendedor</button>
                </div>
            </div>
        </div>
    )
}

function Front(){

   if(!path[window.location.pathname]){
    return <div>Page not found LOKO</div>
   }
    return path[window.location.pathname]()
}

export default Front


/*


*/