import Cliente from "./Cliente";
import PedidoListo from "./PedidoListo";
import Vendedor from "./Vendedor";
import Front from "./Front";
import {Routes,Route, BrowserRouter} from "react-router-dom"




function Routing(){

return <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Front/>}/>
                <Route path="/Cliente" index element={<Cliente/>}/>
                <Route path="/Vendedor" element={<Vendedor/>}/>
                <Route path="/PedidoListo" element={<PedidoListo/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
};

export default Routing