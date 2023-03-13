import React, { useEffect, useState } from 'react'
import "./darkmode.css"
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';


const Darkmode = () => {
    const [theme,setTheme] = useState("light_bg");
    const [bool,setBool] = useState(false);


    const changeTheme = ()=>{
        if(theme == "dark_bg"){
            setTheme("light_bg");
            setBool(false);
        }else{
            setTheme("dark_bg");
            setBool(true);
        }
    }
    useEffect(()=>{
        document.body.className = theme;
    },[theme])

    const btnClass = bool ? 'dark' : 'light';
    const divclass = bool ? "btn_true": "btn_false"

  return (
    <>
    <nav className='nav flex  p-2  justify-around
    items-center font-semibold text-lg m-2 rounded-sm'>
        <div>   
            <p>logo</p>
        </div>
        <ul className='flex justify-around '>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Login</li>
        </ul>
        <div className={divclass} >
            <button className={btnClass} onClick = {changeTheme}>
            {bool ? <LightModeIcon/> : <NightsStayIcon/>}</button>
        </div>
    </nav>
    </>
  )
}

export default Darkmode