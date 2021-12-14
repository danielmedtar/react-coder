import Nav from "./Nav"

const Footer = ({data: {copyright,author}}) => {
    console.log(copyright,author);
    return (
        <>
            <footer>
                <p>{copyright} - {author}</p>
                <Nav/>
            </footer>
        </>
    )
}

export default Footer