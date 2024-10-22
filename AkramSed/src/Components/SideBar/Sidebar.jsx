import React, { createElement } from "react";

import SidebarElement from "../SideBarElement/SidebarElement";
import dashboardIcon from "../../Assets/Abdelhak/dashboards.png"
import './Sidebar.css'
import listingIcon from "../../Assets/Abdelhak/list (1).png";
import inventoryIcon from "../../Assets/Abdelhak/inventory.png";
import ordersIcon from "../../Assets/Abdelhak/checklist (1).png";
import reportsIcon from "../../Assets/Abdelhak/bar-chart.png";
import feedbackIcon from "../../Assets/Abdelhak/shipment.png";
import notificationsIcon from "../../Assets/Abdelhak/notification.png";
import settingsIcon from "../../Assets/Abdelhak/setting.png";
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