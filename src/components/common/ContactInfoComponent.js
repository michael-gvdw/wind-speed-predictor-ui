import React from 'react'

// icons
import { 
    AiFillGithub, 
    AiFillLinkedin, 
    AiFillInstagram, 
} from 'react-icons/ai'

// styles
import '../../styles/common/profile.scss'

const IconStyle = {
    color: 'black'
}

const ConstactInfoComponent = () => {


    return (
        <div className={`center-div`}>
            <div className={`profile-card`}>
                <img src={`${process.env.PUBLIC_URL}/me.jpg`} alt={`Michael`}/>

                <h1>Michael Groenewegen van der Weijden</h1>

                <p className={`title`}>ICT & Software Engineering Student</p>
                
                <p>Fontys Hogeshoolen, ICT & Software Engineering</p>

                <div className={`contact-links`}>
                    <a href={`https://github.com/michael-gvdw`} target={`_blank`}><AiFillGithub style={IconStyle} size={42}/></a>
                    <a href={`https://www.linkedin.com/in/michael-groenewegen-van-der-weijden-4234b9206/`} target={`_blank`}><AiFillLinkedin style={IconStyle} size={42}/></a>
                    <a href={`https://www.instagram.com/michael_gvdw/`} target={`_blank`}><AiFillInstagram style={IconStyle} size={42}/></a>
                </div>

                <button>Contact</button>   
            </div>
        </div>
    )
}


export default ConstactInfoComponent