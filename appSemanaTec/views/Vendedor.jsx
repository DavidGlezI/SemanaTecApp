function Vendedor(){
    const pedidos = [
        { numPedido: "1", pedidoName: 'Pedido Juan', pagado: false },
        { numPedido: "2", pedidoName: 'Pedido David', pagado: false },
        { numPedido: "3", pedidoName: 'Pedido Diego', pagado: false }
    ]
    return(

        <div className="PContainer">
            <h1 className="pedidosTitulo">Pedidos</h1>
            <div className="divListaPedidos">
                {pedidos.map((pedido) => (
                    <div className='pedidoContainer'>
                        <div className='pedido'>
                            <span>Num Pedido: {pedido.numPedido}, Nombre del pedido: {pedido.pedidoName}</span>
                            <button className="verPedido">Ver Pedido</button> 
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}


export default Vendedor