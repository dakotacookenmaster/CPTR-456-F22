const Block = (props) => {
    const { color } = props
    return (
        <div className="block" style={{background: color}}></div>
    )
}

export default Block