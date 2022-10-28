import {useState, useEffect} from "react";
import axios from 'axios';
import  "./stylesV.css";

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
        return console.log("hola");
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
            
            <div className="divListaPedidos">
                {pedidos.map((pedido) => (
                    <div className='pedidoContainer'>
                        <div className='pedido'>
                            <div className="pedido3">
                            <div>Num Pedido: {pedido.id}</div>
                            <div>Fecha del pedido: {pedido.fecha}</div>
                            <br />
                            </div>
                            {seMuestra && (
                    pedido.productos.map((pedido2) => (
                        <div className='pedidoContainer2'>
                            <div className='pedido2'>
                                <div>Prodcto ID: {pedido2._id}</div>
                                <div>Precio del producto: ${pedido2.price}</div>
                                <div>Nombre del producto: <span className="nombreP">{pedido2.name}</span></div>
                            </div>
                        </div>
                    ))
                )}
                <hr></hr>
                        </div>
                    </div>
                ))}
                
            </div>
            <button className="verPedido" onClick={handleClick}>Ver Pedidos</button>
        </div>
    )
}


export default Vendedor