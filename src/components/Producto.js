import {  Component } from 'react';
import Button from './Button'

const style = {
    carta: {
        border: '1px solid #eee',
        boxShadow: '0 5px 3px rgba(0, 0, 0, 0.1)',
        width: '32%',        
        borderRadius: '5px',
    },
    producto: {
        borderTop: '1px solid #eee',
        padding: '10px 15px',
    },
    img:{
        width: '100%',
        height: '350px',
        margin: '0',
    }
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props; 
        return (
            <div style={style.carta}>
                <img style ={style.img} alt={producto.name} src={producto.img} />
                <div style={style.producto}>
                    <h3>{producto.name}</h3>
                    <p>{producto.price}</p>
                    <Button onClick={() => agregarAlCarro(producto)}>
                        Agregar al carro
                    </Button>
                </div>              
            </div>
        )
    }
}

export default Producto;