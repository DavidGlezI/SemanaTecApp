import SelTienda from "/components/SelTienda"

function Front(){
    return (
        <div>
            <SelTienda/>
            <div className="container">
                <div className='header'>
                    NOMBRE
                </div>
                <div className='buttonClient'>
                    <button>Cliente</button>
                </div>
                <div className='buttonVendor'>
                    <button>Vendedor</button>
                </div>
            </div>
        </div>
    )
}

export default Front


