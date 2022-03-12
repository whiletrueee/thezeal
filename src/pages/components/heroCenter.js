import CenterImage from "./centerComponent/centerImage";
import useFetch from "../../hooks/useFetch";
import CenterS1 from "./centerComponent/centerS1";
import CenterS2 from "./centerComponent/centerS2";
import { useState } from "react";
import HeroImageLoader from "../../shared/loader/heroImage";

function HeroCenter() {
  const { FetchedData, Fetching, Error } = useFetch(
    "https://alexa-news-api.herokuapp.com/harshit?category=technology"
  );

  return (
    <div className="w-7/12">
      {Fetching && <HeroImageLoader />}
      {FetchedData && (
        <CenterImage
          photographer={`${
            FetchedData.articles[7].author
              ? FetchedData.articles[7].author
              : "By- Anonymus"
          }`}
          image={`${FetchedData.articles[7].urlToImage}`}
          description={`${FetchedData.articles[7].description}`}
        />
      )}

      {Error && <h2>An Error has occured</h2>}

      <div className="flex gap-3 justify-around">
      {FetchedData && (
        <CenterS1
          image={`${FetchedData.articles[2].urlToImage}`}
          title={`${FetchedData.articles[2].title}`}
          author={`${
            FetchedData.articles[2].author
              ? FetchedData.articles[2].author
              : "By -Anonymus"
          }`}
          description={`${FetchedData.articles[2].content}`}
        />
      )}

      {FetchedData && (
        <CenterS2
          image={`${FetchedData.articles[2].urlToImage}`}
          title={`${FetchedData.articles[2].title}`}
          author={`${
            FetchedData.articles[2].author
              ? FetchedData.articles[2].author
              : "By -Anonymus"
          }`}
          description={`${FetchedData.articles[2].content}`}
        />
      )}
      </div>
    </div>
  );
}

export default HeroCenter;
