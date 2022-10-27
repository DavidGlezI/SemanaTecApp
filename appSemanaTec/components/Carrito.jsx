import React, { useState } from 'react';
import Productos from "/components/Productos.jsx"
function Carrito(props){
    const {cartItems, handleAdd, handleRemove} = props;

    const precioTotal = cartItems.reduce((a,c) => a + c.precio * c.cantidad, 0);
    return (
        <div>
            <div className="containerCarrito">
                <h2 className="tituloCarrito">Carrito</h2>
                {cartItems.length === 0 && <div>El carrito está vacío</div>}
                {cartItems.map((item)=> (
                    <div key = {item.id} className = "listaCarrito">
                        <div>{item.name}</div>
                        <div>
                            <button onClick={()=>handleAdd(item)} className = "añadir">+</button>
                            <button onClick={()=>handleRemove(item)} className = "quitar">-</button>
                        </div>
                        <div>
                            {item.cantidad} x ${item.precio}
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