function FinPedido(props){
    const {handlePedido} = props;
    return(
        <div className="divBotonFin">
            <button className="botonFin" onClick={()=>handlePedido()}>Finalizar pedido y recoger!</button>
        </div>
    )

}

export default FinPedido