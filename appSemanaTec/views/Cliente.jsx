import SelTienda from "/components/SelTienda.jsx"
import Productos from "/components/Productos.jsx"
import Carrito from "/components/Carrito.jsx"
import FinPedido from "../components/FinPedido"
import data from "/components/data"
import {useState} from "react";

function Cliente(){
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);
    let pedidos = [];

    const handleAdd = (product) =>{
        const existe = cartItems.find(x => x.id === product.id);
        if(existe){
            setCartItems(cartItems.map(x => x.id === product.id ? {...existe, cantidad: existe.cantidad +1} : x))
        }else{
            setCartItems([...cartItems, {...product, cantidad: 1}])
        }
    };

    const handleRemove =(product) =>{
        const existe = cartItems.find((x)=> x.id === product.id);
        if(existe.cantidad === 1){
            setCartItems(cartItems.filter((x => x.id !== product.id)));
        }else{
            setCartItems(cartItems.map(x => x.id === product.id ? {...existe, cantidad: existe.cantidad - 1} : x))
        }

    };

    const handlePedido = () =>{
        console.log(cartItems)
    }

    return (
        <div>
            <SelTienda/>
            <Productos handleAdd = {handleAdd}  products = {products}/>
            <Carrito 
            handleRemove = {handleRemove} 
            handleAdd = {handleAdd} 
            cartItems = {cartItems}/>
            <FinPedido 
            handlePedido = {handlePedido}
            cartItems = {cartItems}
            />
        </div>
)}

export default Cliente