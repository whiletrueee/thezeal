function S3(props) {
    return (
      <div className={`py-2 text-xl ${props.margin}`}>
        <div className="font-sans font-semibold text-base text-center leading-tight">by - {props.author}</div>
        <div className="font-secondary text-sm mx-6 text-justify mt-3">{props.content}</div>
      </div>
    );
  }
  
  export default S3;
  