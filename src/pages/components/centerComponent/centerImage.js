import MainPhoto from "../../../assets/images/headImage.png";
function CenterImage(props){
    return(
        <div className="">
            <div className="">
                <img src={MainPhoto} alt="Main Hero" />
            </div>
            <div className="text-right font-secondary text-xs">{props.photographer.toUpperCase()}</div>
            <div className="text-center font-sans font-medium">{props.description}</div>
        </div>
    );
}

export default CenterImage; 