import React from 'react';
import "./DashboardOverview.css";

function DashboardOverview() {
    return (
        <div style={{ border: "1px solid black", position: "absolute", top: "90px", left: "370px", height: "50px", width: '850px', borderColor: 'rgba(138, 187, 195, 0)' }}>

            <b className='size'>Dashboard</b>
            <select className='week'>
                <option>This Week</option>
                <option>Last Week</option>
            </select>



        </div>
    )
}


export default DashboardOverview;

