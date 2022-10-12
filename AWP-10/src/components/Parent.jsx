const Parent = (props) => {
    const { children } = props
    return (
        <div>
            <h1>I'm a parent!</h1>
            { children }
        </div>
    )
}

export default Parent