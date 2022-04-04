import S1 from "./sideComponents/S1";
import S2 from "./sideComponents/S2";
import S3 from "./sideComponents/S3";
import HZ from "./sideComponents/smallHZline";
import useFetch from "../../hooks/useFetch";
import S1DataLoader from "../../shared/loader/S1DataLoader";
import S3DataLoader from "../../shared/loader/S1DataLoader";

// https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=52d1165eced548f187c78653a32885ee
function HeroRight() {
  const { FetchedData, Fetching, Error } = useFetch(
    "https://alexa-news-api.herokuapp.com/harshit?category=entertainment"
  );

  return (
    <div className="w-3/12 font-secondary flex flex-col">


      <div className="mr-auto ml-2">                                {/* S1 */}
        {Fetching && <h1><S1DataLoader /></h1>}
        {FetchedData && (
          <S1 Line={`${FetchedData.articles[0].title}`} margin="" />
        )}
        {Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto mt-3">                                    {/* HZ */}
        <HZ />
      </div>
      <div className="mx-auto">                                          {/* S2 */}
        {Fetching && <h1><S1DataLoader /> </h1>}
        {FetchedData && <S2 Line={`${FetchedData.articles[0].description}`} />}
        {Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto">                                       {/* HZ */}
        <HZ />
      </div>
       <div className="mt-3">                                        {/* S3 */}
        {Fetching && <h1><S3DataLoader /></h1>}
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

      <div className="mr-auto ml-2">                                {/* S1 */}
        {Fetching && <h1>Data is being Fetched</h1>}
        {FetchedData && (
          <S1 Line={`${FetchedData.articles[2].title}`} margin="" />
        )}
        {Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto mt-3">                                    {/* HZ */}
        <HZ />
      </div>
      <div className="mx-auto">                                          {/* S2 */}
        {Fetching && <h1>Data is being Fetched</h1>}
        {FetchedData && <S2 Line={`${FetchedData.articles[2].description}`} />}
        {Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto">                                       {/* HZ */}
        <HZ />
      </div>
       <div className="mt-3">                                        {/* S3 */}
        {Fetching && <h1>Data is being Fetched</h1>}
        {FetchedData && (
          <S3
            author={`${
              FetchedData.articles[3].author
                ? FetchedData.articles[3].author
                : "Anonymus"
            }`}
            content={`${FetchedData.articles[3].content}`}
          />
        )}
        {Error && <h2>An Error has occured</h2>}
      </div>



    </div>
  );
}

export default HeroRight;
