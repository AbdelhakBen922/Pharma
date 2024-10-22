import Layout from "./Layout"
import "./Dashboard.css"
function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="left"><Layout className="SalesGraph"></Layout>

                <Layout className='OrderChart'></Layout>
                <Layout className='InventoryChart'></Layout>
                <Layout className="Top-selling"></Layout></div>
            <div className="right"><Layout className="Undefined"></Layout>
                <Layout className='Notifications'></Layout></div>
        </div>
    )
}
export default Dashboard