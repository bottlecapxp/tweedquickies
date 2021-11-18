import React from 'react'
import BlueBg from '../Assets/blueBg.jpeg'
import GreenBg from '../Assets/green-cush/greenBg.jpeg'
import Logo from '../Assets/tweed-logo-white.svg'
import BlueProd from '../Assets/Indica.png'
import GreenProd from '../Assets/Sativa.png'
import AfghanKush from '../Assets/Afghan/AfghanKush.svg'
import GreenCush from '../Assets/Tweed_Quickies/GreenCush.svg'
import {useHistory} from 'react-router-dom'
import './Pages.scss'

/**
* @author
* @function ChooseOption
**/

const ChooseOption = (props) => {
    const history = useHistory()
    const viewInfoKush = () =>{
        history.push('/tweed-info/Kush')
    }
    const viewInfoCush = () =>{
      history.push('/tweed-info/cush')
  }
  return(
    <div className='option_container'>
      <div onClick={viewInfoKush} className='wrapper_info bgBlue' style={{backgroundImage: `url(${BlueBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition:"center center"}}>
        <div className='logo_img'>
          <img className='option_logo' src={Logo} alt='logo'></img>
        </div>

        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
          <img style={{width: '60%'}} src={AfghanKush} alt='Afghan Kush'></img>
        </div>

        <div className='product_img'>
          <img src={BlueProd} alt='logo'></img>
        </div>
      </div>

      <div onClick={viewInfoCush} className='wrapper_info bgGreen' style={{backgroundImage: `url(${GreenBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition:"center center"}}>
        <div className='logo_img'>
          <img className='option_logo' src={Logo} alt='logo'></img>
        </div>

        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
          <img style={{width: '60%'}} src={GreenCush} alt='Green Cush'></img>
        </div>

        <div className='product_img'>
          <img src={GreenProd} alt='logo'></img>
        </div>
      </div>
    </div>
   )

 }

export default ChooseOption