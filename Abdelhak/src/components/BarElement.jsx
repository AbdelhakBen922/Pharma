function BarElement(props) {
    return (
        <div className="bar-element">
            <h1 className="title">{props.period}</h1>
            {props.IconPath && (
                <img className="icon" src={props.IconPath} alt="icon" />
            )}
            <div className="h-line"></div>
        </div>
    );
}

export default BarElement;
