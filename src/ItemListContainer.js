import {useState} from "react"



const ItemListContainer = ({greeting}) => {
    
    // const resultado = useState(0)
    // const contador = resultado[0]
    // const setContador = resultado[1]

    const [contador, setContador] = useState(0)
    const [toggle, setToggle] = useState(false)    
    // let contador = 0

    const aumentarContador = () => {
        // contador++
        setContador(contador + 1)
    }

    const disminuirContador = () => {
        // contador++
        setContador(contador - 1)
    }

    const resetearContador = () => {
        // contador++
        setContador(0)
    }

    
    
    console.log(contador);

    return (
        <div>
            {greeting}!
            <p>Contador Actual: {contador}</p>
            <button onClick={aumentarContador}>Aumentar</button>
            <button onClick={resetearContador}>Resetear</button>
            <button onClick={disminuirContador}>Disminuir</button>
        </div>
    )
}

export default ItemListContainer
