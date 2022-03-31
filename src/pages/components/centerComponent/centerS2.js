function CenterS2(props){
    return(
        <div className="w-4/12 mt-5">
            <div className=""><img src={props.image} alt={`${props.title}`}/></div>
            <div className="font-secondary text-lg font-bold text-italic text-justify">{props.title}</div>
            <div className=" text-justify font-secondary">{props.description}</div>
            <div className="font-secondary text-right text-sm">{props.author}</div>
        </div>
    );
} 

export default CenterS2;