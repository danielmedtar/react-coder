const Nav = ({links}) => {

    return (
        <nav>
            {links.map((elemento, indice) => {
                return <a href={`/${elemento}`}>{elemento}</a>
            })}
        </nav>
    )
}

export default Nav