import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { gsap, Power3 } from 'gsap'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Afghan Assets

import AfghanOneQuickie from '../Assets/Afghan/1Quickie.svg'
import AfghanTenQuickie from '../Assets/Afghan/10Quickies.svg'
import AfghanGif from "./../Assets/Kush.gif";
import AfghanStrainActivities from '../Assets/Afghan/Afghan_Strain_Activties.svg'
import AfghanFlavorProfile from '../Assets/Afghan/Afghan_Flavor_Profile.svg'
import AfghanKushTitle from '../Assets/Afghan/Afghan_Indica.svg' //small right
import AfghanKushTitle2 from '../Assets/Afghan/Afghan_Indica_2.svg'
import AfghanKushCase from '../Assets/Afghan/afghan-kush-case.png'
import LogoBlue from '../Assets/Afghan/Tweed_Logo_Blue.svg'
import AfghanLineage from '../Assets/Afghan/Afghan_Lineage.svg'
import AfghanKushBud from '../Assets/Afghan/afghan-kush-bud.png'
import AfghanHamburgMenu from '../Assets/Afghan/Hamburger_Blue.svg'
import AfghanYesIcon from '../Assets/Afghan/Afghan_Yes_Icon.svg'
import AfghanNoIcon from '../Assets/Afghan/Afghan_No_Icon.svg'
import AfghanBadIcon from '../Assets/Afghan/Afghan_Bad_Icon.svg'
import AfghanGoodIcon from '../Assets/Afghan/Afghan_Good_Icon.svg'
import AfghanUndecidedIcon from '../Assets/Afghan/Afghan_Undecided_Icon.svg'

// Green Cush Assets
import GreenProd from '../Assets/green-cush/green-cush-container.svg'
import LogoRed from '../Assets/tweed-logo-red.svg'
import GreenKushBud2 from '../Assets/green-cush/green-cush-bud.png'
import GreenKushBox2 from '../Assets/green-cush/green-cush-boxes.png'
import GreenBg from '../Assets/green-cush/green-cush-mobile.jpeg'
import GreenCushNothc from '../Assets/green-cush/GreenCush_NOTHC.svg'
import GreenCush from '../Assets/green-cush/GreenCush_sativa.svg'
import GreenBad from '../Assets/bad-icon.svg'
import GreenGood from '../Assets/good-icon.svg'
import GreenUndecided from '../Assets/undecided-icon.svg'
import GreenCushGif from "./../Assets/green-cush/Green.gif";

// Chemdawg Assets

import Fpamobile2 from '../Assets/bud2.png'

// General Assets
import Yes from '../Assets/yes.svg'
import No from '../Assets/no.svg'
import Bad from '../Assets/bad.svg'
import Good from '../Assets/good.svg'
import Undecided from '../Assets/undecided.svg'
import BadSelect from '../Assets/Tweed_Quickies/Buttons/Bad_Select.svg'
import UndecidedSelect from '../Assets/Tweed_Quickies/Buttons/Undecided_Select.svg'
import GoodSelect from '../Assets/Tweed_Quickies/Buttons/Good_Select.svg'
import YesSelect from '../Assets/Tweed_Quickies/Buttons/Yes_Select.svg'
import NoSelect from '../Assets/Tweed_Quickies/Buttons/No_Select.svg'
import Loading from '../components/Loading/Loading';
import AngledJoint from '../Assets/Angled_joint.png';


