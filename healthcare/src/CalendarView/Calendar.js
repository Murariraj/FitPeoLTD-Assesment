import React from 'react';
import './Calendar.css';
import teethImage from '../Assets/istockphoto-152960513-612x612.jpg';


function Calendar() {
    const Dentist = [{ time: "09:00 - 11:00", doctor: "Dr Raj Murari" }];
    const PhysiotherapyAppo = [{ time: "11:00 - 12:00", doctor: "Dr Murari Raj" }];
    const HealthCheckup = [{ time: "12:00 PM" }];
    const ophthalmologist = [{ time: "15:00 PM" }];
    const cardio = [{ time: "13:00 PM" }];
    const neuro = [{ time: "17:00 PM" }];


    return (
        <div className='calenderborder' >
            {Dentist.map((items, index) => (
                <div className='appointment' key={index}>

                    <p style={{ paddingLeft: "20px", fontFamily: "inherit", color: "white", fontWeight: "bold" }
                    }>Dentist</p>
                    <p style={{ paddingLeft: "20px", fontFamily: "inherit", color: "white", position: "absolute", top: "30px" }
                    }>{items.time}</p>
                    <p style={{ paddingLeft: "20px", fontFamily: "inherit", color: "white", position: "absolute", bottom: "0px", top: "59px" }
                    }>{items.doctor}</p>


                    <img src={teethImage} alt='Lungs' className='lungs' style={{ height: "20px", width: "20px", paddingLeft: "110px", position: "absolute", bottom: '62px' }}></img>

                </div>
            ))}


            {/* appointment2 */}

            {PhysiotherapyAppo.map((item, index) => (
                <div className='appointment2' key={index}>
                    <p style={{ paddingLeft: "20px", fontFamily: "inherit", color: "white", fontWeight: "bold" }
                    }>Physiotherapy Appoinment</p>
                    <p style={{ paddingLeft: "20px", fontFamily: "inherit", color: "white", position: "absolute", top: "30px" }
                    }>{item.time}</p>
                    <p style={{ paddingLeft: "20px", fontFamily: "inherit", color: "white", position: "absolute", bottom: "0px", top: "59px" }
                    }>{item.doctor}</p>





                </div>
            ))}

            <p className='title2'>The Upcoming Schedule</p>
            <span className='schedule'>On Thursday</span>

            {/* upcoming schedule */}
            {HealthCheckup.map((item, index) => (
                <div className='appointment3' key={index}>
                    <p style={{ paddingLeft: "20px", fontFamily: "inherit", color: "white", fontWeight: "bold" }
                    }>Health checkup complete</p>
                    <p style={{ paddingLeft: "20px", fontFamily: "cursive", color: "white" }
                    }>{item.time}</p>

                </div>
            ))}



            {ophthalmologist.map((item, index) => (
                <div className='appointment4' key={index}>
                    <p style={{ paddingLeft: "20px", fontFamily: "inherit", color: "white", fontWeight: "bold" }
                    }>Ophthalmologist</p>
                    <p style={{ paddingLeft: "20px", fontFamily: "cursive", color: "white" }
                    }>{item.time}</p>

                </div>
            ))}



            <span className='schedule2'>On Saturday</span>

            {cardio.map((item, index) => (
                <div className='appointment5' key={index}>
                    <p style={{ paddingLeft: "20px", fontFamily: "inherit", color: "white", fontWeight: "bold" }
                    }>Cardiologist</p>
                    <p style={{ paddingLeft: "20px", fontFamily: "cursive", color: "white" }
                    }>{item.time}</p>

                </div>
            ))}

            {neuro.map((item, index) => (
                <div className='appointment6'>
                    <p style={{ paddingLeft: "20px", fontFamily: "inherit", color: "white", fontWeight: "bold" }
                    }>Neurologist</p>
                    <p style={{ paddingLeft: "20px", fontFamily: "cursive", color: "white" }
                    }>{item.time}</p>

                </div>
            ))}


        </div>
    );
}

export default Calendar;
