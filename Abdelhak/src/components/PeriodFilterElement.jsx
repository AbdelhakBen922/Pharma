function PeriodFilterElement(props) {
    return (
        <div className="PeriodF-element">
            <h1 className="period">{props.period}</h1>
            {props.IconPath && (
                <img className="icon" src={props.IconPath} alt="icon" />
            )}
            <div className="h-line"></div>
        </div>
    );
}

export default PeriodFilterElement;
