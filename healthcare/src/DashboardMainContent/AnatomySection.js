import React, { useState } from 'react'
import muscleImage from "../Assets/istockphoto-154449330-612x612.jpg";
import lungsImage from 'D:/FitPeo_TechLTD/healthcare/src/Assets/lung-cancer-diagram-detail-illustration-260nw-308751308.webp';
import './AnatomySection.css'
import teethImage from '../Assets/istockphoto-152960513-612x612.jpg'
import boneImage from '../Assets/white-bone-with-white-background_668290-347.avif'


function AnatomySection() {

    const [date, setdate] = useState("");
    const Handledate = ((e) => {
        setdate(e.target.value);
    });

    return (
        <div style={{ display: "flex" }}>
            <div style={{ border: "1px solid black", height: "400px", width: "300px", position: "absolute", bottom: "275px", left: "415px", top: "150px", borderRadius: "30px", display: "flex" }}>

                {<img src={muscleImage} alt="Male" style={{ height: "400px", width: "300px", borderRadius: "30px" }}></img>}


            </div>

            {/* Lungs */}
            <div style={{ border: "1px solid black", height: "113px", width: "200px", display: "flex", position: "absolute", bottom: '520px', right: "600px", borderRadius: "30px" }}>
                <img src={lungsImage} alt='Lungs' className='lungs' ></img>
                <b style={{ paddingLeft: "30px", paddingTop: "20px" }}>Lungs</b>
                <p id='calendardata3' style={{ position: 'absolute', right: '43px', top: '50px', fontFamily: "serif" }}>Date:{date}</p>
                <input type='range' style={{ position: 'absolute', right: '32px', top: '85px' }}></input>

            </div>

            {/* Teeth */}
            <div style={{ border: "1px solid black", height: "113px", width: "200px", display: "flex", position: "absolute", bottom: '395px', right: "600px", borderRadius: "30px" }}>
                <img src={teethImage} alt='Lungs' className='lungs' ></img>
                <b style={{ paddingLeft: "30px", paddingTop: "20px" }}>Teeth</b>
                <p id='calendardata2' style={{ position: 'absolute', right: '43px', top: '50px', fontFamily: "serif" }}>Date : {date}</p>
                <input type='range' style={{ position: 'absolute', right: '32px', top: '85px' }}></input>
            </div>

            {/* Bone */}
            <div style={{ border: "1px solid black", height: "113px", width: "200px", display: "flex", position: "absolute", bottom: '270px', right: "600px", borderRadius: "30px" }}>
                <img src={boneImage} alt='Lungs' className='lungs' ></img>
                <b style={{ paddingLeft: "30px", paddingTop: "20px" }}>Bone</b>
                <p id='calendardata' style={{ position: 'absolute', right: '43px', top: '40px', fontFamily: "serif" }}>Date :{date}</p>
                <input type='range' style={{ position: 'absolute', right: '32px', top: '85px' }}></input>
            </div>

            {/* calender */}

            <input type='date' id='inputCalendar' onChange={Handledate} style={{ position: "absolute", right: "200px", top: "120px" }}></input>


            <p style={{ position: 'absolute', bottom: "210px", left: "1100px", color: "gray" }}>Details -</p>



        </div>
    )
}

export default AnatomySection;