import FlavourProfile from '../Assets/Tweed_Quickies/FlavourProfile.svg'


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

  const afghanContainer = useRef()
  const [btnAFGBad, setBtnAFGBad] = useState(null)
  const [btnAFGUndecided, setBtnAFGUndecided] = useState(null)
  const [btnAFGGood, setBtnAFGGood] = useState(null)
  const [btnNo, setBtnNo] = useState(null)
  const [btnYes, setBtnYes] = useState(null)
  // **************************************
  const greenCushContainer = useRef()
  const [btnAFGBadG, setBtnAFGBadG] = useState(null)
  const [btnAFGUndecidedG, setBtnAFGUndecidedG] = useState(null)
  const [btnAFGGoodG, setBtnAFGGoodG] = useState(null)
  const [btnNoG, setBtnNoG] = useState(null)
  const [btnYesG, setBtnYesG] = useState(null)

  const chemdawgContainer = useRef()

  var badG, undecidedG, goodG


  // function toggleAccordion() {
  //   section.removeClass("active");
  //   this.addClass("active");
  // //   green_cush_container.removeClass("active");
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

    gsap.to(".afghan_container", {
      opacity: 1,
      height: "90vh"
    })
    gsap.to(".green_cush_container", {
      opacity: 1,
      height: "10vh"
    })
    gsap.to(".chemdawg_container", {
      opacity: 1,
      height: "10vh"
    })
    gsap.to(".footer", {
      position: 'absolute', bottom: '0', marginBottom: '10%', duration: "1"
    })

  }, [])

  const afghanToggle = () => {
    gsap.to(".afghanHiddenTitle", {
      display: "none", duration: "0"
    })
    gsap.to(".chemdawgNoDisplay", {
      opacity: '0', display: "none", duration: "1", pointerEvents: 'none'
    })
    gsap.to(".greencushNoDisplay", {
      opacity: '0', display: "none", duration: "1", pointerEvents: 'none'
    })
    gsap.to(".afghan_container", {
      height: '90vh', duration: "1"
    })
    gsap.to(".green_cush_container", {
      height: '10vh', duration: "1"
    })
    gsap.to(".chemdawg_container", {
      height: '10vh', duration: "1"
    })
    gsap.to(".afghanNoDisplay", {
      display: 'block', opacity: '1', duration: "1", pointerEvents: 'initial'
    })
    gsap.to(".footer", {
      position: 'absolute', bottom: '0', marginBottom: '10%', duration: "1"
    })
    gsap.to(".greencushHiddenTitle", {
      display: 'block', opacity: '1', duration: "1"
    })
    gsap.to(".chemdawgHiddenTitle", {
      display: 'block', opacity: '1', duration: "1"
    })
  }

  const greenToggle = () => {
    gsap.to(".greencushHiddenTitle", {
      display: "none", duration: "0"
    })
    gsap.to(".afghanNoDisplay", {
      opacity: '0', display: "none", duration: "1", pointerEvents: 'none'
    })
    gsap.to(".chemdawgNoDisplay", {
      opacity: '0', display: "none", duration: "1", pointerEvents: 'none'
    })
    gsap.to(".green_cush_container", {
      height: '90vh', duration: "1"
    })
    gsap.to(".chemdawg_container", {
      height: '10vh', duration: "1"
    })
    gsap.to(".afghan_container", {
      height: '10vh', duration: "1"
    })
    gsap.to(".greencushNoDisplay", {
      display: 'block', opacity: '1', duration: "1", pointerEvents: 'initial'
    })
    gsap.to(".footer", {
      position: 'absolute', bottom: '0', marginBottom: '-20%', duration: "1"
    })
    gsap.to(".afghanHiddenTitle", {
      display: 'block', opacity: '1', duration: "1"
    })
    gsap.to(".chemdawgHiddenTitle", {
      display: 'block', opacity: '1', duration: "1"
    })
  }

  const chemdawgToggle = () => {
    gsap.to(".chemdawgHiddenTitle", {
      display: "none", duration: "0"
    })
    gsap.to(".afghanNoDisplay", {
      opacity: '0', display: "none", duration: "1", pointerEvents: 'none'
    })
    gsap.to(".greencushNoDisplay", {
      opacity: '0', display: "none", duration: "1", pointerEvents: 'none'
    })
    gsap.to(".chemdawg_container", {
      height: '90vh', duration: "1"
    })
    gsap.to(".green_cush_container", {
      height: '10vh', duration: "1"
    })
    gsap.to(".afghan_container", {
      height: '10vh', duration: "1"
    })
    gsap.to(".chemdawgNoDisplay", {
      display: 'block', opacity: '1', duration: "1", pointerEvents: 'initial'
    })
    gsap.to(".footer", {
      position: 'absolute', bottom: '0', marginBottom: '-20%', duration: "1"
    })
    gsap.to(".afghanHiddenTitle", {
      display: 'block', opacity: '1', duration: "1"
    })
    gsap.to(".greencushHiddenTitle", {
      display: 'block', opacity: '1', duration: "1"
    })
  }

  // const toggleVisibleClasses = () => {
  //   if (afghanContainer.current.className.includes('closed')) {
  //     afghanContainer.current.className = 'accordionEffect open afghan_container'
  //   } else {
  //     afghanContainer.current.className = 'accordionEffect closed afghan_container'
  //   }

  //   if (greenCushContainer.current.className.includes('closed')) {
  //     greenCushContainer.current.className = 'accordionEffect open green_cush_container'
  //   } else {
  //     greenCushContainer.current.className = 'accordionEffect closed green_cush_container'
  //   }
  // }


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
      <section onClick={afghanToggle} ref={afghanContainer} id='accordionEffect' className='accordionEffect open afghan_container'>
        <h1 className='afghanHiddenTitle' style={{ textAlign: 'center', fontSize: '40px', opacity: '0', display: 'none' }}>AFGHAN KUSH</h1>
        <div className='afghanNoDisplay'>
          <div className='header'>
            <img className='tweedLogo' src={LogoBlue} alt=''></img>
            <img className='tweedLogo hbm' src={AfghanHamburgMenu} alt=''></img>
          </div>

          <Carousel showThumbs={false} preventMovementUntilSwipeScrollTolerance={true} showStatus={false} showIndicators={false} autoPlay={false}>
            {/* One Quickie */}
            <div className='oneQuickie'>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <img style={{ width: '50%' }} className='Qks' src={AfghanKushTitle} alt='1 Quickies'></img>
              </div>

              <img className='Qks' src={AfghanGif} alt='1 Quickies'></img>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='Q1' style={{ width: '50%', position: 'absolute', marginTop: '-10%' }} src={AfghanOneQuickie} alt=''></img>
                <img className='Q10' style={{ width: '60%', position: 'absolute', marginTop: '-10%', display: 'none', opacity: '0' }} src={AfghanTenQuickie} alt=''></img>
              </div>

              <div className='strainActivities Q10' style={{ marginTop: '50px', display: 'none', opacity: '0' }}>
                <img src={AfghanStrainActivities} alt='Strain Activities'></img>
              </div>

            </div>
            {/* Lineage */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              <h2>LINEAGE</h2>
              <p style={{ fontWeight: 'light' }}>AFGHAN KUSH</p>
              <p style={{ fontSize: '0.7rem', marginTop: '10px', padding: '0px 10% 0px 10%' }}>
                <strong>Tweed Afghan Kush</strong> is an indica-dominant strain with high THC and minimal amounts of CBD.
                Afghan Kush originates from the Hindu Kush mountain range located along the Pakistan and Afghanistan border.
                The buds tend to be dense and covered with trichomes.
              </p>

              <div style={{ marginTop: '20px' }} className='afks'>
                <img src={AfghanLineage} alt='Afghan Kush Lineage'></img>
              </div>

              <div className='afks'>
                <img src={AfghanKushBud} alt='GreenKushBud'></img>
              </div>
            </div>

            {/* Flavour Profile */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2>FLAVOR PROFILE</h2>
              <p style={{ fontWeight: 'light', marginTop: '5px' }}>AFGHAN KUSH</p>
              <div className='angledQuickie'>
                <img src={AngledJoint} alt='Angled Quickie'></img>
              </div>
              <div className='strainFlavorProfile'>
                <img src={AfghanFlavorProfile} alt='Strain Activities'></img>
              </div>
            </div>

            {/* Info Capture */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0%' }}>
              <div className='caseContainer'>
                <img src={AfghanKushCase} alt='flavour profile'></img>
              </div>

              <img style={{ width: '70%', marginTop: '20px', marginBottom: '20px' }} src={AfghanKushTitle2} alt=''></img>

              <p>Hi, how would you rate your experience of www.tweedquickies.com?</p>

              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                <div onClick={badSelected} className='choose_feeling'>
                  <img src={btnAFGBad ? BadSelect : AfghanBadIcon} alt='bad'></img>
                </div>

                <div onClick={undecidedSelected} className='choose_feeling'>
                  <img src={btnAFGUndecided ? UndecidedSelect : AfghanUndecidedIcon} alt='undecided'></img>
                </div>

                <div onClick={goodSelected} className='choose_feeling'>
                  <img src={btnAFGGood ? GoodSelect : AfghanGoodIcon} alt='good'></img>
                </div>
              </div>

              <p>Are you planning to buy Tweed Quickies?</p>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>

                <div onClick={noSelected} style={{ marginRight: '40px' }} className='choose_feeling'>
                  <img src={btnYes ? YesSelect : AfghanYesIcon} alt='Yes'></img>
                </div>

                <div onClick={yesSelected} className='choose_feeling'>
                  <img src={btnNo ? NoSelect : AfghanNoIcon} alt='No'></img>
                </div>
              </div>
              <div>
                <div onClick={rDirect} style={{ padding: '4px', border: '1px solid white', width: '100px', borderRadius: '12px', marginTop: '10px' }}><h2>Send</h2></div>
              </div>


            </div>


          </Carousel>

        </div>
      </section>


      {/* Green Cush */}
      <section onClick={greenToggle} ref={greenCushContainer} id='accordionEffect' className='accordionEffect closed green_cush_container'>
        <h1 className='greencushHiddenTitle' style={{ textAlign: 'center', fontSize: '40px' }}>GREEN CUSH</h1>
        <div className='greencushNoDisplay'>
          <div className='header'>
            <img className='tweedLogo' src={LogoRed} alt=''></img>
            <img className='tweedLogo hbm' src={AfghanHamburgMenu} alt=''></img>
          </div>

          <Carousel showThumbs={false} showStatus={false} preventMovementUntilSwipeScrollTolerance={true} showIndicators={false} autoPlay={false}>
            {/* One Quickie */}
            <div className='oneQuickie'>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <img style={{ width: '50%' }} className='Qks' src={GreenCush} alt='1 Quickies'></img>
              </div>
              <img className='Qks' src={GreenCushGif} alt='1 Quickies'></img>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='Q1G' style={{ width: '50%', position: 'absolute', marginTop: '10%' }} src={AfghanOneQuickie} alt=''></img>
                <img className='Q10G' style={{ width: '60%', position: 'absolute', marginTop: '10%', display: 'none', opacity: '0' }} src={AfghanTenQuickie} alt=''></img>
              </div>
            </div>

            {/* Lineage */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              <p style={{ fontWeight: 'light' }}>GREEN CUSH</p>
              <p style={{ fontSize: '0.7rem', marginTop: '10px', padding: '0px 10% 0px 10%' }}>
                <strong>Tweed Green Cush</strong> is a sativa-dominant strain with high THC and
                minimal amounts of CBD. Green Cush is a cross of '89 Super Sativa Seed Club Skunk
                #1 and an Afghani Landrace strain. The buds tend to be dense and covered with trichomes.
              </p>

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
              <div className='angledQuickie'>
                <img src={Fpamobile2} alt='flavour profile'></img>
              </div>
            </div>

            {/* Info Capture */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0%' }}>
              <img style={{ width: '70%', marginTop: '20px' }} src={GreenCushNothc} alt=''></img>
              <h3 style={{ fontWeight: 'light' }}>21% THC</h3>
              <div className='caseContainer'>
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

      {/* Chemdawg */}
      <section onClick={chemdawgToggle} ref={chemdawgContainer} id='accordionEffect' className='accordionEffect closed chemdawg_container'>
        <h1 className='chemdawgHiddenTitle' style={{ textAlign: 'center', fontSize: '40px' }}>CHEMDAWG</h1>
        <div className='chemdawgNoDisplay'>
          <div className='header'>
            <img className='tweedLogo' src={LogoRed} alt=''></img>
            <img className='tweedLogo hbm' src={AfghanHamburgMenu} alt=''></img>
          </div>

          <Carousel showThumbs={false} showStatus={false} preventMovementUntilSwipeScrollTolerance={true} showIndicators={false} autoPlay={false}>
            {/* One Quickie */}
            <div className='oneQuickie'>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <img style={{ width: '50%' }} className='Qks' src={GreenCush} alt='1 Quickies'></img>
              </div>
              <img className='Qks' src={GreenCushGif} alt='1 Quickies'></img>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='Q1G' style={{ width: '50%', position: 'absolute', marginTop: '10%' }} src={AfghanOneQuickie} alt=''></img>
                <img className='Q10G' style={{ width: '60%', position: 'absolute', marginTop: '10%', display: 'none', opacity: '0' }} src={AfghanTenQuickie} alt=''></img>
              </div>
            </div>
            {/* Lineage */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <p style={{ fontWeight: 'light' }}>CHEMDAWG</p>
              <p style={{ fontSize: '0.7rem', marginTop: '10px', padding: '0px 10% 0px 10%' }}>
                <strong>Tweed Green Cush</strong> is a sativa-dominant strain with high THC and
                minimal amounts of CBD. Green Cush is a cross of '89 Super Sativa Seed Club
                Skunk #1 and an Afghani Landrace strain. The buds tend to be dense and covered
                with trichomes.
              </p>

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
              <p style={{ fontWeight: 'light' }}>CHEMDAWG</p>
              <div className='angledQuickie'>
                <img src={Fpamobile2} alt='flavour profile'></img>
              </div>
            </div>

            {/* Info Capture */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0%' }}>
              <img style={{ width: '70%', marginTop: '20px' }} src={GreenCushNothc} alt=''></img>
              <h3 style={{ fontWeight: 'light' }}>21% THC</h3>
              <div className='caseContainer'>
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