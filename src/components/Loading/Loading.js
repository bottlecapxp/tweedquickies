import React from 'react'
import LogoBlack from '../../Assets/tweed-logo-black.svg'
import GreenCush from '../../Assets/green-cush-quickies.svg'
import './Loading.css'

/**
* @author
* @function Loading
**/

const Loading = (props) => {

  return(
    <div style={{height: '100vh'}}>
    <div className='blackLogo'>
        <img src={LogoBlack} alt='logo_black'></img>
    </div>
    <div className='spinning_wheel'>
        <img id='spinning-bud' src={GreenCush} alt='spinning-bud'></img>
    </div>
    <h2 style={{color: 'black', textAlign: 'center'}}>Quickies are loading</h2>
    <p id='footer_content' className='footerP'>This communication is intended for adults only and should not be shared with minors. There are risks associated with cannabis use. For information, search online “Health Canada - cannabis health effects”.</p>
     </div>
   )

 }

export default Loading