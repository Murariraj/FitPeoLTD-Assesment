import React from 'react';
import "./Aside.css";
import "bootstrap-icons/font/bootstrap-icons.css";


function Aside() {


    return (

        <div className='hi' style={{ display: "flex", }}>
            <aside>

                {/* <b className='title'>Health<span style={{ color: "black" }}>care.</span></b> */}


                <button
                    style={{

                        width: "100%",
                        position: "absolute",
                        top: "10px",
                        height: "50px",
                        paddingRight: "160px",

                    }}>General

                </button>


                <button style={{


                    width: "100%",
                    position: "absolute",
                    top: "60px",
                    height: "50px",
                    paddingRight: "160px",

                    paddingLeft: "85px"
                }}>dashboard

                    <i class="bi bi-columns-gap" style={{ position: "absolute", left: "75px" }}></i>
                </button>

                <button style={{


                    width: "100%",
                    position: "absolute",
                    top: "110px",
                    height: "50px",
                    paddingRight: "160px",

                    paddingLeft: "63px"
                }}>History

                    <i class="bi bi-clock-history" style={{ position: "absolute", left: "75px", fontSize: "15px" }}></i>
                </button>

                <button style={{


                    width: "100%",
                    position: "absolute",
                    top: "160px",
                    height: "50px",
                    paddingRight: "160px",

                    paddingLeft: "73px"
                }}>Calender

                    <i class="bi bi-calendar" style={{ position: "absolute", left: "75px", fontSize: "15px" }}></i>
                </button>

                <button style={{


                    width: "100%",
                    position: "absolute",
                    top: "210px",
                    height: "50px",
                    paddingRight: "160px",

                    paddingLeft: "95px"
                }}>Appointment

                    <i class="bi bi-journal-check" style={{ position: "absolute", left: "75px", fontSize: "15px" }}></i>
                </button>


                <button style={{


                    width: "100%",
                    position: "absolute",
                    top: "300px",
                    height: "50px",
                    paddingRight: "180px",


                }}>Tools

                </button>

                <button style={{


                    width: "100%",
                    position: "absolute",
                    top: "350px",
                    height: "50px",
                    paddingRight: "160px",

                    paddingLeft: "45px"
                }}>Chat

                    <i class="bi bi-chat" style={{ position: "absolute", left: "75px", fontSize: "15px" }}></i>
                </button>

                <button style={{


                    width: "100%",
                    position: "absolute",
                    top: "400px",
                    height: "50px",
                    paddingRight: "160px",

                    paddingLeft: "60px"
                }}>Support

                    <i class="bi bi-phone" style={{ position: "absolute", left: "75px", fontSize: "15px" }}></i>
                </button>


                <button style={{


                    width: "100%",
                    position: "absolute",
                    top: "600px",
                    height: "50px",
                    paddingRight: "160px",

                    paddingLeft: "60px"
                }}>Setting

                    <i class="bi bi-gear" style={{ position: "absolute", left: "75px", fontSize: "15px" }}></i>
                </button>


            </aside>

        </div >
    )
}




export default Aside;