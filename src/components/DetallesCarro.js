import {  Component } from 'react'

const styles = {
    detallesCarro: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: '30px',
        boxShadow: '1px 5px 5px rgba(0, 0, 0, 0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },
    ul: {
        margin: '0',
        padding: '0',
    },
    li: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: '1px solid #aaa'
    },
}

class DetallesCarro extends Component {
    render() {
        const  { carro } = this.props 
        return(
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(x => 
                    <li key={x.name} style={styles.li}>
                        <img alt={x.name} src={x.img} width='50' height='50' />
                        <span>{x.name}</span>
                        <span>{x.cantidad}</span>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro