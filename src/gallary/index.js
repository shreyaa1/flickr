import React, { useState, useEffect } from "react";



export const Gallary = () => {
    const [gallaryData, handleGallaryData] = useState({})
    
    const getGallaryData = async () => {
        const data = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=Lc4axdf3A4Qp9w04vYvVSmmI2uTSly7n&limit=25&rating=g`)
        const getData = await data.json()
        return handleGallaryData(getData)
    }

    useEffect(() => {
        return getGallaryData()
    }, [])

    return <div className="wrapper">
        {gallaryData.data && gallaryData.data.map(gifImage => {
            const src = gifImage.images.original_mp4.mp4
            return <video src={src}>
            </video>
        })}
    </div>
}