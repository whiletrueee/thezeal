function CenterS1(props){
    return(
        <div className="w-5/12 mt-5">
            <div className=""><img src={props.image} alt={`${props.title}`}/></div>
            <div className="font-secondary text-right text-sm">{props.author}</div>
            <div className=" text-justify font-secondary font-semibold">{props.description}</div>
        </div>
    );
}

export default CenterS1;