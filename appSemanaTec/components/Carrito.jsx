import React, { useState } from 'react';
import Productos from "/components/Productos.jsx"
import  "./styles.css"
function Carrito(props){
    const {cartItems, handleAdd, handleRemove} = props;

    const precioTotal = cartItems.reduce((a,c) => a + c.price * c.cantidad, 0);
    return (
        <div className='todoContainer'>
            <div className="containerCarrito">
                <h2 className="tituloCarrito">Carrito</h2>
                {cartItems.length === 0 && <div>El carrito está vacío</div>}
                {cartItems.map((item)=> (
                    <div key = {item._id} className = "listaCarrito">
                        <div className='gridcenter'>{item.name}</div>
                        <div className='gridcenter'>
                            {item.cantidad} x ${item.price}
                        </div>
                        <div>
                            <button onClick={()=>handleAdd(item)} className = "añadir">+</button>
                            <button onClick={()=>handleRemove(item)} className = "quitar">-</button>
                        </div>
                        
                    </div>
                ))}
                {cartItems.length !== 0 && (
                    <>
                    <hr></hr>
                    <div className='final'>
                        <div>Total de pedido</div>
                        <div>${precioTotal}</div>
                    </div>
                    </>
                )}
            </div>
        </div>
    )
}


export default Carrito