function CenterS2(props){
    return(
        <div className="w-4/12 mt-5">
            <div className="font-secondary text-lg font-bold text-italic text-justify">{props.title}</div>
            <div className=" text-justify font-secondary">{props.description}</div>
        </div>
    );
} 

export default CenterS2;