import ItemListContainer from "./ItemListContainer"

const Main = ({titulo}) => {
    return (
        <>
            <main>
                <h2>{titulo}</h2>
                <ItemListContainer greeting="Bienvenido"/>
            </main>
        </>
    )
}

export default Main