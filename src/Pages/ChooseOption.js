import React from 'react'
import RedYellowBg from '../Assets/RedYellow_Bg.svg'
import RedTealBg from '../Assets/RedTeal_Bg.svg'
import BlueTealBg from '../Assets/BlueTeal_Bg.svg'
import Logo from '../Assets/tweed-logo-yellow.svg'
import AfghanCase from '../Assets/Afghan/afghan-kush-case.png'
import ChemdawgCase from '../Assets/Chemdawg/chemdawg-case.png'
import GreenCushCase from '../Assets/Greencush/green-cush-case.png'
import AfghanKush from '../Assets/Afghan/Afghan_Title_Teal.svg'
import GreenCush from '../Assets/Greencush/Greencush_Title_Teal.svg'
import Chemdawg from '../Assets/Chemdawg/Chemdawg_Title_Yellow.svg'
import {useHistory} from 'react-router-dom'
import './Pages.scss'

/**
* @author
* @function ChooseOption
**/

const ChooseOption = (props) => {
    const history = useHistory()
    const viewInfoKush = () =>{
        history.push('/tweed-info/kush')
    }

    const viewInfoCush = () =>{
      history.push('/tweed-info/cush')
    }

    const viewInfoChemdawg = () =>{
      history.push('/tweed-info/chemdawg')
    }
  return(
    <div className='option_container'>
      <div className='wrapper_info chemdawg' style={{backgroundImage: `url(${RedYellowBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition:"center center"}}>
        <div className='logo_img'>
          <img className='option_logo' src={Logo} alt='logo'></img>
        </div>

        <div className="titleContainer" style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
          <img style={{width: '60%'}} src={Chemdawg} alt='Chemdawg'></img>
        </div>

        <div className='productImg'>
          <img src={ChemdawgCase} alt='logo'></img>
        </div>

        <div onClick={viewInfoChemdawg} className="exploreBtn">
          Explore Chemdawg
        </div>
      </div>

      <div className='wrapper_info afghanKush noTitle' style={{backgroundImage: `url(${BlueTealBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition:"center center"}}>
        <div className="titleContainer" style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
          <img style={{width: '60%'}} src={AfghanKush} alt='Afghan Kush High THC Indica'></img>
        </div>

        <div className='productImg'>
          <img src={AfghanCase} alt='logo'></img>
        </div>

        <div onClick={viewInfoKush} className="exploreBtn">
          Explore Afghan Kush
        </div>
      </div>

      <div className='wrapper_info greenCush noTitle' style={{backgroundImage: `url(${RedTealBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition:"center center"}}>
        <div className="titleContainer" style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
          <img style={{width: '60%'}} src={GreenCush} alt='Green Cush'></img>
        </div>

        <div className='productImg'>
          <img src={GreenCushCase} alt='logo'></img>
        </div>

        <div onClick={viewInfoCush} className="exploreBtn">
          Explore Green Cush
        </div>
      </div>
    </div>
   )

 }

export default ChooseOption