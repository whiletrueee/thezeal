import CenterImage from "./centerComponent/centerImage";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";

function HeroCenter(){
    const { FetchedData, Fetching, Error } = useFetch(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=52d1165eced548f187c78653a32885ee");
    

    return(
        <div className="w-7/12">
            {Fetching && <h1>Data is being Fetched</h1>}
        {FetchedData &&
           <CenterImage photographer={`${FetchedData.articles[0].author}`} image={`${FetchedData.articles[0].urlToImage}`}
           description={`${FetchedData.articles[0].description}`}/>}
           {Error && <h2>An Error has occured</h2>}
        </div>
    );
}

export default HeroCenter;