import React, { useState } from 'react';
import Producto from './Producto';
import './styles.css'

function Productos(props){
    const {products, handleAdd} = props;
    console.log(products);
    return (
        <div className='todo'>
            <div className="wholeProductos">
                <div className="divTituloProductos">
                    <h2 className="tituloProductos">Productos:</h2>
                </div>
                <div className="divListaProductos">
                    {products.map((product) => (
                        <Producto key={product._id} product={product} handleAdd = {handleAdd}></Producto>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Productos

