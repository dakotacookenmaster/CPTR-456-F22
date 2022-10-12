const Results = (props) => {
    const { wordsPerMinute } = props
    return (
        <p>Your WPM: { wordsPerMinute }</p>
    )
}

export default Results