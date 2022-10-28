import SelTienda from "/components/SelTienda.jsx"
import Productos from "/components/Productos.jsx"
import Carrito from "/components/Carrito.jsx"
import FinPedido from "../components/FinPedido"
import BasicSelect from "../components/BasicSelect"
import {useState, useEffect} from "react";
import axios from 'axios';
import "/components/styles.css"

function Cliente(){
    

    const [products, setProducts] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    
    useEffect(() => {
        axios.get("https://semanatec-18.herokuapp.com/products").then((response) => {
        setProducts(response.data.data);
        });
    },[]);

    if (!products) {
        return console.log("hola");
        
    }


    const handleAdd = (product) =>{
        const existe = cartItems.find(x => x._id === product._id);
        if(existe){
            setCartItems(cartItems.map(x => x._id === product._id ? {...existe, cantidad: existe.cantidad +1} : x))
        }else{
            setCartItems([...cartItems, {...product, cantidad: 1}])
        }
    };

    const handleRemove =(product) =>{
        const existe = cartItems.find((x)=> x._id === product._id);
        if(existe.cantidad === 1){
            setCartItems(cartItems.filter((x => x._id !== product._id)));
        }else{
            setCartItems(cartItems.map(x => x._id === product._id ? {...existe, cantidad: existe.cantidad - 1} : x))
        }

    };

    const handlePedido = () =>{
        console.log(cartItems)
    }

    return (
        <div className="padre">
            <div className="hijo">
            <BasicSelect/>
            <Productos handleAdd = {handleAdd}  products = {products}/>
            </div>
            <div className="hijoCarrito">
            <Carrito 
            handleRemove = {handleRemove} 
            handleAdd = {handleAdd} 
            cartItems = {cartItems}/>
            <FinPedido 
            handlePedido = {handlePedido}
            cartItems = {cartItems}
            />
            </div>
        </div>
        
)}

export default Cliente
