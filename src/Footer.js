import Nav from "./Nav"

const Footer = ({links,data:{copyright,author}}) => {
    
    return (
        <>
            <footer>
                <p>{copyright} - {author}</p>
                <Nav links={links} />
            </footer>
        </>
    )
}

export default Footer