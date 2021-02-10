import React, { useState } from "react";
import debounce from "lodash.debounce";

import "./group.css"


export const Home = () => {
    const [storeData, handleApiData] = useState({})
    const getSearchData = async (url = '') => {
        const data = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Lc4axdf3A4Qp9w04vYvVSmmI2uTSly7n&q=${url}&limit=25&offset=0&rating=g&lang=en`)
        const getData = await data.json()
        return handleApiData(getData)
    }

 
    const getFetchedValue = (e) => {
        const query = e.target.value;
        return getSearchData(query).then(data => data)

    }

    return <div className="home-page"> 
        <input onChange={debounce((e) => {getFetchedValue(e)}, 1000)} />      
      <div>
        
      </div>
        <div className='wrapper'>{storeData.data && storeData.data.map(img => {
            const gif = img.images.original_mp4.mp4
            return <video src={gif} controls>
              
            </video>
        })}</div>

    </div>
}