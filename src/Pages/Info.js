import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Logo from '../Assets/tweed-logo-white.svg'
import HBmenu from '../Assets/Hamburger_icon_white.svg.png'
import GreenKushBud from '../Assets/afghan-kush-bud.png'
import GreenKushBud2 from '../Assets/green-cush-bud.png'
import GreenKushBoxes from '../Assets/afghan-kush-boxes.png'
import GreenKushBox2 from '../Assets/green-cush-boxes.png'
import Fpamobile from '../Assets/FPA-mobile.svg'
import Fpamobile2 from '../Assets/bud2.png'
import BlueBg from '../Assets/afghan-kush-bg.jpeg'
import GreenBg from '../Assets/green-cush-mobile.jpeg'
import OneKush from "./../Assets/Green.gif";
import OneKush2 from "./../Assets/Kush.gif";
import BlueProd from '../Assets/afghan-kush-container.svg'
import GreenProd from '../Assets/green-cush-container.svg'
import Yes from '../Assets/yes.svg'
import No from '../Assets/no.svg'
import Yes2 from '../Assets/yes-icon.svg'
import No2 from '../Assets/no-icon.svg'
import Bad from '../Assets/bad.svg'
import Good from '../Assets/good.svg'
import Undecided from '../Assets/undecided.svg'
import GreenBad from '../Assets/bad-icon.svg'
import GreenGood from '../Assets/good-icon.svg'
import GreenUndecided from '../Assets/undecided-icon.svg'
import { gsap, Power3 } from 'gsap'
import OneQuickie from '../Assets/Tweed_Quickies/1Quickie.svg'
import TenQuickie from '../Assets/Tweed_Quickies/10Quickies.svg'
import Lineage from '../Assets/Tweed_Quickies/Lineage.svg'
import FlavourProfile from '../Assets/Tweed_Quickies/FlavourProfile.svg'
import AfghanKush from '../Assets/Tweed_Quickies/AfghanKush_indica.svg' //small right
import AfghanKushNo from '../Assets/Tweed_Quickies/AfghanKush.svg'
import GreenCushNothc from '../Assets/Tweed_Quickies/GreenCush_NOTHC.svg'
import GreenCush from '../Assets/Tweed_Quickies/GreenCush_sativa.svg'
import BadSelect from '../Assets/Tweed_Quickies/Buttons/Bad_Select.svg'
import UndecidedSelect from '../Assets/Tweed_Quickies/Buttons/Undecided_Select.svg'
import GoodSelect from '../Assets/Tweed_Quickies/Buttons/Good_Select.svg'
import YesSelect from '../Assets/Tweed_Quickies/Buttons/Yes_Select.svg'
import NoSelect from '../Assets/Tweed_Quickies/Buttons/No_Select.svg'
import Loading from '../components/Loading/Loading';




/**
* @author
* @function Info
**/

