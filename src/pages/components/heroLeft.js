import S1 from "./sideComponents/S1";
import S2 from "./sideComponents/S2";
import S3 from "./sideComponents/S3";
import HZ from "./sideComponents/smallHZline";

function HeroLeft() {
  return (
    <div className="border-r-2 border-gray-200 w-3/12 font-secondary flex flex-col">
      <div className="ml-auto mr-2">
        <S1
          Line1="Climate Talks"
          Line2="Brings Promises"
          Line3="Slim on Details"
          margin=""
        />
      </div>
      <div className="mx-auto mt-3">
        <HZ />
      </div>
      <div className="mx-auto">
        <S2 Line1="In Summits second week" Line2="Split view on Gains" />
      </div>
      <div className="mx-auto">
        <HZ />
      </div>
      <div className="mt-3">
        <S3
          headingL1="By Shashank" headingL2="and Aryan"
          content="He wondered if he should disclose the truth to his friends. It would be a risky move. Yes, the truth would make things a lot easier if they all stayed on the same page, but the truth might fracture the group leaving everything in even more of a mess than it was not telling the truth. It was time to decide which way to go."
        />
      </div>
    </div>
  );
}

export default HeroLeft;
