const Video = (props) => {
    const { picture, avatar, name, time, date } = props
    return (
        <div className="videoCard">
            <img width="100px" height="100px" src={ picture } alt={ name } />
            <div className="dataContainer">
                <div className="avatar">{ avatar }</div>
                <div>
                    <p>{ name }</p>
                    <p>{ time }</p>
                    <p>{ date }</p>
                </div>
            </div>
        </div>
    )
}

export default Video