import React, { useState } from 'react';
import Producto from './Producto';

function Productos(props){
    const {products, handleAdd} = props;
    return (
        <div>
            <div className="wholeProductos">
                <div className="divTituloProductos">
                    <h2 className="tituloProductos">Productos:</h2>
                </div>
                <div className="divListaProductos">
                    {products.map((product) => (
                        <Producto key={product.id} product={product} handleAdd = {handleAdd}></Producto>
                    ))}
                </div>
            </div>
    </div>
    )
}

export default Productos

