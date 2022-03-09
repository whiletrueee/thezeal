import S1 from "./sideComponents/S1";
import S2 from "./sideComponents/S2";
import S3 from "./sideComponents/S3";
import HZ from "./sideComponents/smallHZline";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
// https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=52d1165eced548f187c78653a32885ee
function HeroRight() {
  const { FetchedData, Fetching, Error } = useFetch(
    "https://alexa-news-api.herokuapp.com/harshit?category=technology"
  );

  return (
    <div className="w-3/12 font-secondary flex flex-col">
      <div className="mr-auto ml-2">
        {Fetching && <h1>Data is being Fetched</h1>}
        {FetchedData && (
          <S1 Line={`${FetchedData.articles[0].title}`} margin="" />
        )}
        {FetchedData && <div>{0}</div>}
        {Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto mt-3">
        <HZ />
      </div>
      <div className="mx-auto">
        {Fetching && <h1>Data is being Fetched</h1>}
        {FetchedData && <S2 Line={`${FetchedData.articles[1].title}`} />}
        {Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto">
        <HZ />
      </div>
      <div className="mt-3">
        {Fetching && <h1>Data is being Fetched</h1>}
        {FetchedData && (
          <S3
            author={`${
              FetchedData.articles[1].author
                ? FetchedData.articles[1].author
                : "Anonymus"
            }`}
            content={`${FetchedData.articles[1].content}`}
          />
        )}
        {Error && <h2>An Error has occured</h2>}
      </div>
    </div>
  );
}

export default HeroRight;
