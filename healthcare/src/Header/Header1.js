import React, { useEffect } from 'react';
import "./Header1.css";
function Header1() {

    useEffect(() => {
        alert("PLEASE KEEP BROWSER SCREEN SIZE AT 67%");
    }, []);
    return (
        <div style={{
            display: "-ms-flexbox",
            border: "1px solid black",
            height: "90px",
            width: "99%",
            position: "absolute",
            top: "10px",
            left: "15px",
            borderTopLeftRadius: "30px",
            backgroundColor: " rgba(138, 187, 195, 0)",
            borderColor: " rgba(138, 187, 195, 0)"
        }}>

            {/* logo */}
            <div className='border'>

                < b className='title'>Health<span style={{ color: "black" }}>care.</span></b>

                {/* search bar */}
            </div >
            <div style={{ float: "-moz-initial", paddingLeft: "800px" }}>

                <input type='text' placeholder='search' style={{ width: "700px", height: "40px", borderRadius: "30px", position: "absolute", top: "30px", left: "400px", paddingLeft: "50px", fontSize: "18px" }} />
                <i class="bi bi-search" style={{ position: "absolute", top: '43px', left: "420px" }}></i>
                <i class="bi bi-bell-fill" style={{ position: "absolute", top: '40px', right: "610px", color: "blueviolet", fontSize: "20px" }}></i>
            </div>

            {/* User profile  */}
            <div style={{ border: "1px solid black", height: "90px ", width: "530px", position: "absolute", right: "7px", borderTopRightRadius: "30px", backgroundColor: " rgba(138, 186, 195, 0.177)", borderColor: " rgba(138, 187, 195, 0)" }}>

                <i class="bi bi-person-square" style={{ position: "absolute", top: "26px", left: "430px", fontSize: "30px" }}></i>
                <i class="bi bi-plus-square" style={{ position: "absolute", top: "26px", left: "480px", fontSize: "30px" }}></i>


            </div>




        </div >
    )
}

export default Header1;
