
import {Link} from "react-router-dom"
import "./front.css"




function Front(){
    return (
        <div>
            <div className="container">
                <div className='header'>
                    Apoya Local
                </div>
                <div className="botones">
                <div></div>
                <div >
                    <Link to= "/Cliente">
                    <button className='button'>Cliente</button>
                    </Link>
                </div>
                <div>
                    <Link to= "/Vendedor">
                    <button className='button'>Vendedor</button>
                    </Link>
                </div>
                <div></div>
                </div>
                
            </div>
        </div>
    )
}

export default Front


/*


*/