const Nav = (props) => {
    const { theme } = props
    return (
        <nav className={theme === "dark" ? "nav-dark" : "nav-light"}></nav>
    )
}

export default Nav