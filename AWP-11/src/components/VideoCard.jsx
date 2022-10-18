import { useState, useEffect } from "react"

const VideoCard = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const data = await fetch("https://videostar.dacoder.io/7")
                    const jsonData = await data.json()
                    setData(jsonData)
                } catch(error) {
                    console.log(error)
                }
            })()
        }, 2000)
    }, [])

    return (
        <div>
            { data ? (
                <video width={"200px"} height={"200px"} controls crossOrigin="anonymous">
                    <source src={data.url} type="video/mp4" />
                </video>
            ) : (
                <p>Loading...</p>
            )}
            
        </div>
    )

}

export default VideoCard