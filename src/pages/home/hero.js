import HeroCenter from "../components/heroCenter";
import HeroLeft from "../components/heroLeft";
import HeroRight from "../components/heroRight";
import useFetch from "../../hooks/useFetch";
import { JellyTriangle } from '@uiball/loaders'
// import { BallTriangle } from "react-loader-spinner";


function Hero(props) {
  const { FetchedData, Fetching, Error } = useFetch(
    `https://j0tt3k.deta.dev/harshit?category=${props.Domain}`);

  return (
    <div>
      {/* <BallTriangle color="#00BFFF" height={80} width={80} /> */}
      {Fetching ? <div className="flex justify-center items-center mt-48">
        <JellyTriangle size={60} speed={1.75} color="black"/>
      </div> :
      
      (
      <div className="flex justify-center items-top mt-3 gap-2 mx-auto maxWidth">
        <HeroLeft FetchedData={FetchedData} Fetching={Fetching} Error={Error} />
        <HeroCenter FetchedData={FetchedData} Fetching={Fetching} Error={Error} />
        <HeroRight FetchedData={FetchedData} Fetching={Fetching} Error={Error} />
      </div>
      )}
    </div>
  );
}

export default Hero;
