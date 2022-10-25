const Header = (props) => {
    const { balance } = props
    return (
        <div className="nav">
            <h1>MyCheque</h1>
            <p>Amount: { balance }</p>
        </div>
    )
}

export default Header