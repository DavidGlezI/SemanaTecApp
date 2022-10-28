import React from "react";

export default function Producto(props){
    const {product, handleAdd} = props;

    return(
        <div>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={()=>handleAdd(product)}>Añadir al carrito</button>
            </div>
        </div>
    )

}