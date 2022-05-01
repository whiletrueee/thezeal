import HeroCenter from "../components/heroCenter";
import HeroLeft from "../components/heroLeft";
import HeroRight from "../components/heroRight";
import useFetch from "../../hooks/useFetch";
// import { BallTriangle } from "react-loader-spinner";


function Hero(props) {

  const { FetchedData, Fetching, Error } = useFetch(
    `https://alexa-news-api.herokuapp.com/harshit?category=${props.Domain}`);

  return (
    <div>
      {/* <BallTriangle color="#00BFFF" height={80} width={80} /> */}
      <div className="flex justify-center items-top mt-3 gap-2 mx-auto maxWidth">
        <HeroLeft FetchedData={FetchedData} Fetching={Fetching} Error={Error} />
        <HeroCenter FetchedData={FetchedData} Fetching={Fetching} Error={Error} />
        <HeroRight FetchedData={FetchedData} Fetching={Fetching} Error={Error} />
      </div>
    </div>
  );
}

export default Hero;
