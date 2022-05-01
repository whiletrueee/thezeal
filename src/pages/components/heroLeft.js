import S1 from "./sideComponents/S1";
import S2 from "./sideComponents/S2";
import S3 from "./sideComponents/S3";
import HZ from "./sideComponents/smallHZline";
import S1DataLoader from "../../shared/loader/S1DataLoader";
import S3DataLoader from "../../shared/loader/S3DataLoader";


function HeroLeft(props) {

  return (
    <div className="border-r-2 border-gray-200 w-3/12 font-secondary flex flex-col">

      <div className="mr-4 text-right">
        {props.Fetching && <S1DataLoader />}
        {props.FetchedData && 
        <S1
          Line={`${props.FetchedData.articles[0].title}`}
          margin=""
        />
        }
        {props.Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto mt-3">
        <HZ />
      </div>
      <div className="mx-auto">
      {props.Fetching && <h1><S1DataLoader /></h1>}
      {props.FetchedData && 
      <S2 Line={`${props.FetchedData.articles[0].description}`} />}
      {props.Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto">
        <HZ />
      </div>
      <div className="mt-3">
      {props.Fetching && <h1><S3DataLoader /></h1>}
      {props.FetchedData && 
        <S3
          author={`${props.FetchedData.articles[1].author?props.FetchedData.articles[1].author:"Anonymus"}`}
          content={`${props.FetchedData.articles[1].content}`}
        />}
        {props.Error && <h2>An Error has occured</h2>}
      </div>


      <div className="mr-4 text-right">
        {props.Fetching && <S1DataLoader />}
        {props.FetchedData && 
        <S1
          Line={`${props.FetchedData.articles[2].title}`}
          margin=""
        />
        }
        {props.Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto mt-3">
        <HZ />
      </div>
      <div className="mx-auto">
      {props.Fetching && <h1><S1DataLoader /></h1>}
      {props.FetchedData && 
      <S2 Line={`${props.FetchedData.articles[2].description}`} />}
      {props.Error && <h2>An Error has occured</h2>}
      </div>
      <div className="mx-auto">
        <HZ />
      </div>
      <div className="mt-3">
      {props.Fetching && <h1><S3DataLoader /></h1>}
      {props.FetchedData && 
        <S3
          author={`${props.FetchedData.articles[3].author?props.FetchedData.articles[3].author:"Anonymus"}`}
          content={`${props.FetchedData.articles[3].content}`}
        />}
        {props.Error && <h2>An Error has occured</h2>}
      </div>

    </div>
  );
}

export default HeroLeft;
