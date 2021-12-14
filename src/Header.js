import Nav from "./Nav"

function Header(parametro) {

    const { titulo, edad } = parametro
    
    return (
        <>
            <header>
                <h1>{titulo}</h1>
                <p>{edad}</p>
            </header>
            
            <Nav/>
        </>
    )
}

export default Header