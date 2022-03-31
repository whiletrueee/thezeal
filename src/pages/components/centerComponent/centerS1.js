function CenterS1(props){
    return(
        <div className="mt-5">
            <div className=""><img src={props.image} alt={`${props.title}`}/></div>
            <div className=" text-justify font-secondary font-semibold">{props.description}</div>
            <div className="font-secondary text-right text-sm">{props.author}</div>
        </div>
    );
}

export default CenterS1;