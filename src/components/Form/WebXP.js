import React from 'react'
import Logo from '../../Assets/tweed-logo-black.svg'
import QR from '../../Assets/blackQR.png'
import './WebXP.css'

/**
* @author
* @function WebXP
**/

const WebXP = (props) => {
  return(
    <div id='webXP_bg'>
        <div id='logo_holder'>
            <img src={Logo} alt='logo'></img>
        </div>
        <h1>Hi. Welcome to Tweed Quickies.<br /> Scan the QR code to launch the experience.</h1>
        <div className='qrHolder'>
            <img id='Qr' src={QR} alt='QRCode'></img>
        </div>
        <h3>WWW.TWEEDQUICKIES.COM</h3>
        <p>This communication is intended for adults only and should not be shared with minors.<br /> There are risks associated with cannabis use. For information, search online “Health Canada - cannabis health effects”.</p>
    </div>
   )

 }

export default WebXP