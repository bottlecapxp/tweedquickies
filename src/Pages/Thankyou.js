import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import WhiteLogo from '../Assets/tweed-logo-white.svg'
import ThankYouImage from '../Assets/Tweed_Quickies_Thankyou.svg'
import './Pages.css'

/**
* @author
* @function Thankyou
**/

const Thankyou = (props) => {
    const history = useHistory()
    useEffect(()=>{
        setTimeout(()=>{
          history.push('/option')
        }, 1500)


    }, [])
  return(
    <div className='thankyouBG'>
  
        <div className='thankyouImg'>
        <img src={ThankYouImage} alt='thank-you-image'></img>
        </div>

    </div>
   )

 }

export default Thankyou