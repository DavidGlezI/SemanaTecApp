
import { FcLike } from "react-icons/fc";
import "./front.css"
function PedidoListo(){
    return(
        <div className="wrap">
            <h1 className="titulo1">Muchas gracias por tu pedido! <FcLike /></h1>
            <h2 className="titulo2">Podrás recogerlo en 10 min!</h2>
            <div className="tituloToken">Token de pedido: 0230134dfd21</div>
        </div>
    )


}

export default PedidoListo