import S1 from "./sideComponents/S1";
import S2 from "./sideComponents/S2";
import S3 from "./sideComponents/S3";
import HZ from "./sideComponents/smallHZline";
import S1DataLoader from "../../shared/loader/S1DataLoader";
import S3DataLoader from "../../shared/loader/S1DataLoader";

// https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=52d1165eced548f187c78653a32885ee
function HeroRight(props) {
  
  return (
    <div className="w-3/12 font-secondary flex flex-col">
      <div className="mr-auto ml-2">
        {" "}
        {/* S1 */}
        {props.Fetching && (
          <h1>
            <S1DataLoader />
          </h1>
        )}
        {props.FetchedData && (
          <S1 Line={`${props.FetchedData.articles[10].title}`} margin="" />
        )}
        {props.Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto mt-3">
        {" "}
        {/* HZ */}
        <HZ />
      </div>
      <div className="mx-auto">
        {" "}
        {/* S2 */}
        {props.Fetching && (
          <h1>
            <S1DataLoader />{" "}
          </h1>
        )}
        {props.FetchedData && <S2 Line={`${props.FetchedData.articles[10].description}`} />}
        {props.Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto">
        {" "}
        {/* HZ */}
        <HZ />
      </div>
      <div className="mt-3">
        {" "}
        {/* S3 */}
        {props.Fetching && (
          <h1>
            <S3DataLoader />
          </h1>
        )}
        {props.FetchedData && (
          <S3
            author={`${
              props.FetchedData.articles[11].author
                ? props.FetchedData.articles[11].author
                : "Anonymus"
            }`}
            content={`${props.FetchedData.articles[11].content}`}
          />
        )}
        {props.Error && <h2>An Error has occured</h2>}
      </div>

      <div className="mr-auto ml-2">
        {" "}
        {/* S1 */}
        {props.Fetching && <h1>Data is being Fetched</h1>}
        {props.FetchedData && (
          <S1 Line={`${props.FetchedData.articles[12].title}`} margin="" />
        )}
        {props.Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto mt-3">
        {" "}
        {/* HZ */}
        <HZ />
      </div>
      <div className="mx-auto">
        {" "}
        {/* S2 */}
        {props.Fetching && <h1>Data is being Fetched</h1>}
        {props.FetchedData && <S2 Line={`${props.FetchedData.articles[12].description}`} />}
        {props.Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto">
        {" "}
        {/* HZ */}
        <HZ />
      </div>
      <div className="mt-3">
        {" "}
        {/* S3 */}
        {props.Fetching && <h1>Data is being Fetched</h1>}
        {props.FetchedData && (
          <S3
            author={`${
              props.FetchedData.articles[13].author
                ? props.FetchedData.articles[13].author
                : "Anonymus"
            }`}
            content={`${props.FetchedData.articles[13].content}`}
          />
        )}
        {props.Error && <h2>An Error has occured</h2>}
      </div>
    </div>
  );
}

export default HeroRight;
