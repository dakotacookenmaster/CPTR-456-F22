const Transaction = (props) => {
    const { amount, type, description, isPending } = props

    return (
        <div className="card">
            <div className="card-body">
                <p>{ description }</p>
                <h1>{ `$${amount.toFixed(2)}`}</h1>
                {
                    type === "withdrawal" ? (
                        <i className="bi bi-dash-circle-fill"></i>
                    ) : (
                        <i className="bi bi-plus-circle-fill"></i>
                    )
                }
                { isPending && <i className="bi bi-hourglass-split"></i> }
            </div>
        </div>
    )
}

export default Transaction