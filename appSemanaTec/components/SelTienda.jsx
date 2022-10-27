
import './SelTienda.css'
function SelTienda(){

    return (
        <div className='whole'>
            <div className='titulo'>
                <h1 className='titutloTienda'>
                    Seleccionar Tienda
                </h1>
            </div>
            <div className='opciones'>
                <select name="tienda" id="tienda">
                    <optgroup label="Tiendas más cercanas">
                        <option value="Tienda 1">Tienda 1</option>
                        <option value="Tienda 2">Tienda 2</option>
                        <option value="Tienda 3">Tienda 3</option>
                    </optgroup>
                </select>
            </div>
        </div>        
    )

}


export default SelTienda