import Nav from "./Nav"

function Header({titulo,edad,links}) {
    
    return (
        <>
            <header>
                <h1>{titulo}</h1>
                <p>{edad}</p>

                <Nav links={links} />
            </header>
        </>
    )
}

export default Header