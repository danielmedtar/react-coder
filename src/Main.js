const Main = ({titulo, children}) => {
    return (
        <>
            <main>
                <header>
                    <h2>{titulo}</h2>
                </header>
                {children}
            </main>
        </>
    )
}

export default Main