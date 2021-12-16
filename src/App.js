import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
    const titulo = "E-Commerce"

    const footerData = {
        copyright : "Copyright 2021",
        author : "Daniel Medina"
    }

    const home_titulo = "Home"

    const array = ["uno","dos","tres"]

    return (
        <>

            <Header titulo={titulo} links={array} />
            
            <Main titulo={home_titulo}>
                <form>
                    <input type="text" placeholder="Usuario"/>
                </form>
                <button>Click</button>
            </Main>
            <Footer data={footerData} links={array} />

        </>
    ) 
}

export default App