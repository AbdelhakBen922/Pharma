import BarElement from "./BarElement"
import DollarIcon from "../assets/coin.png"
import sortIcon from "../assets/sort.png"
import SearchBar from "./SearchBar"
import "./Inventory.css"
function Inventory() {
    return (
        <div className="bg">
        <div className="inventory">
            <div className="FirstRow">
                <div className="revenue">
                    <div className="IconTitle">
                        <img src={DollarIcon} className="Icon"></img>
                        <h2 className="title">Total Monthly Revenue</h2>
                    </div>
                    <h1 className="revenueValue">10,000.00 DZD</h1>
                </div>
                <div className="v line"></div>
                <div className="ProductSum">
                    <h2 className="ProductsNum"> 30 Products</h2>
                    <div className="PercentageLine">
                        <div className="InStock"></div>
                        <div className="LowStock"></div>
                        <div className="OutOfStock"></div>
                    </div>
                    <div className="LineKey">
                        <div className="InStockKey">
                            <div className="color"></div>
                            <h2 className="Key">In Stock : 17</h2>
                        </div>
                        <div className="LowStockKey">
                            <div className="color"></div>
                            <h2 className="Key">Low Stock : 8</h2>
                        </div>
                        <div className="OutOfStockKey">
                            <div className="color"></div>
                            <h2 className="Key">Out of Stock : 5</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h line"></div>
            <div className="SecondRow">
                <h2 className="PageTitle">Inventory</h2>
                <SearchBar className="SearchBar"></SearchBar>
                <div className="FilterButton"></div>
            </div>
            <div className="ThirdRow">
                <div className="HeadersBar">
                    <BarElement className='ID' title='ID' />
                    <BarElement className="Category" title="Category" />
                    <BarElement className="Stock" title="Stock" IconPath={sortIcon}/>
                    <BarElement className="Status" title="Status"/>
                    <BarElement className="BuyPrice" title="Buy Price" IconPath={sortIcon} />
                    <BarElement className="SellPrice" title="Sell Price" IconPath={sortIcon} />
                    <BarElement className="Actions" title='Actions'/>
                </div>
                <div className="H-line"></div>
                <div className="H-line"></div>
                <div className="H-line"></div>
                <div className="H-line"></div>
                <div className="H-line"></div>
                <div className="H-line"></div>
                <div className="H-line"></div>
                <div className="H-line"></div>
                <div className="H-line"></div>
                <div className="H-line"></div>
                <div className="H-line"></div>

            </div>
        </div>
        </div>
    )
}
export default Inventory