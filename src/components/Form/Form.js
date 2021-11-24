import React, { useState } from 'react'
import './Forms.css'
import Logo from '../../Assets/tweed-logo-black.svg'
import DownArrow from '../../Assets/down-arrow.svg'
import LogoBlack from '../../Assets/tweed-logo-black.svg'
import GreenCush from '../../Assets/Greencush/green-cush-quickies.svg'
import {Link, useHistory} from 'react-router-dom'
import Loading from '../Loading/Loading'
import WebXP from './WebXP'

/**
* @author
* @function Form
**/

const Form = (props) => {
    const history = useHistory()
    const [submission, setSubmission] = useState(false)

    const onSubmission = (e) =>{
        e.preventDefault()

        if(e.target.year.value > 2002){
            window.location.replace('https://gotmilk.com')
        }else{
            setSubmission(true)
            setTimeout(()=>{
                history.push('/option')
            }, 1000)

        }


    }

if(submission){
return(
<Loading />
)
}else{
    return (
        <>
        <div className='desktopView'>
        <WebXP/>
        </div>
        <div className='formBg' >
            <form onSubmit={onSubmission} style={{ paddingTop: '3vh' }}>
                <div id='logo'>
                  <img src={Logo} alt='logo'></img>
                </div>
                <div>
                  <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Date of Birth</h1>
                  <div id='input_section'>

                    <input type="number" id="month" name="month" min="1" max="12" placeholder="MM" required></input>

                    <input type="number" id="day" name="day" min="1" max="31" placeholder="DD" required></input>

                    <input type="number" id="year" name="year" min="1900" max="2021" placeholder="YYYY" required></input>

                    <div className="selectContainer">
                      <select id="region" placeholder="Region" required>
                          <option value="default">Region</option>
                          <option value="alberta">AB</option>
                          <option value="british columbia">BC</option>
                          <option value="manitoba">MB</option>
                          <option value="new brunswick">NB</option>
                          <option value="newfoundland and labrador">NL</option>
                          <option value="northwest territories">NT</option>
                          <option value="nova scotia">NS</option>
                          <option value="nunavut">NU</option>
                          <option value="ontario">ON</option>
                          <option value="prince edward island">PE</option>
                          <option value="quebec">QC</option>
                          <option value="saskatchewan">SK</option>
                          <option value="yukon territories">YT</option>
                      </select>
                      <span className="selectArrow">
                        <img src={DownArrow} alt='Select Down Arrow'></img>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='submit_container'>
                  <p class="ageText">Yes, I am 19 years or older</p>
                  <input className='submit' type='submit' value='VERIFY'></input>
                  <Link className='terms' to='/terms'>Terms & Conditions</Link>
                  <p id='footer_content'>This communication is intended for adults only and should not be shared with minors. There are risks associated with cannabis use. For information, search online “Health Canada - cannabis health effects”.</p>
                </div>
            </form>
        </div>
        </>
    )

}


}

export default Form

