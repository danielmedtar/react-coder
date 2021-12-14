import Header from "./Header";
import Footer from "./Footer";

function App() {
    const titulo = "E-Commerce"
    const edad = "30"

    const footerData = {
        copyright : "Copyright 2021",
        author : "Daniel Medina"
    }


    return (
        //La etiqueta vacía se usa como fragment, para poder usar etiquetas repetidas como los párrafos de abajo
        <>
            <Header titulo={titulo} edad={edad} />
            <Footer data={footerData} />
        </>
    ) 
}

export default App