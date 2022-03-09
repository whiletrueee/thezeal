import HeroCenter from "../components/heroCenter";
import HeroLeft from "../components/heroLeft";
import HeroRight from "../components/heroRight";

function Hero() {
  
  return (
    <div>
      <div className="flex justify-center items-top mt-3 gap-2 mx-auto max-w-6xl">
        <HeroLeft />
        <HeroCenter />
        <HeroRight />
      </div>
    </div>
  );
}

export default Hero;
