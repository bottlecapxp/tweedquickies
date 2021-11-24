import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { gsap, Power3 } from 'gsap'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Afghan Assets

import AfghanOneQuickie from '../Assets/Afghan/1Quickie.svg'
import AfghanTenQuickie from '../Assets/Afghan/10Quickies.svg'
import AfghanGif from "./../Assets/Afghan/Afghan_Animation.gif";
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

import GreenCushLineage from '../Assets/Greencush/Greencush_Lineage.svg'
import GreenCushStrainActivities from '../Assets/Greencush/Greencush_Strain_Activities.svg'
import GreenCushFlavorProfile from '../Assets/Greencush/Greencush_Flavor_Profiles.svg'
import GreenCushCase from '../Assets/Greencush/green-cush-case.png'
import GreenCushBud2 from '../Assets/Greencush/green-cush-bud.png'
import GreenCushTitle2 from '../Assets/Greencush/Greencush_Title2.svg'
import GreenCushTitle from '../Assets/Greencush/Greencush_Title.svg'
import GreenCushGif from "./../Assets/Greencush/Greencush_Animation.gif";

// Chemdawg Assets
import ChemdawgGif from "./../Assets/Chemdawg/Chemdawg_Animation.gif";
import ChemdawgLineage from '../Assets/Chemdawg/Chemdawg_Lineage.svg'
import ChemdawgStrainActivities from '../Assets/Chemdawg/Chemdawg_Strain_Activities.svg'
import ChemdawgFlavorProfile from '../Assets/Chemdawg/Chemdawg_Flavor_Profiles.svg'
import ChemdawgTitle from '../Assets/Chemdawg/Chemdawg_Title.svg' //small right
import ChemdawgTitle2 from '../Assets/Chemdawg/Chemdawg_Title2.svg'
import ChemdawgBud from '../Assets/Chemdawg/chemdawg-bud.png'
import ChemdawgCase from '../Assets/Chemdawg/chemdawg-case.png'
import Fpamobile2 from '../Assets/bud2.png'

