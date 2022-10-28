import {useState, useEffect} from "react";
import axios from 'axios';

function Vendedor(){
    /*
    const pedidos = [
        { numPedido: "1", pedidoName: 'Pedido Juan', pagado: false },
        { numPedido: "2", pedidoName: 'Pedido David', pagado: false },
        { numPedido: "3", pedidoName: 'Pedido Diego', pagado: false }
    ]
    */
    const [pedidos, setPedidos] = useState(null);
    const [seMuestra, setSeMuesta] = useState(false);

    
    
    useEffect(() => {
        axios.get("https://semanatec-18.herokuapp.com/pedidos").then((response) => {
        setPedidos(response.data.data);
        });
    },[]);

    if (!pedidos) {
        console.log("hola");
        return <div>hola</div>;
    }
    
    let handleClick = () => {
        setSeMuesta(true);
    }

    let pedidosMuestra = (pedidos) =>{
        console.log("loco")
        return(
        pedidos.map((pedido)=> (
            <div key = {pedido._id} className = "listaProductos2">
                <div>{pedido.name}</div>
                <div>{pedido.price}</div>
            </div>
        ))
        )
    }

    return(

        <div className="PContainer">
            <h1 className="pedidosTitulo">Pedidos</h1>
            <button className="verPedido" onClick={handleClick}>Ver Pedidos</button>
            <div className="divListaPedidos">
                {pedidos.map((pedido) => (
                    <div className='pedidoContainer'>
                        <div className='pedido'>
                            <span>Num Pedido: {pedido.id}, Fecha del pedido: {pedido.fecha}</span>
                            <br />
                            <br />
                            {seMuestra && (
                    pedido.productos.map((pedido2) => (
                        <div className='pedidoContainer'>
                            <div className='pedido'>
                                <span>Prodcto ID: {pedido2._id}, Fecha del pedido: {pedido2.price}, Nombre del producto: {pedido2.name}</span>
                            </div>
                        </div>
                    ))
                )}
                <hr></hr>
                        </div>
                    </div>
                ))}
                
            </div>

        </div>
    )
}


export default Vendedor