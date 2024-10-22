import React, { createElement } from "react";
import './SidebarElement'
import SidebarElement  from "./SidebarElement";
import dashboardIcon from "../assets/dashboards.png"
import './Sidebar.css'
import listingIcon from "../assets/list (1).png";
import inventoryIcon from "../assets/inventory.png";
import ordersIcon from "../assets/checklist (1).png";
import reportsIcon from "../assets/bar-chart.png";
import feedbackIcon from "../assets/shipment.png";
import notificationsIcon from "../assets/notification.png";
import settingsIcon from "../assets/setting.png";
function Sidebar (){
    
  

    return (
        <div className='Sidebar'>
            <h1 className="logo">PHARMA</h1>
            <SidebarElement className="DashboardElement" logo={dashboardIcon} title='Dashboard'/>
            <SidebarElement className="ListingElement" logo={listingIcon} title='Listing'/>
            <SidebarElement className="InventoryElement" logo={inventoryIcon} title='Inventory'/>
            <SidebarElement className="OrdersElement" logo={ordersIcon} title='Orders'/>
            <SidebarElement className="ReportsElement" logo={reportsIcon} title='Reports'/>
            <SidebarElement className="FeedbackElement" logo={feedbackIcon} title='Feedback'/>
            <SidebarElement className="NotificationsElement" logo={notificationsIcon} title='Notifications'/>
            <SidebarElement className="SettingsElement" logo={settingsIcon} title='Settings'/>
        </div>
    )
}
export default Sidebar