// General Assets
import LogoRed from '../Assets/tweed-logo-red.svg'
import RedHamburgerMenu from '../Assets/Hamburger_Red.svg'
import RedOneQuickie from '../Assets/Red_1Quickie.svg'
import RedTenQuickie from '../Assets/Red_10Quickies.svg'
import RedYesIcon from '../Assets/Red_Yes_Icon.svg'
import RedNoIcon from '../Assets/Red_No_Icon.svg'
import RedBadIcon from '../Assets/Red_Bad_Icon.svg'
import RedGoodIcon from '../Assets/Red_Good_Icon.svg'
import RedUndecidedIcon from '../Assets/Red_Undecided_Icon.svg'
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
    } else if(props.match.params.strain === 'kush'){
      afghanToggle()
    } else if(props.match.params.strain === 'chemdawg'){
      chemdawgToggle()
    } else {
      gsap.to(".afghan_container", {
        opacity: 1,
        height: "90vh",
      })
      gsap.to(".green_cush_container", {
        opacity: 1,
        height: "60px",
      })
      gsap.to(".chemdawg_container", {
        opacity: 1,
        height: "60px",
      })
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

    gsap.to(".footer", {
      position: 'absolute', bottom: '0', marginBottom: '10%', duration: "0.5"
    })

  }, [])

  const navigateToOptions = () =>{
    history.push('/option')
  }

  const afghanToggle = () => {

    gsap.to(".afghanHiddenTitle", {
      display: "none", duration: "0"
    })
    gsap.to(".chemdawgNoDisplay", {
      opacity: '0', display: "none", duration: "0.5", pointerEvents: 'none'
    })
    gsap.to(".greencushNoDisplay", {
      opacity: '0', display: "none", duration: "0.5", pointerEvents: 'none'
    })
    gsap.to(".afghan_container", {
      duration: "0.5", height: "100vh"
    })
    gsap.to(".green_cush_container", {
      duration: "0.5", height: "60px"
    })
    gsap.to(".chemdawg_container", {
      duration: "0.5" , height: "60px"
    })
    gsap.to(".afghanNoDisplay", {
      display: 'block', opacity: '1', duration: "0.5", pointerEvents: 'initial'
    })
    gsap.to(".footer", {
      position: 'absolute', bottom: '0', marginBottom: '10%', duration: "0.5"
    })
    gsap.to(".greencushHiddenTitle", {
      display: 'block', opacity: '1', duration: "0.5"
    })
    gsap.to(".chemdawgHiddenTitle", {
      display: 'block', opacity: '1', duration: "0.5"
    })
  }

  const greenToggle = () => {
    gsap.to(".greencushHiddenTitle", {
      display: "none", duration: "0"
    })
    gsap.to(".afghanNoDisplay", {
      opacity: '0', display: "none", duration: "0.5", pointerEvents: 'none'
    })
    gsap.to(".chemdawgNoDisplay", {
      opacity: '0', display: "none", duration: "0.5", pointerEvents: 'none'
    })
    gsap.to(".green_cush_container", {
      duration: "0.5", height: "100vh"
    })
    gsap.to(".chemdawg_container", {
      duration: "0.5", height: "60px"
    })
    gsap.to(".afghan_container", {
      duration: "0.5", height: "60px"
    })
    gsap.to(".greencushNoDisplay", {
      display: 'block', opacity: '1', duration: "0.5", pointerEvents: 'initial'
    })
    gsap.to(".footer", {
      position: 'absolute', bottom: '0', marginBottom: '-20%', duration: "0.5"
    })
    gsap.to(".afghanHiddenTitle", {
      display: 'block', opacity: '1', duration: "0.5"
    })
    gsap.to(".chemdawgHiddenTitle", {
      display: 'block', opacity: '1', duration: "0.5"
    })
  }

  const chemdawgToggle = () => {
    gsap.to(".chemdawgHiddenTitle", {
      display: "none", duration: "0"
    })
    gsap.to(".afghanNoDisplay", {
      opacity: '0', display: "none", duration: "0.5", pointerEvents: 'none'
    })
    gsap.to(".greencushNoDisplay", {
      opacity: '0', display: "none", duration: "0.5", pointerEvents: 'none'
    })
    gsap.to(".chemdawg_container", {
      duration: "0.5", height: "100vh"
    })
    gsap.to(".green_cush_container", {
      duration: "0.5", height: "60px"
    })
    gsap.to(".afghan_container", {
      duration: "0.5", height: "60px"
    })
    gsap.to(".chemdawgNoDisplay", {
      display: 'block', opacity: '1', duration: "0.5", pointerEvents: 'initial'
    })
    gsap.to(".footer", {
      position: 'absolute', bottom: '0', marginBottom: '-20%', duration: "0.5"
    })
    gsap.to(".afghanHiddenTitle", {
      display: 'block', opacity: '1', duration: "0.5"
    })
    gsap.to(".greencushHiddenTitle", {
      display: 'block', opacity: '1', duration: "0.5"
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
      <section onClick={afghanToggle} ref={afghanContainer} id='afghanContainer' className='accordionEffect open afghan_container'>
        <h1 className='afghanHiddenTitle' style={{ textAlign: 'center', fontSize: '40px', opacity: '0', display: 'none' }}>AFGHAN KUSH</h1>
        <div className='afghanNoDisplay'>
          <div className='header'>
            <img className='tweedLogo' src={LogoBlue} alt=''></img>
            <img className='tweedLogo hbm' src={AfghanHamburgMenu} onClick={navigateToOptions} alt=''></img>
          </div>

          <Carousel showThumbs={false} preventMovementUntilSwipeScrollTolerance={true} showStatus={false} showIndicators={false} autoPlay={false}>
            {/* One Quickie */}
            <div className='oneQuickie'>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <img style={{ width: '50%' }} className='Qks' src={AfghanKushTitle} alt='Afghan Title'></img>
              </div>

              <img className='Qks' src={AfghanGif} alt='1 Quickies'></img>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='Q1' style={{ width: '50%', position: 'absolute', marginTop: '-10%' }} src={AfghanOneQuickie}  alt='1 Quickie 0.35mg per Quickie'></img>
                <img className='Q10' style={{ width: '60%', position: 'absolute', marginTop: '-10%', display: 'none', opacity: '0' }} src={AfghanTenQuickie}  alt='10 Quickies 0.35mg per Quickie'></img>
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

              <div className='budImg'>
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
            <div className="largeSlide" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0%' }}>
              <img style={{ width: '70%', marginTop: '20px', marginBottom: '20px' }} src={AfghanKushTitle2} alt=''></img>

              <div className='caseContainer'>
                <img src={AfghanKushCase} alt='flavour profile'></img>
              </div>

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

              <div className="submitButton" onClick={rDirect}>
                <h3>Send</h3>
              </div>
            </div>
          </Carousel>
          <p className='footerP'>This communication is intended for adults only and should not be shared with minors. There are risks associated with cannabis use. For information, search online “Health Canada - cannabis health effects”.</p>
        </div>
      </section>


      {/* Green Cush */}
      <section onClick={greenToggle} ref={greenCushContainer} id='greencushContainer' className='accordionEffect closed green_cush_container'>
        <h1 className='greencushHiddenTitle' style={{ textAlign: 'center', fontSize: '40px' }}>GREEN CUSH</h1>
        <div className='greencushNoDisplay'>
          <div className='header'>
            <img className='tweedLogo' src={LogoRed} alt=''></img>
            <img className='tweedLogo hbm' src={RedHamburgerMenu} onClick={navigateToOptions} alt=''></img>
          </div>

          <Carousel showThumbs={false} showStatus={false} preventMovementUntilSwipeScrollTolerance={true} showIndicators={false} autoPlay={false}>
            {/* One Quickie */}
            <div className='oneQuickie'>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <img style={{ width: '30%', marginBottom: '-45px' }} className='Qks' src={GreenCushTitle} alt='Green Cush Title'></img>
              </div>
              <img className='Qks' src={GreenCushGif} alt='1 Quickies'></img>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='Q1G' style={{ width: '50%', position: 'absolute', marginTop: '10%' }} src={RedOneQuickie}  alt='1 Quickie 0.35mg per Quickie'></img>
                <img className='Q10G' style={{ width: '60%', position: 'absolute', marginTop: '10%', display: 'none', opacity: '0' }} src={RedTenQuickie}  alt='10 Quickies 0.35mg per Quickie'></img>
              </div>

              <div className='strainActivities Q10' style={{ marginTop: '100px', display: 'none', opacity: '0' }}>
                <img src={GreenCushStrainActivities} alt='Strain Activities'></img>
              </div>
            </div>

            {/* Lineage */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

              <h2>LINEAGE</h2>
              <p style={{ fontWeight: 'light' }}>GREEN CUSH</p>
              <p style={{ fontSize: '0.7rem', marginTop: '10px', padding: '0px 10% 0px 10%' }}>
                <strong>Tweed Green Cush</strong> is a sativa-dominant strain with high THC and minimal amounts of CBD.
                Green Cush is a cross of '89 Super Sativa Seed Club Skunk #1 and an Afghani Landrace
                strain. The buds tend to be dense and covered with trichomes.
              </p>

              <div style={{ marginTop: '20px' }} className='afks'>
                <img src={GreenCushLineage} alt='Green Cush Lineage'></img>
              </div>

              <div className='budImg'>
                <img src={GreenCushBud2} alt='GreenKushBud'></img>
              </div>
            </div>

            {/* Flavour Profile */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2>FLAVOR PROFILE</h2>
              <p style={{ fontWeight: 'light', marginTop: '5px' }}>GREEN CUSH</p>
              <div className='angledQuickie'>
                <img src={AngledJoint} alt='Angled Quickie'></img>
              </div>
              <div className='strainFlavorProfile'>
                <img src={GreenCushFlavorProfile} alt='Strain Activities'></img>
              </div>
            </div>

            {/* Info Capture */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0%' }}>
              <img style={{ width: '70%', marginTop: '20px', marginBottom: '20px' }} src={GreenCushTitle2} alt=''></img>

              <div className='caseContainer'>
                <img src={GreenCushCase} alt='flavour profile'></img>
              </div>

              <p>Hi, how would you rate your experience of www.tweedquickies.com?</p>

              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                <div onClick={badSelected} className='choose_feeling'>
                  <img src={btnAFGBad ? BadSelect : RedBadIcon} alt='bad'></img>
                </div>

                <div onClick={undecidedSelected} className='choose_feeling'>
                  <img src={btnAFGUndecided ? UndecidedSelect : RedUndecidedIcon} alt='undecided'></img>
                </div>

                <div onClick={goodSelected} className='choose_feeling'>
                  <img src={btnAFGGood ? GoodSelect : RedGoodIcon} alt='good'></img>
                </div>
              </div>

              <p>Are you planning to buy Tweed Quickies?</p>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>

                <div onClick={noSelected} style={{ marginRight: '40px' }} className='choose_feeling'>
                  <img src={btnYes ? YesSelect : RedYesIcon} alt='Yes'></img>
                </div>

                <div onClick={yesSelected} className='choose_feeling'>
                  <img src={btnNo ? NoSelect : RedNoIcon} alt='No'></img>
                </div>
              </div>

              <div className="submitButton" onClick={rDirect}>
                <h3>Send</h3>
              </div>
            </div>
          </Carousel>
          <p className='footerP'>This communication is intended for adults only and should not be shared with minors. There are risks associated with cannabis use. For information, search online “Health Canada - cannabis health effects”.</p>
        </div>
      </section>

      {/* Chemdawg */}
      <section onClick={chemdawgToggle} ref={chemdawgContainer} id='chemdawgContainer' className='accordionEffect closed chemdawg_container'>
        <h1 className='chemdawgHiddenTitle' style={{ textAlign: 'center', fontSize: '40px' }}>CHEMDAWG</h1>
        <div className='chemdawgNoDisplay'>
          <div className='header'>
            <img className='tweedLogo' src={LogoRed} alt=''></img>
            <img className='tweedLogo hbm' src={RedHamburgerMenu} onClick={navigateToOptions} alt=''></img>
          </div>

          <Carousel showThumbs={false} showStatus={false} preventMovementUntilSwipeScrollTolerance={true} showIndicators={false} autoPlay={false}>
            {/* One Quickie */}
            <div className='oneQuickie'>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                <img style={{ width: '30%', marginBottom: '-100px' }} className='Qks' src={ChemdawgTitle} alt='Chemdawg Title'></img>
              </div>
              <img className='Qks' src={ChemdawgGif} alt='1 Quickies'></img>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className='Q1' style={{ width: '50%', position: 'absolute', marginTop: '10%' }} src={RedOneQuickie} alt='1 Quickie 0.35mg per Quickie'></img>
                <img className='Q10' style={{ width: '60%', position: 'absolute', marginTop: '10%', display: 'none', opacity: '0' }} src={RedTenQuickie} alt='10 Quickies 0.35 mg per Quickie'></img>
              </div>

              <div className='strainActivities Q10' style={{ marginTop: '100px', display: 'none', opacity: '0' }}>
                <img src={ChemdawgStrainActivities} alt='Strain Activities'></img>
              </div>
            </div>
            {/* Lineage */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img style={{ width: '70%', marginTop: '20px', marginBottom: '20px' }} src={ChemdawgTitle} alt=''></img>

              <p style={{ fontSize: '0.7rem', marginTop: '10px', padding: '0px 10% 0px 10%' }}>
                <strong>Tweed Chemdawg</strong> with origins from Thai and Nepali landrace strains, Chemdawg is
                known for its distinct, diesel-like aroma. Pungent and sharp, you’ll be able
                to smell this strain from a mile away.
              </p>

              <div style={{ marginTop: '20px' }} className='afks'>
                <img src={ChemdawgLineage} alt='GreenKushBoxes'></img>
              </div>

              <div className='budImg'>
                <img src={ChemdawgBud} alt='GreenKushBud'></img>
              </div>
            </div>

            {/* Flavour Profile */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2>FLAVOR PROFILE</h2>
              <p style={{ fontWeight: 'light' }}>CHEMDAWG</p>
              <div className='angledQuickie'>
                <img src={AngledJoint} alt='flavour profile'></img>
              </div>

              <div className='strainFlavorProfile'>
                <img src={ChemdawgFlavorProfile} alt='Strain Activities'></img>
              </div>
            </div>

            {/* Info Capture */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0%' }}>
              <img style={{ width: '70%', marginTop: '20px', marginBottom: '20px' }} src={ChemdawgTitle2} alt=''></img>

              <div className='caseContainer'>
                <img src={ChemdawgCase} alt='flavour profile'></img>
              </div>

              <p>Hi, how would you rate your experience of www.tweedquickies.com?</p>

              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
                <div onClick={badSelected} className='choose_feeling'>
                  <img src={btnAFGBad ? BadSelect : RedBadIcon} alt='bad'></img>
                </div>

                <div onClick={undecidedSelected} className='choose_feeling'>
                  <img src={btnAFGUndecided ? UndecidedSelect : RedUndecidedIcon} alt='undecided'></img>
                </div>

                <div onClick={goodSelected} className='choose_feeling'>
                  <img src={btnAFGGood ? GoodSelect : RedGoodIcon} alt='good'></img>
                </div>
              </div>

              <p>Are you planning to buy Tweed Quickies?</p>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>

                <div onClick={noSelected} style={{ marginRight: '40px' }} className='choose_feeling'>
                  <img src={btnYes ? YesSelect : RedYesIcon} alt='Yes'></img>
                </div>

                <div onClick={yesSelected} className='choose_feeling'>
                  <img src={btnNo ? NoSelect : RedNoIcon} alt='No'></img>
                </div>
              </div>

              <div className="submitButton" onClick={rDirect}>
                <h3>Send</h3>
              </div>
            </div>
          </Carousel>
          <p className='footerP'>This communication is intended for adults only and should not be shared with minors. There are risks associated with cannabis use. For information, search online “Health Canada - cannabis health effects”.</p>
        </div>
      </section>


    </div>


  )
}



}

export default Info