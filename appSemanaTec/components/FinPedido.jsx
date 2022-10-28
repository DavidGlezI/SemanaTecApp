import {Link} from "react-router-dom"
import "./styles.css"

function FinPedido(props){
    const {handlePedido} = props;
    return(
        <div className="divBotonFin">
            <Link to="PedidoListo">
            <button className="botonFin" onClick={()=>handlePedido()}>Finalizar pedido y recoger!</button>
            </Link>
        </div>
    )

}

export default FinPedido