const Info = (props) => {
const history = useHistory()
  // const [btnSelectionGreen, setBtnSelectionGreen] = useState({
  //   bad: GreenBad,
  //   undecided: GreenUndecided,
  //   good: GreenGood
  // })

  const [btnAFGBad, setBtnAFGBad] = useState(null)
  const [btnAFGUndecided, setBtnAFGUndecided] = useState(null)
  const [btnAFGGood, setBtnAFGGood] = useState(null)
  const [btnNo, setBtnNo] = useState(null)
  const [btnYes, setBtnYes] = useState(null)
  // **************************************
  const [btnAFGBadG, setBtnAFGBadG] = useState(null)
  const [btnAFGUndecidedG, setBtnAFGUndecidedG] = useState(null)
  const [btnAFGGoodG, setBtnAFGGoodG] = useState(null)
  const [btnNoG, setBtnNoG] = useState(null)
  const [btnYesG, setBtnYesG] = useState(null)

  var badG, undecidedG, goodG





  // function toggleAccordion() {
  //   section.removeClass("active");
  //   this.addClass("active");
  // //   section2.removeClass("active");
  // //   $(this).addClass("active");
  // }
  useEffect(() => {
    setBtnAFGBad(false)
    setBtnAFGUndecided(false)
    setBtnAFGGood(false)
    setBtnYes(false)
    setBtnNo(false)

    setBtnAFGBadG(false)
    setBtnAFGUndecidedG(false)
    setBtnAFGGoodG(false)
    setBtnYesG(true)
    setBtnNoG(true)

    if(props.match.params.strain === 'cush'){
      greenToggle()
    }    
    if(props.match.params.strain === 'kush'){
      afghanToggle()
    }

    setTimeout(() => {

      gsap.to('.title_name', {
        opacity: '1',
        duration: '1'
      })
      gsap.to('.Q1', {
        display: 'none',
        opacity: '0',
        duration: '1'
      })
      gsap.to('.Q10', {
        display: 'block',
        opacity: '1',
        duration: '1'
      })

    }, 3000)

    setTimeout(() => {

      gsap.to('.title_name', {
        opacity: '1',
        duration: '1'
      })
      gsap.to('.Q1G', {
        display: 'none',
        opacity: '0',
        duration: '1'
      })
      gsap.to('.Q10G', {
        display: 'block',
        opacity: '1',
        duration: '1'
      })

    }, 2500)

    gsap.to(".section", {
      opacity: 1,
      height: "90vh"
    })
    gsap.to(".section2", {
      opacity: 1,
      height: "10vh"
    })
    gsap.to(".footer", {
      position: 'absolute', bottom: '0', marginBottom: '10%', duration: "1"
    })

  }, [])



  const greenToggle = () => {
    gsap.to(".hiddenTitle", {
      display: "none", duration: "0"
    })
    gsap.to(".displayz", {
      opacity: '0', display: "none", duration: "1"
    })
    gsap.to(".section", {
      height: '10vh', duration: "1"
    })
    gsap.to(".section2", {
      height: '90vh', duration: "1"
    })
    gsap.to(".noDisplay", {
      display: 'block', opacity: '1', duration: "1"
    })
    gsap.to(".footer", {
      position: 'absolute', bottom: '0', marginBottom: '-20%', duration: "1"
    })
    gsap.to(".hiddenTitle_", {
      display: 'block', opacity: '1', duration: "1"
    })
  }
  const afghanToggle = () => {
    gsap.to(".hiddenTitle_", {
      display: "none", duration: "0"
    })
    gsap.to(".noDisplay", {
      opacity: '0', display: "none", duration: "1"
    })
    gsap.to(".section2", {
      height: '10vh', duration: "1"
    })
    gsap.to(".section", {
      height: '90vh', duration: "1"
    })
    gsap.to(".displayz", {
      display: 'block', opacity: '1', duration: "1"
    })
    gsap.to(".footer", {
      position: 'absolute', bottom: '0', marginBottom: '10%', duration: "1"
    })
    gsap.to(".hiddenTitle", {
      display: 'block', opacity: '1', duration: "1"
    })
  }

  const [loading, setLoading] = useState(false)

  const rDirect = () =>{
    setLoading(true)
    setTimeout(()=>{
      history.replace('/thank-you')
    }, 2000)

  }

  const badSelected = (e) => {
    e.preventDefault()
    setBtnAFGBad(false)
    setBtnAFGUndecided(true)
    setBtnAFGGood(true)
  }
  const undecidedSelected = (e) => {
    e.preventDefault()
    setBtnAFGBad(true)
    setBtnAFGUndecided(false)
    setBtnAFGGood(true)
  }
  const goodSelected = (e) => {
    e.preventDefault()
    setBtnAFGBad(true)
    setBtnAFGUndecided(true)
    setBtnAFGGood(false)
  }
  const yesSelected = (e) => {
    e.preventDefault()
    setBtnYes(true)
    setBtnNo(false)
  }
  const noSelected = (e) => {
    e.preventDefault()
    setBtnYes(false)
    setBtnNo(true)

  }
  // ******************************
  const badSelectedG = (e) => {
    e.preventDefault()
    setBtnAFGBadG(false)
    setBtnAFGUndecidedG(true)
    setBtnAFGGoodG(true)
  }
  const undecidedSelectedG = (e) => {
    e.preventDefault()
    setBtnAFGBadG(true)
    setBtnAFGUndecidedG(false)
    setBtnAFGGoodG(true)
  }
  const goodSelectedG = (e) => {
    e.preventDefault()
    setBtnAFGBadG(true)
    setBtnAFGUndecidedG(true)
    setBtnAFGGoodG(false)
  }
  const yesSelectedG = (e) => {
    e.preventDefault()
    setBtnYesG(true)
    setBtnNoG(false)
  }
  const noSelectedG = (e) => {
    e.preventDefault()
    setBtnYesG(false)
    setBtnNoG(true)
  }

if(loading){
  return (<Loading />)
} else{
  return (
    <div>
      <section onClick={afghanToggle} id='accordionEffect' className='accordionEffect section' style={{ backgroundImage: `url(${BlueBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "center center" }}>
        <h1 className='hiddenTitle_' style={{ textAlign: 'center', fontSize: '40px', opacity: '0', display: 'none' }}>AFGHAN KUSH</h1>
        <div className='displayz'>
          <div className='header'>
            <img className='tweedLogo' src={Logo} alt=''></img>
            <img className='tweedLogo hbm' src={HBmenu} alt=''></img>
          </div>



          <Carousel showThumbs={false} preventMovementUntilSwipeScrollTolerance={true} showStatus={false} showIndicators={false} autoPlay={false}>
            {/* One Quickie */}
            <div className='oneQuickie'>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <img style={{ width: '50%' }} className='Qks' src={AfghanKush} alt='1 Quickies'></img>
              </div>

              <img className='Qks' src={OneKush2} alt='1 Quickies'></img>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='Q1' style={{ width: '50%', position: 'absolute', marginTop: '-10%' }} src={OneQuickie} alt=''></img>
                <img className='Q10' style={{ width: '60%', position: 'absolute', marginTop: '-10%', display: 'none', opacity: '0' }} src={TenQuickie} alt=''></img>
              </div>

              {/* <h1 style={{ fontSize: '2.3rem' }}>{info.title}</h1>
            <h4 style={{ fontWeight: 'light' }}>{info.subtitle}</h4> */}
            </div>
            {/* Lineage */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div>
                <img style={{ width: '50%' }} src={Lineage} alt=''></img>
              </div>
              {/* <h1 style={{ fontSize: '2.3rem', fontWeight: 'bolder' }} >LINEAGE</h1>*/}
              <p style={{ fontWeight: 'light' }}>AFGHAN KUSH</p>
              <p style={{ fontSize: '0.7rem', marginTop: '10px', padding: '0px 10% 0px 10%' }}><strong>Tweed Afghan Kush</strong> is an indica-dominant strain with high THC and minimal amounts of CBD. Afghan Kush originates from the Hindu Kush mountain range located along the Pakistan and Afghanistan border.
The buds tend to be dense and covered with trichomes.</p>
              <div style={{ marginTop: '20px' }} className='afks'>
                <img src={GreenKushBoxes} alt='GreenKushBoxes'></img>
              </div>
              <div className='afks'>
                <img src={GreenKushBud} alt='GreenKushBud'></img>
              </div>
            </div>

            {/* Flavour Profile */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* <h1 style={{ fontSize: '2.3rem', fontWeight: 'bolder' }} >FLAVOUR <br /> PROFILE</h1> */}
              <div>
                <img style={{ width: '50%' }} src={FlavourProfile} alt=''></img>
              </div>
              <p style={{ fontWeight: 'light', marginTop: '5px' }}>AFGHAN KUSH</p>
              <div className='fpa'>
                <img src={Fpamobile} alt='flavour profile'></img>
              </div>
            </div>
            {/* Info Capture */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0%' }}>
              <img style={{ width: '70%', marginTop: '20px' }} src={AfghanKushNo} alt=''></img>
              {/* <h1 style={{ fontSize: '2.3rem', fontWeight: 'bolder' }} >AFGHAN KUSH</h1> */}
              {/* <h3 style={{ fontWeight: 'light' }}>21% THC</h3> */}
              <div className='blueProdx'>
                <img src={BlueProd} alt='flavour profile'></img>
              </div>
              <p style={{ marginTop: '-20%' }}>Hi, how would you rate your experience of www.tweedquickies.com?</p>

              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                <div onClick={badSelected} className='choose_feeling'>
                  <img src={btnAFGBad ? BadSelect : GreenBad} alt='bad'></img>
                </div>

                <div onClick={undecidedSelected} className='choose_feeling'>
                  <img src={btnAFGUndecided ? UndecidedSelect : GreenUndecided} alt='undecided'></img>
                </div>

                <div onClick={goodSelected} className='choose_feeling'>
                  <img src={btnAFGGood ? GoodSelect : GreenGood} alt='good'></img>
                </div>
              </div>

              <p>Are you planning to buy Tweed Quickies?</p>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>

                <div onClick={noSelected} style={{ marginRight: '40px' }} className='choose_feeling'>
                  <img src={btnYes ? YesSelect : Yes2} alt='Yes'></img>
                </div>

                <div onClick={yesSelected} className='choose_feeling'>
                  <img src={btnNo ? NoSelect : No2} alt='No'></img>
                </div>
              </div>
              <div>
                <div onClick={rDirect} style={{ padding: '4px', border: '1px solid white', width: '100px', borderRadius: '12px', marginTop: '10px' }}><h2>Send</h2></div>
              </div>


            </div>


          </Carousel>

        </div>
      </section>




      {/* Section 2 */}
      <section onClick={greenToggle} id='accordionEffect' className='accordionEffect section2' style={{ backgroundImage: `url(${GreenBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "center center" }}>
        <h1 className='hiddenTitle' style={{ textAlign: 'center', fontSize: '40px' }}>GREEN CUSH</h1>
        <div className='noDisplay'>
          <div className='header'>
            <img className='tweedLogo' src={Logo} alt=''></img>
            <img className='tweedLogo hbm' src={HBmenu} alt=''></img>
          </div>



          <Carousel showThumbs={false} showStatus={false} preventMovementUntilSwipeScrollTolerance={true} showIndicators={false} autoPlay={false}>
            {/* One Quickie */}
            <div className='oneQuickie'>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <img style={{ width: '50%' }} className='Qks' src={GreenCush} alt='1 Quickies'></img>
              </div>
              <img className='Qks' src={OneKush} alt='1 Quickies'></img>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='Q1G' style={{ width: '50%', position: 'absolute', marginTop: '10%' }} src={OneQuickie} alt=''></img>
                <img className='Q10G' style={{ width: '60%', position: 'absolute', marginTop: '10%', display: 'none', opacity: '0' }} src={TenQuickie} alt=''></img>
              </div>
            </div>
            {/* Lineage */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div>
                <img style={{ width: '50%' }} src={Lineage} alt=''></img>
              </div>
              <p style={{ fontWeight: 'light' }}>GREEN CUSH</p>
              <p style={{ fontSize: '0.7rem', marginTop: '10px', padding: '0px 10% 0px 10%' }}><strong>Tweed Green Cush</strong> is a sativa-dominant strain with high THC and minimal amounts of CBD. Green Cush is a cross of '89 Super Sativa Seed Club Skunk #1 and an Afghani Landrace strain. The buds tend to be dense and covered with trichomes.</p>
              <div style={{ marginTop: '20px' }} className='afks'>
                <img src={GreenKushBox2} alt='GreenKushBoxes'></img>
              </div>
              <div className='afks'>
                <img src={GreenKushBud2} alt='GreenKushBud'></img>
              </div>
            </div>

            {/* Flavour Profile */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div>
                <img style={{ width: '50%' }} src={FlavourProfile} alt=''></img>
              </div>
              <p style={{ fontWeight: 'light' }}>GREEN CUSH</p>
              <div className='fpa'>
                <img src={Fpamobile2} alt='flavour profile'></img>
              </div>
            </div>
            {/* Info Capture */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0%' }}>
              <img style={{ width: '70%', marginTop: '20px' }} src={GreenCushNothc} alt=''></img>
              <h3 style={{ fontWeight: 'light' }}>21% THC</h3>
              <div className='blueProdx'>
                <img src={GreenProd} alt='flavour profile'></img>
              </div>
              <p style={{ marginTop: '-20%' }}>Hi, how would you rate your experience of www.tweedquickies.com?</p>

              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>

                <div onClick={badSelectedG} className='choose_feeling'>
                  <img src={btnAFGBadG ? BadSelect : Bad} alt='bad'></img>
                </div>
                <div onClick={undecidedSelectedG} className='choose_feeling'>
                  <img src={btnAFGUndecidedG ? UndecidedSelect : Undecided} alt='undecided'></img>
                </div>
                <div onClick={goodSelectedG} className='choose_feeling'>
                  <img src={btnAFGGoodG ? GoodSelect : Good} alt='good'></img>
                </div>
              </div>

              <p>Are you planning to buy Tweed Quickies?</p>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>

                <div onClick={yesSelectedG} style={{ marginRight: '40px' }} className='choose_feeling'>
                  <img src={btnYesG ? Yes : YesSelect} alt='bad'></img>
                </div>
                <div onClick={noSelectedG} className='choose_feeling'>
                  <img src={btnNoG ? No : NoSelect} alt='good'></img>
                </div>
              </div>
              <div>
                <div onClick={rDirect} style={{ padding: '4px', border: '1px solid white', width: '100px', borderRadius: '12px', marginTop: '10px' }}><h2>Send</h2></div>
              </div>


            </div>
          </Carousel>
        </div>
      </section>


    </div>


  )
}

 

}

export default Info