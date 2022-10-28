import './styles.css'
function SelTienda(){

    return (
        <div className='whole'>
            <div className='tituloTienda'>
                <h1 className='titulo'>
                    Seleccionar Tienda
                </h1>
                <div className='custom-select'>
                <select>
                    <optgroup label="Tiendas más cercanas">
                        <option value="Tienda 1">Tienda 1</option>
                        <option value="Tienda 2">Tienda 2</option>
                        <option value="Tienda 3">Tienda 3</option>
                    </optgroup>
                </select>
                </div>
            </div>
                
        </div>        
    )

}


export default SelTienda