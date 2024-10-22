import PeriodFilterElement from "./PeriodFilterElement"
import "./PeriodFilter.css"
import downIcon from "../assets/down (1).png"

function PeriodFilter() {
    return (
        <div className="PeriodFilter">
            <PeriodFilterElement className="Today" period="Today"></PeriodFilterElement>
            <PeriodFilterElement className="Week" period="Week"></PeriodFilterElement>
            <PeriodFilterElement className="Month" period="Month"></PeriodFilterElement>
            <PeriodFilterElement className="Year" period="Year"></PeriodFilterElement>
            <PeriodFilterElement className="View_all" period='View all'></PeriodFilterElement>
            <div className="v-line"></div>
            <PeriodFilterElement className="Custom" period='Custom' IconPath={downIcon}></PeriodFilterElement>
        </div>
    )
}
export default PeriodFilter