import Nav from "./Nav"

function Header({titulo,links}) {
    
    return (
        <>
            <header>
                <h1>{titulo}</h1>

                <Nav links={links} />
            </header>
        </>
    )
}

export default Header