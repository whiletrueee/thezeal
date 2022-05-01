import CenterImage from "./centerComponent/centerImage";
import CenterS1 from "./centerComponent/centerS1";
import HeroImageLoader from "../../shared/loader/heroImage";
import CenterS1DataLoader from "../../shared/loader/CenterS1DataLoader";

function HeroCenter(props) {

  return (
    <div className="w-7/12">
      {props.Fetching && <HeroImageLoader />}
      {props.FetchedData && (
        <CenterImage
          photographer={`${
            props.FetchedData.articles[0].author
              ? props.FetchedData.articles[0].author
              : "By- Anonymus"
          }`}
          image={`${props.FetchedData.articles[0].urlToImage}`}
          description={`${props.FetchedData.articles[0].description}`}
        />
      )}

      {props.Error && <h2>An Error has occured</h2>}

      <div className="grid grid-cols-2 gap-4">
      {props.Fetching && <CenterS1DataLoader />}
        {props.FetchedData && (
          <CenterS1
            image={`${props.FetchedData.articles[1].urlToImage}`}
            title={`${props.FetchedData.articles[1].title}`}
            author={`${
              props.FetchedData.articles[1].author
                ? props.FetchedData.articles[1].author
                : "By -Anonymus"
            }`}
            description={`${props.FetchedData.articles[1].content}`}
          />
        )}

        {props.FetchedData && (
          <CenterS1
            image={`${props.FetchedData.articles[4].urlToImage}`}
            title={`${props.FetchedData.articles[4].title}`}
            author={`${
              props.FetchedData.articles[4].author
                ? props.FetchedData.articles[4].author
                : "By -Anonymus"
            }`}
            description={`${props.FetchedData.articles[4].content}`}
          />
        )}

{props.FetchedData && (
          <CenterS1
            image={`${props.FetchedData.articles[5].urlToImage}`}
            title={`${props.FetchedData.articles[5].title}`}
            author={`${
              props.FetchedData.articles[5].author
                ? props.FetchedData.articles[5].author
                : "By -Anonymus"
            }`}
            description={`${props.FetchedData.articles[5].content}`}
          />
        )}

{props.FetchedData && (
          <CenterS1
            image={`${props.FetchedData.articles[6].urlToImage}`}
            title={`${props.FetchedData.articles[6].title}`}
            author={`${
              props.FetchedData.articles[6].author
                ? props.FetchedData.articles[6].author
                : "By -Anonymus"
            }`}
            description={`${props.FetchedData.articles[6].content}`}
          />
        )}
        
      </div>
    </div>
  );
}

export default HeroCenter;
