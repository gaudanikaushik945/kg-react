import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import Navbar from '../Navbar/Navbar'
import DriverList from '../DriverList/DriverList';
import AddDriver from '../AddDriver/AddDriver';
import MapView from '../MapView/MapView';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedField, setSelectedField] = useState('Dashboard');
    const [drivers, setDrivers] = useState([]);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev)
    }

    const handleFieldClick = (field)=>{
        setSelectedField(field)
    }
    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} />
            <SideBar isSidebarOpen={isSidebarOpen} onFieldClick={handleFieldClick} setIsSidebarOpen={setIsSidebarOpen}/>
            <div className={`sm:ml-[266px]  mt-16 ${isSidebarOpen ? "ml-[266px]" : "ml-0"}`}>
                
                {selectedField === 'Dashboard' && <MapView/>}
                {selectedField === 'DriverList' && <DriverList drivers={drivers}  />}
                {selectedField === 'AddDriver' && <AddDriver setDrivers={setDrivers} />}

            </div>

        </div>
    )
}

export default Dashboard