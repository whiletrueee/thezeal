import CenterImage from "./centerComponent/centerImage";
import useFetch from "../../hooks/useFetch";
import CenterS1 from "./centerComponent/centerS1";
import HeroImageLoader from "../../shared/loader/heroImage";
import CenterS1DataLoader from "../../shared/loader/CenterS1DataLoader";

function HeroCenter() {
  const { FetchedData, Fetching, Error } = useFetch(
    "https://alexa-news-api.herokuapp.com/harshit?category=technology"
  );

  let i = 0;

  // for(i=0; i<FetchedData.articles.length; i++){
  //   if(FetchedData.articles[i].urlToImage && FetchedData.articles[i].description){
  //     break;
  //   }else{
  //     continue;
  //   }
  // }

  return (
    <div className="w-7/12">
      {Fetching && <HeroImageLoader />}
      {FetchedData && (
        <CenterImage
          photographer={`${
            FetchedData.articles[0].author
              ? FetchedData.articles[0].author
              : "By- Anonymus"
          }`}
          image={`${FetchedData.articles[0].urlToImage}`}
          description={`${FetchedData.articles[0].description}`}
        />
      )}

      {Error && <h2>An Error has occured</h2>}

      <div className="grid grid-cols-2 gap-4">
      {Fetching && <CenterS1DataLoader />}
        {FetchedData && (
          <CenterS1
            image={`${FetchedData.articles[1].urlToImage}`}
            title={`${FetchedData.articles[1].title}`}
            author={`${
              FetchedData.articles[1].author
                ? FetchedData.articles[1].author
                : "By -Anonymus"
            }`}
            description={`${FetchedData.articles[1].content}`}
          />
        )}

        {FetchedData && (
          <CenterS1
            image={`${FetchedData.articles[4].urlToImage}`}
            title={`${FetchedData.articles[4].title}`}
            author={`${
              FetchedData.articles[4].author
                ? FetchedData.articles[4].author
                : "By -Anonymus"
            }`}
            description={`${FetchedData.articles[4].content}`}
          />
        )}

{FetchedData && (
          <CenterS1
            image={`${FetchedData.articles[5].urlToImage}`}
            title={`${FetchedData.articles[5].title}`}
            author={`${
              FetchedData.articles[5].author
                ? FetchedData.articles[5].author
                : "By -Anonymus"
            }`}
            description={`${FetchedData.articles[5].content}`}
          />
        )}

{FetchedData && (
          <CenterS1
            image={`${FetchedData.articles[6].urlToImage}`}
            title={`${FetchedData.articles[6].title}`}
            author={`${
              FetchedData.articles[6].author
                ? FetchedData.articles[6].author
                : "By -Anonymus"
            }`}
            description={`${FetchedData.articles[6].content}`}
          />
        )}
        
      </div>
    </div>
  );
}

export default HeroCenter;
