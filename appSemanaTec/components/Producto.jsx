import React from "react";
import "./styleProducto.css"

export default function Producto(props){
    const {product, handleAdd} = props;

    return(
        <div className="padreProducto">
            <img className="fotito" src={product.selectedFile} alt={product.name} />
            <h3 className="textprod">{product.name}</h3>
            <div className="textprod">${product.price}</div>
            <button className="addboton" onClick={()=>handleAdd(product)}>Añadir al carrito</button>
        </div>
    )

}